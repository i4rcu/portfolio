/* ════════════════════════════════════════════════════════════
   i18n — EN / TR dictionary + applier
   ════════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  var I18N = {
    en: {
      __roles: ['SOFTWARE ENGINEER', 'FLUTTER DEVELOPER', '.NET BACKEND DEVELOPER', 'AI ENTHUSIAST', 'PROBLEM SOLVER'],

      'pre.tag': 'initializing experience…',

      'nav.about': 'About',
      'nav.experience': 'Experience',
      'nav.projects': 'Projects',
      'nav.skills': 'Skills',
      'nav.contact': 'Contact',
      'nav.cta': "Let's talk",

      'hero.badge': 'Open to new opportunities',
      'hero.tagline': 'I build enterprise-grade systems — from ERP platforms and mobile apps to AI tools that turn plain language into live data.',
      'hero.cta1': 'View my work',
      'hero.cta2': 'Get in touch',
      'hero.scroll': 'scroll',

      'about.label': '01 — About me',
      'about.title': 'I turn complex problems into clean, living software.',
      'about.p1': "I'm Abdurrahman — a software engineer based in Gaziantep, Türkiye. I build full-stack systems: Flutter on the front, ASP.NET Core and Node.js behind, SQL Server holding it all together.",
      'about.p2': 'From enterprise ERP platforms running real factories to AI assistants that translate plain questions into safe SQL, I care about software that is fast, secure and genuinely useful. Currently engineering ERP systems at Speed of Light.',
      'about.edu': 'Atatürk University',
      'about.eduSub': 'B.Sc. Software Engineering · GPA 3.23 / 4.0 · 2022–2026',
      'about.loc': 'Gaziantep, Türkiye',
      'about.locSub': 'Open to remote & hybrid roles',
      'about.langs': 'Arabic · Turkish · English',
      'about.langsSub': 'Native · C1 · B1',
      'about.s1': 'Years of experience',
      'about.s2': 'Projects built',
      'about.s3': 'Technologies used',
      'about.s4': 'Spoken languages',

      'exp.label': '02 — Experience',
      'exp.title': "Where I've left my mark.",
      'exp.now': 'NOW',
      'exp.j1.date': 'Feb 2026 — Present',
      'exp.j1.role': 'Software Engineer',
      'exp.j1.desc': 'Building an enterprise ERP end-to-end: ASP.NET Core Web API services, desktop-grade Flutter UIs and high-performance SQL Server reporting infrastructure for sales, stock, production and invoicing.',
      'exp.j1.b1': 'Sales, inventory, customer-account & production modules',
      'exp.j1.b2': 'Authentication, licensing & data-security processes',
      'exp.j1.b3': 'Integrations with existing ERP & Logo systems',
      'exp.j2.date': 'Oct 2025 — Jan 2026',
      'exp.j2.role': 'System Administrator',
      'exp.j2.desc': "Kept a factory's digital backbone alive: servers, network security, user access management, backups and recovery, firewall configuration and hands-on IT support.",
      'exp.j2.b1': 'Server installation, maintenance & monitoring',
      'exp.j2.b2': 'Backup / disaster-recovery operations',
      'exp.j2.b3': 'Firewall & network security configuration',
      'exp.j3.date': 'Feb 2024 — Jun 2025',
      'exp.j3.role': 'Software Developer',
      'exp.j3.desc': 'Developed enterprise backend services with ASP.NET Core Web API, designed optimized SQL Server databases and shipped Flutter mobile apps with the BLoC pattern.',
      'exp.j3.b1': 'Mobile–backend integration & API lifecycle management',
      'exp.j3.b2': 'Authentication, license validation & data security',
      'exp.j3.b3': 'Maintenance, enhancements & bug fixing on live projects',

      'proj.label': '03 — Projects',
      'proj.title': 'Selected builds, alive and kicking.',
      'proj.p1.cat': 'AI · ERP · RAG',
      'proj.p1.desc': 'An AI layer on top of a live ERP. Ask a question in plain language — a RAG pipeline retrieves the right schemas, the LLM writes SQL, a security guard validates it, and results stream back as live charts, token by token. ChatGPT for your factory.',
      'proj.p1.h1': 'NL2SQL pipeline with vector-based RAG retrieval',
      'proj.p1.h2': 'SQL Guard — SELECT-only, read-only execution context',
      'proj.p1.h3': 'Real-time SSE streaming with auto-generated charts',
      'proj.p1.h4': 'Full i18n incl. RTL Arabic & Turkish',
      'proj.p2.cat': 'Enterprise · Manufacturing',
      'proj.p2.desc': 'A full ERP running a real plastics factory — from sales orders and procurement to work orders, quality gates and shipment. Clean Architecture + DDD, with a dynamic permission engine that syncs code to database at startup and SignalR realtime everywhere.',
      'proj.p2.h1': 'Dynamic permission-based authorization with in-memory caching',
      'proj.p2.h2': 'Stock availability algorithm with proactive shortage alerts',
      'proj.p2.h3': 'JWT password revocation & full audit logging',
      'proj.p2.h4': 'QuestPDF / JsReport reporting engine',
      'proj.p3.cat': 'Retail · Mobile · Cloud',
      'proj.p3.desc': 'Smart retail management for small businesses — the bridge between spreadsheets and expensive POS systems. Real-time inventory, secure sales and a hybrid analytics engine: Cloud Functions crunch best-sellers server-side, with an offline Dart fallback so business never stops.',
      'proj.p3.h1': 'Hybrid cloud / client analytics with automatic fallback',
      'proj.p3.h2': 'Real-time Firestore sync across devices',
      'proj.p3.h3': 'Repository-pattern architecture, fully testable',
      'proj.p4.cat': 'AI · EdTech · Mobile',
      'proj.p4.name': 'YKS Smart Study Assistant',
      'proj.p4.desc': "An AI study coach for Türkiye's university entrance exam. DeepSeek generates exam-grade questions in smart batches, GitHub acts as a version-controlled question CMS, and an analytics engine tracks net scores to hunt down weak topics.",
      'proj.p4.h1': 'Batched LLM question generation across 426+ concepts',
      'proj.p4.h2': 'GitHub-as-a-CMS: versioned question bank via REST API',
      'proj.p4.h3': 'Official net-score logic with weak-topic analysis',
      'proj.more': '+ more builds',
      'proj.m1.name': 'Solution Center',
      'proj.m1.desc': 'Internal knowledge platform for support teams — solutions in text, PDF, image & link form with advanced search and a full admin panel.',
      'proj.m2.name': 'Invoicing System',
      'proj.m2.desc': 'Cross-platform app for customers, sales and invoices — custom auth API, full CRUD and clean BLoC architecture.',
      'proj.m3.name': 'Logo Reporting App',
      'proj.m3.desc': 'Per-user authorized reporting integrated with Logo software — predefined SQL executed via API into dynamic, responsive tables.',

      'skills.label': '04 — Skills',
      'skills.title': 'The arsenal I build with.',
      'skills.g1': 'Mobile & Frontend',
      'skills.g2': 'Backend & APIs',
      'skills.g3': 'Databases',
      'skills.g4': 'AI & Data',
      'skills.g5': 'Core Engineering',
      'skills.g6': 'Human Languages',
      'skills.l1': 'Arabic',
      'skills.l1v': 'Native',
      'skills.l2': 'Turkish',
      'skills.l3': 'English',

      'contact.label': '05 — Contact',
      'contact.t1': "LET'S WORK",
      'contact.t2': 'TOGETHER.',
      'contact.sub': 'Have a project, a role, or just an idea that needs an engineer who ships? My inbox is always open.',
      'contact.btn': 'Say hello',
      'contact.email': 'EMAIL',
      'contact.phone': 'PHONE',
      'contact.wa': 'Message me directly',

      'footer.copy': '© 2026 Abdurrahman Naccar',
      'footer.made': 'designed & built with an unhealthy amount of animations',
      'footer.top': 'TOP'
    },

    tr: {
      __roles: ['YAZILIM MÜHENDİSİ', 'FLUTTER GELİŞTİRİCİ', '.NET BACKEND GELİŞTİRİCİ', 'YAPAY ZEKÂ MERAKLISI', 'PROBLEM ÇÖZÜCÜ'],

      'pre.tag': 'deneyim başlatılıyor…',

      'nav.about': 'Hakkımda',
      'nav.experience': 'Deneyim',
      'nav.projects': 'Projeler',
      'nav.skills': 'Yetenekler',
      'nav.contact': 'İletişim',
      'nav.cta': 'Konuşalım',

      'hero.badge': 'Yeni fırsatlara açığım',
      'hero.tagline': 'Kurumsal düzeyde sistemler inşa ediyorum — ERP platformlarından mobil uygulamalara ve doğal dili canlı veriye dönüştüren yapay zekâ araçlarına kadar.',
      'hero.cta1': 'Projelerime bak',
      'hero.cta2': 'İletişime geç',
      'hero.scroll': 'kaydır',

      'about.label': '01 — Hakkımda',
      'about.title': 'Karmaşık problemleri temiz, yaşayan yazılıma dönüştürüyorum.',
      'about.p1': 'Ben Abdurrahman — Gaziantep merkezli bir yazılım mühendisiyim. Full-stack sistemler kuruyorum: önde Flutter, arkada ASP.NET Core ve Node.js, hepsini bir arada tutan SQL Server.',
      'about.p2': 'Gerçek fabrikaları yöneten kurumsal ERP platformlarından, sıradan soruları güvenli SQL’e çeviren yapay zekâ asistanlarına kadar; hızlı, güvenli ve gerçekten işe yarayan yazılımları önemsiyorum. Şu anda Speed of Light’ta ERP sistemleri geliştiriyorum.',
      'about.edu': 'Atatürk Üniversitesi',
      'about.eduSub': 'Yazılım Mühendisliği Lisans · GPA 3.23 / 4.0 · 2022–2026',
      'about.loc': 'Gaziantep, Türkiye',
      'about.locSub': 'Uzaktan ve hibrit çalışmaya açığım',
      'about.langs': 'Arapça · Türkçe · İngilizce',
      'about.langsSub': 'Ana dil · C1 · B1',
      'about.s1': 'Yıl deneyim',
      'about.s2': 'Tamamlanan proje',
      'about.s3': 'Kullanılan teknoloji',
      'about.s4': 'Konuşulan dil',

      'exp.label': '02 — Deneyim',
      'exp.title': 'İz bıraktığım yerler.',
      'exp.now': 'ŞİMDİ',
      'exp.j1.date': 'Şub 2026 — Devam',
      'exp.j1.role': 'Yazılım Mühendisi',
      'exp.j1.desc': 'Uçtan uca kurumsal ERP geliştiriyorum: ASP.NET Core Web API servisleri, masaüstü kalitesinde Flutter arayüzleri ve satış, stok, üretim ve fatura süreçleri için yüksek performanslı SQL Server raporlama altyapısı.',
      'exp.j1.b1': 'Satış, stok, cari hesap ve üretim modülleri',
      'exp.j1.b2': 'Kimlik doğrulama, lisanslama ve veri güvenliği süreçleri',
      'exp.j1.b3': 'Mevcut ERP ve Logo sistemleriyle entegrasyonlar',
      'exp.j2.date': 'Eki 2025 — Oca 2026',
      'exp.j2.role': 'Sistem Yöneticisi',
      'exp.j2.desc': 'Bir fabrikanın dijital omurgasını ayakta tuttum: sunucular, ağ güvenliği, kullanıcı erişim yönetimi, yedekleme ve kurtarma, firewall yapılandırması ve birebir IT desteği.',
      'exp.j2.b1': 'Sunucu kurulumu, bakım ve izleme',
      'exp.j2.b2': 'Yedekleme / felaket kurtarma operasyonları',
      'exp.j2.b3': 'Firewall ve ağ güvenliği yapılandırması',
      'exp.j3.date': 'Şub 2024 — Haz 2025',
      'exp.j3.role': 'Yazılım Geliştirici',
      'exp.j3.desc': 'ASP.NET Core Web API ile kurumsal backend servisler geliştirdim, optimize SQL Server veritabanları tasarladım ve BLoC pattern ile Flutter mobil uygulamalar yayınladım.',
      'exp.j3.b1': 'Mobil–backend entegrasyonu ve API yaşam döngüsü yönetimi',
      'exp.j3.b2': 'Kimlik doğrulama, lisans kontrolü ve veri güvenliği',
      'exp.j3.b3': 'Canlı projelerde bakım, iyileştirme ve hata giderme',

      'proj.label': '03 — Projeler',
      'proj.title': 'Seçilmiş işler — canlı ve hareketli.',
      'proj.p1.cat': 'AI · ERP · RAG',
      'proj.p1.desc': 'Canlı bir ERP’nin üzerinde yapay zekâ katmanı. Soruyu doğal dilde sor — RAG pipeline’ı doğru şemaları getirir, LLM SQL’i yazar, güvenlik katmanı doğrular ve sonuçlar token token canlı grafikler olarak akar. Fabrikan için ChatGPT.',
      'proj.p1.h1': 'Vektör tabanlı RAG erişimli NL2SQL pipeline',
      'proj.p1.h2': 'SQL Guard — yalnızca SELECT, salt-okunur çalıştırma',
      'proj.p1.h3': 'SSE ile gerçek zamanlı akış ve otomatik grafikler',
      'proj.p1.h4': 'RTL Arapça ve Türkçe dahil tam i18n',
      'proj.p2.cat': 'Kurumsal · Üretim',
      'proj.p2.desc': 'Gerçek bir plastik fabrikasını yöneten eksiksiz ERP — satış siparişinden tedarike, iş emirlerinden kalite kontrol ve sevkiyata. Clean Architecture + DDD, açılışta kodu veritabanıyla senkronlayan dinamik yetki motoru ve her yerde SignalR gerçek zamanlılık.',
      'proj.p2.h1': 'Bellek önbellekli dinamik yetki tabanlı yetkilendirme',
      'proj.p2.h2': 'Proaktif eksik uyarılı stok uygunluk algoritması',
      'proj.p2.h3': 'JWT parola iptali ve uçtan uca denetim kaydı',
      'proj.p2.h4': 'QuestPDF / JsReport raporlama motoru',
      'proj.p3.cat': 'Perakende · Mobil · Bulut',
      'proj.p3.desc': 'Küçük işletmeler için akıllı mağaza yönetimi — excel tabloları ile pahalı POS sistemleri arasındaki köprü. Gerçek zamanlı stok, güvenli satış ve hibrit analitik motoru: en çok satanları Cloud Functions sunucuda hesaplar, çevrimdışı Dart yedeği ile iş asla durmaz.',
      'proj.p3.h1': 'Otomatik geçişli hibrit bulut / istemci analitiği',
      'proj.p3.h2': 'Cihazlar arası gerçek zamanlı Firestore senkronu',
      'proj.p3.h3': 'Repository pattern mimarisi, tamamen test edilebilir',
      'proj.p4.cat': 'AI · Eğitim · Mobil',
      'proj.p4.name': 'YKS Akıllı Çalışma Asistanı',
      'proj.p4.desc': 'YKS için yapay zekâ destekli çalışma koçu. DeepSeek akıllı partiler halinde sınav kalitesinde soru üretir, GitHub sürüm kontrollü soru CMS’i olarak çalışır ve analitik motoru net skorlarını takip ederek zayıf konuları avlar.',
      'proj.p4.h1': '426+ kazanım üzerinde partili LLM soru üretimi',
      'proj.p4.h2': 'GitHub-as-a-CMS: REST API ile versiyonlu soru bankası',
      'proj.p4.h3': 'Resmî net hesabı ve zayıf konu analizi',
      'proj.more': '+ diğer işler',
      'proj.m1.name': 'Çözüm Merkezi',
      'proj.m1.desc': 'Destek ekipleri için kurum içi bilgi platformu — metin, PDF, görsel ve link formatında çözümler, gelişmiş arama ve tam yetkili admin paneli.',
      'proj.m2.name': 'Faturalama Sistemi',
      'proj.m2.desc': 'Müşteri, satış ve faturalar için çapraz platform uygulama — özel auth API, tam CRUD ve temiz BLoC mimarisi.',
      'proj.m3.name': 'Logo Raporlama Uygulaması',
      'proj.m3.desc': 'Logo yazılımlarıyla entegre, kullanıcı bazlı yetkili raporlama — önceden tanımlı SQL, API üzerinden dinamik ve responsive tablolara dönüşür.',

      'skills.label': '04 — Yetenekler',
      'skills.title': 'Birlikte inşa ettiğim cephanelik.',
      'skills.g1': 'Mobil & Frontend',
      'skills.g2': 'Backend & API’ler',
      'skills.g3': 'Veritabanları',
      'skills.g4': 'Yapay Zekâ & Veri',
      'skills.g5': 'Temel Mühendislik',
      'skills.g6': 'Konuşulan Diller',
      'skills.l1': 'Arapça',
      'skills.l1v': 'Ana dil',
      'skills.l2': 'Türkçe',
      'skills.l3': 'İngilizce',

      'contact.label': '05 — İletişim',
      'contact.t1': 'BİRLİKTE',
      'contact.t2': 'ÇALIŞALIM.',
      'contact.sub': 'Bir proje, bir pozisyon ya da sadece işini bitiren bir mühendise ihtiyaç duyan bir fikrin mi var? Kutum her zaman açık.',
      'contact.btn': 'Merhaba de',
      'contact.email': 'E-POSTA',
      'contact.phone': 'TELEFON',
      'contact.wa': 'Doğrudan mesaj at',

      'footer.copy': '© 2026 Abdurrahman Naccar',
      'footer.made': 'sağlıksız miktarda animasyonla tasarlandı & kodlandı',
      'footer.top': 'YUKARI'
    }
  };

  function applyI18n(lang) {
    var dict = I18N[lang] || I18N.en;
    var nodes = document.querySelectorAll('[data-i18n]');
    for (var i = 0; i < nodes.length; i++) {
      var key = nodes[i].getAttribute('data-i18n');
      if (Object.prototype.hasOwnProperty.call(dict, key)) {
        nodes[i].textContent = dict[key];
      }
    }
    document.documentElement.setAttribute('lang', lang);

    var sw = document.querySelector('.lang-switch');
    if (sw) sw.setAttribute('data-active', lang);
    var btns = document.querySelectorAll('.lang-btn');
    for (var j = 0; j < btns.length; j++) {
      btns[j].classList.toggle('is-active', btns[j].getAttribute('data-lang') === lang);
    }
    try { localStorage.setItem('an-lang', lang); } catch (e) { /* private mode */ }
  }

  function initialLang() {
    try {
      var saved = localStorage.getItem('an-lang');
      if (saved === 'tr' || saved === 'en') return saved;
    } catch (e) { /* private mode */ }
    var nav = (navigator.language || 'en').toLowerCase();
    return nav.indexOf('tr') === 0 ? 'tr' : 'en';
  }

  window.AN_I18N = { dict: I18N, apply: applyI18n, initialLang: initialLang };
})();
