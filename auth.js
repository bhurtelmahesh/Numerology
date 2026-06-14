(function () {
  const lang = document.documentElement.lang || "en";
  const text = {
    en: {
      title: "Your account",
      subtitle: "Account, profile, and language",
      name: "Name",
      email: "Email",
      password: "Password",
      create: "Create account",
      signIn: "Sign in",
      signOut: "Sign out",
      close: "Close account panel",
      guest: "Guest",
      guestNote: "Sign in or create an account.",
      profile: "Profile",
      settings: "Settings",
      settingsSoon: "Settings are coming next.",
      dob: "Date of birth",
      photo: "Profile photo",
      profileSignIn: "Sign in to open your profile.",
      creating: "Creating account...",
      signingIn: "Signing in...",
      signedInMessage: "You are signed in.",
      signedOutMessage: "You are signed out.",
      saving: "Saving...",
      weakPassword: "Use at least 6 characters for the password.",
      emailInUse: "This email already has an account. Try signing in.",
      invalidLogin: "Check the email and password.",
      authDisabled: "Email/password sign-in needs to be enabled in Firebase Authentication."
    },
    es: {
      title: "Tu cuenta",
      subtitle: "Cuenta, perfil e idioma",
      name: "Nombre",
      email: "Correo",
      password: "Contraseña",
      create: "Crear cuenta",
      signIn: "Iniciar sesión",
      signOut: "Cerrar sesión",
      close: "Cerrar panel de cuenta",
      guest: "Invitado",
      guestNote: "Inicia sesión o crea una cuenta.",
      profile: "Perfil",
      settings: "Configuración",
      settingsSoon: "La configuración llegará después.",
      dob: "Fecha de nacimiento",
      photo: "Foto de perfil",
      profileSignIn: "Inicia sesión para abrir tu perfil.",
      creating: "Creando cuenta...",
      signingIn: "Iniciando sesión...",
      signedInMessage: "Has iniciado sesión.",
      signedOutMessage: "Has cerrado sesión.",
      saving: "Guardando...",
      weakPassword: "Usa al menos 6 caracteres para la contraseña.",
      emailInUse: "Este correo ya tiene una cuenta. Intenta iniciar sesión.",
      invalidLogin: "Revisa el correo y la contraseña.",
      authDisabled: "Activa correo/contraseña en Firebase Authentication."
    },
    hi: {
      title: "आपका खाता",
      subtitle: "खाता, प्रोफ़ाइल और भाषा",
      name: "नाम",
      email: "ईमेल",
      password: "पासवर्ड",
      create: "खाता बनाएं",
      signIn: "साइन इन",
      signOut: "साइन आउट",
      close: "खाता पैनल बंद करें",
      guest: "अतिथि",
      guestNote: "प्रोफ़ाइल सेव करने के लिए साइन इन करें।",
      profile: "प्रोफ़ाइल",
      settings: "सेटिंग्स",
      settingsSoon: "सेटिंग्स आगे आएंगी।",
      dob: "जन्मतिथि",
      photo: "प्रोफ़ाइल फोटो",
      profileSignIn: "प्रोफ़ाइल खोलने के लिए साइन इन करें।",
      creating: "खाता बन रहा है...",
      signingIn: "साइन इन हो रहा है...",
      signedInMessage: "आप साइन इन हैं।",
      signedOutMessage: "आप साइन आउट हैं।",
      saving: "सेव हो रहा है...",
      weakPassword: "पासवर्ड कम से कम 6 अक्षरों का रखें।",
      emailInUse: "इस ईमेल का खाता पहले से है। साइन इन करें।",
      invalidLogin: "ईमेल और पासवर्ड जांचें।",
      authDisabled: "Firebase Authentication में ईमेल/पासवर्ड साइन-इन चालू करें।"
    },
    ja: {
      title: "あなたのアカウント",
      subtitle: "アカウント、プロフィール、言語",
      name: "名前",
      email: "メール",
      password: "パスワード",
      create: "アカウント作成",
      signIn: "ログイン",
      signOut: "ログアウト",
      close: "アカウントパネルを閉じる",
      guest: "ゲスト",
      guestNote: "ログインまたはアカウント作成をしてください。",
      profile: "プロフィール",
      settings: "設定",
      settingsSoon: "設定機能は次に追加します。",
      dob: "生年月日",
      photo: "プロフィール写真",
      profileSignIn: "プロフィールを開くにはログインしてください。",
      creating: "作成中...",
      signingIn: "ログイン中...",
      signedInMessage: "ログインしました。",
      signedOutMessage: "ログアウトしました。",
      saving: "保存中...",
      weakPassword: "パスワードは6文字以上にしてください。",
      emailInUse: "このメールは登録済みです。ログインしてください。",
      invalidLogin: "メールとパスワードを確認してください。",
      authDisabled: "Firebase Authenticationでメール/パスワードを有効にしてください。"
    },
    ne: {
      title: "तपाईंको खाता",
      subtitle: "खाता, प्रोफाइल र भाषा",
      name: "नाम",
      email: "इमेल",
      password: "पासवर्ड",
      create: "खाता बनाउनुहोस्",
      signIn: "साइन इन",
      signOut: "साइन आउट",
      close: "खाता प्यानल बन्द गर्नुहोस्",
      guest: "अतिथि",
      guestNote: "साइन इन गर्नुहोस् वा खाता बनाउनुहोस्।",
      profile: "प्रोफाइल",
      settings: "सेटिङ्स",
      settingsSoon: "सेटिङ्स पछि आउँछन्।",
      dob: "जन्ममिति",
      photo: "प्रोफाइल फोटो",
      profileSignIn: "प्रोफाइल खोल्न साइन इन गर्नुहोस्।",
      creating: "खाता बनाउँदै...",
      signingIn: "साइन इन हुँदै...",
      signedInMessage: "तपाईं साइन इन हुनुहुन्छ।",
      signedOutMessage: "तपाईं साइन आउट हुनुभयो।",
      saving: "सेभ हुँदै...",
      weakPassword: "पासवर्ड कम्तीमा 6 अक्षरको राख्नुहोस्।",
      emailInUse: "यो इमेलको खाता पहिले नै छ। साइन इन गर्नुहोस्।",
      invalidLogin: "इमेल र पासवर्ड जाँच गर्नुहोस्।",
      authDisabled: "Firebase Authentication मा इमेल/पासवर्ड साइन-इन खोल्नुहोस्।"
    }
  };
  const copy = text[lang] || text.en;

  const panel = document.getElementById("authPanel");
  const openButton = document.getElementById("authOpen");
  const closeButton = document.getElementById("authClose");
  const form = document.getElementById("authForm");
  const status = document.getElementById("authStatus");
  const menuStatus = document.getElementById("authMenuStatus");
  const showFormButton = document.getElementById("authShowForm");
  const signOutButton = document.getElementById("authMenuSignOut");
  const avatar = document.getElementById("authAvatar");
  const profileAvatar = document.getElementById("authProfileAvatar");
  const profileName = document.getElementById("authProfileName");
  const profileEmail = document.getElementById("authProfileEmail");
  const authMenu = document.getElementById("authMenu");

  if (!panel || !openButton || !form || !window.firebase || !window.B8_FIREBASE) return;

  if (!firebase.apps.length) firebase.initializeApp(window.B8_FIREBASE);
  const auth = firebase.auth();
  const db = firebase.firestore ? firebase.firestore() : null;
  let currentProfile = {};

  function setCopy() {
    document.querySelectorAll("[data-auth-text]").forEach((node) => {
      const key = node.dataset.authText;
      node.textContent = copy[key] || node.textContent;
    });
    document.querySelectorAll("[data-auth-placeholder]").forEach((node) => {
      const key = node.dataset.authPlaceholder;
      node.placeholder = copy[key] || node.placeholder;
    });
    closeButton.setAttribute("aria-label", copy.close);
    const subtitle = panel.querySelector("header span");
    if (subtitle) subtitle.textContent = copy.subtitle;
  }

  function initial(value) {
    return (value || "8").trim().slice(0, 1).toUpperCase();
  }

  function setAvatar(label, photo) {
    const fallback = initial(label);
    [avatar, profileAvatar].forEach((node) => {
      node.textContent = fallback;
      node.style.backgroundImage = photo ? `url("${photo}")` : "";
      node.classList.toggle("has-photo", Boolean(photo));
    });
  }

  function showForm(mode) {
    form.hidden = false;
    signOutButton.hidden = true;
    message("", "");
    if (mode === "create") form.elements.displayName.focus();
    else form.elements.email.focus();
  }

  function hideForm() {
    form.hidden = true;
  }

  function showProfileEditor() {
    if (!auth.currentUser) {
      menuMessage(copy.profileSignIn, "");
      showForm("signin");
      return;
    }
    const langPart = lang === "en" ? "" : `?lang=${encodeURIComponent(lang)}`;
    window.location.href = `profile.html${langPart}`;
  }

  function openPanel(mode) {
    panel.hidden = false;
    openButton.setAttribute("aria-expanded", "true");
    if (mode && !auth.currentUser) showForm(mode);
  }

  function closePanel() {
    panel.hidden = true;
    openButton.setAttribute("aria-expanded", "false");
  }

  function message(value, tone) {
    status.textContent = value;
    status.dataset.tone = tone || "";
  }

  function menuMessage(value, tone) {
    menuStatus.textContent = value;
    menuStatus.dataset.tone = tone || "";
  }

  function authError(error) {
    const code = error && error.code;
    if (code === "auth/weak-password") return copy.weakPassword;
    if (code === "auth/email-already-in-use") return copy.emailInUse;
    if (code === "auth/invalid-login-credentials" || code === "auth/wrong-password" || code === "auth/user-not-found" || code === "auth/invalid-email") return copy.invalidLogin;
    if (code === "auth/operation-not-allowed" || code === "auth/admin-restricted-operation" || code === "auth/configuration-not-found") return copy.authDisabled;
    return error.message || copy.invalidLogin;
  }

  async function loadProfile(user) {
    currentProfile = {};
    if (!user || !db) return;
    const doc = await db.collection("users").doc(user.uid).collection("profile").doc("main").get();
    currentProfile = doc.exists ? doc.data() : {};
    if (!currentProfile.email) {
      await db.collection("users").doc(user.uid).collection("profile").doc("main").set({
        email: user.email,
        displayName: user.displayName || "",
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
      }, { merge: true });
    }
  }

  function updateProfileUi(user) {
    const name = user ? (currentProfile.displayName || user.displayName || user.email) : copy.guest;
    const email = user ? user.email : copy.guestNote;
    const photo = user ? currentProfile.photoDataUrl : "";
    profileName.textContent = name;
    profileEmail.textContent = user && currentProfile.dob ? `${email} · ${currentProfile.dob}` : email;
    setAvatar(name, photo);
    showFormButton.hidden = Boolean(user);
    signOutButton.hidden = !user;
    if (user) hideForm();
    window.dispatchEvent(new CustomEvent("b8:auth-profile", {
      detail: { user: user ? { uid: user.uid, email: user.email } : null, profile: currentProfile }
    }));
  }

  async function submitAuth(mode) {
    const name = form.elements.displayName.value.trim();
    const email = form.elements.email.value.trim();
    const password = form.elements.password.value;
    message(mode === "create" ? copy.creating : copy.signingIn, "working");
    try {
      let credential;
      if (mode === "create") {
        credential = await auth.createUserWithEmailAndPassword(email, password);
        if (name) await credential.user.updateProfile({ displayName: name });
      } else {
        credential = await auth.signInWithEmailAndPassword(email, password);
      }
      form.reset();
      message(copy.signedInMessage, "success");
      menuMessage(copy.signedInMessage, "success");
      hideForm();
      if (mode === "create" && db) {
        await db.collection("users").doc(credential.user.uid).collection("profile").doc("main").set({
          displayName: name,
          email,
          createdAt: firebase.firestore.FieldValue.serverTimestamp()
        }, { merge: true });
      }
    } catch (error) {
      message(authError(error), "error");
    }
  }

  setCopy();
  openButton.addEventListener("click", () => panel.hidden ? openPanel() : closePanel());
  document.querySelectorAll("[data-auth-trigger]").forEach((trigger) => {
    trigger.addEventListener("click", () => openPanel(trigger.dataset.authTrigger || "create"));
  });
  closeButton.addEventListener("click", closePanel);
  showFormButton.addEventListener("click", () => showForm("signin"));
  document.querySelectorAll("[data-auth-menu]").forEach((button) => {
    button.addEventListener("click", () => {
      if (button.dataset.authMenu === "profile") showProfileEditor();
      else menuMessage(copy.settingsSoon, "");
    });
  });
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    submitAuth(event.submitter?.value || "signin");
  });
  signOutButton.addEventListener("click", async () => {
    await auth.signOut();
    menuMessage(copy.signedOutMessage, "success");
    hideForm();
  });
  hideForm();

  auth.onAuthStateChanged(async (user) => {
    if (user) await loadProfile(user);
    else currentProfile = {};
    updateProfileUi(user);
  });
  window.B8Auth = { auth, db, getProfile: () => ({ ...currentProfile }) };
}());
