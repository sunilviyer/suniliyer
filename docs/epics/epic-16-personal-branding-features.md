# Epic 16: Personal Branding & Portfolio Features

**Status**: 🔴 Blocked (needs Epic 1-3)
**Priority**: P2 (Personal branding)
**Owner**: Development Team
**Estimated Effort**: 20-28 hours (3-4 days)
**Dependencies**: Epic 1 (Homepage), Epic 3 (Infrastructure)
**Blocks**: None

---

## Epic Goal

Add personal branding features including Seshan Intelligence company links, About Me page with resume, and mortgage calculator showcase (portfolio piece). These features integrate Sunil's professional identity with the AIDefence learning platform.

---

## Success Criteria

- ✅ Seshan Intelligence links integrated in header/footer
- ✅ About Me page with resume and professional bio
- ✅ Mortgage calculator functional and styled
- ✅ All features match UX spec earth-tone design
- ✅ Mobile responsive
- ✅ Seamless integration with learning paths

---

## Story Breakdown

### Story 16.1: Integrate Seshan Intelligence Links

**Goal**: Add prominent links to Seshan and Seshan Intelligence throughout the site.

**Tasks**:
1. Update header navigation to include:
   ```typescript
   <nav className="header-nav">
     <Link href="/">Learning Paths</Link>
     <Link href="/about">About</Link>
     <Link href="/tools/mortgage-calculator">Tools</Link>
     <Link href="https://seshanintelligence.com" target="_blank">
       Seshan Intelligence ↗
     </Link>
   </nav>
   ```

2. Add Seshan Intelligence logo/branding:
   - Optional: Add small "Powered by Seshan Intelligence" in footer
   - Link to Seshan Intelligence company site
   - Show Sunil's role/title

3. Create `/components/shared/SeshanBranding.tsx`:
   ```typescript
   export function SeshanBranding() {
     return (
       <div className="seshan-branding">
         <p className="text-sm text-khaki">
           Curated by{' '}
           <a
             href="https://seshanintelligence.com"
             target="_blank"
             rel="noopener noreferrer"
             className="text-history-primary hover:underline"
           >
             Seshan Intelligence
           </a>
         </p>
       </div>
     );
   }
   ```

4. Add to footer of all learning path pages

**Acceptance Criteria**:
- [ ] Seshan Intelligence link in header
- [ ] Seshan branding in footer
- [ ] Links open in new tab
- [ ] Branding respects UX spec colors
- [ ] Mobile responsive

**Estimated Effort**: 2-3 hours

---

### Story 16.2: Create About Me Page

**Goal**: Professional About Me page with resume, bio, and credentials.

**Tasks**:
1. Create `/app/about/page.tsx`:
   ```typescript
   import { Resume } from '@/components/about/Resume';
   import { ProfessionalBio } from '@/components/about/ProfessionalBio';

   export default function AboutPage() {
     return (
       <main className="about-page max-w-4xl mx-auto px-4 py-12">
         <h1 className="text-4xl font-bold text-ivory mb-8">
           About Sunil Seshan
         </h1>

         <ProfessionalBio />

         <section className="credentials mt-12">
           <h2 className="text-2xl font-bold text-history-primary mb-4">
             Credentials
           </h2>
           <ul>
             <li>AIGP (AI Governance Professional)</li>
             <li>AI Ethics & Governance Expert</li>
             <li>Seshan Intelligence Founder</li>
           </ul>
         </section>

         <Resume />

         <section className="contact mt-12">
           <h2 className="text-2xl font-bold text-history-primary mb-4">
             Get In Touch
           </h2>
           <a href="mailto:sunil@seshanintelligence.com" className="btn-primary">
             Contact Me
           </a>
         </section>
       </main>
     );
   }
   ```

2. Create `/components/about/ProfessionalBio.tsx`:
   - Professional headshot (if available)
   - 2-3 paragraph bio
   - Key achievements
   - Mission statement for AIDefence platform

3. Create `/components/about/Resume.tsx`:
   ```typescript
   export function Resume() {
     return (
       <section className="resume mt-12">
         <div className="flex justify-between items-center mb-6">
           <h2 className="text-2xl font-bold text-history-primary">Resume</h2>
           <a
             href="/downloads/sunil-seshan-resume.pdf"
             download
             className="btn-secondary"
           >
             Download PDF
           </a>
         </div>

         <div className="resume-content space-y-8">
           <section>
             <h3 className="text-xl font-semibold text-terminology-primary mb-3">
               Experience
             </h3>
             <div className="experience-item">
               <h4 className="font-bold text-ivory">Founder & CEO</h4>
               <p className="text-sm text-khaki">Seshan Intelligence</p>
               <p className="text-sm text-fern">2020 - Present</p>
               <ul className="list-disc list-inside mt-2 text-khaki">
                 <li>Lead AI governance consulting projects</li>
                 <li>Develop AI compliance frameworks</li>
                 <li>Train organizations on responsible AI</li>
               </ul>
             </div>
             {/* More experience items */}
           </section>

           <section>
             <h3 className="text-xl font-semibold text-terminology-primary mb-3">
               Education
             </h3>
             {/* Education items */}
           </section>

           <section>
             <h3 className="text-xl font-semibold text-terminology-primary mb-3">
               Certifications
             </h3>
             <ul className="list-disc list-inside text-khaki">
               <li>AI Governance Professional (AIGP)</li>
               <li>Certified Information Privacy Professional (CIPP)</li>
             </ul>
           </section>
         </div>
       </section>
     );
   }
   ```

4. Add resume PDF to `/public/downloads/`

5. SEO optimization:
   - Meta tags for About page
   - Open Graph image (professional headshot)
   - Schema.org Person markup

**Acceptance Criteria**:
- [ ] About page renders with bio and resume
- [ ] Resume displays experience, education, certifications
- [ ] PDF download works
- [ ] Professional headshot displays (if provided)
- [ ] Contact link works
- [ ] SEO optimized
- [ ] Mobile responsive

**Estimated Effort**: 6-8 hours

---

### Story 16.3: Build Mortgage Calculator Tool

**Goal**: Interactive mortgage calculator as portfolio showcase and practical tool.

**Tasks**:
1. Create `/app/tools/mortgage-calculator/page.tsx`:
   ```typescript
   'use client';

   import { useState } from 'react';
   import { MortgageForm } from '@/components/tools/MortgageForm';
   import { MortgageResults } from '@/components/tools/MortgageResults';
   import { calculateMortgage } from '@/lib/utils/mortgage';

   export default function MortgageCalculatorPage() {
     const [results, setResults] = useState(null);

     const handleCalculate = (inputs: MortgageInputs) => {
       const calculated = calculateMortgage(inputs);
       setResults(calculated);
     };

     return (
       <main className="mortgage-calculator max-w-6xl mx-auto px-4 py-12">
         <header className="mb-8">
           <h1 className="text-4xl font-bold text-ivory mb-4">
             Mortgage Calculator
           </h1>
           <p className="text-lg text-khaki">
             Calculate your monthly mortgage payment and see amortization schedule
           </p>
         </header>

         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
           <MortgageForm onCalculate={handleCalculate} />
           {results && <MortgageResults results={results} />}
         </div>
       </main>
     );
   }
   ```

2. Create `/components/tools/MortgageForm.tsx`:
   ```typescript
   export function MortgageForm({ onCalculate }: MortgageFormProps) {
     const [inputs, setInputs] = useState({
       loanAmount: 300000,
       interestRate: 6.5,
       loanTerm: 30,
       downPayment: 60000,
       propertyTax: 3000,
       insurance: 1200,
       hoa: 0,
     });

     return (
       <form className="mortgage-form bg-moss p-6 rounded-lg">
         <div className="form-group">
           <label htmlFor="loanAmount">Home Price</label>
           <input
             type="number"
             id="loanAmount"
             value={inputs.loanAmount}
             onChange={(e) => setInputs({ ...inputs, loanAmount: +e.target.value })}
             className="form-input"
           />
         </div>

         <div className="form-group">
           <label htmlFor="downPayment">Down Payment</label>
           <input
             type="number"
             id="downPayment"
             value={inputs.downPayment}
             onChange={(e) => setInputs({ ...inputs, downPayment: +e.target.value })}
             className="form-input"
           />
           <p className="text-sm text-khaki">
             {((inputs.downPayment / inputs.loanAmount) * 100).toFixed(1)}% of home price
           </p>
         </div>

         <div className="form-group">
           <label htmlFor="interestRate">Interest Rate (%)</label>
           <input
             type="number"
             step="0.01"
             id="interestRate"
             value={inputs.interestRate}
             onChange={(e) => setInputs({ ...inputs, interestRate: +e.target.value })}
             className="form-input"
           />
         </div>

         <div className="form-group">
           <label htmlFor="loanTerm">Loan Term (years)</label>
           <select
             id="loanTerm"
             value={inputs.loanTerm}
             onChange={(e) => setInputs({ ...inputs, loanTerm: +e.target.value })}
             className="form-select"
           >
             <option value={15}>15 years</option>
             <option value={30}>30 years</option>
           </select>
         </div>

         <div className="form-group">
           <label htmlFor="propertyTax">Annual Property Tax</label>
           <input
             type="number"
             id="propertyTax"
             value={inputs.propertyTax}
             onChange={(e) => setInputs({ ...inputs, propertyTax: +e.target.value })}
             className="form-input"
           />
         </div>

         <div className="form-group">
           <label htmlFor="insurance">Annual Insurance</label>
           <input
             type="number"
             id="insurance"
             value={inputs.insurance}
             onChange={(e) => setInputs({ ...inputs, insurance: +e.target.value })}
             className="form-input"
           />
         </div>

         <button
           type="button"
           onClick={() => onCalculate(inputs)}
           className="btn-primary w-full mt-4"
         >
           Calculate
         </button>
       </form>
     );
   }
   ```

3. Create `/components/tools/MortgageResults.tsx`:
   ```typescript
   export function MortgageResults({ results }: MortgageResultsProps) {
     return (
       <div className="mortgage-results bg-moss p-6 rounded-lg">
         <h2 className="text-2xl font-bold text-ivory mb-6">Results</h2>

         <div className="result-card bg-charcoal p-4 rounded mb-4">
           <p className="text-sm text-khaki">Monthly Payment</p>
           <p className="text-3xl font-bold text-history-primary">
             ${results.monthlyPayment.toLocaleString()}
           </p>
         </div>

         <div className="breakdown space-y-3">
           <div className="flex justify-between">
             <span className="text-khaki">Principal & Interest</span>
             <span className="text-ivory font-semibold">
               ${results.principalInterest.toLocaleString()}
             </span>
           </div>
           <div className="flex justify-between">
             <span className="text-khaki">Property Tax</span>
             <span className="text-ivory font-semibold">
               ${results.monthlyTax.toLocaleString()}
             </span>
           </div>
           <div className="flex justify-between">
             <span className="text-khaki">Insurance</span>
             <span className="text-ivory font-semibold">
               ${results.monthlyInsurance.toLocaleString()}
             </span>
           </div>
         </div>

         <div className="totals mt-6 pt-4 border-t border-fern">
           <div className="flex justify-between mb-2">
             <span className="text-khaki">Total Loan Amount</span>
             <span className="text-ivory font-semibold">
               ${results.loanAmount.toLocaleString()}
             </span>
           </div>
           <div className="flex justify-between">
             <span className="text-khaki">Total Interest Paid</span>
             <span className="text-ivory font-semibold">
               ${results.totalInterest.toLocaleString()}
             </span>
           </div>
         </div>

         <button
           onClick={() => setShowAmortization(!showAmortization)}
           className="btn-secondary w-full mt-6"
         >
           {showAmortization ? 'Hide' : 'Show'} Amortization Schedule
         </button>

         {showAmortization && (
           <AmortizationSchedule schedule={results.amortizationSchedule} />
         )}
       </div>
     );
   }
   ```

4. Create `/lib/utils/mortgage.ts`:
   ```typescript
   export interface MortgageInputs {
     loanAmount: number;
     interestRate: number;
     loanTerm: number;
     downPayment: number;
     propertyTax: number;
     insurance: number;
     hoa?: number;
   }

   export function calculateMortgage(inputs: MortgageInputs) {
     const principal = inputs.loanAmount - inputs.downPayment;
     const monthlyRate = inputs.interestRate / 100 / 12;
     const numPayments = inputs.loanTerm * 12;

     // Calculate monthly principal & interest
     const monthlyPI =
       (principal * monthlyRate * Math.pow(1 + monthlyRate, numPayments)) /
       (Math.pow(1 + monthlyRate, numPayments) - 1);

     const monthlyTax = inputs.propertyTax / 12;
     const monthlyInsurance = inputs.insurance / 12;
     const monthlyHOA = inputs.hoa || 0;

     const monthlyPayment = monthlyPI + monthlyTax + monthlyInsurance + monthlyHOA;

     // Calculate amortization schedule
     const schedule = [];
     let balance = principal;

     for (let month = 1; month <= numPayments; month++) {
       const interestPayment = balance * monthlyRate;
       const principalPayment = monthlyPI - interestPayment;
       balance -= principalPayment;

       schedule.push({
         month,
         principalPayment,
         interestPayment,
         balance: Math.max(0, balance),
       });
     }

     const totalInterest = schedule.reduce((sum, p) => sum + p.interestPayment, 0);

     return {
       monthlyPayment: Math.round(monthlyPayment),
       principalInterest: Math.round(monthlyPI),
       monthlyTax: Math.round(monthlyTax),
       monthlyInsurance: Math.round(monthlyInsurance),
       loanAmount: principal,
       totalInterest: Math.round(totalInterest),
       amortizationSchedule: schedule,
     };
   }
   ```

5. Create `/components/tools/AmortizationSchedule.tsx`:
   - Table showing year-by-year breakdown
   - Principal vs. interest pie chart (optional)
   - Export to CSV button

**Acceptance Criteria**:
- [ ] Mortgage calculator functional
- [ ] All inputs validated (positive numbers)
- [ ] Results calculate correctly
- [ ] Amortization schedule accurate
- [ ] Mobile responsive
- [ ] Matches UX spec earth-tone colors
- [ ] Export to CSV works (optional)

**Estimated Effort**: 8-10 hours

---

### Story 16.4: Create Tools Landing Page

**Goal**: Landing page for tools section (future expansion beyond mortgage calculator).

**Tasks**:
1. Create `/app/tools/page.tsx`:
   ```typescript
   export default function ToolsPage() {
     return (
       <main className="tools-page max-w-6xl mx-auto px-4 py-12">
         <h1 className="text-4xl font-bold text-ivory mb-8">Tools</h1>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
           <ToolCard
             title="Mortgage Calculator"
             description="Calculate your monthly mortgage payment and view amortization schedule"
             href="/tools/mortgage-calculator"
             icon="🏠"
           />

           {/* Future tools */}
           <ToolCard
             title="AI Risk Assessment"
             description="Coming Soon: Assess AI system risks using NIST AI RMF"
             href="#"
             icon="⚠️"
             comingSoon
           />
         </div>
       </main>
     );
   }
   ```

2. Add "Tools" to header navigation

**Acceptance Criteria**:
- [ ] Tools landing page renders
- [ ] Mortgage calculator card links correctly
- [ ] Future tools show "Coming Soon"
- [ ] Responsive grid layout

**Estimated Effort**: 2-3 hours

---

### Story 16.5: Footer Updates with Seshan Branding

**Goal**: Update footer to include Seshan Intelligence branding and About/Tools links.

**Tasks**:
1. Update `/components/layout/Footer.tsx`:
   ```typescript
   export function Footer() {
     return (
       <footer className="bg-charcoal border-t border-fern py-12">
         <div className="container mx-auto px-4">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             <div>
               <h3 className="text-lg font-bold text-ivory mb-4">AIDefence</h3>
               <p className="text-khaki">
                 Master AI governance through 5 expert-curated learning paths
               </p>
             </div>

             <div>
               <h3 className="text-lg font-bold text-ivory mb-4">Quick Links</h3>
               <ul className="space-y-2">
                 <li><Link href="/history">History</Link></li>
                 <li><Link href="/terminology">Terminology</Link></li>
                 <li><Link href="/risk">Risk & Ethics</Link></li>
                 <li><Link href="/responsibility">Responsibility</Link></li>
                 <li><Link href="/future">Future</Link></li>
                 <li><Link href="/about">About</Link></li>
                 <li><Link href="/tools">Tools</Link></li>
               </ul>
             </div>

             <div>
               <h3 className="text-lg font-bold text-ivory mb-4">Seshan Intelligence</h3>
               <p className="text-khaki mb-4">
                 Expert AI governance consulting and training
               </p>
               <a
                 href="https://seshanintelligence.com"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="btn-secondary"
               >
                 Visit Seshan Intelligence
               </a>
             </div>
           </div>

           <div className="border-t border-fern mt-8 pt-8 text-center">
             <p className="text-sm text-khaki">
               © {new Date().getFullYear()} Seshan Intelligence. All rights reserved.
             </p>
             <p className="text-sm text-fern mt-2">
               Curated by{' '}
               <a href="/about" className="text-history-primary hover:underline">
                 Sunil Seshan, AIGP
               </a>
             </p>
           </div>
         </div>
       </footer>
     );
   }
   ```

**Acceptance Criteria**:
- [ ] Footer shows Seshan Intelligence branding
- [ ] All quick links work
- [ ] Seshan Intelligence button links to company site
- [ ] Copyright year dynamic
- [ ] Mobile responsive

**Estimated Effort**: 2-3 hours

---

## Technical Architecture

### New Routes
```
/about                              # About Sunil page
/tools                              # Tools landing page
/tools/mortgage-calculator          # Mortgage calculator
```

### Components
```
/components
  /about
    /ProfessionalBio.tsx           # Bio section
    /Resume.tsx                    # Resume component
  /tools
    /MortgageForm.tsx              # Mortgage input form
    /MortgageResults.tsx           # Results display
    /AmortizationSchedule.tsx      # Amortization table
  /shared
    /SeshanBranding.tsx            # Seshan Intelligence branding
    /ToolCard.tsx                  # Tool preview card
```

### Utilities
```
/lib
  /utils
    /mortgage.ts                   # Mortgage calculations
```

---

## Dependencies

**Epic 16 depends on**:
- ✅ Epic 1: Homepage (header/footer structure)
- ✅ Epic 3: All Paths Infrastructure (routing, components)

**Epic 16 blocks**:
- None

---

## Success Metrics

- ✅ About page views: Track engagement
- ✅ Seshan Intelligence click-through rate: >10%
- ✅ Mortgage calculator usage: Track unique visitors
- ✅ Tool session time: ≥5 minutes average

---

## Definition of Done

- ✅ All 5 stories complete
- ✅ Seshan Intelligence links integrated
- ✅ About page with resume live
- ✅ Mortgage calculator functional
- ✅ Tools landing page created
- ✅ Footer updated with branding
- ✅ All features mobile responsive
- ✅ SEO optimized
- ✅ Code reviewed and merged

---

**Epic Status**: 🔴 Blocked (needs Epic 1, 3)
**Note**: This epic showcases Sunil's professional brand while adding value to site visitors with practical tools.
