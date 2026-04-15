/* ============================================================
   STATIC ACADEMY — Core Application JS
   Auth, i18n, utils, nav behaviour
   ============================================================ */

'use strict';

/* ── i18n data ── */
const TRANSLATIONS = {
  en: {
    nav_home: 'Home',
    nav_courses: 'Courses',
    nav_pricing: 'Pricing',
    nav_login: 'Sign In',
    nav_cta: 'Get Started',
    nav_dashboard: 'Dashboard',
    nav_paths: 'Learning Paths',
    nav_community: 'Community',
    nav_logout: 'Sign Out',
    footer_tagline: 'The premium e-commerce academy for modern entrepreneurs.',
    hero_badge: 'New — 12 comprehensive modules',
    hero_title_1: 'Master',
    hero_title_2: 'E-Commerce',
    hero_title_3: 'from Zero to Scale',
    hero_sub: 'Join thousands of entrepreneurs who launched and scaled profitable online stores with our proven system.',
    hero_cta: 'Start for Free',
    hero_cta2: 'Explore Courses',
    hero_students: 'Students',
    hero_rating: 'Average Rating',
    hero_revenue: 'Revenue Generated',
    toast_login_success: 'Welcome back! 👋',
    toast_register_success: 'Account created! Welcome to Static Academy 🎉',
    toast_logout: 'You\'ve been signed out.',
    toast_plan_upgrade: 'Plan upgraded successfully! 🚀',
    plan_free: 'Free',
    plan_pro: 'Pro',
    plan_elite: 'Elite',
    locked_content: 'Upgrade to access this content',
    progress: 'Progress',
    continue: 'Continue',
    complete: 'Complete',
    lessons: 'lessons',
    hours: 'hours',
    min: 'min',
    all: 'All',
    free_badge: 'Free',
    upgrade: 'Upgrade',

    /* ── courses.html ── */
    courses_hero_title: 'The complete <span class="grad-text">e-commerce</span> curriculum',
    courses_hero_sub: 'All modules, from beginner to Elite. Progress at your own pace.',
    filter_all: 'All Plans',
    filter_free: 'Free',
    filter_pro: 'Pro',
    filter_elite: 'Elite',
    track_all: '🌐 All Tracks',
    track_core: '🎓 Core Curriculum',
    track_specialty: '🚀 Specialty Paths',
    track_marketing: '📣 Marketing',
    track_advanced: '⚡ Advanced Business',
    courses_empty_title: 'No courses found',
    courses_empty_sub: 'Try adjusting your filters.',
    courses_reset: 'Reset Filters',
    courses_upgrade_title: 'Unlock All Modules',
    courses_upgrade_sub: 'Get lifetime access to all Pro & Elite content.',
    courses_view_plans: 'View All Plans →',
    courses_start_free: 'Start Free',
    /* ── pricing.html ── */
    pricing_hero_title: 'Simple, transparent pricing',
    pricing_hero_sub: 'One-time payment. Lifetime access. No subscriptions.',
    pricing_toggle_ec: 'E-Commerce',
    pricing_toggle_tr: 'Trading',
    pricing_toggle_bundle: 'Bundle',
    pricing_most_popular: 'Most Popular',
    pricing_cta_free: 'Start for Free',
    pricing_cta_pro: 'Get Pro Access',
    pricing_cta_elite: 'Get Elite Access',
    pricing_faq_title: 'Frequently Asked Questions',
    /* ── community.html ── */
    community_hero_title: 'Your E-Commerce Community',
    community_hero_sub: 'Connect with thousands of entrepreneurs and traders. Share wins, ask questions, grow together.',
    community_tab_forum: '💬 Forum',
    community_tab_coaching: '🎯 Coaching Calls',
    community_tab_leaderboard: '🏆 Leaderboard',
    community_search_ph: 'Search discussions…',
    community_new_post: '+ New Post',
    community_join_btn: 'Join Live Call',
    community_register_btn: 'Register',
    /* ── learning-paths.html ── */
    paths_hero_title: 'Your Learning Path',
    paths_hero_sub: 'Structured journeys from beginner to expert. Follow the path or explore freely.',
    paths_start: 'Start Path →',
    paths_continue: 'Continue →',
    paths_view: 'View Path →',
    /* ── auth.html ── */
    auth_signin_title: 'Welcome back',
    auth_signin_sub: 'Sign in to your STATIC Academy account',
    auth_signup_title: 'Create your account',
    auth_signup_sub: 'Start learning for free today',
    auth_email: 'Email address',
    auth_password: 'Password',
    auth_firstname: 'First name',
    auth_lastname: 'Last name',
    auth_signin_btn: 'Sign In',
    auth_signup_btn: 'Create Account',
    auth_have_account: 'Already have an account?',
    auth_no_account: "Don\'t have an account?",
    auth_forgot: 'Forgot password?',
    /* ── payment.html ── */
    pay_title: 'Secure Payment',
    pay_sub: 'Complete your purchase safely',
    pay_card: 'Card',
    pay_paypal: 'PayPal',
    pay_apple: 'Apple Pay',
    pay_email_label: 'Email address',
    pay_name_label: 'Full name',
    pay_card_number: 'Card number',
    pay_expiry: 'Expiry',
    pay_cvv: 'CVV',
    pay_submit: 'Complete Purchase',
    pay_cancel: '← Back',
    pay_secure_badge: 'Secure SSL 256-bit payment',
    /* ── report.html ── */
    report_title: 'Report an Issue',
    report_sub: 'We\'ll respond as soon as possible',
    report_type_payment: 'Payment Issue',
    report_type_access: 'Access Issue',
    report_type_bug: 'Bug / Error',
    report_type_content: 'Content / Course',
    report_type_sub: 'Subscription / Access',
    report_type_other: 'Other',
    report_name: 'Your name',
    report_email: 'Your email',
    report_desc: 'Describe the issue',
    report_priority: 'Priority',
    report_submit: 'Send Report',
    report_back: '← Back',
    /* ── subscription.html ── */
    sub_title: 'My Subscription',
    sub_tab_overview: 'Overview',
    sub_tab_change: 'Change Plan',
    sub_tab_manage: 'Manage',
    sub_current_plan: 'Current Plan',
    sub_ec_formation: 'E-Commerce Formation',
    sub_tr_formation: 'Trading Formation',
    sub_cancel: 'Cancel Subscription',
    sub_delete: 'Delete Account',
  },
  fr: {
    nav_home: 'Accueil',
    nav_courses: 'Formations',
    nav_pricing: 'Tarifs',
    nav_login: 'Connexion',
    nav_cta: 'Commencer',
    nav_dashboard: 'Tableau de bord',
    nav_paths: 'Parcours d\'apprentissage',
    nav_community: 'Communauté',
    nav_logout: 'Se déconnecter',
    footer_tagline: 'L\'académie e-commerce premium pour entrepreneurs modernes.',
    hero_badge: 'Nouveau — 12 modules complets',
    hero_title_1: 'Maîtrisez',
    hero_title_2: 'l\'E-Commerce',
    hero_title_3: 'de Zéro à l\'Échelle',
    hero_sub: 'Rejoignez des milliers d\'entrepreneurs qui ont lancé et développé des boutiques en ligne rentables avec notre système éprouvé.',
    hero_cta: 'Commencer gratuitement',
    hero_cta2: 'Explorer les formations',
    hero_students: 'Étudiants',
    hero_rating: 'Note moyenne',
    hero_revenue: 'Revenus Générés',
    toast_login_success: 'Bienvenue! 👋',
    toast_register_success: 'Compte créé! Bienvenue sur Static Academy 🎉',
    toast_logout: 'Vous avez été déconnecté.',
    toast_plan_upgrade: 'Forfait mis à niveau avec succès! 🚀',
    plan_free: 'Gratuit',
    plan_pro: 'Pro',
    plan_elite: 'Élite',
    locked_content: 'Passez à la version supérieure pour accéder à ce contenu',
    progress: 'Progression',
    continue: 'Continuer',
    complete: 'Terminé',
    lessons: 'leçons',
    hours: 'heures',
    min: 'min',
    all: 'Tous',
    free_badge: 'Gratuit',
    upgrade: 'Améliorer',

    /* ── courses.html ── */
    courses_hero_title: 'Le programme <span class="grad-text">e-commerce</span> complet',
    courses_hero_sub: 'Tous les modules, du débutant à l\'Élite. Progressez à votre rythme.',
    filter_all: 'Tous',
    filter_free: 'Gratuit',
    filter_pro: 'Pro',
    filter_elite: 'Élite',
    track_all: '🌐 Tous les Modules',
    track_core: '🎓 Programme Principal',
    track_specialty: '🚀 Parcours Spéciaux',
    track_marketing: '📣 Marketing',
    track_advanced: '⚡ Business Avancé',
    courses_empty_title: 'Aucun cours trouvé',
    courses_empty_sub: 'Essayez d\'ajuster vos filtres.',
    courses_reset: 'Réinitialiser',
    courses_upgrade_title: 'Débloquer Tous les Modules',
    courses_upgrade_sub: 'Accès à vie à tout le contenu Pro & Élite.',
    courses_view_plans: 'Voir les Tarifs →',
    courses_start_free: 'Commencer Gratuitement',
    /* ── pricing.html ── */
    pricing_hero_title: 'Tarifs simples et transparents',
    pricing_hero_sub: 'Paiement unique. Accès à vie. Sans abonnement.',
    pricing_toggle_ec: 'E-Commerce',
    pricing_toggle_tr: 'Trading',
    pricing_toggle_bundle: 'Bundle',
    pricing_most_popular: 'Le plus populaire',
    pricing_cta_free: 'Commencer Gratuitement',
    pricing_cta_pro: 'Accès Pro',
    pricing_cta_elite: 'Accès Élite',
    pricing_faq_title: 'Questions Fréquentes',
    /* ── community.html ── */
    community_hero_title: 'Votre Communauté E-Commerce',
    community_hero_sub: 'Connectez-vous avec des milliers d\'entrepreneurs. Partagez vos victoires, posez vos questions.',
    community_tab_forum: '💬 Forum',
    community_tab_coaching: '🎯 Coaching',
    community_tab_leaderboard: '🏆 Classement',
    community_search_ph: 'Rechercher…',
    community_new_post: '+ Nouveau Post',
    community_join_btn: 'Rejoindre le Live',
    community_register_btn: 'S\'inscrire',
    /* ── learning-paths.html ── */
    paths_hero_title: 'Votre Parcours d\'Apprentissage',
    paths_hero_sub: 'Parcours structurés du débutant à l\'expert. Suivez le chemin ou explorez librement.',
    paths_start: 'Démarrer →',
    paths_continue: 'Continuer →',
    paths_view: 'Voir le Parcours →',
    /* ── auth.html ── */
    auth_signin_title: 'Bienvenue',
    auth_signin_sub: 'Connectez-vous à votre compte STATIC Academy',
    auth_signup_title: 'Créer votre compte',
    auth_signup_sub: 'Commencez à apprendre gratuitement dès aujourd\'hui',
    auth_email: 'Adresse email',
    auth_password: 'Mot de passe',
    auth_firstname: 'Prénom',
    auth_lastname: 'Nom',
    auth_signin_btn: 'Se connecter',
    auth_signup_btn: 'Créer un compte',
    auth_have_account: 'Vous avez déjà un compte ?',
    auth_no_account: 'Pas encore de compte ?',
    auth_forgot: 'Mot de passe oublié ?',
    /* ── payment.html ── */
    pay_title: 'Paiement Sécurisé',
    pay_sub: 'Finalisez votre achat en toute sécurité',
    pay_card: 'Carte',
    pay_paypal: 'PayPal',
    pay_apple: 'Apple Pay',
    pay_email_label: 'Adresse email',
    pay_name_label: 'Nom complet',
    pay_card_number: 'Numéro de carte',
    pay_expiry: 'Expiration',
    pay_cvv: 'CVV',
    pay_submit: 'Finaliser l\'achat',
    pay_cancel: '← Retour',
    pay_secure_badge: 'Paiement sécurisé SSL 256 bits',
    /* ── report.html ── */
    report_title: 'Signaler un Problème',
    report_sub: 'Nous vous répondrons dans les plus brefs délais',
    report_type_payment: 'Problème de Paiement',
    report_type_access: 'Problème d\'Accès',
    report_type_bug: 'Bug / Erreur',
    report_type_content: 'Contenu / Formation',
    report_type_sub: 'Abonnement / Accès',
    report_type_other: 'Autre',
    report_name: 'Votre nom',
    report_email: 'Votre email',
    report_desc: 'Décrivez le problème',
    report_priority: 'Priorité',
    report_submit: 'Envoyer le signalement',
    report_back: '← Retour',
    /* ── subscription.html ── */
    sub_title: 'Mon Abonnement',
    sub_tab_overview: 'Vue d\'ensemble',
    sub_tab_change: 'Changer de plan',
    sub_tab_manage: 'Gérer',
    sub_current_plan: 'Plan actuel',
    sub_ec_formation: 'Formation E-Commerce',
    sub_tr_formation: 'Formation Trading',
    sub_cancel: 'Annuler l\'abonnement',
    sub_delete: 'Supprimer le compte',
  },
  es: {
    nav_home: 'Inicio',
    nav_courses: 'Cursos',
    nav_pricing: 'Precios',
    nav_login: 'Iniciar sesión',
    nav_cta: 'Comenzar',
    nav_dashboard: 'Panel',
    nav_paths: 'Rutas de aprendizaje',
    nav_community: 'Comunidad',
    nav_logout: 'Cerrar sesión',
    footer_tagline: 'La academia de e-commerce premium para emprendedores modernos.',
    hero_badge: 'Nuevo — 12 módulos completos',
    hero_title_1: 'Domina',
    hero_title_2: 'el E-Commerce',
    hero_title_3: 'de Cero a Escala',
    hero_sub: 'Únete a miles de emprendedores que lanzaron y escalaron tiendas en línea rentables con nuestro sistema probado.',
    hero_cta: 'Comenzar gratis',
    hero_cta2: 'Explorar cursos',
    hero_students: 'Estudiantes',
    hero_rating: 'Calificación media',
    hero_revenue: 'Ingresos generados',
    toast_login_success: '¡Bienvenido de vuelta! 👋',
    toast_register_success: '¡Cuenta creada! Bienvenido a Static Academy 🎉',
    toast_logout: 'Has cerrado sesión.',
    toast_plan_upgrade: '¡Plan actualizado con éxito! 🚀',
    plan_free: 'Gratis',
    plan_pro: 'Pro',
    plan_elite: 'Élite',
    locked_content: 'Actualiza para acceder a este contenido',
    progress: 'Progreso',
    continue: 'Continuar',
    complete: 'Completo',
    lessons: 'lecciones',
    hours: 'horas',
    min: 'min',
    all: 'Todo',
    free_badge: 'Gratis',
    upgrade: 'Mejorar',
  },
  de: {
    nav_home: 'Startseite',
    nav_courses: 'Kurse',
    nav_pricing: 'Preise',
    nav_login: 'Anmelden',
    nav_cta: 'Loslegen',
    nav_dashboard: 'Dashboard',
    nav_paths: 'Lernpfade',
    nav_community: 'Community',
    nav_logout: 'Abmelden',
    footer_tagline: 'Die Premium-E-Commerce-Akademie für moderne Unternehmer.',
    hero_badge: 'Neu — 12 umfassende Module',
    hero_title_1: 'Meistere',
    hero_title_2: 'E-Commerce',
    hero_title_3: 'von Null zur Skalierung',
    hero_sub: 'Schließe dich Tausenden von Unternehmern an, die mit unserem bewährten System profitable Online-Shops aufgebaut haben.',
    hero_cta: 'Kostenlos starten',
    hero_cta2: 'Kurse erkunden',
    hero_students: 'Studenten',
    hero_rating: 'Durchschnittsbewertung',
    hero_revenue: 'Generierter Umsatz',
    toast_login_success: 'Willkommen zurück! 👋',
    toast_register_success: 'Konto erstellt! Willkommen bei Static Academy 🎉',
    toast_logout: 'Du wurdest abgemeldet.',
    toast_plan_upgrade: 'Plan erfolgreich aktualisiert! 🚀',
    plan_free: 'Kostenlos',
    plan_pro: 'Pro',
    plan_elite: 'Elite',
    locked_content: 'Upgrade für Zugang zu diesem Inhalt',
    progress: 'Fortschritt',
    continue: 'Weiter',
    complete: 'Fertig',
    lessons: 'Lektionen',
    hours: 'Stunden',
    min: 'min',
    all: 'Alle',
    free_badge: 'Kostenlos',
    upgrade: 'Upgrade',
  },
  pt: {
    nav_home: 'Início',
    nav_courses: 'Cursos',
    nav_pricing: 'Preços',
    nav_login: 'Entrar',
    nav_cta: 'Começar',
    nav_dashboard: 'Painel',
    nav_paths: 'Trilhas de aprendizado',
    nav_community: 'Comunidade',
    nav_logout: 'Sair',
    footer_tagline: 'A academia de e-commerce premium para empreendedores modernos.',
    hero_badge: 'Novo — 12 módulos completos',
    hero_title_1: 'Domine',
    hero_title_2: 'o E-Commerce',
    hero_title_3: 'do Zero à Escala',
    hero_sub: 'Junte-se a milhares de empreendedores que lançaram e escalaram lojas online lucrativas com nosso sistema comprovado.',
    hero_cta: 'Começar grátis',
    hero_cta2: 'Explorar cursos',
    hero_students: 'Alunos',
    hero_rating: 'Avaliação média',
    hero_revenue: 'Receita gerada',
    toast_login_success: 'Bem-vindo de volta! 👋',
    toast_register_success: 'Conta criada! Bem-vindo à Static Academy 🎉',
    toast_logout: 'Você saiu.',
    toast_plan_upgrade: 'Plano atualizado com sucesso! 🚀',
    plan_free: 'Gratuito',
    plan_pro: 'Pro',
    plan_elite: 'Elite',
    locked_content: 'Faça upgrade para acessar este conteúdo',
    progress: 'Progresso',
    continue: 'Continuar',
    complete: 'Concluído',
    lessons: 'aulas',
    hours: 'horas',
    min: 'min',
    all: 'Tudo',
    free_badge: 'Grátis',
    upgrade: 'Melhorar',
  }
};

const LANGUAGE_NAMES = {
  en: { name: 'English',    flag: '🇺🇸' },
  fr: { name: 'Français',   flag: '🇫🇷' },
  es: { name: 'Español',    flag: '🇪🇸' },
  de: { name: 'Deutsch',    flag: '🇩🇪' },
  pt: { name: 'Português',  flag: '🇧🇷' },
};

/* ── App State ── */
const App = {
  lang: localStorage.getItem('sa_lang') || 'en',
  user: null,

  init() {
    this.user = this._loadUser();
    this._applyLang(this.lang);
    this._initNav();
    this._initLangSwitcher();
    this._updateAuthUI();
    this._initDropdowns();
    this._initFAQ();
    this._navScroll();
    this._markActivePage();
  },

  /* ── Auth ── */
  _loadUser() {
    try { return JSON.parse(localStorage.getItem('sa_user')); }
    catch { return null; }
  },

  register(data) {
    const { firstName, lastName, email, password } = data;
    if (!firstName || !lastName || !email || !password) return { ok: false, msg: 'All fields are required.' };
    if (password.length < 6) return { ok: false, msg: 'Password must be at least 6 characters.' };

    let users = this._getUsers();
    if (users.find(u => u.email === email)) return { ok: false, msg: 'An account with this email already exists.' };

    const user = {
      id: 'usr_' + Math.random().toString(36).slice(2),
      firstName, lastName,
      email,
      password: this._hash(password),
      plan: 'free',
      joinedAt: new Date().toISOString(),
      progress: {},
      completedLessons: [],
    };
    users.push(user);
    localStorage.setItem('sa_users', JSON.stringify(users));

    const safe = { ...user }; delete safe.password;
    localStorage.setItem('sa_user', JSON.stringify(safe));
    this.user = safe;
    this._updateAuthUI();
    return { ok: true };
  },

  login(email, password) {
    let users = this._getUsers();
    const user = users.find(u => u.email === email);
    if (!user) return { ok: false, msg: 'No account found with this email.' };
    if (user.password !== this._hash(password)) return { ok: false, msg: 'Incorrect password.' };

    const safe = { ...user }; delete safe.password;
    localStorage.setItem('sa_user', JSON.stringify(safe));
    this.user = safe;
    this._updateAuthUI();
    return { ok: true };
  },

  logout() {
    localStorage.removeItem('sa_user');
    this.user = null;
    this._updateAuthUI();
    this.toast(this.t('toast_logout'), 'info');
    setTimeout(() => { window.location.href = 'index.html'; }, 800);
  },

  upgradePlan(plan) {
    if (!this.user) return;
    let users = this._getUsers();
    const idx = users.findIndex(u => u.id === this.user.id);
    if (idx < 0) return;
    users[idx].plan = plan;
    localStorage.setItem('sa_users', JSON.stringify(users));
    this.user.plan = plan;
    localStorage.setItem('sa_user', JSON.stringify(this.user));
    this._updateAuthUI();
    this.toast(this.t('toast_plan_upgrade'), 'success');
  },

  completeLesson(lessonId) {
    if (!this.user) return;
    if (!this.user.completedLessons) this.user.completedLessons = [];
    if (!this.user.completedLessons.includes(lessonId)) {
      this.user.completedLessons.push(lessonId);
      localStorage.setItem('sa_user', JSON.stringify(this.user));
      // sync to users store
      let users = this._getUsers();
      const idx = users.findIndex(u => u.id === this.user.id);
      if (idx >= 0) {
        users[idx].completedLessons = this.user.completedLessons;
        localStorage.setItem('sa_users', JSON.stringify(users));
      }
    }
  },

  isLessonComplete(lessonId) {
    return this.user && this.user.completedLessons && this.user.completedLessons.includes(lessonId);
  },

  canAccess(requiredPlan) {
    const tiers = { free: 0, pro: 1, elite: 2 };
    const userTier = tiers[this.user?.plan || 'free'] ?? 0;
    const reqTier  = tiers[requiredPlan] ?? 0;
    return userTier >= reqTier;
  },

  _getUsers() {
    try { return JSON.parse(localStorage.getItem('sa_users')) || []; }
    catch { return []; }
  },

  _hash(s) {
    // Simple deterministic hash (NOT for production)
    let h = 0;
    for (let i = 0; i < s.length; i++) {
      h = Math.imul(31, h) + s.charCodeAt(i) | 0;
    }
    return h.toString(16);
  },

  /* ── i18n ── */
  t(key) {
    return TRANSLATIONS[this.lang]?.[key] || TRANSLATIONS['en'][key] || key;
  },

  setLang(lang) {
    if (!TRANSLATIONS[lang]) return;
    this.lang = lang;
    localStorage.setItem('sa_lang', lang);
    this._applyLang(lang);
  },

  _applyLang(lang) {
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.dataset.i18nHtml;
      const text = TRANSLATIONS[lang]?.[key] || TRANSLATIONS['en']?.[key] || key;
      el.innerHTML = text;
    });
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      const text = TRANSLATIONS[lang]?.[key] || TRANSLATIONS['en']?.[key] || key;
      // If the element contains SVG/icon children, only update the text node
      const svgChild = el.querySelector('svg');
      if (svgChild) {
        // Find or create a text node after the SVG
        let textNode = Array.from(el.childNodes).find(n => n.nodeType === 3 && n.textContent.trim());
        if (textNode) { textNode.textContent = ' ' + text; }
        else { el.appendChild(document.createTextNode(' ' + text)); }
      } else {
        el.textContent = text;
      }
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.dataset.i18nPlaceholder;
      el.placeholder = TRANSLATIONS[lang]?.[key] || TRANSLATIONS['en']?.[key] || key;
    });
    document.documentElement.lang = lang;
    // Update lang button display
    const btn = document.querySelector('.lang-current');
    if (btn) {
      btn.textContent = LANGUAGE_NAMES[lang]?.flag + ' ' + lang.toUpperCase();
    }
    // Mark active lang option
    document.querySelectorAll('.lang-option').forEach(opt => {
      opt.classList.toggle('active', opt.dataset.lang === lang);
    });
  },

  /* ── Nav UI ── */
  _updateAuthUI() {
    const guestArea  = document.querySelector('.nav-guest');
    const userArea   = document.querySelector('.nav-user');
    const dashLink   = document.querySelector('.nav-dash-link');
    if (!guestArea && !userArea) return;

    if (this.user) {
      if (guestArea) guestArea.style.display = 'none';
      if (userArea)  userArea.style.display = 'flex';
      if (dashLink)  dashLink.style.display = 'flex';
      // fill avatar — support both {name} (checkout) and {firstName,lastName} (auth) users
      const displayName = this.user.name ||
        ((this.user.firstName || '') + ' ' + (this.user.lastName || '')).trim() ||
        'Student';
      const initials = displayName.split(' ').map(w => w[0]).join('').slice(0,2).toUpperCase() || 'SA';
      const av = document.querySelector('.user-avatar');
      if (av) av.textContent = initials;
      // fill user info
      const nameEl  = document.querySelector('.user-name');
      const emailEl = document.querySelector('.user-email');
      const planEl  = document.querySelector('.user-plan');
      if (nameEl)  nameEl.textContent  = displayName;
      if (emailEl) emailEl.textContent = this.user.email || '';
      if (planEl)  {
        planEl.textContent = this.user.plan.charAt(0).toUpperCase() + this.user.plan.slice(1);
        planEl.className = `user-plan plan-${this.user.plan}`;
      }
    } else {
      if (guestArea) guestArea.style.display = 'flex';
      if (userArea)  userArea.style.display = 'none';
      if (dashLink)  dashLink.style.display = 'none';
    }
  },

  _initNav() {
    // Mobile toggle
    const toggle    = document.querySelector('.nav-toggle');
    const mobileNav = document.querySelector('.mobile-nav');
    if (toggle && mobileNav) {
      const closeNav = () => {
        mobileNav.classList.remove('open');
        toggle.classList.remove('open');
        document.body.style.overflow = '';
      };
      toggle.addEventListener('click', () => {
        const isOpen = mobileNav.classList.toggle('open');
        toggle.classList.toggle('open', isOpen);
        // Prevent page scroll when nav open
        document.body.style.overflow = isOpen ? 'hidden' : '';
      });
      // Close on any link click
      mobileNav.querySelectorAll('a').forEach(a => a.addEventListener('click', closeNav));
      // Close on tap outside
      document.addEventListener('click', e => {
        if (mobileNav.classList.contains('open') &&
            !mobileNav.contains(e.target) &&
            !toggle.contains(e.target)) closeNav();
      });
    }

    // Logout buttons
    document.querySelectorAll('.logout-btn').forEach(btn =>
      btn.addEventListener('click', () => App.logout())
    );
  },

  _navScroll() {
    const nav = document.querySelector('.nav');
    if (!nav) return;
    const update = () => nav.classList.toggle('scrolled', window.scrollY > 20);
    window.addEventListener('scroll', update, { passive: true });
    update();
  },

  _markActivePage() {
    const path = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a, .mobile-nav-links a').forEach(a => {
      const href = a.getAttribute('href');
      if (href === path || (path === '' && href === 'index.html')) {
        a.classList.add('active');
      }
    });
  },

  _initLangSwitcher() {
    const btn = document.querySelector('.lang-btn');
    const dd  = document.querySelector('.lang-dropdown');
    if (!btn || !dd) return;

    btn.addEventListener('click', e => {
      e.stopPropagation();
      dd.classList.toggle('open');
    });

    dd.querySelectorAll('.lang-option').forEach(opt => {
      opt.addEventListener('click', () => {
        App.setLang(opt.dataset.lang);
        dd.classList.remove('open');
      });
    });

    document.addEventListener('click', () => dd.classList.remove('open'));
  },

  _initDropdowns() {
    document.querySelectorAll('[data-dropdown-trigger]').forEach(trigger => {
      const target = document.querySelector(trigger.dataset.dropdownTrigger);
      if (!target) return;
      trigger.addEventListener('click', e => {
        e.stopPropagation();
        target.classList.toggle('open');
      });
      document.addEventListener('click', () => target.classList.remove('open'));
    });
  },

  _initFAQ() {
    document.querySelectorAll('.faq-item').forEach(item => {
      const q = item.querySelector('.faq-question');
      const a = item.querySelector('.faq-answer');
      if (!q || !a) return;
      q.addEventListener('click', () => {
        const open = item.classList.contains('open');
        document.querySelectorAll('.faq-item').forEach(i => {
          i.classList.remove('open');
          const ans = i.querySelector('.faq-answer');
          if (ans) ans.style.maxHeight = '0';
        });
        if (!open) {
          item.classList.add('open');
          a.style.maxHeight = a.scrollHeight + 'px';
        }
      });
    });
  },

  /* ── Toast ── */
  toast(message, type = 'success') {
    let container = document.querySelector('.toast-container');
    if (!container) {
      container = document.createElement('div');
      container.className = 'toast-container';
      document.body.appendChild(container);
    }
    const icons = { success: '✅', error: '❌', info: 'ℹ️', warning: '⚠️' };
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `
      <span class="toast-icon">${icons[type] || '💬'}</span>
      <span class="toast-text">${message}</span>
      <span class="toast-close" onclick="this.parentElement.remove()">✕</span>
    `;
    container.appendChild(toast);
    setTimeout(() => toast.style.opacity = '0', 3200);
    setTimeout(() => toast.remove(), 3600);
  },

  /* ── Modal ── */
  openModal(id) {
    const m = document.getElementById(id);
    if (m) { m.classList.add('open'); document.body.style.overflow = 'hidden'; }
  },
  closeModal(id) {
    const m = document.getElementById(id);
    if (m) { m.classList.remove('open'); document.body.style.overflow = ''; }
  },

  /* ── Protect page ── */
  requireAuth(redirectTo = 'auth.html') {
    if (!this.user) {
      window.location.href = redirectTo + '?redirect=' + encodeURIComponent(window.location.href);
    }
  },

  requirePlan(plan, redirectTo = 'pricing.html') {
    if (!this.canAccess(plan)) {
      this.toast(this.t('locked_content'), 'warning');
      setTimeout(() => window.location.href = redirectTo, 1000);
      return false;
    }
    return true;
  },
};

/* ── DOM ready ── */
document.addEventListener('DOMContentLoaded', () => {
  App.init();

  // Close modals on overlay click
  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', e => {
      if (e.target === overlay) {
        overlay.classList.remove('open');
        document.body.style.overflow = '';
      }
    });
  });

  // Animate on scroll (simple observer)
  const animEls = document.querySelectorAll('.animate-on-scroll');
  if (animEls.length && 'IntersectionObserver' in window) {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('fade-up');
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.1 });
    animEls.forEach(el => obs.observe(el));
  }

  // Tabs
  document.querySelectorAll('.tab-list').forEach(tabList => {
    const btns   = tabList.querySelectorAll('.tab-btn');
    const panels = tabList.closest('[data-tabs]')?.querySelectorAll('.tab-panel') ||
                   tabList.parentElement?.querySelectorAll('.tab-panel');
    btns.forEach((btn, i) => {
      btn.addEventListener('click', () => {
        btns.forEach(b => b.classList.remove('active'));
        panels?.forEach(p => p.classList.remove('active'));
        btn.classList.add('active');
        panels?.[i]?.classList.add('active');
      });
    });
  });

  // Smooth number counter (supports data-prefix, data-suffix, data-counter)
  // Always shows final value immediately, then animates if in viewport
  document.querySelectorAll('[data-counter]').forEach(el => {
    const target   = parseInt(el.dataset.counter);
    const suffix   = el.dataset.suffix  || '';
    const prefix   = el.dataset.prefix  || '';
    const duration = 1600;
    let   started  = false;

    // Show the real value right away so it's never stuck at 0
    el.textContent = prefix + target.toLocaleString() + suffix;

    const run = () => {
      if (started) return;
      started = true;
      const t0 = performance.now();
      const tick = now => {
        const p   = Math.min((now - t0) / duration, 1);
        const ease = 1 - Math.pow(1 - p, 3);
        el.textContent = prefix + Math.round(ease * target).toLocaleString() + suffix;
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };

    // Try IntersectionObserver for the animation
    if ('IntersectionObserver' in window) {
      const obs = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) { run(); obs.disconnect(); }
      }, { threshold: 0, rootMargin: '0px 0px -10% 0px' });
      obs.observe(el);
    } else {
      run(); // Fallback: animate immediately
    }
  });
});

/* ── Expose globally ── */
window.App = App;

/* ══════════════════════════════════════════════════
   PAGE TRANSITIONS
   Intercepts internal link clicks, plays exit anim,
   then navigates — giving a smooth fade between pages.
══════════════════════════════════════════════════ */
(function() {
  // Button ripple effect
  document.addEventListener('click', function(e) {
    const btn = e.target.closest('.btn');
    if (!btn) return;
    const r = document.createElement('span');
    r.className = 'btn-ripple';
    const rect = btn.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    r.style.cssText = `width:${size}px;height:${size}px;left:${e.clientX - rect.left - size/2}px;top:${e.clientY - rect.top - size/2}px`;
    btn.appendChild(r);
    r.addEventListener('animationend', () => r.remove());
  });

  // Page-exit transition for internal links
  document.addEventListener('click', function(e) {
    const link = e.target.closest('a[href]');
    if (!link) return;
    const href = link.getAttribute('href');
    // Only handle local .html links (not #anchors, not external)
    if (!href || href.startsWith('#') || href.startsWith('http') || href.startsWith('mailto') || href.startsWith('tel')) return;
    if (link.target === '_blank') return;
    e.preventDefault();
    document.body.classList.add('page-leaving');
    setTimeout(() => { window.location.href = href; }, 280);
  });
})();
