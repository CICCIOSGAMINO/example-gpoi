Cookies & GDPR
==============
[TOC]

v0.0.7 - February 2026

EU Cookies, the GDPR and the ePrivacy Directive
https://gdpr.eu/cookies/

Data Protection under GDPR
https://europa.eu/youreurope/business/dealing-with-customers/data-protection/data-protection-gdpr/index_en.htm

Intro Cookies
https://web.dev/articles/understanding-cookies

Same-Site
https://web.dev/articles/samesite-cookie-recipes

Schemeful Same-Site
https://web.dev/articles/schemeful-samesite

Same Site / Same Origin
https://web.dev/articles/same-site-same-origin

Cookies and GDPR
User Data Management 


# Eg. Firebase + GDPR Cookie Consent
Firebase services (Auth, Firestore) are essential for app functionality and don't require cookie consent under GDPR. Only marketing/tracking features (Analytics) need consent.

This approach keeps you 80% compliant with minimal effort. For a production app with millions of users, consult a lawyer, but for a side project or small business, this covers the basics.

# Data Management

// Eg. user data collections structure
users/{userId}/           // User profile
  ├── profile/
  │   ├── email: "user@example.com"
  │   ├── displayName: "John Doe"
  │   ├── photoURL: "..."
  │   └── preferences: {theme: "dark", ...}
  │
  ├── activity/
  │   ├── loginHistory: [{date, ip}]
  │   ├── lastLogin: timestamp
  │   └── actions: [{type, timestamp}]
  │
  └── content/
      ├── posts: [{id, title, content}]
      ├── comments: [...]
      └── likes: [...]


# Checklist for Your SPA
Cookie banner appears on first visit
Two choices: Essential Only / Accept All
Privacy page with simple cookie table
Firebase Analytics only loads if consented
Reset consent button available
No external fonts/CDNs that track users
LocalStorage used for consent preference
Console warning if dev tries to use analytics without consent