/* ============================================================
   STATIC Academy — AI E-Commerce Assistant
   Fully self-contained: injects its own HTML + CSS
   ============================================================ */
(function () {
  'use strict';

  /* ── Inject styles ── */
  const style = document.createElement('style');
  style.textContent = `
    #sa-ai-btn {
      position: fixed;
      bottom: 28px;
      right: 28px;
      width: 58px;
      height: 58px;
      border-radius: 50%;
      background: linear-gradient(135deg, #6c63ff, #8b5cf6);
      border: none;
      cursor: pointer;
      box-shadow: 0 6px 32px rgba(108,99,255,0.5);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 9000;
      transition: all 0.25s cubic-bezier(0.4,0,0.2,1);
    }
    #sa-ai-btn:hover { transform: scale(1.08); box-shadow: 0 8px 40px rgba(108,99,255,0.65); }
    #sa-ai-btn.open { transform: scale(0.9); }
    #sa-ai-btn svg { width: 26px; height: 26px; color: white; transition: all 0.25s; }
    #sa-ai-btn .close-icon { display: none; }
    #sa-ai-btn.open .chat-icon { display: none; }
    #sa-ai-btn.open .close-icon { display: block; }
    #sa-ai-notif {
      position: absolute;
      top: -6px; right: -6px;
      width: 22px; height: 22px;
      background: #f5a623;
      border-radius: 50%;
      font-size: 11px;
      font-weight: 800;
      color: white;
      display: flex; align-items: center; justify-content: center;
      border: 2px solid #07070f;
      animation: sa-pulse 2s ease-in-out infinite;
    }
    @keyframes sa-pulse {
      0%,100%{transform:scale(1);opacity:1}
      50%{transform:scale(1.2);opacity:0.8}
    }
    #sa-chat-panel {
      position: fixed;
      bottom: 98px;
      right: 28px;
      width: 400px;
      height: 600px;
      max-height: calc(100vh - 120px);
      background: #0d0d1a;
      border: 1px solid rgba(255,255,255,0.1);
      border-radius: 20px;
      box-shadow: 0 24px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(108,99,255,0.15);
      z-index: 8999;
      display: flex;
      flex-direction: column;
      overflow: hidden;
      transform: scale(0.9) translateY(20px);
      opacity: 0;
      pointer-events: none;
      transition: all 0.3s cubic-bezier(0.4,0,0.2,1);
      transform-origin: bottom right;
    }
    #sa-chat-panel.open {
      transform: scale(1) translateY(0);
      opacity: 1;
      pointer-events: all;
    }
    .sa-chat-header {
      padding: 16px 20px;
      background: linear-gradient(135deg, rgba(108,99,255,0.2), rgba(139,92,246,0.1));
      border-bottom: 1px solid rgba(255,255,255,0.07);
      display: flex;
      align-items: center;
      gap: 12px;
    }
    .sa-ai-avatar {
      width: 42px; height: 42px;
      border-radius: 50%;
      background: linear-gradient(135deg, #6c63ff, #8b5cf6);
      display: flex; align-items: center; justify-content: center;
      font-size: 20px;
      flex-shrink: 0;
      position: relative;
    }
    .sa-ai-avatar::after {
      content: '';
      position: absolute;
      bottom: 1px; right: 1px;
      width: 10px; height: 10px;
      background: #22c55e;
      border-radius: 50%;
      border: 2px solid #0d0d1a;
    }
    .sa-ai-info { flex: 1; }
    .sa-ai-name { font-size: 14px; font-weight: 700; color: #f1f0ff; }
    .sa-ai-status { font-size: 12px; color: #22c55e; display: flex; align-items: center; gap: 4px; }
    .sa-chat-actions { display: flex; gap: 6px; }
    .sa-chat-action-btn {
      width: 30px; height: 30px;
      border-radius: 8px;
      background: rgba(255,255,255,0.06);
      border: 1px solid rgba(255,255,255,0.08);
      cursor: pointer;
      display: flex; align-items: center; justify-content: center;
      font-size: 14px;
      color: rgba(255,255,255,0.5);
      transition: all 0.2s;
    }
    .sa-chat-action-btn:hover { background: rgba(255,255,255,0.12); color: white; }
    .sa-messages {
      flex: 1;
      overflow-y: auto;
      padding: 16px;
      display: flex;
      flex-direction: column;
      gap: 12px;
      scroll-behavior: smooth;
    }
    .sa-messages::-webkit-scrollbar { width: 4px; }
    .sa-messages::-webkit-scrollbar-track { background: transparent; }
    .sa-messages::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 2px; }
    .sa-msg {
      display: flex;
      gap: 10px;
      animation: sa-msg-in 0.3s ease;
    }
    @keyframes sa-msg-in {
      from { opacity: 0; transform: translateY(8px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    .sa-msg.user { flex-direction: row-reverse; }
    .sa-msg-avatar {
      width: 30px; height: 30px;
      border-radius: 50%;
      flex-shrink: 0;
      display: flex; align-items: center; justify-content: center;
      font-size: 14px;
      font-weight: 700;
    }
    .sa-msg-avatar.ai {
      background: linear-gradient(135deg, #6c63ff, #8b5cf6);
      font-size: 16px;
    }
    .sa-msg-avatar.user {
      background: linear-gradient(135deg, #f5a623, #e8900d);
      color: white;
      font-size: 13px;
    }
    .sa-bubble {
      max-width: 82%;
      padding: 12px 16px;
      border-radius: 14px;
      font-size: 13.5px;
      line-height: 1.6;
      color: #e2e8f0;
    }
    .sa-msg.ai .sa-bubble {
      background: rgba(255,255,255,0.06);
      border: 1px solid rgba(255,255,255,0.08);
      border-radius: 4px 14px 14px 14px;
    }
    .sa-msg.user .sa-bubble {
      background: linear-gradient(135deg, #6c63ff, #8b5cf6);
      border-radius: 14px 4px 14px 14px;
      color: white;
    }
    .sa-bubble strong { color: #a78bfa; font-weight: 700; }
    .sa-bubble em { color: #f5a623; font-style: normal; font-weight: 600; }
    .sa-bubble .sa-course-chip {
      display: inline-flex;
      align-items: center;
      gap: 5px;
      background: rgba(108,99,255,0.2);
      border: 1px solid rgba(108,99,255,0.3);
      border-radius: 20px;
      padding: 2px 10px;
      font-size: 12px;
      color: #a78bfa;
      margin: 3px 2px;
      cursor: pointer;
      transition: all 0.2s;
      text-decoration: none;
    }
    .sa-bubble .sa-course-chip:hover { background: rgba(108,99,255,0.35); }
    .sa-bubble ul { padding-left: 16px; margin: 8px 0; }
    .sa-bubble ul li { margin: 4px 0; color: #c5c3e0; }
    .sa-bubble ul li::marker { color: #6c63ff; }
    .sa-bubble .sa-tip {
      background: rgba(245,166,35,0.1);
      border: 1px solid rgba(245,166,35,0.25);
      border-radius: 8px;
      padding: 8px 12px;
      margin-top: 8px;
      font-size: 12.5px;
      color: #f5a623;
    }
    .sa-typing {
      display: flex;
      gap: 4px;
      align-items: center;
      padding: 14px 16px;
    }
    .sa-typing span {
      width: 6px; height: 6px;
      border-radius: 50%;
      background: rgba(255,255,255,0.3);
      animation: sa-dot 1.2s ease-in-out infinite;
    }
    .sa-typing span:nth-child(2) { animation-delay: 0.2s; }
    .sa-typing span:nth-child(3) { animation-delay: 0.4s; }
    @keyframes sa-dot {
      0%,60%,100% { transform: translateY(0); background: rgba(255,255,255,0.3); }
      30% { transform: translateY(-6px); background: #6c63ff; }
    }
    .sa-quick-btns {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
      padding: 0 16px 8px;
    }
    .sa-quick-btn {
      padding: 6px 12px;
      border-radius: 20px;
      background: rgba(108,99,255,0.12);
      border: 1px solid rgba(108,99,255,0.25);
      color: #a78bfa;
      font-size: 12px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s;
      white-space: nowrap;
    }
    .sa-quick-btn:hover { background: rgba(108,99,255,0.25); border-color: rgba(108,99,255,0.5); }
    .sa-chat-footer {
      padding: 12px 16px;
      border-top: 1px solid rgba(255,255,255,0.07);
      background: rgba(255,255,255,0.02);
    }
    .sa-input-wrap {
      display: flex;
      gap: 8px;
      align-items: flex-end;
    }
    #sa-input {
      flex: 1;
      background: rgba(255,255,255,0.06);
      border: 1px solid rgba(255,255,255,0.1);
      border-radius: 12px;
      padding: 10px 14px;
      color: #f1f0ff;
      font-size: 13.5px;
      font-family: 'Inter', sans-serif;
      resize: none;
      outline: none;
      line-height: 1.5;
      max-height: 100px;
      min-height: 40px;
      transition: border-color 0.2s;
    }
    #sa-input:focus { border-color: rgba(108,99,255,0.5); }
    #sa-input::placeholder { color: rgba(255,255,255,0.3); }
    #sa-send-btn {
      width: 40px; height: 40px;
      border-radius: 12px;
      background: linear-gradient(135deg, #6c63ff, #8b5cf6);
      border: none;
      cursor: pointer;
      display: flex; align-items: center; justify-content: center;
      flex-shrink: 0;
      transition: all 0.2s;
      box-shadow: 0 4px 12px rgba(108,99,255,0.4);
    }
    #sa-send-btn:hover { transform: scale(1.05); box-shadow: 0 4px 20px rgba(108,99,255,0.6); }
    #sa-send-btn:disabled { opacity: 0.4; cursor: not-allowed; transform: none; }
    #sa-send-btn svg { width: 18px; height: 18px; color: white; }
    .sa-footer-hint {
      text-align: center;
      font-size: 11px;
      color: rgba(255,255,255,0.2);
      margin-top: 8px;
    }
    .sa-welcome-card {
      background: linear-gradient(135deg, rgba(108,99,255,0.15), rgba(139,92,246,0.08));
      border: 1px solid rgba(108,99,255,0.2);
      border-radius: 12px;
      padding: 14px 16px;
      margin-bottom: 4px;
    }
    .sa-welcome-title { font-size: 14px; font-weight: 800; color: #f1f0ff; margin-bottom: 4px; }
    .sa-welcome-sub { font-size: 12.5px; color: #8a88a8; line-height: 1.5; }
    .sa-divider {
      text-align: center;
      font-size: 11px;
      color: rgba(255,255,255,0.2);
      position: relative;
      margin: 4px 0;
    }
    .sa-divider::before, .sa-divider::after {
      content: '';
      position: absolute;
      top: 50%;
      width: 35%;
      height: 1px;
      background: rgba(255,255,255,0.07);
    }
    .sa-divider::before { left: 0; }
    .sa-divider::after { right: 0; }
    @media (max-width: 480px) {
      #sa-chat-panel { width: calc(100vw - 20px); right: 10px; bottom: 80px; }
      #sa-ai-btn { bottom: 16px; right: 16px; }
    }
  `;
  document.head.appendChild(style);

  /* ── Knowledge Base ── */
  const KB = [
    {
      patterns: ['hello', 'hi', 'hey', 'bonjour', 'hola', 'good morning', 'good evening', 'start', 'begin', 'what can you do', 'help me', 'who are you'],
      response: `**Hey there! 👋** I'm **Aria**, your personal AI e-commerce advisor powered by STATIC Academy.\n\nI can help you with:\n<ul><li>Choosing the right business model</li><li>Platform comparisons (Shopify, WooCommerce, etc.)</li><li>Marketing strategies (ads, SEO, email)</li><li>Product research and validation</li><li>Pricing, shipping, and operations</li><li>Recommending the right courses for you</li></ul>\n\nWhat's your biggest e-commerce challenge right now?`,
      courses: []
    },
    {
      patterns: ['shopify', 'woocommerce', 'platform', 'which platform', 'best platform', 'bigcommerce', 'squarespace', 'wix', 'magento'],
      response: `**Choosing an E-Commerce Platform 🏪**\n\nHere's my honest breakdown:\n\n**Shopify** — Best for beginners & scaling\n<ul><li>✅ Easiest to use, beautiful templates</li><li>✅ Best app ecosystem (8,000+ apps)</li><li>💰 $39–$399/month + transaction fees</li></ul>\n\n**WooCommerce** — Best for WordPress users\n<ul><li>✅ Free plugin, full control</li><li>✅ No transaction fees</li><li>⚠️ Requires more technical setup</li></ul>\n\n**BigCommerce** — Best for high volume B2B\n<ul><li>✅ No transaction fees, strong SEO</li><li>✅ Built-in features</li></ul>\n\n<div class="sa-tip">💡 For 90% of beginners, I recommend starting with **Shopify**. You can always migrate later.</div>`,
      courses: ['course-player.html?module=3']
    },
    {
      patterns: ['dropshipping', 'drop shipping', 'aliexpress', 'dropship', 'how to dropship'],
      response: `**Dropshipping in 2025 🚀**\n\nDropshipping is still profitable but the game has changed.\n\n**How it works:**\n<ul><li>You list products without holding inventory</li><li>Customer orders → you order from supplier → they ship direct</li><li>You keep the margin (typically 20–40%)</li></ul>\n\n**What's working in 2025:**\n<ul><li>🔥 Branded dropshipping (not generic)</li><li>🔥 Niche-specific stores (not general stores)</li><li>🔥 TikTok + UGC content to drive traffic</li><li>🔥 US/EU suppliers for fast shipping</li></ul>\n\n<div class="sa-tip">⚠️ Avoid Chinese suppliers with 3–5 week shipping. Customers expect 3–7 days max in 2025.</div>\n\nWant to learn our full dropshipping system?`,
      courses: ['course-player.html?module=4', 'courses.html']
    },
    {
      patterns: ['product research', 'winning product', 'find product', 'what to sell', 'product ideas', 'product validation', 'niche'],
      response: `**Finding Winning Products 🔍**\n\nHere's my proven 5-step validation system:\n\n**1. Identify demand signals**\n<ul><li>TikTok — search product + #TikTokMadeMeBuyIt</li><li>Amazon BSR — look for products ranked 1,000–50,000</li><li>Google Trends — growing, not declining</li></ul>\n\n**2. Check competition**\n<ul><li>3–10 competitors = healthy market</li><li>0 competitors = no demand</li><li>1,000 competitors = too saturated</li></ul>\n\n**3. Validate margins**\n<ul><li>Target: 3–5× markup minimum</li><li>Factor in ads (typically 20–30% of revenue)</li></ul>\n\n**4. Test before scaling**\n<ul><li>Run $30–50 in Facebook/TikTok ads</li><li>If ROAS > 1.5, keep testing</li></ul>\n\n<div class="sa-tip">💡 Best free tools: EverBee (Etsy), Helium10 (Amazon), Minea (dropshipping)</div>`,
      courses: ['course-player.html?module=2', 'course-player.html?module=4']
    },
    {
      patterns: ['facebook ads', 'meta ads', 'facebook advertising', 'instagram ads', 'meta advertising', 'fb ads'],
      response: `**Meta (Facebook/Instagram) Ads in 2025 🎯**\n\n**Account structure that works:**\n<ul><li>1 Campaign (CBO — Campaign Budget Optimization)</li><li>3–5 Ad Sets (different audiences)</li><li>3–5 Creatives per ad set</li></ul>\n\n**What's crushing it in 2025:**\n<ul><li>🔥 Advantage+ Shopping Campaigns</li><li>🔥 UGC-style videos (lo-fi > polished)</li><li>🔥 Strong hooks in first 3 seconds</li><li>🔥 Carousel ads for product discovery</li></ul>\n\n**Budget guide:**\n<ul><li>Testing: $10–30/day per ad set</li><li>Scaling: 20% budget increase every 3 days</li><li>Target ROAS: 2.5× minimum (3.5×+ to scale)</li></ul>\n\n<div class="sa-tip">💡 iOS14 killed reported ROAS accuracy. Use Triple Whale or Northbeam for true attribution.</div>`,
      courses: ['course-player.html?module=7']
    },
    {
      patterns: ['google ads', 'google shopping', 'pmax', 'performance max', 'google advertising'],
      response: `**Google Shopping Ads Strategy 🛍️**\n\nGoogle Shopping targets buyers with high purchase intent — they're already searching for your product.\n\n**Best campaign types in 2025:**\n<ul><li>**Performance Max** — Let Google's AI optimize across all channels</li><li>**Standard Shopping** — More control, great for testing</li></ul>\n\n**Product feed optimization (most important):**\n<ul><li>Title: [Brand] + [Product] + [Key Attribute]</li><li>Use all 3 image slots</li><li>Keep price competitive (check first page)</li><li>Gather 10+ reviews quickly</li></ul>\n\n**Target metrics:**\n<ul><li>ROAS: 4–8× is excellent</li><li>CTR: 1.5%+ is healthy</li></ul>\n\n<div class="sa-tip">💡 Google Shopping buyers convert 3–5× better than cold Facebook traffic. Lower volume but higher intent.</div>`,
      courses: ['course-player.html?module=7']
    },
    {
      patterns: ['tiktok', 'tiktok ads', 'tiktok shop', 'tiktok marketing', 'tik tok'],
      response: `**TikTok for E-Commerce 📱🔥**\n\nTikTok is the #1 opportunity for e-commerce brands in 2025.\n\n**3 ways to win on TikTok:**\n\n**1. Organic content** (free)\n<ul><li>Post 3–5× per day (yes, really)</li><li>Hook in first 0.5 seconds</li><li>Show product transformation/results</li></ul>\n\n**2. TikTok Ads**\n<ul><li>CPMs 3–5× cheaper than Meta</li><li>SPARK Ads (boost organic content)</li><li>Video Shopping Ads for direct checkout</li></ul>\n\n**3. TikTok Shop**\n<ul><li>0% commission for first 90 days</li><li>Affiliate program for creator partnerships</li><li>Live shopping = massive conversion rates</li></ul>\n\n<div class="sa-tip">💡 TikTok's algorithm favors content quality over follower count. A new account can go viral.</div>`,
      courses: ['course-player.html?module=9', 'course-player.html?module=7']
    },
    {
      patterns: ['seo', 'search engine', 'organic traffic', 'google ranking', 'keyword', 'organic search'],
      response: `**E-Commerce SEO Strategy 🔍**\n\nSEO is the highest-ROI long-term strategy. Here's where to focus:\n\n**Priority 1: Technical SEO**\n<ul><li>Page speed < 2.5 seconds (use GTmetrix)</li><li>Mobile-first design</li><li>Proper URL structure: /products/[category]/[name]</li><li>HTTPS + sitemap submitted to Google</li></ul>\n\n**Priority 2: Product pages**\n<ul><li>Target 1 primary keyword per page</li><li>Natural keyword use in title, description, H1</li><li>Unique descriptions (never copy supplier content)</li><li>Schema markup for rich snippets (price, rating)</li></ul>\n\n**Priority 3: Blog content**\n<ul><li>Target buyer-intent keywords</li><li>Example: "best running shoes for flat feet under $100"</li><li>Internal link to product pages</li></ul>\n\n<div class="sa-tip">💡 It takes 6–12 months for SEO to compound. Start today, benefit tomorrow.</div>`,
      courses: ['course-player.html?module=6']
    },
    {
      patterns: ['email marketing', 'klaviyo', 'email sequence', 'newsletter', 'email list', 'email automation', 'abandon cart', 'cart abandonment'],
      response: `**Email Marketing — Your Most Profitable Channel 📧**\n\nEmail generates $42 for every $1 spent (4200% ROI).\n\n**5 flows every store needs:**\n\n**1. Welcome Series** (3–5 emails)\n<ul><li>Email 1: Welcome + brand story (sent immediately)</li><li>Email 2: Best sellers + social proof (day 2)</li><li>Email 3: First purchase discount (day 4)</li></ul>\n\n**2. Abandoned Cart** (recover 15–20% of lost revenue)\n<ul><li>Email 1: Gentle reminder (1 hour later)</li><li>Email 2: Social proof + urgency (24 hours)</li><li>Email 3: Discount (48 hours)</li></ul>\n\n**3. Post-Purchase** (build loyalty)\n**4. Win-Back** (re-engage dormant customers)\n**5. Browse Abandonment** (capture window shoppers)\n\n<div class="sa-tip">💡 Klaviyo is the gold standard for e-commerce email. Start free up to 500 contacts.</div>`,
      courses: ['course-player.html?module=8']
    },
    {
      patterns: ['amazon', 'fba', 'amazon fba', 'amazon seller', 'amazon listing', 'amazon ppc', 'fulfillment by amazon'],
      response: `**Amazon FBA Strategy 📦**\n\nAmazon FBA lets you leverage Amazon's 300M+ customer base.\n\n**How it works:**\n<ul><li>You send inventory to Amazon's warehouses</li><li>Amazon stores, packs, and ships for you</li><li>You focus on marketing and growth</li></ul>\n\n**Key success factors:**\n<ul><li>🔑 Product research: BSR 1,000–50,000 range</li><li>🔑 Minimum 35% margin after all fees</li><li>🔑 Keyword-optimized listing</li><li>🔑 10+ reviews in first 30 days</li><li>🔑 PPC ads to launch (Amazon Sponsored Products)</li></ul>\n\n**Realistic numbers:**\n<ul><li>Startup budget: $3,000–$10,000</li><li>Time to first sale: 2–3 months</li><li>Time to profitability: 4–8 months</li></ul>\n\n<div class="sa-tip">💡 Join the Amazon Brand Registry ASAP to protect your listings and unlock A+ Content.</div>`,
      courses: ['courses.html']
    },
    {
      patterns: ['pricing', 'price', 'how to price', 'pricing strategy', 'markup', 'margin'],
      response: `**E-Commerce Pricing Strategy 💰**\n\n**The 4 pricing formulas:**\n\n**1. Cost-based (minimum)**\n<ul><li>COGS + shipping + fees + desired margin</li><li>Example: $8 product × 3.5 = $28 retail</li></ul>\n\n**2. Competitor-based**\n<ul><li>Price within 10–15% of top competitors</li><li>Justify price difference with better brand/quality</li></ul>\n\n**3. Psychological pricing**\n<ul><li>$29 not $30, $97 not $100</li><li>End with 7 or 9 (proven to convert better)</li></ul>\n\n**4. Value-based (most profitable)**\n<ul><li>Price based on the *outcome* you deliver</li><li>A beauty product isn't $30 — it's "confidence"</li></ul>\n\n**Target margins by model:**\n<ul><li>Dropshipping: 25–40% net margin</li><li>Private label: 40–65% gross margin</li><li>Amazon FBA: 30–50% after fees</li></ul>\n\n<div class="sa-tip">💡 Most new sellers underprice. Higher prices = perceived higher quality.</div>`,
      courses: ['course-player.html?module=1']
    },
    {
      patterns: ['conversion rate', 'cro', 'convert', 'improve conversion', 'low conversion', 'why not selling'],
      response: `**Conversion Rate Optimization (CRO) 📈**\n\nAverage e-commerce conversion rate: 1–3%. Top stores: 4–8%.\n\n**Top CRO wins (quick impact):**\n\n**1. Trust signals**\n<ul><li>Add 30-day return policy prominently</li><li>Show real reviews (100+)</li><li>Display security badges at checkout</li></ul>\n\n**2. Product page**\n<ul><li>5+ high-quality images + 1 video</li><li>Bullet-point benefits (not features)</li><li>Real-time stock counter ("Only 3 left!")</li></ul>\n\n**3. Checkout optimization**\n<ul><li>Offer guest checkout (reduces abandonment by 35%)</li><li>Progress bar in checkout</li><li>Multiple payment options (PayPal, Apple Pay)</li></ul>\n\n**4. Speed**\n<ul><li>Each 1-second delay = -20% conversion</li><li>Target < 2.5s load time</li></ul>\n\n<div class="sa-tip">💡 Run heatmaps (Hotjar — free) to see exactly where users drop off on your pages.</div>`,
      courses: ['course-player.html?module=5', 'course-player.html?module=10']
    },
    {
      patterns: ['instagram', 'instagram marketing', 'reels', 'stories', 'instagram shop'],
      response: `**Instagram for E-Commerce 📸**\n\n**What's working in 2025:**\n\n**Reels (highest reach):**\n<ul><li>First 2 seconds = make or break</li><li>POV and transformation formats perform best</li><li>Use trending audio in first 24 hours</li><li>Post 7–10 Reels/week for growth</li></ul>\n\n**Instagram Shopping:**\n<ul><li>Tag products in posts and stories</li><li>Set up your shop for in-app checkout</li><li>Run Shopping ads alongside organic</li></ul>\n\n**Stories (daily engagement):**\n<ul><li>Behind-the-scenes content</li><li>Polls, questions to boost engagement</li><li>Story ads have 30% lower CPC than feed</li></ul>\n\n**Influencer strategy:**\n<ul><li>Micro-influencers (10K–100K) = better ROI</li><li>Always negotiate performance-based deals</li></ul>`,
      courses: ['course-player.html?module=9']
    },
    {
      patterns: ['shipping', 'fulfillment', 'ship', 'delivery', 'warehouse', 'logistics', '3pl'],
      response: `**E-Commerce Shipping & Fulfillment 📦**\n\n**Your 3 options:**\n\n**1. Self-fulfillment** (starting out)\n<ul><li>Cheapest initially, most time-consuming</li><li>Good up to 50 orders/day</li></ul>\n\n**2. 3PL (Third-Party Logistics)**\n<ul><li>They store, pick, pack, ship for you</li><li>Providers: ShipBob, Deliverr, ShipHero</li><li>Cost: $4–$10 per order</li><li>Switch at ~50+ orders/day</li></ul>\n\n**3. Amazon FBA / TikTok Shop Fulfillment**\n<ul><li>Platform handles everything</li><li>Higher fees but massive reach</li></ul>\n\n**Shipping speed benchmarks (2025):**\n<ul><li>Standard: 3–5 days (minimum expectation)</li><li>2-day: strongly preferred</li><li>Same-day: premium positioning</li></ul>\n\n<div class="sa-tip">💡 Free shipping converts 30% better than paid shipping. Factor it into your product price.</div>`,
      courses: ['course-player.html?module=4']
    },
    {
      patterns: ['influencer', 'ugc', 'creator', 'user generated content', 'ugc creator', 'work with influencers'],
      response: `**Influencer & UGC Marketing 🎬**\n\n**UGC (User-Generated Content) is the #1 ad format in 2025.**\n\n**Why UGC works:**\n<ul><li>Looks organic, not like an ad</li><li>3× higher CTR vs. polished ads</li><li>60% lower CPM on TikTok and Meta</li></ul>\n\n**How to get UGC:**\n<ul><li>Hire UGC creators on Billo, UGC Club, or Fiverr</li><li>Cost: $75–$250 per video</li><li>Brief them with your hook, pain point, CTA</li></ul>\n\n**Influencer tiers:**\n<ul><li>Nano (1K–10K): Free product or $50–150</li><li>Micro (10K–100K): $150–$1,500</li><li>Macro (100K–1M): $1,500–$15,000</li></ul>\n\n**Best for e-commerce:**\n<ul><li>Micro-influencers = best ROI</li><li>Niche relevance > follower count</li></ul>\n\n<div class="sa-tip">💡 Always ask for usage rights to repurpose content as paid ads — it's where the real value is.</div>`,
      courses: ['course-player.html?module=9']
    },
    {
      patterns: ['print on demand', 'pod', 'printful', 'printify', 'merch', 'custom products'],
      response: `**Print on Demand (POD) Business 👕**\n\nPOD is one of the lowest-risk e-commerce models.\n\n**How it works:**\n<ul><li>Design + list products on your store</li><li>Customer orders → POD supplier prints & ships</li><li>Zero inventory risk</li></ul>\n\n**Best POD platforms:**\n<ul><li>**Printful** — Best quality, integrates with Shopify/Etsy</li><li>**Printify** — Cheapest prices, huge product catalog</li><li>**Gelato** — Best for international shipping</li></ul>\n\n**What actually sells:**\n<ul><li>Niche-specific designs (dog breeds, professions, hobbies)</li><li>Trending phrases + simple graphics</li><li>Gifts with emotional meaning</li></ul>\n\n**Expected margins:**\n<ul><li>T-shirts: $8–12 profit per unit</li><li>Mugs: $6–10 profit per unit</li><li>Sweatshirts: $15–25 profit per unit</li></ul>\n\n<div class="sa-tip">💡 Etsy is the #1 platform for POD. 500M+ monthly visitors and organic discovery is free.</div>`,
      courses: ['courses.html']
    },
    {
      patterns: ['etsy', 'etsy shop', 'etsy seller', 'handmade', 'etsy marketing'],
      response: `**Selling on Etsy 🏷️**\n\nEtsy has 90M active buyers looking for unique, handmade, and vintage products.\n\n**What sells well on Etsy:**\n<ul><li>Print on demand (mugs, shirts, wall art)</li><li>Digital products (printables, templates, SVGs)</li><li>Handmade jewelry, candles, soaps</li><li>Personalized/custom items (premium pricing)</li></ul>\n\n**Etsy SEO formula:**\n<ul><li>Research keywords in Etsy's search bar</li><li>Use all 13 tags with long-tail keywords</li><li>Title: Main keyword first, naturally written</li><li>Get 5-star reviews as fast as possible</li></ul>\n\n**Etsy Ads strategy:**\n<ul><li>Start at $1–3/day per listing</li><li>Advertise your top 20% (Pareto principle)</li><li>Target 25%+ revenue from ads for healthy spend</li></ul>\n\n<div class="sa-tip">💡 Digital products on Etsy are passive income gold. Create once, sell forever with zero fulfillment.</div>`,
      courses: ['courses.html']
    },
    {
      patterns: ['digital product', 'digital download', 'ebook', 'template', 'course', 'information product', 'info product'],
      response: `**Digital Products — The Highest Margin Business 💻**\n\nDigital products have 80–95% margins and zero fulfillment cost.\n\n**Best digital products to sell:**\n<ul><li>📊 Templates (Canva, Notion, Excel)</li><li>📘 E-books and guides</li><li>🎓 Online courses</li><li>🖼️ Digital art, SVG files, fonts</li><li>📅 Planners, calendars, worksheets</li><li>📸 Stock photos, video clips</li><li>🤖 Prompts, spreadsheets, scripts</li></ul>\n\n**Best platforms to sell:**\n<ul><li>Etsy — Discovery engine (best for beginners)</li><li>Gumroad — Simple, fast, free to start</li><li>Payhip — No transaction fees on free plan</li><li>Your own Shopify — Full control, higher margin</li></ul>\n\n<div class="sa-tip">💡 A single good Canva template can sell 10,000+ times. Create once, earn forever.</div>`,
      courses: ['courses.html']
    },
    {
      patterns: ['money', 'how much money', 'how much can i make', 'income', 'revenue', 'profit', 'realistic income'],
      response: `**Realistic E-Commerce Income Expectations 💰**\n\nHonesty first — most "gurus" lie about this. Here's reality:\n\n**Month 1–3: Testing phase**\n<ul><li>Revenue: $0–$2,000</li><li>Focus: Build store, learn the basics, test products</li></ul>\n\n**Month 3–6: Getting traction**\n<ul><li>Revenue: $2,000–$10,000</li><li>Focus: Double down on what works, cut what doesn't</li></ul>\n\n**Month 6–12: Growing**\n<ul><li>Revenue: $10,000–$50,000</li><li>Focus: Scale winning products, build systems</li></ul>\n\n**Year 2+: Scaling**\n<ul><li>Revenue: $50,000–$500,000+</li><li>Focus: Team, automation, multi-channel</li></ul>\n\n**Honest truths:**\n<ul><li>Most beginners quit in 3 months (before results)</li><li>Average time to $10K/month: 6–12 months</li><li>Capital needed: $500–$5,000 to start</li></ul>\n\n<div class="sa-tip">💡 Treat it like a real business. Daily action over 12 months beats sporadic bursts.</div>`,
      courses: ['course-player.html?module=1']
    },
    {
      patterns: ['customer service', 'returns', 'refunds', 'chargeback', 'customer complaints', 'support'],
      response: `**E-Commerce Customer Service Excellence 🤝**\n\nCustomer service is your competitive advantage.\n\n**Response time benchmarks:**\n<ul><li>Email: < 24 hours (aim for < 4 hours)</li><li>Chat: < 5 minutes</li><li>Social DMs: < 2 hours</li></ul>\n\n**Return policy that converts:**\n<ul><li>30-day no-questions-asked returns</li><li>Show it prominently on product pages</li><li>Reduces purchase anxiety significantly</li></ul>\n\n**Handling disputes & chargebacks:**\n<ul><li>Respond within 48 hours with tracking info</li><li>Keep all order/communication records</li><li>Offer refund before dispute escalates</li></ul>\n\n**Tools to scale support:**\n<ul><li>Gorgias — Best for Shopify stores</li><li>Freshdesk — Great free tier</li><li>Chatbots — Handle 60% of FAQs automatically</li></ul>\n\n<div class="sa-tip">💡 A great return policy generates more trust than it costs you in actual returns. Most people never use it.</div>`,
      courses: ['course-player.html?module=12']
    },
    {
      patterns: ['brand', 'branding', 'brand identity', 'logo', 'brand building', 'branded store'],
      response: `**Building a Strong E-Commerce Brand 🎨**\n\nBrand is what makes customers choose you at 2× the price.\n\n**Brand fundamentals:**\n<ul><li>🎯 Define your target customer with precision</li><li>💬 Find your unique voice and story</li><li>🎨 Consistent visual identity (colors, fonts, imagery)</li><li>💡 Stand for something beyond just products</li></ul>\n\n**Visual identity checklist:**\n<ul><li>Logo (Canva Pro or hire on Fiverr for $50–200)</li><li>Color palette (2–3 primary colors)</li><li>Typography (1–2 fonts max)</li><li>Product photography style guide</li></ul>\n\n**Brand vs. no brand:**\n<ul><li>Generic: Race to the bottom on price</li><li>Brand: Premium pricing, loyal customers, defensible moat</li></ul>\n\n<div class="sa-tip">💡 The most successful Shopify stores aren't just selling products — they're selling a lifestyle and identity.</div>`,
      courses: ['course-player.html?module=12']
    },
    {
      patterns: ['analytics', 'data', 'metrics', 'kpi', 'google analytics', 'ga4', 'what to measure'],
      response: `**Key E-Commerce Metrics to Track 📊**\n\nIf you're not measuring it, you can't improve it.\n\n**The 6 metrics that matter most:**\n\n**1. Conversion Rate (CVR)**\n<ul><li>Industry avg: 1–3% | Good: 3–5%+</li></ul>\n\n**2. Average Order Value (AOV)**\n<ul><li>Increase with bundles, upsells, free shipping threshold</li></ul>\n\n**3. Customer Acquisition Cost (CAC)**\n<ul><li>Must be < LTV/3 for sustainable growth</li></ul>\n\n**4. Return on Ad Spend (ROAS)**\n<ul><li>Breakeven ROAS = 1 / gross margin %</li></ul>\n\n**5. Customer Lifetime Value (LTV)**\n<ul><li>Avg order value × purchase frequency × customer lifespan</li></ul>\n\n**6. Net Profit Margin**\n<ul><li>After all costs: Target 10–20%+ net</li></ul>\n\n<div class="sa-tip">💡 LTV is the most important number. Spend more on acquisition if you have high LTV.</div>`,
      courses: ['course-player.html?module=10']
    },
    {
      patterns: ['scale', 'scaling', 'grow', 'how to grow', 'grow my store', 'scale up', 'bigger'],
      response: `**How to Scale Your E-Commerce Business 🚀**\n\n**The 4 levers of scaling:**\n\n**1. More traffic** (paid ads, SEO, social)\n<ul><li>Increase ad spend on winning campaigns</li><li>Add new channels (if Meta works, try TikTok)</li></ul>\n\n**2. Higher conversion rate** (CRO)\n<ul><li>A/B test every element systematically</li><li>Fix the biggest leak in your funnel first</li></ul>\n\n**3. Increase AOV** (average order value)\n<ul><li>Bundles, upsells, cross-sells</li><li>Free shipping threshold (set it strategically)</li></ul>\n\n**4. Improve LTV** (customer lifetime value)\n<ul><li>Strong email/SMS retention flows</li><li>Subscription options</li><li>Loyalty program</li></ul>\n\n**Scaling requires systems:**\n<ul><li>Document every process (SOPs)</li><li>Automate before hiring</li><li>Hire once, don't micromanage</li></ul>\n\n<div class="sa-tip">💡 Revenue doubles when you improve all 4 levers by 25% each. That's compounding.</div>`,
      courses: ['course-player.html?module=11']
    },
    {
      patterns: ['legal', 'tax', 'llc', 'business structure', 'sales tax', 'vat', 'legal requirements'],
      response: `**Legal & Tax Basics for E-Commerce ⚖️**\n\n*(Note: I'm an AI — always consult a real lawyer/accountant for your situation)*\n\n**Business structure (USA):**\n<ul><li>**Sole Proprietor** — Simplest, no protection</li><li>**LLC** — Best for most e-commerce sellers</li><li>**S-Corp** — Consider once you're >$80K/year profit</li></ul>\n\n**Sales tax (USA):**\n<ul><li>You owe sales tax where you have "nexus"</li><li>Shopify can auto-calculate and collect</li><li>Use TaxJar or Avalara to file automatically</li></ul>\n\n**EU & UK VAT:**\n<ul><li>Required once you exceed country thresholds</li><li>Use Quaderno or Avalara for compliance</li></ul>\n\n**Trademarks:**\n<ul><li>File ASAP ($250 USPTO filing fee)</li><li>Register in each country you sell</li></ul>\n\n<div class="sa-tip">💡 Get a dedicated business bank account and credit card from day one. Mixing personal/business finances creates tax nightmares.</div>`,
      courses: ['course-player.html?module=1']
    },
    {
      patterns: ['course', 'which course', 'recommend course', 'what should i learn', 'where to start', 'beginner', 'new to ecommerce'],
      response: `**Your Personalized Learning Path 🎓**\n\nHere's where I'd recommend starting based on your level:\n\n**Absolute beginner:**\n<ul><li>Start with Module 1 (free) — E-Commerce Foundations</li><li>Then Module 2 (free) — Market Research</li></ul>\n\n**Ready to build:**\n<ul><li>Module 3 — Building Your Online Store</li><li>Module 4 — Product Sourcing</li></ul>\n\n**Want to drive traffic:**\n<ul><li>Module 6 — SEO (free, long-term)</li><li>Module 7 — Paid Advertising (fastest results)</li><li>Module 8 — Email Marketing</li></ul>\n\n**Ready to scale:**\n<ul><li>Modules 9–12 (Elite track)</li></ul>\n\n**Specialty paths:**\n<ul><li>Amazon FBA, Dropshipping, Print on Demand — check our extended catalog!</li></ul>`,
      courses: ['courses.html', 'course-player.html?module=1', 'course-player.html?module=2']
    },
    {
      patterns: ['plan', 'pricing', 'subscription', 'free plan', 'pro plan', 'elite plan', 'upgrade', 'how much does it cost'],
      response: `**STATIC Academy Plans 💎**\n\n**🆓 Starter (Free)**\n<ul><li>Modules 1 & 2 (full access)</li><li>Community forum access</li><li>Perfect for: Exploring e-commerce</li></ul>\n\n**⚡ Pro — $49/month**\n<ul><li>All 12 core modules</li><li>Full templates & tools library</li><li>Monthly 1-on-1 coaching call</li><li>Certificate of completion</li><li>Perfect for: Serious learners ready to build</li></ul>\n\n**👑 Elite — $149/month**\n<ul><li>Everything in Pro</li><li>VIP community access</li><li>Weekly group coaching calls</li><li>Monthly business audit</li><li>Direct access to Alex Morgan</li><li>Perfect for: Entrepreneurs scaling to 7 figures</li></ul>\n\n🛡️ All paid plans include a 14-day money-back guarantee.`,
      courses: ['pricing.html']
    },
    {
      patterns: ['thank', 'thanks', 'awesome', 'great', 'perfect', 'helpful', 'amazing', 'love it'],
      response: `You're very welcome! 😊\n\nRemember — knowledge is only valuable when you apply it. The best time to start your e-commerce journey was yesterday. The second best time is **right now**.\n\nAnything else I can help you with? I'm here 24/7 to answer your questions. 🚀`,
      courses: []
    },
    {
      patterns: ['goodbye', 'bye', 'see you', 'later', 'quit', 'exit', 'close'],
      response: `Take care! 👋 Remember, I'm here whenever you have e-commerce questions. Best of luck with your business — you've got this! 🚀`,
      courses: []
    }
  ];

  const FALLBACK_RESPONSES = [
    `That's a great question! While I may not have a specific answer, here are some general e-commerce principles that apply:\n\n<ul><li>**Test everything** — data beats opinions</li><li>**Focus on one channel** before adding more</li><li>**Know your margins** — revenue is vanity, profit is sanity</li><li>**Customer experience** is your best marketing</li></ul>\n\nCan you rephrase your question or give me more context? Or browse our courses for in-depth answers on this topic.`,
    `Interesting question! I'm still learning about that specific topic. Here's what I'd suggest:\n\n<ul><li>Check our full course catalog — we likely have a module on this</li><li>Post your question in the STATIC Academy community forum</li><li>Book a coaching call (Pro/Elite members) for personalized guidance</li></ul>\n\nIs there something more specific I can help you with?`,
    `Great question! E-commerce is a broad field. For the most accurate answer, I'd recommend checking our courses — we cover this topic in detail. Meanwhile, is there another aspect of e-commerce I can help you with right now?`
  ];

  /* ── Score response ── */
  function findBestResponse(query) {
    const q = query.toLowerCase();
    let best = null;
    let bestScore = 0;

    KB.forEach(entry => {
      let score = 0;
      entry.patterns.forEach(p => {
        if (q.includes(p)) {
          score += p.split(' ').length * 2; // longer patterns score more
        }
      });
      if (score > bestScore) { bestScore = score; best = entry; }
    });

    if (bestScore === 0) {
      return {
        response: FALLBACK_RESPONSES[Math.floor(Math.random() * FALLBACK_RESPONSES.length)],
        courses: ['courses.html']
      };
    }
    return best;
  }

  /* ── Format response ── */
  function formatMessage(text, courseLinks) {
    let html = text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/\n/g, '<br>');

    if (courseLinks && courseLinks.length > 0) {
      html += '<br><br><span style="font-size:12px;color:rgba(255,255,255,0.4)">📚 Recommended courses:</span><br>';
      courseLinks.forEach(link => {
        const labels = {
          'courses.html': '📚 Browse All Courses',
          'pricing.html': '💎 View Plans',
          'course-player.html?module=1': '🏪 Module 1: Foundations',
          'course-player.html?module=2': '🔍 Module 2: Research',
          'course-player.html?module=3': '🏗️ Module 3: Build Your Store',
          'course-player.html?module=4': '📦 Module 4: Sourcing',
          'course-player.html?module=5': '💳 Module 5: Payments',
          'course-player.html?module=6': '📈 Module 6: SEO',
          'course-player.html?module=7': '🎯 Module 7: Paid Ads',
          'course-player.html?module=8': '📧 Module 8: Email',
          'course-player.html?module=9': '📱 Module 9: Social Media',
          'course-player.html?module=10': '📊 Module 10: Analytics',
          'course-player.html?module=11': '🚀 Module 11: Scaling',
          'course-player.html?module=12': '🏆 Module 12: Advanced',
        };
        html += `<a href="${link}" class="sa-course-chip">${labels[link] || '📖 View Course'}</a>`;
      });
    }
    return html;
  }

  /* ── User avatar initial ── */
  function getUserInitials() {
    try {
      const u = JSON.parse(localStorage.getItem('sa_user'));
      if (u) return (u.firstName[0] + u.lastName[0]).toUpperCase();
    } catch {}
    return '👤';
  }

  /* ── Build panel ── */
  const btnEl = document.createElement('button');
  btnEl.id = 'sa-ai-btn';
  btnEl.setAttribute('aria-label', 'AI Assistant');
  btnEl.innerHTML = `
    <span class="sa-ai-notif">1</span>
    <svg class="chat-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
    </svg>
    <svg class="close-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
    </svg>
  `;

  const panelEl = document.createElement('div');
  panelEl.id = 'sa-chat-panel';
  panelEl.innerHTML = `
    <div class="sa-chat-header">
      <div class="sa-ai-avatar">🤖</div>
      <div class="sa-ai-info">
        <div class="sa-ai-name">Aria — STATIC AI</div>
        <div class="sa-ai-status">● Online · E-Commerce Expert</div>
      </div>
      <div class="sa-chat-actions">
        <button class="sa-chat-action-btn" title="Clear chat" onclick="SAChat.clear()" style="font-size:12px">🗑</button>
        <button class="sa-chat-action-btn" title="Minimize" onclick="SAChat.toggle()">—</button>
      </div>
    </div>
    <div class="sa-messages" id="sa-messages"></div>
    <div class="sa-quick-btns" id="sa-quick-btns">
      <button class="sa-quick-btn" onclick="SAChat.send('What platform should I use?')">🏪 Best platform?</button>
      <button class="sa-quick-btn" onclick="SAChat.send('How do I find winning products?')">🔍 Product research</button>
      <button class="sa-quick-btn" onclick="SAChat.send('How do Facebook ads work?')">🎯 Facebook ads</button>
      <button class="sa-quick-btn" onclick="SAChat.send('How much money can I make?')">💰 Income potential</button>
      <button class="sa-quick-btn" onclick="SAChat.send('What is dropshipping?')">📦 Dropshipping</button>
      <button class="sa-quick-btn" onclick="SAChat.send('Which course should I start with?')">🎓 Course guide</button>
    </div>
    <div class="sa-chat-footer">
      <div class="sa-input-wrap">
        <textarea id="sa-input" placeholder="Ask anything about e-commerce..." rows="1"></textarea>
        <button id="sa-send-btn" onclick="SAChat.sendFromInput()">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="22" y1="2" x2="11" y2="13"/>
            <polygon points="22 2 15 22 11 13 2 9 22 2"/>
          </svg>
        </button>
      </div>
      <div class="sa-footer-hint">Powered by STATIC Academy AI · Not financial advice</div>
    </div>
  `;

  /* ── Elite-only gate ── */
  function isElitePlan() {
    try {
      var ecPlan = localStorage.getItem('ec_plan') || 'free';
      var trPlan = localStorage.getItem('tr_plan') || 'free';
      return ecPlan === 'elite' || trPlan === 'elite';
    } catch (e) { return false; }
  }

  if (!isElitePlan()) {
    // Inject locked AI button with upgrade prompt
    const lockedStyle = document.createElement('style');
    lockedStyle.textContent = `
      #sa-ai-btn-locked {
        position: fixed; bottom: 28px; right: 28px;
        width: 58px; height: 58px; border-radius: 50%;
        background: rgba(167,139,250,.15);
        border: 2px solid rgba(167,139,250,.35);
        cursor: pointer;
        box-shadow: 0 4px 20px rgba(167,139,250,.2);
        display: flex; align-items: center; justify-content: center;
        z-index: 9000; transition: all 0.25s ease; color: #a78bfa;
        font-size: 1.4rem;
      }
      #sa-ai-btn-locked:hover { transform: scale(1.08); box-shadow: 0 6px 28px rgba(167,139,250,.35); }
      #sa-ai-locked-tooltip {
        position: fixed; bottom: 96px; right: 18px;
        background: #0c0e1d; border: 1px solid rgba(167,139,250,.3);
        border-radius: 14px; padding: 14px 16px; width: 240px;
        z-index: 9001; display: none;
        box-shadow: 0 8px 32px rgba(0,0,0,.5);
        text-align: center;
      }
      #sa-ai-locked-tooltip.show { display: block; }
      #sa-ai-locked-tooltip p { font-size: .82rem; color: rgba(238,240,255,.65); margin-bottom: 10px; line-height: 1.4; }
      #sa-ai-locked-tooltip a {
        display: inline-block; padding: 8px 18px;
        background: linear-gradient(135deg,#7b2fff,#a78bfa);
        color: #fff; border-radius: 8px; font-size: .8rem; font-weight: 700;
        text-decoration: none; transition: opacity .2s;
      }
      #sa-ai-locked-tooltip a:hover { opacity: .85; }
      #sa-ai-locked-tooltip .lock-badge { font-size: 1.2rem; margin-bottom: 6px; }
    `;
    document.head.appendChild(lockedStyle);

    const lockedBtn = document.createElement('button');
    lockedBtn.id = 'sa-ai-btn-locked';
    lockedBtn.setAttribute('aria-label', 'AI Assistant — Elite only');
    lockedBtn.innerHTML = '🔒';

    const lockedTooltip = document.createElement('div');
    lockedTooltip.id = 'sa-ai-locked-tooltip';
    const lang = localStorage.getItem('sa_lang') || 'en';
    const isFR = lang === 'fr';
    lockedTooltip.innerHTML = `
      <div class="lock-badge">🤖✨</div>
      <p>${isFR ? 'L\'assistant IA est réservé aux membres <strong style="color:#a78bfa">Elite</strong>. Passez à Elite pour débloquer Aria, votre coach personnel.' : 'The AI assistant is exclusive to <strong style="color:#a78bfa">Elite</strong> members. Upgrade to unlock Aria, your personal coach.'}</p>
      <a href="payment.html">${isFR ? '💎 Passer à Elite' : '💎 Upgrade to Elite'}</a>
    `;

    document.body.appendChild(lockedBtn);
    document.body.appendChild(lockedTooltip);

    let tipOpen = false;
    lockedBtn.addEventListener('click', () => {
      tipOpen = !tipOpen;
      lockedTooltip.classList.toggle('show', tipOpen);
    });
    document.addEventListener('click', (e) => {
      if (!lockedBtn.contains(e.target) && !lockedTooltip.contains(e.target)) {
        tipOpen = false;
        lockedTooltip.classList.remove('show');
      }
    });

    return; // Don't mount the full chat
  }

  document.body.appendChild(btnEl);
  document.body.appendChild(panelEl);

  /* ── Chat logic ── */
  let isOpen = false;
  let hasGreeted = false;

  const SAChat = {
    toggle() {
      isOpen = !isOpen;
      btnEl.classList.toggle('open', isOpen);
      panelEl.classList.toggle('open', isOpen);
      if (isOpen) {
        const notif = btnEl.querySelector('.sa-ai-notif');
        if (notif) notif.remove();
        if (!hasGreeted) {
          hasGreeted = true;
          setTimeout(() => SAChat.showWelcome(), 300);
        }
        setTimeout(() => {
          const inp = document.getElementById('sa-input');
          if (inp) inp.focus();
        }, 350);
      }
    },

    showWelcome() {
      const msgs = document.getElementById('sa-messages');
      const userName = (() => {
        try {
          const u = JSON.parse(localStorage.getItem('sa_user'));
          return u ? `, ${u.firstName}` : '';
        } catch { return ''; }
      })();

      const welcome = document.createElement('div');
      welcome.innerHTML = `
        <div class="sa-welcome-card">
          <div class="sa-welcome-title">👋 Hey${userName}! I'm Aria, your AI e-commerce advisor.</div>
          <div class="sa-welcome-sub">I can help you with platforms, marketing, product research, ads, SEO, and more. Ask me anything or pick a quick topic below!</div>
        </div>
      `;
      msgs.appendChild(welcome);
      msgs.scrollTop = msgs.scrollHeight;
    },

    addMsg(role, htmlContent) {
      const msgs = document.getElementById('sa-messages');
      const msg = document.createElement('div');
      msg.className = `sa-msg ${role}`;
      const initials = getUserInitials();
      msg.innerHTML = `
        <div class="sa-msg-avatar ${role}">${role === 'ai' ? '🤖' : initials}</div>
        <div class="sa-bubble">${htmlContent}</div>
      `;
      msgs.appendChild(msg);
      msgs.scrollTop = msgs.scrollHeight;

      // Hide quick buttons after first user message
      if (role === 'user') {
        const qb = document.getElementById('sa-quick-btns');
        if (qb) qb.style.display = 'none';
      }
    },

    showTyping() {
      const msgs = document.getElementById('sa-messages');
      const typing = document.createElement('div');
      typing.id = 'sa-typing-indicator';
      typing.className = 'sa-msg ai';
      typing.innerHTML = `
        <div class="sa-msg-avatar ai">🤖</div>
        <div class="sa-bubble sa-typing"><span></span><span></span><span></span></div>
      `;
      msgs.appendChild(typing);
      msgs.scrollTop = msgs.scrollHeight;
    },

    removeTyping() {
      const t = document.getElementById('sa-typing-indicator');
      if (t) t.remove();
    },

    send(query) {
      if (!query.trim()) return;
      const btn = document.getElementById('sa-send-btn');
      if (btn) btn.disabled = true;

      this.addMsg('user', query);

      const result = findBestResponse(query);
      const thinkTime = 600 + Math.random() * 800 + query.length * 10;

      this.showTyping();

      setTimeout(() => {
        this.removeTyping();
        const html = formatMessage(result.response, result.courses);
        this.addMsg('ai', html);
        if (btn) btn.disabled = false;
      }, Math.min(thinkTime, 2500));
    },

    sendFromInput() {
      const inp = document.getElementById('sa-input');
      if (!inp) return;
      const val = inp.value.trim();
      if (!val) return;
      inp.value = '';
      inp.style.height = 'auto';
      this.send(val);
    },

    clear() {
      const msgs = document.getElementById('sa-messages');
      if (msgs) msgs.innerHTML = '';
      const qb = document.getElementById('sa-quick-btns');
      if (qb) qb.style.display = 'flex';
      hasGreeted = false;
      this.showWelcome();
    }
  };

  window.SAChat = SAChat;

  /* ── Event listeners ── */
  btnEl.addEventListener('click', () => SAChat.toggle());

  document.addEventListener('DOMContentLoaded', () => {
    const inp = document.getElementById('sa-input');
    if (!inp) return;

    inp.addEventListener('keydown', e => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        SAChat.sendFromInput();
      }
    });

    inp.addEventListener('input', () => {
      inp.style.height = 'auto';
      inp.style.height = Math.min(inp.scrollHeight, 100) + 'px';
    });
  });

})();
