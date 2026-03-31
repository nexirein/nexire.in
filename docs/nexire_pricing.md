# Nexire Pricing Blueprint
> Last updated: March 31, 2026
> Confidential — Internal Use Only

---

## 1. Provider Stack & Unit Costs

| Provider | What it does | Unit Cost |
|---|---|---|
| **CrustData** | Profile search API — each search returns 100 LinkedIn passive profiles | ₹8.50 / search |
| **PeakAI** | Contact enrichment — phone + email reveal | ₹10.00 / mobile number |
| **PeakAI** | Work email reveal | ₹2.00 / email |
| **PeakAI** | Personal email reveal | ₹2.00 / email |
| **Infra / LLM** | AI ranking, sequences, hosting | ~4% of plan price |

> **Note:** Prospeo deprecated. PeakAI is the sole enrichment provider going forward.

---

## 2. Credit System (Backend Logic)

### What 1 Credit Costs Us (PeakAI charges)
| Action | PeakAI Cost |
|---|---|
| 1 mobile number | ₹10 |
| 1 work email | ₹2 |
| 1 personal email | ₹2 |
| Both emails (work + personal) | ₹4 |
| Phone + both emails | ₹14 |

### User-Facing Credit Mapping
| User Action | Credits Consumed | Our Cost |
|---|---|---|
| Phone number only | **1.0 credit** | ₹10 |
| Work email only | **0.25 credit** | ₹2 |
| Personal email only | **0.25 credit** | ₹2 |
| Both emails (work + personal) | **0.5 credit** | ₹4 |
| Phone + both emails | **1.5 credits** | ₹14 |

### Cost Per Credit (our backend)
| Mode | Cost/credit |
|---|---|
| All phones (worst case) | ₹10.00 |
| All emails (best case) | ₹8.00 |
| Realistic mix (40% phone, 60% email) | ~₹6.00 |

### UX Rule
> Never show "credits" to the customer on the pricing page.
> Instead show outcomes:
> - "Call up to X candidates directly on mobile"
> - "Or bulk-email up to 4X verified contacts in one sequence"
> Credits are internal accounting only.

---

## 3. COGS Formula

### Per Plan
```
COGS (Worst Case) = (Searches × ₹8.50) + (Credits × ₹10.00) + (Price × 0.04)
COGS (Realistic)  = (Searches × ₹8.50) + (Credits × ₹6.00)  + (Price × 0.04)
Gross Margin %    = ((Price - COGS) / Price) × 100
```

### Minimum Margin Targets
| Plan Type | Min Acceptable Worst Case | Min Acceptable Realistic |
|---|---|---|
| Self-serve (instant buy) | **40%** | **55%** |
| Contact Us (sales-qualified) | **34%** | **50%** |

---

## 4. Plan Architecture

### Structure Overview
```
Pricing Page
│
├── TOP TOGGLE: [ Monthly ] [ Quarterly ] [ Semiannual ] [ Yearly — Save 23% ]
│
├── STARTER (left card)
│   ├── Monthly selected → inner toggle: [ 15 Days ] [ 1 Month ]
│   ├── Quarterly / Semiannual / Yearly → no inner toggle, show that duration directly
│   └── CTA: "Start Now →" (always self-serve)
│
├── GROWTH (right card — "Popular" badge)
│   ├── No inner toggle ever
│   ├── Monthly / Quarterly → self-serve, full price shown
│   ├── Semiannual / Yearly → "Starting at ₹X", CTA = "Contact Us"
│   └── CTA: "Upgrade to Growth →" flips to "Contact Us →" for 6mo + 1yr
│
└── CREDIT EXPLAINER (full width strip below both cards)
```

---

## 5. Full Pricing Table

### Starter Plan — 1 Seat

| Duration | Price | Profile Views | Credits | Strikethrough | Discount | Mode |
|---|---|---|---|---|---|---|
| 15 Days | ₹3,999 | 5,000 | 80 | — | — | Self-serve |
| 1 Month | ₹6,999 | 10,000 | 200 | — | — | Self-serve |
| 3 Months | ₹18,500 | 30,000 | 600 | ₹20,997 | Save 12% | Self-serve |
| 6 Months | ₹34,400 | 60,000 | 1,200 | ₹41,994 | Save 18% | Self-serve |
| 1 Year | ₹60,500 | 1,20,000 | 2,400 | ₹83,988 | Save 28%  | Self-serve |

**Strikethrough formula:** Duration (months) × ₹6,999

### Growth Plan — 2 Seats

| Duration | Price | Profile Views | Credits | Strikethrough | Discount | Mode |
|---|---|---|---|---|---|---|
| 1 Month | ₹12,999 | 20,000 | 500 | — | — | Self-serve |
| 3 Months | ₹37,999 | 60,000 | 1,600 | ₹38,997 | Save ~₹1K + 100 bonus credits | Self-serve |
| 6 Months | Starting ₹71,999 | 1,20,000 | 3,000 | ₹77,994 | Save 15% | Contact Us |
| 1 Year | Starting ₹1,29,999 | 2,40,000 | 6,000 | ₹1,55,988 | Save 23%  | Contact Us |

**Strikethrough formula:** Duration (months) × ₹12,999

> **Growth 3-Month special note:**  
> Price bumped ₹2K (₹35,999 → ₹37,999) with +100 bonus credits (1,500 → 1,600).  
> Customer anchors on bonus credits received, not cash saved.

---

## 6. Margin Analysis

### Starter Margins
| Plan | Price | COGS Worst | Margin Worst | COGS Real | Margin Real |
|---|---|---|---|---|---|
| 15-day | ₹3,999 | ₹1,385 | 65.4% ✅ | ₹1,065 | 73.4% |
| 1-Month | ₹6,999 | ₹3,130 | 55.3% ✅ | ₹2,330 | 66.7% |
| 3-Month | ₹18,500 | ₹9,290 | 49.8% ✅ | ₹6,890 | 62.8% |
| 6-Month | ₹34,400 | ₹18,476 | 46.3% ✅ | ₹13,676 | 60.2% |
| 1-Year | ₹60,500 | ₹36,620 | 39.5% ✅ | ₹27,020 | 55.3% |

### Growth Margins (Restructured)
| Plan | Price | COGS Worst | Margin Worst | COGS Real | Margin Real |
|---|---|---|---|---|---|
| 1-Month | ₹12,999 | ₹7,220 | 44.5% ✅ | ₹5,220 | 59.8% |
| 3-Month | ₹37,999 | ₹22,620 | 40.5% ✅ | ₹16,220 | 57.3% |
| 6-Month | ₹71,999 | ₹43,080 | 40.2% ✅ | ₹31,080 | 56.8% |
| 1-Year | ₹1,29,999 | ₹85,600 | 34.2% ⚠️ | ₹61,600 | 52.6% |

> ⚠️ Growth 1-Year worst-case is 34.2% — acceptable only because this plan goes through a sales call (Contact Us). Negotiate based on customer's actual usage profile. Phone-heavy users → price higher.

---

## 7. Backend Protection Rules

### Monthly Credit Usage Cap (mandatory for long-term plans)
Prevents a user from burning all upfront credits in month 1.

| Plan | Total Credits | Monthly Cap |
|---|---|---|
| Starter 3-Month | 600 | 220/month |
| Starter 6-Month | 1,200 | 220/month |
| Starter 1-Year | 2,400 | 220/month |
| Growth 3-Month | 1,600 | 550/month |
| Growth 6-Month | 3,000 | 550/month |
| Growth 1-Year | 6,000 | 550/month |

**Marketing language:** *"All credits allocated upfront, used at your pace across the plan period."*
This is standard SaaS practice — Apollo, Lusha, LinkedIn Recruiter all do this.

---

## 8. Contact Us Pricing — Sales Call Framework

When a prospect books a call for Growth 6-Month or 1-Year, qualify before quoting:

### Qualification Questions
1. How many roles do you typically hire per month?
2. What's your current outreach mix — more calls or more email?
3. How many recruiters will use the platform?
4. Do you need ATS integration or API access?

### Pricing Logic on the Call
| Usage Profile | Recommended Price |
|---|---|
| Mostly emails (<30% phone credits) | Floor price (₹71,999 / ₹1,29,999) |
| Mixed usage (30–60% phone credits) | Floor + 10% |
| Mostly phones (>60% phone credits) | Floor + 20% |
| >2 extra seats needed | Add ₹3,000/seat/month |
| API access required | Custom quote |

---

## 9. Outreach Sequence Pricing Logic (in-app)

When a user selects profiles and pushes to sequence, show 3 options with credit cost:

| Option | Credits Used (per 50 people) | Our Cost |
|---|---|---|
| Push to work email only | 50 × 0.25 = **12.5 credits** | ₹100 |
| Push to personal email only | 50 × 0.25 = **12.5 credits** | ₹100 |
| Push to both emails | 50 × 0.5 = **25 credits** | ₹200 |
| Push to phone + both emails | 50 × 1.5 = **75 credits** | ₹700 |

Show before confirming:
> *"This sequence will use 25 of your 200 credits."*

---

## 10. Pricing Page UX Rules

1. **Never say "credits"** on the public pricing page — say outcomes instead
2. Show `📞 Call up to X candidates` and `📧 Bulk-email up to 4X contacts` 
3. Strikethrough = duration × base monthly price (always anchor to monthly)
4. "Save X%" badge: Quarterly (12% Starter / 8% Growth) → Semiannual (18%/15%) → Yearly (28%/23%)
5. "Starting at ₹X" for Contact Us plans — never show strikethrough on these
6. Growth 6-Month and 1-Year CTA must say "Contact Us" — never a buy button
7. Inner toggle (15d/1mo) only appears inside Starter card when Monthly is active on top toggle
8. Credit explainer strip sits below both cards, full width:

```
📞 Phone only          →  1 credit
📧 Work email only     →  0.25 credit  
📩 Personal email      →  0.25 credit
📧📩 Both emails       →  0.5 credit
📞📧📩 Phone + both    →  1.5 credits  🔥 Best reply rate

"Credits unlock only the profiles you choose — zero waste."
```

---

## 11. Taglines

| Plan | Tagline |
|---|---|
| Starter | *"For solo recruiters closing roles fast, without the fluff."* |
| Growth | *"For agencies and teams hiring at scale, every month."* |

---

## 12. Competitive Positioning

| Platform | Price | What you get | Phone Numbers |
|---|---|---|---|
| Naukri Resdex | ₹15,340 / 3mo | 500 CVs, 4,000 emails | ❌ Zero |
| LinkedIn Recruiter Lite | ~₹7,000/mo | InMails only, no contact data | ❌ Zero |
| Apollo.io (India) | ~₹3,200/mo | Global DB, low India accuracy | ⚠️ Hit or miss |
| **Nexire Starter** | **₹6,999/mo** | **10,000 passive profiles, 200 contacts, direct mobiles** | ✅ Direct verified |
| **Nexire Growth** | **₹12,999/mo** | **20,000 profiles, 500 contacts, 2 seats** | ✅ Direct verified |

**Core differentiation line:**
> *"Naukri gives 1,000 CVs — the same ones every recruiter in your city saw this week. Nexire gives you direct mobile numbers of people nobody else has called."*

---

*End of Nexire Pricing Blueprint v1.0*
