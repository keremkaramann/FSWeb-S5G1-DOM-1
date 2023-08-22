const siteContent = {
  // BU NESNEYİ DEĞİŞTİRMEYİN
  nav: {
    "nav-item-1": "Servisler",
    "nav-item-2": "Ürünler",
    "nav-item-3": "Vizyon",
    "nav-item-4": "Özellikler",
    "nav-item-5": "Hakkımızda",
    "nav-item-6": "İletişim",
  },
  cta: {
    h1: "Bu DOM Mükemmel",
    button: "Başlayın",
  },
  "ana-içerik": {
    "özellikler-h4": "Özellikler",
    "özellikler-içerik":
      "Özellikler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "hakkımızda-h4": "Hakkında",
    "hakkımızda-içerik":
      "Hakkında içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "servisler-h4": "Servisler",
    "servisler-içeriği":
      "Servisler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "ürünler-h4": "Ürünler",
    "ürünler-içeriği":
      "Ürünler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vizyon-h4": "Vizyon",
    "vizyon-içeriği":
      "Vizyon içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  iletisim: {
    "iletişim-h4": "İletişim",
    adres: "100 numara Bilmem ne sokak Ankara'da bir semt, Türkiye",
    telefon: "+90 (123) 456-7899",
    email: "satis@birsirketsitesi.com.tr",
  },
  footer: {
    copyright: "Copyright Bir Şirket Sitesi 2022",
  },
  images: {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log("Proje açıldı!");

/* Kodlar Buradan aşağıya */
const navEl = document.querySelectorAll(".container header nav a");
navEl.forEach((e, i) => {
  e.className = "italic";
  e.textContent = siteContent.nav["nav-item-" + (i + 1)];
});

const logoImg = document
  .getElementById("logo-img")
  .setAttribute("src", siteContent.images["logo-img"]);

const header1 = (document.querySelector(".cta-text h1").textContent =
  siteContent.cta["h1"]);
const button1 = (document.querySelector(".cta-text button").textContent =
  siteContent.cta["button"]);

const bannerImg = document
  .getElementById("cta-img")
  .setAttribute("src", "http://localhost:9000/img/cta.png");
const middleImg = document
  .getElementById("middle-img")
  .setAttribute("src", "http://localhost:9000/img/accent.png");

const header4 = document.querySelectorAll(".text-content h4");

header4[0].textContent = siteContent["ana-içerik"]["özellikler-h4"];
header4[1].textContent = siteContent["ana-içerik"]["hakkımızda-h4"];
header4[2].textContent = siteContent["ana-içerik"]["servisler-h4"];
header4[3].textContent = siteContent["ana-içerik"]["ürünler-h4"];
header4[4].textContent = siteContent["ana-içerik"]["vizyon-h4"];

const allP = document.querySelectorAll(".text-content p");

allP[0].textContent = siteContent["ana-içerik"]["özellikler-içerik"];
allP[1].textContent = siteContent["ana-içerik"]["hakkımızda-içerik"];
allP[2].textContent = siteContent["ana-içerik"]["servisler-içeriği"];
allP[3].textContent = siteContent["ana-içerik"]["ürünler-içeriği"];
allP[4].textContent = siteContent["ana-içerik"]["vizyon-içeriği"];

document.querySelector(".contact h4").textContent =
  siteContent.iletisim["iletişim-h4"];

const footerP = document.querySelectorAll(".contact p");

footerP[0].textContent = siteContent.iletisim.adres;
footerP[1].textContent = siteContent.iletisim.telefon;
footerP[2].textContent = siteContent.iletisim.email;

const footerS = document.querySelector("footer a");
footerS.textContent = siteContent.footer.copyright;
footerS.className = "bold";
