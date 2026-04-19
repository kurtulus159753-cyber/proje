const faqs = [
  {
    q: "Bu site gerçek bir e-ticaret mağazası mı?",
    a: "Hayır. GLOREA vitrin sayfası ödev ve sunum amaçlıdır; ödeme, stok veya sipariş işlemi yapılmaz. Gördüğünüz fiyat ve kampanya metinleri örnek içeriktir.",
  },
  {
    q: "Ürün görselleri ile gerçek ürün aynı mı?",
    a: "Vitrinde kullanılan görseller yer tutucu veya örnek ürün fotoğraflarıdır. Ticari bir satış olmadığı için teslimat ve ambalaj bilgisi bulunmaz.",
  },
  {
    q: "Mumları güvenle kullanırken nelere dikkat etmeliyim?",
    a: "Mumu düz, yanıcı olmayan bir yüzeyde yakın; fitili kısa tutun ve uzun süre başıboş bırakmayın. Çocuk ve evcil hayvanların erişemeyeceği yerde kullanın.",
  },
  {
    q: "Oda kokusu / diffuser nasıl daha iyi performans verir?",
    a: "Şişeyi doğrudan güneşten uzak tutun; çubukları ara sıra çevirerek kokunun yayılımını yenileyin. Ödev kapsamında bu bilgiler genel kullanım önerisidir.",
  },
  {
    q: "Kargo ve teslimat süreleri nedir?",
    a: "Bu vitrinde gerçek kargo entegrasyonu yoktur. Canlı bir projede kargo firması ve teslimat süreleri ödeme adımında netleştirilir.",
  },
  {
    q: "İade veya değişim yapılabilir mi?",
    a: "Demo sayfa olduğu için sipariş ve iade süreci tanımlı değildir. Gerçek bir mağazada mesafeli satış ve cayma hakkı politikası ayrıca yayınlanır.",
  },
];

export function FaqSection() {
  return (
    <section
      id="sik-sorulanlar"
      className="scroll-mt-28 border-t border-sand/40 bg-parchment py-16 sm:py-20"
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-stone">Yardım</p>
          <h2
            id="faq-heading"
            className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl"
          >
            Sık sorulanlar
          </h2>
          <p className="mt-3 text-sm text-stone sm:text-base">
            GLOREA vitrinine dair merak edebileceğiniz kısa yanıtlar.
          </p>
        </div>

        <div className="mt-10 space-y-3">
          {faqs.map((item, i) => (
            <details
              key={item.q}
              className="group rounded-2xl border border-sand/60 bg-cream/50 shadow-soft open:bg-cream/70 open:shadow-lift"
            >
              <summary className="cursor-pointer list-none px-5 py-4 font-display text-base font-medium text-ink transition hover:text-ink/90 sm:px-6 sm:text-lg [&::-webkit-details-marker]:hidden">
                <span className="flex items-start justify-between gap-3">
                  <span className="text-left">
                    <span className="mr-2 text-stone tabular-nums">{String(i + 1).padStart(2, "0")}.</span>
                    {item.q}
                  </span>
                  <span
                    className="mt-1 shrink-0 text-stone transition duration-300 group-open:rotate-180"
                    aria-hidden
                  >
                    ▼
                  </span>
                </span>
              </summary>
              <div className="border-t border-sand/50 px-5 pb-4 pt-0 text-sm leading-relaxed text-stone sm:px-6 sm:text-[15px]">
                <p className="pt-3">{item.a}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
