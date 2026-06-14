(function () {
  const params = new URLSearchParams(window.location.search);
  const storedLang = localStorage.getItem("b8LanguageChoice");
  const lang = params.get("lang") || storedLang || navigator.language.slice(0, 2) || "en";
  const supported = ["en", "es", "hi", "ja", "ne"];
  const activeLang = supported.includes(lang) ? lang : "en";
  const copy = {
    en: {
      calculator: "Calculator", chart: "Chart", privacy: "Privacy", terms: "Terms", eyebrow: "Your account", title: "Profile",
      subtitle: "Keep your details ready for the calculator and review your latest chart.", dob: "Date of birth", email: "Email address", phone: "Phone",
      edit: "Edit profile", back: "Back to calculator", photo: "Profile photo", name: "Name", save: "Save changes", cancel: "Cancel",
      latestEyebrow: "Latest result", latestTitle: "Chart summary", noChartTitle: "No saved chart yet.", noChartBody: "Generate a chart from the calculator while signed in, and the summary will appear here.",
      guest: "Guest", signIn: "Sign in to manage your profile.", saving: "Saving...", saved: "Profile saved.", signedOut: "Please sign in to use this page.", language: "Language"
    },
    es: {
      calculator: "Calculadora", chart: "Chart", privacy: "Privacidad", terms: "Términos", eyebrow: "Tu cuenta", title: "Perfil",
      subtitle: "Mantén tus datos listos para la calculadora y revisa tu último chart.", dob: "Fecha de nacimiento", email: "Correo", phone: "Teléfono",
      edit: "Editar perfil", back: "Volver a la calculadora", photo: "Foto de perfil", name: "Nombre", save: "Guardar cambios", cancel: "Cancelar",
      latestEyebrow: "Último resultado", latestTitle: "Resumen del chart", noChartTitle: "Aún no hay chart guardado.", noChartBody: "Genera un chart desde la calculadora con sesión iniciada y aparecerá aquí.",
      guest: "Invitado", signIn: "Inicia sesión para gestionar tu perfil.", saving: "Guardando...", saved: "Perfil guardado.", signedOut: "Inicia sesión para usar esta página.", language: "Idioma"
    },
    hi: {
      calculator: "कैलकुलेटर", chart: "चार्ट", privacy: "गोपनीयता", terms: "शर्तें", eyebrow: "आपका खाता", title: "प्रोफ़ाइल",
      subtitle: "कैलकुलेटर के लिए अपनी जानकारी तैयार रखें और अपना नवीनतम चार्ट देखें।", dob: "जन्मतिथि", email: "ईमेल पता", phone: "फ़ोन",
      edit: "प्रोफ़ाइल संपादित करें", back: "कैलकुलेटर पर जाएं", photo: "प्रोफ़ाइल फोटो", name: "नाम", save: "बदलाव सेव करें", cancel: "रद्द करें",
      latestEyebrow: "नवीनतम परिणाम", latestTitle: "चार्ट सार", noChartTitle: "अभी कोई चार्ट सेव नहीं है।", noChartBody: "साइन इन करके कैलकुलेटर से चार्ट बनाएं, सार यहां दिखेगा।",
      guest: "अतिथि", signIn: "प्रोफ़ाइल प्रबंधित करने के लिए साइन इन करें।", saving: "सेव हो रहा है...", saved: "प्रोफ़ाइल सेव हुई।", signedOut: "यह पेज इस्तेमाल करने के लिए साइन इन करें।", language: "भाषा"
    },
    ja: {
      calculator: "計算", chart: "チャート", privacy: "プライバシー", terms: "利用規約", eyebrow: "あなたのアカウント", title: "プロフィール",
      subtitle: "計算に使う情報を保存し、最新チャートの要約を確認できます。", dob: "生年月日", email: "メールアドレス", phone: "電話",
      edit: "プロフィール編集", back: "計算へ戻る", photo: "プロフィール写真", name: "名前", save: "変更を保存", cancel: "キャンセル",
      latestEyebrow: "最新結果", latestTitle: "チャート概要", noChartTitle: "保存済みチャートはまだありません。", noChartBody: "ログインした状態で計算すると、要約がここに表示されます。",
      guest: "ゲスト", signIn: "プロフィールを管理するにはログインしてください。", saving: "保存中...", saved: "プロフィールを保存しました。", signedOut: "このページを使うにはログインしてください。", language: "言語"
    },
    ne: {
      calculator: "क्याल्कुलेटर", chart: "चार्ट", privacy: "गोपनीयता", terms: "सर्तहरू", eyebrow: "तपाईंको खाता", title: "प्रोफाइल",
      subtitle: "क्याल्कुलेटरका लागि विवरण तयार राख्नुहोस् र नयाँ चार्ट सार हेर्नुहोस्।", dob: "जन्ममिति", email: "इमेल ठेगाना", phone: "फोन",
      edit: "प्रोफाइल सम्पादन", back: "क्याल्कुलेटरमा फर्कनुहोस्", photo: "प्रोफाइल फोटो", name: "नाम", save: "परिवर्तन सेभ गर्नुहोस्", cancel: "रद्द गर्नुहोस्",
      latestEyebrow: "नयाँ परिणाम", latestTitle: "चार्ट सार", noChartTitle: "अहिले कुनै चार्ट सेभ छैन।", noChartBody: "साइन इन गरेर क्याल्कुलेटरबाट चार्ट बनाउनुहोस्, सार यहाँ देखिन्छ।",
      guest: "अतिथि", signIn: "प्रोफाइल व्यवस्थापन गर्न साइन इन गर्नुहोस्।", saving: "सेभ हुँदै...", saved: "प्रोफाइल सेभ भयो।", signedOut: "यो पेज प्रयोग गर्न साइन इन गर्नुहोस्।", language: "भाषा"
    }
  }[activeLang];

  document.documentElement.lang = activeLang;
  document.querySelectorAll("[data-profile-text]").forEach((node) => {
    node.textContent = copy[node.dataset.profileText] || node.textContent;
  });
  document.querySelectorAll("[data-lang-choice]").forEach((link) => {
    link.classList.toggle("active", link.dataset.langChoice === activeLang);
  });

  const appLinks = { en: "index.html", es: "index-es.html", hi: "index-hi.html", ja: "index-ja.html", ne: "index-ne.html" };
  const backHref = `${appLinks[activeLang] || "index.html"}#calculator`;
  document.querySelectorAll('a[href^="index.html#"]').forEach((link) => {
    link.href = link.href.replace("index.html#", `${appLinks[activeLang] || "index.html"}#`);
  });
  document.getElementById("profileBack").href = backHref;

  const auth = firebase.auth();
  const db = firebase.firestore();
  let userRef = null;
  let currentProfile = {};

  function setText(id, value) {
    const node = document.getElementById(id);
    if (node) node.textContent = value || "-";
  }

  function setPhoto(name, photo) {
    const node = document.getElementById("profilePhoto");
    node.textContent = (name || "8").trim().slice(0, 1).toUpperCase();
    node.style.backgroundImage = photo ? `url("${photo}")` : "";
    node.classList.toggle("has-photo", Boolean(photo));
  }

  function renderProfile(user, profile) {
    const name = profile.displayName || user?.displayName || user?.email || copy.guest;
    setText("profileDisplayName", name);
    setText("profileEmailLine", user ? user.email : copy.signIn);
    setText("profileDob", profile.dob);
    setText("profileContactEmail", profile.contactEmail || profile.email || user?.email || "");
    setText("profilePhone", profile.phone);
    setPhoto(name, profile.photoDataUrl);
  }

  function fillForm(user, profile) {
    const form = document.getElementById("profilePageForm");
    form.elements.displayName.value = profile.displayName || user?.displayName || "";
    form.elements.dob.value = profile.dob || "";
    form.elements.contactEmail.value = profile.contactEmail || profile.email || user?.email || "";
    form.elements.phone.value = profile.phone || "";
  }

  async function resizeImage(file) {
    if (!file) return currentProfile.photoDataUrl || "";
    const image = await new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = reject;
      img.src = URL.createObjectURL(file);
    });
    const canvas = document.createElement("canvas");
    const size = 320;
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext("2d");
    const scale = Math.max(size / image.width, size / image.height);
    const width = image.width * scale;
    const height = image.height * scale;
    ctx.drawImage(image, (size - width) / 2, (size - height) / 2, width, height);
    return canvas.toDataURL("image/jpeg", 0.84);
  }

  async function loadChart() {
    const card = document.getElementById("profileChartCard");
    if (!userRef) return;
    const doc = await userRef.collection("charts").doc("latest").get();
    if (!doc.exists) return;
    const data = doc.data();
    const numbers = data.core ? Object.entries(data.core).map(([key, value]) => `${key}: ${value}`).join(" · ") : data.numbers || "";
    const languageNames = { en: "English", es: "Español", hi: "हिन्दी", ja: "日本語", ne: "नेपाली" };
    const language = languageNames[data.language] || data.language || languageNames[activeLang] || activeLang;
    card.innerHTML = `
      <strong>${data.name || copy.latestTitle}</strong>
      <p>${data.summary || ""}</p>
      <p class="profile-summary-numbers">${numbers}</p>
      <span>${copy.language}: ${language}</span>
    `;
  }

  function setStatus(value, tone) {
    const status = document.getElementById("profilePageStatus");
    status.textContent = value;
    status.dataset.tone = tone || "";
  }

  document.getElementById("profileEdit").addEventListener("click", () => {
    const form = document.getElementById("profilePageForm");
    form.hidden = false;
    fillForm(auth.currentUser, currentProfile);
    form.elements.displayName.focus();
  });

  document.getElementById("profileCancel").addEventListener("click", () => {
    document.getElementById("profilePageForm").hidden = true;
    setStatus("", "");
  });

  document.getElementById("profilePageForm").addEventListener("submit", async (event) => {
    event.preventDefault();
    const user = auth.currentUser;
    if (!user || !userRef) return setStatus(copy.signedOut, "error");
    setStatus(copy.saving, "working");
    const form = event.currentTarget;
    const displayName = form.elements.displayName.value.trim();
    const payload = {
      displayName,
      dob: form.elements.dob.value,
      contactEmail: form.elements.contactEmail.value.trim(),
      phone: form.elements.phone.value.trim(),
      email: user.email,
      photoDataUrl: await resizeImage(document.getElementById("profilePhotoInput").files[0]),
      updatedAt: firebase.firestore.FieldValue.serverTimestamp()
    };
    await userRef.collection("profile").doc("main").set(payload, { merge: true });
    if (displayName && displayName !== user.displayName) await user.updateProfile({ displayName });
    currentProfile = { ...currentProfile, ...payload };
    renderProfile(user, currentProfile);
    document.getElementById("profilePhotoInput").value = "";
    form.hidden = true;
    setStatus(copy.saved, "success");
  });

  auth.onAuthStateChanged(async (user) => {
    userRef = user ? db.collection("users").doc(user.uid) : null;
    currentProfile = {};
    if (userRef) {
      const profileDoc = await userRef.collection("profile").doc("main").get();
      currentProfile = profileDoc.exists ? profileDoc.data() : {};
    }
    renderProfile(user, currentProfile);
    fillForm(user, currentProfile);
    await loadChart();
  });
}());
