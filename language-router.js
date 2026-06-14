(function () {
  const pages = {
    en: "index.html",
    es: "index-es.html",
    hi: "index-hi.html",
    ja: "index-ja.html",
    ne: "index-ne.html"
  };
  const storageKey = "b8LanguageChoice";

  document.querySelectorAll("[data-lang-choice]").forEach((link) => {
    link.addEventListener("click", () => {
      localStorage.setItem(storageKey, link.dataset.langChoice || "en");
    });
  });

  const path = location.pathname.split("/").pop() || "index.html";
  const isRootEnglish = path === "index.html" && document.documentElement.lang === "en";
  if (!isRootEnglish) return;
  if (localStorage.getItem(storageKey)) return;

  const browserLang = (navigator.languages && navigator.languages[0]) || navigator.language || "en";
  const lang = browserLang.toLowerCase().split("-")[0];
  const target = pages[lang] || pages.en;
  if (target === "index.html") return;

  location.replace(`${target}${location.search}${location.hash}`);
}());
