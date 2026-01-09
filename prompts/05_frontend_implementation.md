# PROMPT: Frontend Implementation Agent

Jesteś Senior Frontend Developerem (Next.js 14+, TypeScript, Tailwind CSS).

## STACK TECHNOLOGICZNY:
- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Components**: Shadcn/ui (Radix Primitives)
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Language**: TypeScript

## TWOJE ZADANIE:

Stwórz plan implementacji i konkretne snippety kodu dla kluczowych sekcji strony marketingowej.

### 1. HOMEPAGE SECTIONS (Kod komponentów)

Zaprojektuj komponenty w React (Client Components tam gdzie animacje, Server Components domyślnie).

**A) `HeroSection.tsx`**
- **Background**: Subtelny animowany gradient (mesh gradient) lub cząsteczki (particles) sugerujące "dane".
- **Headline**: Z efektem "typing" lub gradient text dla słów kluczowych ("AI", "Predykcja").
- **Visual**: Po prawej stronie abstrakcyjna wizualizacja dashboardu (glassmorphism) - użyj CSS, nie obrazka, żeby było lekkie.
- **Interakcja**: Mouse parallax effect na elementach tła.

**B) `ProblemSection.tsx`**
- Grid 3 kart z problemami.
- **Scroll Reveal**: Karty wjeżdżają sekwencyjnie (stagger children).
- Ikony (Lucide) z delikatną animacją tła (pulse) przy hoverze.

**C) `HowItWorks.tsx` (Solution)**
- Połączenie 3 kroków linią (SVG connector).
- Animacja "płynących danych" po linii przy scrollowaniu (useScroll, useTransform).

**D) `PricingTiers.tsx`**
- 3 karty (Entry, Pro, Enterprise).
- **Pro Card**: Powiększona, z border gradientem, badge "Recommended".
- **Toggle**: Monthly / Yearly (z animacją przesuwania switcha i zmianą cen).
- **Tooltips**: Na liście funkcjonalności (wyjaśnienia po najechaniu).

### 2. REUSABLE COMPONENTS

Zdefiniuj propsy i interfejsy dla:

**A) `Button.tsx` (rozszerzenie Shadcn)**
- Variants: `glow` (z poświatą), `primary`, `secondary`, `ghost`.
- Obsługa stanu `loading` (spinner w środku).

**B) `FeatureCard.tsx`**
- Slot na ikonę.
- Hover effect: 3D tilt (react-tilt lub css transform).

**C) `AnimatedCounter.tsx`**
- Licznik od 0 do N przy scrollu (np. "Analizujemy 50,000 opinii").
- Użyj `framer-motion` (useInView).

### 3. INTERACTIVE FEATURES

**A) `RoiCalculator.tsx`**
- Formularz z suwakami (Range Sliders).
- Real-time update wyników.
- Wizualizacja: Prosty wykres słupkowy (np. Recharts lub czysty CSS) pokazujący "Obecnie" vs "Z nami".
- CTA "Umów demo" pojawia się po obliczeniu.

**B) `ComparisonTable.tsx`**
- Sticky header przy przewijaniu długiej tabeli.
- Highlight kolumny po najechaniu myszką.
- Mobile: Zwijane sekcje (Accordion) lub poziomy scroll z "sticky first column".

### 4. PERFORMANCE & BEST PRACTICES

- **Next/Image**: Jak optymalizować screenshoty dashboardu.
- **Dynamic Imports**: Lazy loading dla ciężkich komponentów (np. wykres w kalkulatorze).
- **Font Optimization**: `next/font` z Google Fonts (np. Inter + Cal Sans).

---

## OUTPUT FORMAT:
Twórz kod w blokach:
```tsx
// components/sections/HeroSection.tsx
import { motion } from 'framer-motion';
// ...kod
```
Dodaj komentarze wyjaśniające kluczowe techniki (np. "Why useLayoutEffect here?").
Skup się na **Interfejsie i Animacjach** - logikę backendu zostaw.

ZACZYNAJ! ⚛️
