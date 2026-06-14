(function () {
  const config = window.B8_FIREBASE;
  let firebaseAiPromise;

  function clean(value) {
    return String(value || "").replace(/\s+/g, " ").trim();
  }

  function setupMessage(error) {
    const text = error && error.message ? error.message : "";
    if (error && (error.code === "api-not-enabled" || error.code === "AI/api-not-enabled" || text.includes("Firebase AI API"))) {
      return "Ask B8 is connected in the site code, but Firebase AI Logic is not enabled for this Firebase project yet. Open Firebase Console > Build > AI Logic, click Get started, choose the Google AI provider, then try again.";
    }
    if (text.includes("quota") || text.includes("429")) {
      return "Ask B8 is connected, but the current Google AI quota for this Firebase project is unavailable or exhausted. Check Firebase AI Logic quota and billing settings, then try again.";
    }
    if (text.includes("API key") || text.includes("project ID") || text.includes("app ID")) {
      return "Ask B8 cannot start because the Firebase web app config is incomplete.";
    }
    return text || "Ask B8 could not answer right now. Please try again in a moment.";
  }

  function buildPrompt(question, context) {
    const chart = context && context.chart ? context.chart : {};
    const profile = context && context.profile ? context.profile : {};
    const pageLang = context && context.lang ? context.lang : document.documentElement.lang || "en";
    return [
      "You are B8 Numerology's Ask B8 helper.",
      "Answer in the user's page language unless the user clearly asks for another language.",
      "Treat numerology as symbolic reflection and cultural practice, not scientific prediction.",
      "Be practical, warm, concise, and specific. Do not mention hard-coded site content.",
      `Page language: ${pageLang}`,
      `Signed-in profile name: ${clean(profile.displayName) || "unknown"}`,
      `Profile date of birth: ${clean(profile.dob) || "unknown"}`,
      `Latest chart summary: ${clean(chart.summary) || "not generated yet"}`,
      `Latest chart numbers: ${clean(chart.numbers) || "not generated yet"}`,
      `User question: ${question}`
    ].join("\n");
  }

  async function loadFirebaseAi() {
    if (!firebaseAiPromise) {
      firebaseAiPromise = Promise.all([
        import("https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js"),
        import("https://www.gstatic.com/firebasejs/12.6.0/firebase-ai.js")
      ]);
    }
    return firebaseAiPromise;
  }

  async function ask(question, context) {
    if (!config) {
      throw new Error("Ask B8 cannot start because the Firebase config is missing.");
    }
    const [{ initializeApp, getApp }, { getAI, getGenerativeModel, GoogleAIBackend }] = await loadFirebaseAi();
    let app;
    try {
      app = getApp("b8-gemini");
    } catch (error) {
      app = initializeApp({ ...config }, "b8-gemini");
    }
    const ai = getAI(app, { backend: new GoogleAIBackend() });
    const model = getGenerativeModel(ai, {
      model: "gemini-2.5-flash-lite",
      generationConfig: {
        maxOutputTokens: 450,
        temperature: 0.7
      },
      systemInstruction: "You are a concise numerology reflection assistant for B8 Numerology."
    });
    try {
      const result = await model.generateContent(buildPrompt(question, context));
      const text = result.response.text();
      if (!text.trim()) throw new Error("Ask B8 returned an empty response.");
      return text.trim();
    } catch (error) {
      throw new Error(setupMessage(error));
    }
  }

  window.B8Gemini = { ask };
}());
