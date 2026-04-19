export type ProductCategory = "mum" | "koku";

export type ProductItem = {
  id: string;
  name: string;
  price: string;
  imageSrc: string;
  imageAlt: string;
  category: ProductCategory;
};

/** Tüm vitrin ürünleri — dosya adlarına göre (10 oda kokusu + 10 mum) */
export const allProducts: ProductItem[] = [
  // Oda kokuları (urun-*-koku.jpeg)
  {
    id: "k1",
    name: "Velvet Amber — Reed Diffuser",
    price: "449 ₺",
    imageSrc: "/urunler/urun-1-koku.jpeg",
    imageAlt: "Velvet Amber reed diffuser oda kokusu",
    category: "koku",
  },
  {
    id: "k3",
    name: "Sis Ormanı — Kokulu Sprey 100 ml",
    price: "379 ₺",
    imageSrc: "/urunler/urun-3-koku.jpeg",
    imageAlt: "Sis ormanı kokulu sprey",
    category: "koku",
  },
  {
    id: "k4",
    name: "Gece Bahçesi — Oda Kokusu",
    price: "419 ₺",
    imageSrc: "/urunler/urun-4-koku.jpeg",
    imageAlt: "Gece bahçesi oda kokusu",
    category: "koku",
  },
  {
    id: "k5",
    name: "Altın Saat — Şişe Diffuser",
    price: "459 ₺",
    imageSrc: "/urunler/urun-5-koku.jpeg",
    imageAlt: "Altın saat şişe diffuser",
    category: "koku",
  },
  {
    id: "k6",
    name: "Noir Patchouli — Oda Kokusu Seti",
    price: "489 ₺",
    imageSrc: "/urunler/urun-6-koku.jpeg",
    imageAlt: "Noir patchouli oda kokusu seti",
    category: "koku",
  },
  {
    id: "k7",
    name: "İpek Yolu — Kokulu Ortam Spreyi",
    price: "399 ₺",
    imageSrc: "/urunler/urun-7-koku.jpeg",
    imageAlt: "İpek yolu ortam spreyi",
    category: "koku",
  },
  {
    id: "k8",
    name: "Deniz Tuzu & Sedir — Oda Kokusu",
    price: "429 ₺",
    imageSrc: "/urunler/urun-8-koku.jpeg",
    imageAlt: "Deniz tuzu ve sedir oda kokusu",
    category: "koku",
  },
  {
    id: "k9",
    name: "Çiçek Kasabası — Reed Diffuser",
    price: "389 ₺",
    imageSrc: "/urunler/urun-9-koku.jpeg",
    imageAlt: "Çiçek kasabası reed diffuser",
    category: "koku",
  },
  {
    id: "k10",
    name: "Kış Ormanı — Kokulu Sprey",
    price: "369 ₺",
    imageSrc: "/urunler/urun-10-koku.jpeg",
    imageAlt: "Kış ormanı kokulu sprey",
    category: "koku",
  },
  {
    id: "k11",
    name: "Şafak Işığı — Oda Kokusu",
    price: "439 ₺",
    imageSrc: "/urunler/urun-11-koku.jpeg",
    imageAlt: "Şafak ışığı oda kokusu",
    category: "koku",
  },
  // Mumlar (urun-*-sabun.jpeg — vitrinde “mum” koleksiyonu)
  {
    id: "m1",
    name: "Lavanta & Keçi Sütü — Soy Mum",
    price: "329 ₺",
    imageSrc: "/urunler/urun-1-sabun.jpeg",
    imageAlt: "Lavanta ve keçi sütü soy mum",
    category: "mum",
  },
  {
    id: "m2",
    name: "Vanilya Tonka — Cam Kavanoz Mum",
    price: "349 ₺",
    imageSrc: "/urunler/urun-2-sabun.jpeg",
    imageAlt: "Vanilya tonka cam kavanoz mum",
    category: "mum",
  },
  {
    id: "m3",
    name: "Gül & Bergamot — El Yapımı Mum",
    price: "319 ₺",
    imageSrc: "/urunler/urun-3-sabun.jpeg",
    imageAlt: "Gül ve bergamot el yapımı mum",
    category: "mum",
  },
  {
    id: "m4",
    name: "Sedir & Amber — Tabak Mum",
    price: "359 ₺",
    imageSrc: "/urunler/urun-4-sabun.jpeg",
    imageAlt: "Sedir ve amber tabak mum",
    category: "mum",
  },
  {
    id: "m5",
    name: "Tarçın & Portakal — Kokulu Mum",
    price: "299 ₺",
    imageSrc: "/urunler/urun-5-sabun.jpeg",
    imageAlt: "Tarçın ve portakal kokulu mum",
    category: "mum",
  },
  {
    id: "m6",
    name: "Yabanmersini — Dekoratif Mum",
    price: "339 ₺",
    imageSrc: "/urunler/urun-6-sabun.jpeg",
    imageAlt: "Yabanmersini dekoratif mum",
    category: "mum",
  },
  {
    id: "m7",
    name: "Yasemin & Zambak — Soy Mum",
    price: "309 ₺",
    imageSrc: "/urunler/urun-7-sabun.jpeg",
    imageAlt: "Yasemin ve zambak soy mum",
    category: "mum",
  },
  {
    id: "m8",
    name: "Kahve & Kakao — Kokulu Mum",
    price: "289 ₺",
    imageSrc: "/urunler/urun-8-sabun.jpeg",
    imageAlt: "Kahve ve kakao kokulu mum",
    category: "mum",
  },
  {
    id: "m9",
    name: "Çay Ağacı & Nane — El Yapımı Mum",
    price: "319 ₺",
    imageSrc: "/urunler/urun-9-sabun.jpeg",
    imageAlt: "Çay ağacı ve nane el yapımı mum",
    category: "mum",
  },
  {
    id: "m10",
    name: "Fıstık & Karamel — Cam Mum",
    price: "369 ₺",
    imageSrc: "/urunler/urun-10-sabun.jpeg",
    imageAlt: "Fıstık ve karamel cam mum",
    category: "mum",
  },
];

export const mumProducts = allProducts.filter((p) => p.category === "mum");
export const kokuProducts = allProducts.filter((p) => p.category === "koku");

/** Hero slider — ürün adına göre e-ticaret mesajları */
export const heroSlides = [
  {
    id: "s1",
    image: "/urunler/urun-6-koku.jpeg",
    productName: "Noir Patchouli — Oda Kokusu Seti",
    headline: "Yeni sezon: Derin notalar, kalıcı iz",
    subline: "750 ₺ ve üzeri siparişlerde ücretsiz kargo · Stokta sınırlı",
  },
  {
    id: "s2",
    image: "/urunler/urun-2-sabun.jpeg",
    productName: "Vanilya Tonka — Cam Kavanoz Mum",
    headline: "Evde boutique spa hissi",
    subline: "2. üründe %10 indirim · Güvenli ödeme (demo)",
  },
  {
    id: "s3",
    image: "/urunler/urun-7-koku.jpeg",
    productName: "İpek Yolu — Kokulu Ortam Spreyi",
    headline: "Anında tazelik, zarif şişe",
    subline: "Hediye kutusu seçeneği · Aynı gün kargo (demo metni)",
  },
  {
    id: "s4",
    image: "/urunler/urun-8-sabun.jpeg",
    productName: "Kahve & Kakao — Kokulu Mum",
    headline: "Kış koleksiyonu öne çıkanları",
    subline: "Sepete ekle, koleksiyonu tamamla",
  },
  {
    id: "s5",
    image: "/urunler/urun-1-koku.jpeg",
    productName: "Velvet Amber — Reed Diffuser",
    headline: "Çok satanlar listesinde #1",
    subline: "Üyelere özel erken erişim fırsatları (demo)",
  },
] as const;

/** Öne çıkan çok satanlar — başlıklar + görseller */
export const featuredBestSellers = {
  left: {
    sectionTitle: "Çok Satan",
    title: "Velvet Amber Reed Diffuser",
    subtitle: "Oda kokuları · 449 ₺",
    badge: "Editörün favorisi",
    imageSrc: "/urunler/urun-1-koku.jpeg",
    imageAlt: "Velvet Amber reed diffuser",
  },
  right: {
    sectionTitle: "Öne Çıkan",
    title: "Vanilya Tonka Cam Kavanoz Mum",
    subtitle: "Mum koleksiyonu · 349 ₺",
    badge: "Bu haftanın yıldızı",
    imageSrc: "/urunler/urun-2-sabun.jpeg",
    imageAlt: "Vanilya tonka cam kavanoz mum",
  },
} as const;
