# PROMPT: Visual Design Strategist

Jesteś UI/UX designerem specjalizującym się w enterprise SaaS i fintech.

## BRIEF:
Tworzysz system designu dla platformy AI Customer Intelligence.

**Produkt**: AI platform dla banków i fintechów (predykcja churn + automatyzacja)
**Target**: B2B (banki, fintechy, ubezpieczyciele)
**Geolokalizacja**: Polska (Europa Środkowa)

## BRAND PERSONALITY:
- 💼 Profesjonalny, ale nie nudny (nie jak stara korporacja)
- 🤖 Technologiczny, ale zrozumiały (AI bez sci-fi)
- 💎 Premium, ale dostępny (mamy tier Entry od 3k PLN!)
- 🇵🇱 Polski rynek (Europe, not Silicon Valley vibes)

---

## ZADANIE:

### 1. COLOR PALETTE

Zaprojektuj paletę kolorów (HSL format preferowany):

**A) Primary Color (główny brand)**
- Kolor + odcienie (50, 100, ..., 900)
- Psychologia: dlaczego ten kolor? (trust? innovation? growth?)
- Przykłady: finanse często → niebieski/zielony

**B) Secondary Color (akcenty, CTA)**
- Kontrastowy do primary
- Używany gdzie? (buttons, highlights, charts)

**C) Neutral Palette (tła, teksty)**
- Gray scale (0-900)
- Warm czy cool grays?

**D) Semantic Colors**
- Success (zielony?)
- Warning (pomarańczowy?)
- Error (czerwony?)
- Info (niebieski?)

**E) Dark Mode Variants**
- Jak zmienia się paleta w dark mode?
- Background colors
- Text colors (contrast ratio ≥ 4.5:1)

**Format Output:**
```css
:root {
  --color-primary-500: hsl(XXX, XX%, XX%);
  --color-primary-600: hsl(XXX, XX%, XX%);
  /* etc */
}

[data-theme="dark"] {
  --color-primary-500: hsl(XXX, XX%, XX%);
  /* adjusted for dark */
}
```

**UZASADNIENIE**: Dla każdego koloru wyjaśnij wybory (psychologia + accessibility)

---

### 2. TYPOGRAPHY

**A) Font Selection**

Zaproponuj fonty (Google Fonts preferowane):

**Heading Font:**
- Nazwa fontu
- Gdzie używamy? (H1-H6)
- Dlaczego ten font? (modern? trustworthy? techy?)

**Body Font:**
- Nazwa fontu
- Gdzie? (p, li, całość tekstu)
- Pairing z heading font

**Code/Technical Font:**
- Monospace
- Gdzie? (snippety kodu, technical specs)

**B) Type Scale & Hierarchy**

Zdefiniuj rozmiary (responsive):

```
H1: Desktop XXpx / Mobile XXpx
H2: Desktop XXpx / Mobile XXpx
H3: Desktop XXpx / Mobile XXpx
H4: Desktop XXpx / Mobile XXpx
p (body): Desktop XXpx / Mobile XXpx
small: Desktop XXpx / Mobile XXpx
```

**C) Font Weights**
- Light (300): gdzie?
- Regular (400): gdzie?
- Medium (500): gdzie?
- Semibold (600): gdzie?
- Bold (700): gdzie?

**D) Line Heights & Letter Spacing**
```
Headings: line-height X
Body: line-height X
Letter-spacing: normal vs tight vs wide (kiedy?)
```

---

### 3. KEY COMPONENTS - Wygląd i zachowanie

Opisz dokładnie design dla:

#### A) PRICING CARDS (3 tiers: Entry/Pro/Enterprise)

**Layout:**
- Vertical cards czy horizontal?
- Grid: 3 columns desktop, 1 column mobile?

**Anatomy każdej karty:**
```
┌─────────────────┐
│ Badge? (Popular)│
│ Tier Name       │
│ Price           │
│ Tagline         │
│ Feature List    │
│ CTA Button      │
└─────────────────┘
```

**Jak wyróżnić "recommended" tier (Pro):**
- Większa karta?
- Inny border color?
- Shadow/glow effect?
- Badge "Najpopularniejszy"?

**Hover States:**
- Card hover: subtle lift? border glow?
- Button hover: color change? scale?

**Mobile Behavior:**
- Stack vertically
- Swipeable carousel?

#### B) INTERACTIVE ROI CALCULATOR

**Design componentu:**

**Inputs Section:**
- Sliders czy input fields?
- Labels + tooltips (?)
- Real-time validation

**Output/Results Section:**
- Jak pokazać oszczędności?
  - Big number display
  - Chart (bar? line? pie?)
  - Timeline projection (1yr, 3yr, 5yr)
  
**Visual Treatment:**
- Card-based layout?
- Step-by-step wizard czy all-in-one?
- Color coding (savings = green)

#### C) PRODUCT COMPARISON TABLE

**Structure:**
```
Feature         | Entry | Pro | Enterprise
----------------|-------|-----|------------
Feature 1       |   ✓   |  ✓  |     ✓
Feature 2       |   ✗   |  ✓  |     ✓
etc...
```

**Design Details:**
- Sticky header (podczas scroll)
- Highlight column on hover
- Icons vs checkmarks dla features
- Expandable rows dla details (+/- toggle)
- Mobile: accordion style?

#### D) TRUST INDICATORS

Jak pokazać:

**Security Badges:**
- SOC 2, ISO 27001, RODO/GDPR
- Layout: horizontal row? grid?
- Grayscale czy color?

**Tech Stack Badges:**
- "Powered by OpenAI GPT-4"
- "PostgreSQL" "FastAPI" etc
- Size? Subtle vs prominent?

**Social Proof:**
- "Używane przez X firm"
- Counter animation (0 → X)
- Placement na stronie?

#### E) DEMO/PREVIEW SECTION

Jak pokazać jak działa AI **bez ujawniania IP**:

**Option 1: Dashboard Mockup**
- Screenshot/illustration dashboardu
- Blur/anonymize dane
- Annotations/callouts dla features

**Option 2: Animated Flow**
- Step 1: Dane wpływają
- Step 2: AI analizuje
- Step 3: Rekomendacje
- Format: SVG animation? Lottie? Video?

**Option 3: Interactive Demo**
- Simplified version
- Sample data
- "Try with your numbers" CTA

Który wybierasz i dlaczego?

---

### 4. ANIMATIONS & MICRO-INTERACTIONS

Opisz animacje dla:

**A) Page Transitions**
- Fade in?
- Slide up?
- Duration: XXXms

**B) Scroll-Triggered Reveals**
- Sections fade/slide in when scrolled into view
- Stagger delay (items appear one by one)

**C) Button Hover Effects**
```
Default state: ...
Hover: (color, transform, shadow?)
Active/Click: (scale down?)
Transition: XXXms ease-in-out
```

**D) Loading States**
- Spinner style (dla zapytań do AI)
- Skeleton screens (dla contentu)
- Progress bar (multi-step forms)

**E) Micro-interactions**
- Checkbox check animation
- Toggle switches
- Input focus states
- Success confirmation (checkmark pop)

---

## OUTPUT FORMAT:

### Design Tokens (JSON dla deweloperów):
```json
{
  "colors": {
    "primary": {...},
    "secondary": {...}
  },
  "typography": {
    "fontFamily": {...},
    "fontSize": {...}
  },
  "spacing": {...},
  "borderRadius": {...},
  "shadows": {...}
}
```

### Design Guidelines (Markdown):
- Usage rules
- Do's and Don'ts
- Accessibility notes (WCAG AA)

### Component Specs:
Dla każdego komponentu:
- Visual description
- States (default, hover, active, disabled)
- Responsive behavior
- Code hints (Tailwind classes?)

---

## BONUS:
Na końcu dodaj **moodboard** (w formie tekstowej):
- 3 przykładowe strony SaaS jako inspiracja
- Co z nich wziąć? (konkretne elementy)

ZACZYNAJ! 🎨
