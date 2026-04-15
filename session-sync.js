/**
 * session-sync.js — STATIC Academy
 * Synchronise l'état de connexion sur toutes les pages.
 * Inclure ce fichier dans chaque page avant </body>.
 */
(function () {
    'use strict';

    var ADMIN_EMAILS = ['bajteam1290@gmail.com', 'samuele.vsn.contact@gmail.com'];

    /* ── Helpers ── */
    function getUser() {
        try { return JSON.parse(localStorage.getItem('static_user') || 'null'); } catch (e) { return null; }
    }

    function planLabel(user) {
        if (!user) return 'FREE';
        if (user.role === 'admin' || (user.email && ADMIN_EMAILS.indexOf(user.email.toLowerCase()) !== -1)) return 'ADMIN';
        var h = { free: 0, pro: 1, elite: 2 };
        var ec = h[localStorage.getItem('ec_plan')] || 0;
        var tr = h[localStorage.getItem('tr_plan')] || 0;
        var top = Math.max(ec, tr);
        return top === 2 ? 'ELITE' : top === 1 ? 'PRO' : 'FREE';
    }

    function planColor(label) {
        if (label === 'ADMIN') return '#10b981';
        if (label === 'ELITE') return '#c9a84c';
        if (label === 'PRO')   return '#4f6ef7';
        return '#6b7280';
    }

    /* ── Inject shared styles (once) ── */
    function injectStyles() {
        if (document.getElementById('ss-styles')) return;
        var s = document.createElement('style');
        s.id = 'ss-styles';
        s.textContent = [
            '.ss-pill{display:flex;align-items:center;gap:.55rem;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.09);border-radius:50px;padding:.28rem .85rem .28rem .35rem;cursor:pointer;text-decoration:none;transition:background .2s,border-color .2s;}',
            '.ss-pill:hover{background:rgba(255,255,255,.09);border-color:rgba(79,110,247,.45);}',
            '.ss-av{width:30px;height:30px;border-radius:50%;background:linear-gradient(135deg,#4f6ef7,#7c52e8);display:flex;align-items:center;justify-content:center;font-weight:700;font-size:.8rem;color:#fff;overflow:hidden;flex-shrink:0;}',
            '.ss-av img{width:100%;height:100%;object-fit:cover;border-radius:50%;}',
            '.ss-info{display:flex;flex-direction:column;line-height:1.25;}',
            '.ss-name{font-size:.8rem;font-weight:600;color:#fff;white-space:nowrap;}',
            '.ss-badge{font-size:.6rem;font-weight:700;text-transform:uppercase;letter-spacing:.05em;white-space:nowrap;}',
            '.ss-dash{padding:.38rem .9rem;background:linear-gradient(135deg,#4f6ef7,#7c52e8);color:#fff!important;border-radius:8px;font-weight:600;font-size:.82rem;text-decoration:none!important;transition:opacity .2s;white-space:nowrap;border:none;cursor:pointer;}',
            '.ss-dash:hover{opacity:.82;}',
            '.ss-out{padding:.38rem .9rem;background:rgba(239,68,68,.1);border:1px solid rgba(239,68,68,.25);color:#f87171;border-radius:8px;font-weight:600;font-size:.82rem;cursor:pointer;transition:background .2s;white-space:nowrap;}',
            '.ss-out:hover{background:rgba(239,68,68,.22);}'
        ].join('');
        document.head.appendChild(s);
    }

    /* ── Main: update any nav-right / topbar-right ── */
    function updateNav() {
        var user = getUser();

        /* ── 1. Homepage / generic pages: replace .nav-right ── */
        var navRight = document.getElementById('navRight') || document.querySelector('.nav-right');
        if (navRight) {
            // Always preserve the lang selector (select or div-based)
            var langSel = navRight.querySelector('select.lang-select, select#lang-select, #lang-select, #navLang, .lang-select');
            var langHtml = langSel ? langSel.outerHTML : '';

            if (!user) {
                // Not logged in — restore default links (only if they've been wiped)
                if (!navRight.querySelector('a[href*="auth"]')) {
                    navRight.innerHTML = langHtml +
                        '<a href="auth.html?mode=signin" class="nav-btn" style="padding:.45rem 1rem;border:1px solid rgba(255,255,255,.12);border-radius:8px;color:#c8d0dc;font-size:.85rem;font-weight:600;text-decoration:none;transition:border-color .2s;">Sign In</a>' +
                        '<a href="auth.html?mode=signup" class="nav-btn nav-btn-primary" style="padding:.45rem 1rem;background:linear-gradient(135deg,#4f6ef7,#7c52e8);border:none;border-radius:8px;color:#fff;font-size:.85rem;font-weight:600;text-decoration:none;">Get Started</a>';
                }
            } else {
                injectStyles();
                var name   = user.name || 'Student';
                var init   = name.charAt(0).toUpperCase();
                var plan   = planLabel(user);
                var color  = planColor(plan);
                var photo  = localStorage.getItem('sa_avatar');
                var avHtml = photo
                    ? '<div class="ss-av"><img src="' + photo + '" alt=""></div>'
                    : '<div class="ss-av">' + init + '</div>';

                navRight.innerHTML = langHtml +
                    '<a href="dashboard.html" class="ss-pill">' +
                        avHtml +
                        '<div class="ss-info">' +
                            '<span class="ss-name">' + escHtml(name) + '</span>' +
                            '<span class="ss-badge" style="color:' + color + '">' + plan + '</span>' +
                        '</div>' +
                    '</a>' +
                    '<a href="dashboard.html" class="ss-dash">Dashboard</a>' +
                    '<button class="ss-out" onclick="ssLogout()">Logout</button>';

                // Re-bind lang selector
                rebindLang(navRight);
            }
        }

        /* ── 2. Course / Trading player topbar-right: update planBadge ── */
        var planBadge = document.getElementById('planBadge');
        if (planBadge && user) {
            var plan2 = planLabel(user);
            planBadge.textContent = plan2;
            planBadge.className = 'plan-badge badge-' + plan2.toLowerCase();
            // Show/hide upgrade button
            var upBtn = document.querySelector('.upgrade-btn');
            if (upBtn) upBtn.style.display = (plan2 === 'ADMIN' || plan2 === 'ELITE') ? 'none' : '';
        }

        /* ── 3. Player pages: add small user avatar chip to topbar-right if not present ── */
        var topbarRight = document.querySelector('.topbar-right');
        if (topbarRight && user && !topbarRight.querySelector('.ss-player-chip')) {
            injectStyles();
            var name3 = user.name || 'Student';
            var photo3 = localStorage.getItem('sa_avatar');
            var chip = document.createElement('a');
            chip.href = 'dashboard.html';
            chip.className = 'ss-player-chip';
            chip.style.cssText = 'display:flex;align-items:center;gap:.4rem;text-decoration:none;cursor:pointer;';
            chip.innerHTML = (photo3
                ? '<div class="ss-av" style="width:26px;height:26px;font-size:.7rem;"><img src="' + photo3 + '" alt=""></div>'
                : '<div class="ss-av" style="width:26px;height:26px;font-size:.7rem;">' + name3.charAt(0).toUpperCase() + '</div>') +
                '<span style="font-size:.78rem;font-weight:600;color:#c8d0dc;">' + escHtml(name3.split(' ')[0]) + '</span>';
            topbarRight.insertBefore(chip, topbarRight.firstChild);
        }
    }

    /* ── Logout ── */
    window.ssLogout = function () {
        localStorage.removeItem('static_user');
        window.location.href = 'auth.html';
    };

    /* ── Re-bind lang selector after innerHTML swap ── */
    function rebindLang(container) {
        var sel = container ? container.querySelector('select') : null;
        if (!sel) return;
        var saved = localStorage.getItem('sa_lang') || 'en';
        sel.value = saved;
        sel.addEventListener('change', function () {
            localStorage.setItem('sa_lang', this.value);
            if (typeof updateTranslations === 'function') updateTranslations(this.value);
        });
    }

    /* ── XSS guard ── */
    function escHtml(str) {
        return String(str).replace(/[&<>"']/g, function (c) {
            return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
        });
    }

    /* ── Run ── */
    function run() {
        updateNav();
        // Apply saved lang on pages that support it
        var saved = localStorage.getItem('sa_lang') || 'en';
        if (saved !== 'en' && typeof updateTranslations === 'function') {
            updateTranslations(saved);
        }
        var sel = document.getElementById('lang-select');
        if (sel && saved) sel.value = saved;
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', run);
    } else {
        run();
    }

    /* ── Cross-tab sync via storage events ── */
    window.addEventListener('storage', function (e) {
        if (e.key === 'static_user' || e.key === 'sa_avatar' || e.key === 'ec_plan' || e.key === 'tr_plan') {
            updateNav();
        }
    });

    /* ── Expose ── */
    window.sessionSync = { update: updateNav };

})();
