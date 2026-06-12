# Abdurrahman Naccar — Portfolio

Modern, dark, **aşırı animasyonlu** kişisel portfolio sitesi.
WebGL galaksi arka planı, akıcı kaydırma, scramble yazılar, 3D tilt kartlar,
canlı proje mockup'ları ve TR/EN dil desteği — hepsi kurulum gerektirmeden.

## 🚀 Çalıştırma

Hiçbir kurulum gerekmez. `index.html` dosyasına **çift tıkla** — tarayıcıda açılır.

> Not: Kütüphaneler (GSAP, Three.js, Lenis) ve fontlar CDN'den geldiği için
> internet bağlantısı gerekir.

## 🌍 Yayınlama (ücretsiz)

- **Netlify:** [app.netlify.com/drop](https://app.netlify.com/drop) sayfasına bu klasörü sürükle-bırak. Bitti.
- **GitHub Pages:** Klasörü bir repoya pushla → Settings → Pages → Branch: `main` seç.
- **Vercel:** `vercel` komutu ya da repo import et.

## 📁 Yapı

```
portfolio/
├── index.html        # Tüm bölümler (hero, hakkımda, deneyim, projeler, yetenekler, iletişim)
├── css/style.css     # Tema, animasyon stilleri, responsive kurallar
└── js/
    ├── i18n.js       # TR / EN metin sözlüğü  ← METİNLERİ BURADAN DÜZENLE
    ├── webgl.js      # Three.js spiral galaksi arka planı
    └── main.js       # Preloader, imleç, GSAP animasyonları, tilt, scramble, dil değiştirme
```

## ✏️ Özelleştirme

| Ne | Nerede |
|---|---|
| Metinler (her iki dil) | `js/i18n.js` içindeki `en:` ve `tr:` sözlükleri |
| Renkler | `css/style.css` en üstte `:root` değişkenleri (`--ac1`, `--ac2`, `--ac3`) |
| Hero'daki dönen unvanlar | `i18n.js` → `__roles` dizileri |
| Galaksi yoğunluğu/rengi | `js/webgl.js` → `COUNT`, `inside`, `outside` |
| İletişim bilgileri | `index.html` → `#contact` bölümü (mailto / tel / wa.me linkleri) |

## ⚙️ Özellikler

- 🌌 Fare ve scroll'a tepki veren Three.js spiral galaksi
- 🔢 Sayaçlı preloader + perde geçişi
- 🖱️ Özel imleç (hover'da büyüyen halka) + mıknatıs butonlar
- 🧈 Lenis ile yağ gibi kaydırma, GSAP ScrollTrigger sahne animasyonları
- 🔤 Scramble (karakter karıştırmalı) unvan rotasyonu
- 🃏 Projelerde 3D tilt + parlama efekti ve **canlı mini uygulama mockup'ları**
- 🇹🇷/🇬🇧 Tek tıkla dil değiştirme (tarayıcı diline göre otomatik seçim, localStorage'da hatırlanır)
- ♿ `prefers-reduced-motion` desteği, mobil uyumlu, klavye dostu
- 🔒 CDN script'lerinde SRI (subresource integrity) hash doğrulaması

— *2026, sağlıksız miktarda animasyonla.*
