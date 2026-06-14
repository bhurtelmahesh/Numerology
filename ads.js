(function () {
  const config = window.B8_ADS || {};
  const client = String(config.client || "").trim();
  const slots = config.slots || {};
  const placements = document.querySelectorAll("[data-ad-placement]");

  if (!placements.length) return;

  function hideAds() {
    placements.forEach((placement) => {
      placement.hidden = true;
    });
  }

  if (!config.enabled || !/^ca-pub-\d+$/.test(client)) {
    hideAds();
    return;
  }

  let script = [...document.scripts].find((item) => item.src.includes(`pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${client}`));
  let scriptReady = Boolean(script);

  if (!script) {
    script = document.createElement("script");
    script.async = true;
    script.crossOrigin = "anonymous";
    script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${encodeURIComponent(client)}`;
    document.head.appendChild(script);
  }

  placements.forEach((placement) => {
    const key = placement.dataset.adPlacement;
    const slot = String(slots[key] || "").trim();

    if (!/^\d+$/.test(slot)) {
      placement.hidden = true;
      return;
    }

    const ad = document.createElement("ins");
    ad.className = "adsbygoogle";
    ad.style.display = "block";
    ad.dataset.adClient = client;
    ad.dataset.adSlot = slot;
    ad.dataset.adFormat = "auto";
    ad.dataset.fullWidthResponsive = "true";

    placement.appendChild(ad);
    placement.hidden = false;

    const requestAd = () => {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (error) {
        placement.dataset.adError = "true";
      }
    };

    if (scriptReady) {
      requestAd();
    } else {
      script.addEventListener("load", () => {
        scriptReady = true;
        requestAd();
      }, { once: true });
    }
  });
}());
