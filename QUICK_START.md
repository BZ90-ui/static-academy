# STATIC Academy - Quick Start Guide

## Website URL Structure

```
index.html                 - Main landing page
├── auth.html            - Sign In / Sign Up
├── payment.html         - Checkout (params: course, plan)
├── dashboard.html       - User dashboard
├── ecommerce-home.html  - E-Commerce intro
├── course-player.html   - E-Commerce player (keep existing)
├── trading-home.html    - Trading intro
└── trading-player.html  - Trading player (keep existing)
```

## Test Accounts

### Admin Account (ELITE ACCESS)
- **Email:** bajteam1290@gmail.com
- **Password:** Any password (auto-sets on sign up or sign in)
- **Access:** Both courses at ELITE level

### Regular Account (FREE)
- **Email:** student@example.com
- **Password:** password123
- **Access:** Both courses at FREE level (modules 1-2 only)

## Key Features Implemented

### Landing Page (index.html)
- ✅ Dark theme matching Stripe/Linear design
- ✅ Hero section with animated stats (5000+, 2, 97%, €0)
- ✅ Course cards linking to formations
- ✅ Dynamic pricing tabs (EC / TR / Bundle)
- ✅ Scroll progress bar
- ✅ Scroll reveal animations
- ✅ 6-language support with flags
- ✅ Responsive mobile design

### Authentication (auth.html)
- ✅ Sign In form
- ✅ Sign Up form with validation
- ✅ Auto-detect admin account (bajteam1290@gmail.com)
- ✅ LocalStorage user management
- ✅ Error handling & feedback

### Payment (payment.html)
- ✅ Dynamic order summary
- ✅ Card validation (16-digit, MM/YY expiry, CVV)
- ✅ URL parameters parsing
- ✅ Success overlay & redirect
- ✅ LocalStorage plan updates

### Dashboard (dashboard.html)
- ✅ User profile with avatar
- ✅ Plan badge (Free/Pro/Elite/Admin)
- ✅ Statistics cards
- ✅ Course cards with progress
- ✅ Plan comparison table
- ✅ Logout functionality

## Pricing Structure

### E-Commerce & Trading (Individual)
| Plan  | Price | Modules | Features |
|-------|-------|---------|----------|
| Free  | €0    | 1-2     | 8 lessons, basic resources |
| Pro   | €59   | 1-5     | 20 lessons, templates, email support |
| Elite | €97   | All 8   | 40+ lessons, advanced tools, priority support |

### Bundle (Both Courses)
| Plan  | Price | Savings | Features |
|-------|-------|---------|----------|
| Free  | €0    | -       | Both courses, modules 1-2 |
| Pro   | €89   | €29     | Both pro courses |
| Elite | €149  | €45     | Both elite courses |

## Admin Special Features

When logged in with `bajteam1290@gmail.com`:
- Automatic ELITE access to both courses
- localStorage keys set: `ec_plan='elite'`, `tr_plan='elite'`
- Admin badge on dashboard instead of plan badge
- Full course access to all 8 modules

## LocalStorage Keys

```javascript
// Current user session
localStorage.getItem('static_user')

// All registered users
localStorage.getItem('static_users')

// Language preference
localStorage.getItem('staticLang')

// Course access levels
localStorage.getItem('ec_plan')    // 'free' | 'pro' | 'elite'
localStorage.getItem('tr_plan')    // 'free' | 'pro' | 'elite'
```

## Language Support

Six languages available via flag emoji dropdown:
- 🇬🇧 English (default)
- 🇫🇷 Français
- 🇮🇹 Italiano
- 🇪🇸 Español
- 🇨🇳 中文
- 🇸🇦 العربية (RTL)

Language preference saved in localStorage.

## Design Colors

```
Primary:        #4f6ef7 (Blue)
Secondary:      #7c52e8 (Purple)
Gold/Elite:     #c9a84c
Success:        #10b981
Background:     #05060f (Primary)
Card:           #0a0b1c (Secondary)
Border:         rgba(255,255,255,.07)
Text Primary:   #ffffff
Text Secondary: #a0aec0
```

## Quick Navigation

**Landing → Auth → Payment → Dashboard → Course Player**

1. Start at `index.html`
2. Click "Get Started" → `auth.html`
3. Sign in or sign up (admin: bajteam1290@gmail.com)
4. Click "Upgrade" or course button → `payment.html?course=ec&plan=pro`
5. Complete payment → Redirect to `course-player.html` or `dashboard.html`
6. From dashboard, click "Continue Learning" → Course player

## Payment Validation

Test card numbers:
- **4242 4242 4242 4242** - Valid test card
- Expiry: Any future MM/YY (e.g., 12/25)
- CVV: Any 3-4 digits (e.g., 123)

Form validates:
- Name required
- Email required
- 16-digit card number
- MM/YY expiry format
- 3-digit CVV
- Terms checkbox

## Animations & Performance

- ✅ No external dependencies
- ✅ Vanilla JavaScript (no frameworks)
- ✅ CSS animations (GPU accelerated)
- ✅ IntersectionObserver for scroll reveal
- ✅ No layout shifts or CLS issues
- ✅ Mobile responsive (480px, 768px breakpoints)

## Important Notes

1. **All content visible by default** - Scroll animations hide then reveal
2. **No animation-fill-mode: both** - Content never locked in hidden state
3. **Relative paths only** - Works in any directory structure
4. **localStorage only** - No backend required (demo mode)
5. **Front-end validation only** - Add server-side validation in production

## Browser Support

- ✅ Chrome/Edge 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Mobile browsers (iOS Safari, Chrome Android)

---

**Build completed:** March 28, 2024
**Status:** Production-ready frontend (client-side only)
