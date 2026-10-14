# Wisebyte - Interactive Prototype Website

Interactive frontend prototype of the **Wisebyte** mobile application (Mobile Data & Plan Optimizer), created based on the Figma design prototype (**Ecosurv / Wisebyte Prototype**).

---

## 📱 9 Screens & Interactive Feature Breakdown

1. **Home Dashboard (`#screen-home`)**:
   - `Hello, User` header with glowing profile avatar indicator.
   - **Package Focus Card** (Dark Slate) highlighting:
     - Remaining data: `18.6 GB` out of 30 GB
     - Active period and `11.4 GB used`
     - Glowing neon-lime progress bar
     - Tapping anywhere on the card navigates directly to the *Data Usage & Tracking* screen.
   - **Quick Access Grid**:
     - *Recommendation plan* &rarr; Navigate to Personalized Recommendation Package
     - *Consumption calc.* &rarr; Navigate to Data Usage Calculator
     - *Compare plans* &rarr; Navigate to Plan Comparison Matrix
     - *Tracking* &rarr; Navigate to Data Usage Statistics & Breakdown
     - *Package Details* &rarr; Navigate to Plan Details (Combo 50)
   - **WiseBot AI Assistant Prompt Card**: Dark slate banner with neon lime sparkle icon, active diagnostic badge, and direct hotspot leading to WiseBot AI.
   - **Smart Tip Widget**: Dynamic consumption insight based on usage velocity.

2. **Recommendation Package (`#screen-plan-package`)**:
   - **Interactive Budget Stepper**: Set budget in increments of `Rp 10,000` starting from `Rp 85,000`.
   - **Category Filters**: `Data`, `Voice`, `Roaming`, `More` with active state indicators.
   - **Duration Selectors**: `All Days`, `7 - 14 Days`, `15 - 30 Days`, `> 30 Days`.
   - **Live Match Card** (Lime Green): Dynamically calculates match percentage (`86%`) and optimal package recommendation (`25-30 GB • Rp 75-85K`) as the budget stepper changes.
   - Bottom CTA: *Show recommendation Pack &rarr;*.

3. **Data Usage Calculator (`#screen-calculator`)**:
   - 3 Range Sliders with custom neon-lime thumbs:
     - **Video streaming** (0 - 8 hrs/day)
     - **Social media** (0 - 8 hrs/day)
     - **Video calls** (0 - 15 hrs/week)
   - **Est. Consumption Hero Card** (Dark Slate): Calculates total gigabyte consumption in real-time (defaulting to Figma's exact `42.8 GB` / `1.42 GB/day`).
   - Dynamically updates recommended tier buttons (e.g., *View Our 40-50 GB Plans &rarr;*).

4. **Your Recommendations (`#screen-recommendations`)**:
   - Active filter banner chips (`40-50 GB`, `Promo < 85K`, `30 days`).
   - **Hero Best Match Card (Freedom 45)**: `45 GB`, `Rp 84.000`, `95% match`, with *Compare* and *View details* buttons.
   - Secondary Recommendations:
     - **Combo Sakti 45** (`Rp 80.000`, `89% match`)
     - **Combo Flex 40** (`Rp 75.000`, `81% match`)

5. **45-50 GB Plans Estimate (`#screen-plans-estimate`)**:
   - Filter dropdown chips (`40-50 GB`, `< 90k`, `30d`).
   - 4 Estimated plan cards:
     - **Extra Combo Flex 45** (`Rp 80.000`, Best Value)
     - **Freedom Internet 45** (`Rp 84.500`)
     - **Combo Sakti 48** (`Rp 88.000`)
     - **Super Seru Combo 50** (`Rp 94.000`)
   - Direct *+ Compare* and *Details >* action triggers for each plan.

6. **Compare Plans (`#screen-compare`)**:
   - Interactive dropdown selectors for **Plan A** and **Plan B**.
   - Comprehensive comparison matrix (*Main Quota*, *Validity*, *Price*, *Apps Quota*, *Calls / Voice*).
   - Automated cell highlighting with lime-green badges for winning criteria.
   - Dynamic verdict callout banner (*COMBO 50 WINS* / *FREEDOM 45 WINS*).
   - Dual bottom action buttons to choose either plan directly.

7. **Data Usage & Tracking (`#screen-data-usage`)**:
   - Active Quota Card: `18,6 GB of 30 GB` with `12 Days left`.
   - **Interactive 7-Day Bar Chart**:
     - Hover and click feedback for exact daily data (Monday – Sunday).
     - Saturday peak consumption highlight in electric royal blue.
   - **Top Consumption Breakdown**:
     - **YouTube** (`14.2 GB` • 45%)
     - **Instagram** (`8.5 GB` • 28%)
     - **WhatsApp** (`5.3 GB` • 17%)

8. **Package Details - Combo 50 (`#screen-details`)**:
   - Electric Blue Hero Banner: `Combo 50`, `50 GB`, `Rp 89.000`, `Validity: 30 days`.
   - Quota badges: `40 GB Main`, `10 GB Apps & Social`, `Rp 1,780 / GB (Value)`, `100 mins Calls`.
   - Social proof card: `4.8 ★★★★★` (96% of users recommend this plan).
   - Plan benefits checklist with high-contrast icons.
   - Verified customer reviews.
   - Bottom CTA: *Choose plan • Rp 89.000 &rarr;*.

9. **WiseBot AI Assistant (`#screen-chatbot`)** ✨:
   - **Intelligent Conversational Advisor**:
     - Natural language queries for budget recommendations (e.g. *Best plan under Rp 85K*).
     - Data health audit & diagnostic reports based on the user's real-time burn velocity.
     - Direct plan comparisons (e.g. *Freedom 45 vs Combo 50*).
     - Streaming data calculations (e.g. *How much data for 3 hours of Netflix HD?*).
     - Bandwidth optimization tips for YouTube, Instagram, and WhatsApp.
   - **Interactive Rich Embeds**:
     - Embedded plan preview cards with actionable *View Details* and *Compare* triggers that seamlessly transition to other prototype screens.
     - Embedded navigation shortcut buttons directly linking to the 7-day usage tracker or calculator.
   - **Micro-Interactions**:
     - Multi-stage typing bubble animation with bouncing indicator.
     - Quick suggestion chips carousel for one-tap prompting.
     - Reset conversation button with toast confirmation.
   - **Floating AI Trigger (FAB)**:
     - Always accessible across screens with neon lime glow ring and live status dot.

10. **Simulated Checkout & Subscription Flow**:
    - Smooth slide-up bottom sheet modal for checkout.
    - Payment method selection: QRIS Instant, GoPay / E-Wallet, Credit Card / Debit, Mobile Balance.
    - Success celebration modal with confetti badge that updates the Home screen remaining quota in real-time.

---

## 🖥️ Presentation Controls (Top Toolbar)

- **View Mode Switcher**:
  - **Smartphone View**: Realistic mobile device frame with glossy bezel, dynamic island, real-time clock, floating AI assistant button, and smooth drop shadow.
  - **Figma Artboard Gallery View**: Renders all 9 prototype screens side-by-side on an expansive canvas for architectural and design inspection.
- **Screen Selector**: Jump instantly to any of the 9 screens via the dropdown.
- **Hotspot Hints**: Toggle pulsing dashed outlines to indicate clickable areas.
- **Reset**: Resets all state variables and returns to the initial Home screen.

---

## 🚀 Running Locally

```bash
# Clone the repository
git clone https://github.com/rekis-0103/wisebyte-prototype.git
cd wisebyte-prototype

# Start local server with Node.js
node server.js
```

Open your browser and navigate to `http://localhost:3000`.

---

## 📦 Project Structure

```
wisebyte-prototype/
├── index.html       # Semantic HTML structure for all 8 screens and presentation shell
├── style.css        # Vanilla CSS design system, typography, colors, animations
├── app.js           # Interactive state engine, sliders, comparison matrix, checkout flow
├── server.js        # Lightweight Node.js static server
├── README.md        # English documentation and usage guide
├── .gitignore       # Git ignore rules
└── .github/
    └── workflows/
        └── deploy.yml # GitHub Actions workflow for automated GitHub Pages deployment
```
