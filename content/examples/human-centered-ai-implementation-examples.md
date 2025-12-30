# Human-Centered AI - Implementation Examples

## Purpose
Real-world examples of human-centered AI design principles in practice - automation levels, complementary human-AI collaboration, agency preservation, stakeholder consideration, and implementation approaches that put humans at the center of AI system design.

## Scope
- Automation spectrum Levels 1-6 with concrete examples
- Complementary strengths (AI vs human capabilities)
- Empowering vs disempowering design comparisons
- Successful human-AI collaboration case studies
- Stakeholder mapping and consideration
- Agency preservation vs erosion examples

---

## Part 1: Automation Spectrum (Levels 1-6)

### Overview: Choosing the Right Level of Human-AI Collaboration

The automation spectrum defines how much the AI does versus how much remains with humans. Choosing the right level depends on stakes, time criticality, expertise, reliability, error consequences, and user preferences.

---

### Level 1: Human Does Everything (No AI Assistance)

**Description:** AI provides no assistance. Human performs all tasks manually.

**When appropriate:**
- Task requires pure human judgment with no pattern-based component
- Stakes are extremely high and AI reliability is unproven
- Regulatory/legal requirements mandate human-only decision-making
- Relationship building or human connection is the primary value

**Example 1.1: Crisis Counseling**

**Use case:** Suicide prevention hotline

**Implementation:**
- No AI involvement in conversations
- Human counselors handle all interactions
- Counselors use their training, empathy, and judgment exclusively

**Rationale:**
- Stakes are life-and-death
- Human connection and empathy are therapeutic
- Unpredictable situations require human flexibility
- Liability concerns with AI involvement

**Note:** Even here, AI could assist at other levels (e.g., triaging calls, providing counselors with resource lookup, post-call documentation). Level 1 is chosen for the core counseling interaction.

---

### Level 2: AI Offers Suggestions (Human Chooses from Options)

**Description:** AI analyzes situation and presents multiple options. Human considers options and decides which (if any) to select.

**When appropriate:**
- Decision is consequential but not urgent
- Human expertise is available to evaluate options
- AI can identify patterns but human judgment needed to select
- User values having multiple choices

**Example 2.1: Spell-Check and Autocorrect Suggestions**

**Implementation:**
- AI identifies potential spelling/grammar issues (red/green underlines)
- Right-click shows suggested corrections
- User decides whether to accept, reject, or ignore each suggestion
- No automatic changes without user approval

**Strengths:**
- User retains full control
- AI accelerates by finding potential issues
- User learns from suggestions over time
- Easy to ignore when AI is wrong

**Example 2.2: Medical Differential Diagnosis Assistant**

**Use case:** Emergency department diagnostic support

**Implementation:**
- AI analyzes symptoms, vital signs, lab results, patient history
- AI generates list of 5-10 possible diagnoses ranked by probability
- Physician reviews list, adds or removes diagnoses based on clinical judgment
- Physician orders tests based on differential diagnosis
- Physician makes final diagnosis independently

**Outcome:**
- AI surfaces potential diagnoses physician might not immediately consider
- Physician catches AI errors (e.g., AI suggesting zebras when horses are obvious, or vice versa)
- Collaboration outperforms either alone
- Physician retains diagnostic authority and responsibility

**Example 2.3: Legal Contract Clause Suggestions**

**Use case:** Contract drafting software for lawyers

**Implementation:**
- AI analyzes contract type and jurisdiction
- AI suggests common clauses for this contract category
- Lawyer reviews each suggested clause
- Lawyer decides whether to include, modify, or skip each clause
- Lawyer adds custom clauses as needed
- Final contract fully reviewed and approved by lawyer

**Value:**
- Accelerates drafting by suggesting standard language
- Lawyer applies expertise to customize and adapt
- Reduces risk of missing standard protections
- Lawyer maintains professional responsibility

---

### Level 3: AI Recommends One Option (Human Accepts or Overrides)

**Description:** AI recommends a specific action. Human can accept recommendation, override with different action, or delay decision.

**When appropriate:**
- AI has high reliability for typical cases
- Time is limited but not critical (seconds to minutes)
- User wants efficiency but needs final say
- Errors are noticeable and correctable

**Example 3.1: GPS Navigation**

**Implementation:**
- AI recommends specific route based on traffic, distance, user history
- Driver can accept route (follow directions)
- Driver can override (choose different route from alternatives or deviate mid-route)
- AI recalculates if driver deviates without judgment or penalty

**Strengths:**
- Efficient for typical use (most users follow recommendation)
- Users maintain control (can override for local knowledge, preferences, or when AI is clearly wrong)
- Graceful override (deviation doesn't break system)

**Example 3.2: Loan Underwriting with Human Final Decision**

**Use case:** Mortgage application review

**Implementation:**
- AI scores application across multiple factors
- AI recommends: Approve ($450K max), Deny, or Request More Information
- Loan officer reviews recommendation with full explanation
- Loan officer can:
  - Accept recommendation (most common for clear cases)
  - Override with documented justification (e.g., local market knowledge, compensating factors)
  - Request manual underwriting for complex cases
- All overrides reviewed weekly for patterns (AI learning, bias detection)

**Safeguards:**
- Officer must document override reason (prevents bias, enables learning)
- Overrides monitored for discrimination patterns
- AI recommendation is starting point, not constraint

**Outcomes:**
- 87% of clear cases (high approval score or clear denial factors) - officer accepts recommendation
- 13% of cases - officer override or escalation (edge cases, unusual circumstances, local knowledge)
- Efficiency gains: 60% faster processing
- Quality gains: Overrides caught AI errors (e.g., not recognizing local employment patterns)

**Example 3.3: Content Moderation with Human Review**

**Use case:** Social media platform policy enforcement

**Implementation:**
- AI analyzes content for policy violations
- AI recommends: Approve, Remove, or Review
- For "Remove" recommendations on high-visibility content (>10K views):
  - Human moderator reviews content and AI explanation
  - Moderator can confirm (remove) or overturn (approve with notation)
  - Turnaround time: <2 hours
- For "Approve" and low-visibility "Remove":
  - Automated processing with sampling review
  - Users can appeal (triggers human review)

**Results:**
- 92% AI precision (of removals, 92% are actual violations)
- 8% overturn rate on human review (AI false positives)
- Appeals: 11% of AI removals appealed, 18% of appeals successful
- Human review prevents AI over-enforcement on nuanced cases

---

### Level 4: AI Acts Unless Human Vetoes (Time-Limited Override)

**Description:** AI takes action automatically unless human intervenes within time window. Human has opportunity to veto but must act quickly.

**When appropriate:**
- Time is somewhat critical (minutes, not hours)
- AI reliability is high but not perfect
- Impact of wrong action is moderate and correctable
- User attention is limited

**Example 4.1: Spam Filtering with Auto-Move**

**Implementation:**
- AI classifies email as spam
- AI automatically moves email to spam folder
- User can:
  - Check spam folder periodically
  - Mark emails as "not spam" (moves back, teaches AI)
  - Whitelist senders (prevents future filtering)
- No pre-move notification for each email (would be overwhelming)

**Tradeoffs:**
- Convenience: User's inbox is clean automatically
- Risk: Occasional false positive (important email in spam)
- Mitigation: Easy override, spam folder review, appeal mechanism

**Example 4.2: Fraud Detection with Auto-Block + Customer Notification**

**Use case:** Credit card fraud prevention

**Implementation:**
- AI detects unusual transaction pattern
- AI blocks transaction automatically
- AI immediately sends notification: "We blocked a $850 transaction at [merchant]. If this was you, click here to approve."
- Customer can approve (authorizes similar future transactions from merchant)
- Customer can confirm block (increases fraud detection model confidence)
- Customer has 10 minutes to approve before declined transaction is final
- After 3 auto-blocks, human fraud analyst reviews account

**User experience:**
- Most fraud blocks correct (true positives) - customer appreciates protection
- Occasional false positives - customer approves quickly, minimal inconvenience
- Better than Level 3 (requiring approval for all flagged transactions - too frequent)
- Better than Level 5 (no override opportunity - frustrating false positives)

**Example 4.3: Backup System with Auto-Execution + Delay**

**Implementation:**
- AI schedules backup for 2:00 AM daily
- At 1:55 AM, AI displays notification: "System backup starting in 5 minutes. Click to delay."
- If no user interaction, backup executes at 2:00 AM
- User can delay backup for 1, 3, or 6 hours
- System learns: If user consistently delays backups during certain activities (e.g., video calls), AI reschedules automatically

**Rationale:**
- Backups are important (shouldn't be forgotten)
- Backups are disruptive (slow down system)
- Balance: Automatic execution with escape hatch

---

### Level 5: AI Acts Then Informs (Post-Action Notification)

**Description:** AI acts autonomously and tells human what it did afterward. Human cannot veto in real-time but can reverse or adjust post-action.

**When appropriate:**
- Action must be very fast (seconds) or continuous
- AI reliability is very high
- Impact is low-to-moderate and reversible
- Real-time human oversight is impractical

**Example 5.1: Automatic Software Updates**

**Implementation:**
- AI monitors for security patches
- AI downloads and installs updates automatically (overnight or during idle periods)
- AI notifies user after installation: "Your system was updated with security patches. Restart to complete."
- User can:
  - Restart now or delay
  - Roll back update if problems occur (rare)
  - Disable auto-updates (shifts to Level 3 - recommend, user approves)

**Rationale:**
- Security critical: Delaying updates creates vulnerabilities
- User burden: Asking users to approve every security update leads to neglect
- Risk mitigation: Updates tested before release, rollback available

**Example 5.2: Email Auto-Filing and Categorization**

**Use case:** Email organization

**Implementation:**
- AI reads incoming emails
- AI automatically:
  - Files emails into folders (Project A, Project B, Reference, etc.)
  - Categorizes as Primary, Social, Promotions
  - Applies labels
- Daily digest: "I filed 23 emails today: 8 to Project A, 5 to Project B, 10 to Reference"
- User can:
  - Move emails to different folders (teaches AI)
  - Search across all folders (find misfile)
  - Disable auto-filing for specific senders/topics

**Value:**
- Inbox organization without manual effort
- Errors are low-impact (can search, can move)
- Learning improves accuracy over time

**Example 5.3: Smart Home Climate Control**

**Implementation:**
- AI adjusts thermostat throughout day based on:
  - Weather forecast
  - Occupancy patterns (learned)
  - Energy prices (time-of-use rates)
  - User comfort preferences (learned from manual adjustments)
- No real-time approval requested for each adjustment
- Monthly report: "I adjusted temperature 142 times this month, saving $23 in energy costs while maintaining your preferred 68-72°F range"
- User can:
  - Manually adjust anytime (AI learns from adjustments)
  - Set hard limits (never below X, never above Y)
  - Disable auto-adjustment (shifts to Level 3 - recommend, user approves)

**Tradeoffs:**
- Convenience vs Control
- Energy savings vs Constant perfect temperature
- Most users prefer convenience after trust is established

---

### Level 6: Fully Autonomous (No Human Information or Intervention)

**Description:** AI acts without informing human or allowing intervention. Human has no awareness or control over individual decisions.

**When appropriate:**
- Decisions must be extremely fast (milliseconds)
- Human intervention is physically impossible in timeframe
- AI reliability is extremely high
- Consequences of errors are manageable
- Regulatory environment permits

**WARNING:** Level 6 removes humans from loop entirely. Use only when absolutely necessary and with extraordinary safeguards.

**Example 6.1: Anti-Lock Braking System (ABS)**

**Implementation:**
- AI monitors wheel speed sensors
- When wheel lock detected, AI modulates brake pressure 15 times per second
- No driver awareness or input during operation
- Driver only knows ABS activated by pedal vibration (post-hoc)

**Justification:**
- Speed required: Humans cannot modulate brakes 15x/second
- Reliability: ABS has decades of proven safety record
- Reversibility: Driver can disable ABS system (though rarely advisable)
- Regulation: Approved and often required by law

**Example 6.2: High-Frequency Trading Algorithms**

**Use case:** Algorithmic stock trading

**Implementation:**
- AI monitors market data streams
- AI executes trades in milliseconds based on patterns
- Humans set parameters (max position size, risk limits, strategy) but don't approve individual trades
- Daily reconciliation: Human traders review trades, profits/losses, unusual patterns
- Circuit breakers: AI automatically stops if losses exceed threshold

**Risks:**
- Flash crashes (AI-driven market instability)
- No human judgment on individual trades
- Errors compound rapidly

**Safeguards:**
- Regulatory circuit breakers (market-wide trading halts)
- Firm-specific risk limits (max loss before auto-shutdown)
- Kill switch (human can disable all algorithms instantly)
- Regular human review of aggregate behavior

**Example 6.3: Spam Filtering (Internal Quarantine)**

**Use case:** Enterprise email security

**Implementation:**
- AI scans all incoming email
- AI automatically quarantines high-confidence malware/phishing (no user awareness)
- IT security reviews quarantine weekly
- AI deletes oldest quarantined items after 30 days

**Rationale:**
- Threats require immediate action (can't wait for user review)
- False positives rare for high-confidence threats
- User doesn't need to know about stopped attacks
- IT oversight for quality control

**Difference from Level 4 spam (user spam folder):**
- Level 4: User can review and override
- Level 6: User never sees these emails (too dangerous)

---

## Part 2: Complementary Strengths (AI + Human Collaboration)

### AI Strengths

| Capability | Description | Example Application |
|------------|-------------|---------------------|
| **Processing large data volumes** | Analyze millions of records in seconds | Fraud detection: Review 10M transactions/day |
| **Consistent pattern application** | Apply same logic uniformly without fatigue | Loan underwriting: Apply criteria consistently across 100K applications |
| **Tireless operation** | Never gets tired, bored, or distracted | 24/7 customer service: Answer common questions anytime |
| **Subtle pattern detection** | Identify patterns across many variables humans can't track mentally | Medical diagnosis: Correlate 500+ biomarkers |
| **24/7 availability** | Operate continuously without breaks | Website accessibility compliance: Continuous monitoring |
| **Speed** | Make decisions in milliseconds | Autonomous driving: React to obstacles faster than human |
| **Scalability** | Handle volume spikes without degradation | Tax season: Process 10x normal return volume |

### Human Strengths

| Capability | Description | Example Application |
|------------|-------------|---------------------|
| **Context understanding** | Understand broader situation beyond data | Customer service: Recognize frustrated customer needs empathy, not policy recitation |
| **Common sense and world knowledge** | Apply general knowledge not in training data | Hiring: Recognize career gap due to pandemic is not red flag |
| **Novel situation adaptation** | Handle unprecedented situations creatively | Crisis management: Adapt to unforeseen disaster scenario |
| **Ethical judgment** | Navigate moral nuance and competing values | Medical triage: Balance fairness, urgency, likelihood of success |
| **Human communication** | Communicate with empathy, nuance, persuasion | Negotiation: Build rapport and find win-win solutions |
| **Creative problem-solving** | Invent new approaches to problems | Engineering: Design novel solution to design constraint |
| **Recognizing "something doesn't feel right"** | Detect anomalies even without articulating why | Security: Notice unusual pattern even if not flagged by system |
| **Emotional intelligence** | Read and respond to emotions | Leadership: Recognize team member needs support |

### Effective Collaboration Examples

**Example 1: Radiology - Augmented Interpretation**

**Poor approach (AI replacement):**
- AI reads all scans automatically
- AI generates reports
- Human radiologist reviews flagged abnormalities only
- Result: Radiologists deskill, can't catch AI errors, don't understand outputs

**Better approach (AI augmentation):**
- Radiologist reads scan as trained
- AI highlights areas of potential concern
- Radiologist examines highlighted areas with extra attention
- Radiologist makes diagnosis combining AI input with own expertise
- If human disagrees with AI, documents reasoning (teaches AI, catches bias)

**Why better:**
- Radiologist maintains skill
- AI reduces missed findings (catches subtle patterns)
- Human catches AI false positives (common sense, clinical context)
- Collaboration outperforms either alone

**Results:** 12% reduction in missed findings, 15% reduction in false positives

---

**Example 2: Customer Service - Tiered Support**

**System design:**
- **AI handles:** Common questions (hours, returns, tracking), simple troubleshooting (Level 5 automation)
- **Human handles:** Complex issues, emotional situations, escalations, complaints
- **Collaboration:** AI provides human agents with customer history, sentiment analysis, suggested solutions (Level 2)

**Complementary strengths in action:**

| Situation | AI Contribution | Human Contribution | Outcome |
|-----------|-----------------|-------------------|---------|
| "Where's my order?" | Instant lookup of tracking info | (Not needed for routine case) | Resolved in 30 seconds |
| "I've been waiting 3 weeks, this is ridiculous!" | Alert to human: High frustration, valuable customer | Empathy, apology, expedited shipping, goodwill gesture | Customer retained |
| "How do I return this?" | Standard return policy, prepaid label generation | (Not needed for routine case) | Resolved in 1 minute |
| "Your product broke and injured my child" | Escalation to human immediately | Empathy, safety investigation, legal routing | Proper handling of serious incident |
| Complex technical issue | Suggest troubleshooting steps from knowledge base | Walk through steps with customer, adapt based on responses, escalate to engineering if needed | Issue resolved with personalized support |

**Results:**
- 78% of inquiries resolved by AI (Level 5 automation)
- Human agents handle only complex/emotional cases (job satisfaction up 31%)
- Resolution time: 65% faster overall
- Customer satisfaction: +18% (fast resolution for simple, human empathy for complex)

---

## Part 3: Empowering vs Disempowering Design

### Example 1: Navigation Apps

**Disempowering Design (Agency Erosion):**

- Always provides turn-by-turn directions
- Never shows overview map or alternative routes
- Never explains why route was chosen
- Doesn't tolerate deviation (recalculates with urgent tone)
- Provides no learning mode

**User impact:**
- User never learns routes or develops mental maps
- User never considers alternatives (fastest isn't always best)
- User's navigational judgment atrophies
- When app fails (no signal, dead battery), user is helpless

**Empowering Design (Agency Preservation):**

- Provides route suggestions with alternatives explained
  - "Route A: 25 min via highway (usually fastest)"
  - "Route B: 28 min via scenic route (less traffic stress)"
  - "Route C: 30 min via Main St (most direct)"
- Shows map overview so users develop mental models
- Explains routing logic: "Avoiding I-5 due to accident"
- Allows easy deviation and recalculates gracefully
- Offers "learning mode": Map visible, prompts only when user seems lost
- Teaches navigation skills: "Next time, watch for the blue water tower - that's your turn landmark"

**User impact:**
- User remains capable navigator
- User develops local knowledge
- User makes informed route choices
- When app fails, user can navigate independently
- User appreciation: "I learned the city by using this app"

---

### Example 2: Writing Assistance

**Disempowering Design:**

- Auto-completes sentences as user types
- Auto-applies grammar corrections without showing changes
- Rewrites sentences automatically to "improve" them
- No control over style, tone, formality

**User impact:**
- User stops thinking about sentence structure
- User's writing skill stagnates or declines
- Output doesn't sound like user's voice
- User can't write well without AI assistance

**Empowering Design:**

- Suggests completions (user can Tab to accept or keep typing)
- Shows grammar suggestions (user decides whether to accept)
- Offers rewrite suggestions (user sees before/after, chooses)
- Allows user to set style preferences (formal, casual, technical, etc.)
- Explains suggestions: "Fragment: This sentence lacks a main verb"
- Provides educational tips: "Consider active voice here for stronger impact"

**User impact:**
- User improves writing skills over time
- User maintains voice and style
- User makes informed choices about suggestions
- User can write well independently when needed

---

### Example 3: Hiring Assistance

**Disempowering Design:**

- AI ranks all candidates 1-100 automatically
- Hiring manager interviews only top 10
- No explanation of ranking logic
- No way to challenge or override rankings

**User impact:**
- Hiring manager doesn't develop candidate evaluation skills
- Manager can't explain hiring decisions to candidates
- Manager misses great candidates AI didn't recognize (e.g., non-traditional backgrounds)
- AI bias goes unchallenged

**Empowering Design:**

- AI provides structured candidate summaries (education, experience, skills matched to requirements)
- AI highlights: Strong matches, potential concerns, interesting non-traditional factors
- Hiring manager reviews summaries and decides who to interview
- Manager can add candidates AI didn't rank highly
- AI provides comparison tool (how does Candidate A vs B compare on X criterion?)
- AI learns from manager's selections over time

**User impact:**
- Manager develops better evaluation skills
- Manager can explain hiring decisions based on criteria
- Manager catches AI oversights
- Collaboration produces better hires than either alone

---

## Part 4: Real-World Success Stories

### Case Study 1: Medical AI Collaboration at Cleveland Clinic

**Challenge:** Improve sepsis detection (life-threatening infection requiring rapid treatment)

**Poor approach they avoided:** Replace clinicians with AI algorithm auto-triggering sepsis protocol

**Human-centered approach implemented:**

**System design:**
- AI continuously monitors patient vitals, labs, clinical notes
- AI calculates sepsis risk score every 15 minutes
- When risk score crosses threshold: Alert to nurse + physician
- Alert includes:
  - Risk score with confidence level
  - Contributing factors ("Elevated lactate, dropping blood pressure, temperature spike")
  - Trend (is risk increasing or decreasing?)
  - Suggested interventions from protocol
- Clinician reviews alert with full patient context
- Clinician decides whether to initiate sepsis protocol or document why not

**Complementary strengths:**
- AI: Tireless monitoring, subtle pattern detection (e.g., combination of minor changes signaling sepsis)
- Human: Clinical context (e.g., patient has other explanation for symptoms), judgment (e.g., do benefits of aggressive treatment outweigh risks for this frail patient?)

**Results:**
- 35% improvement in early sepsis detection
- 18% reduction in sepsis mortality
- 3% reduction in false positive sepsis protocols (clinicians catch AI overreactions)
- Clinician trust: 89% report AI helps them provide better care
- No job displacement: Clinicians doing higher-value work (decision-making, not monitoring)

**Key success factors:**
- AI designed as assistant, not replacement
- Transparent AI (clinicians understand why alert was triggered)
- Easy override (no friction for clinical judgment)
- Learning loop (clinician feedback improves AI)

---

### Case Study 2: Human-AI Customer Service at Telecommunications Company

**Challenge:** Handle 50,000 customer service calls/day with better satisfaction and lower cost

**Implementation (Tiered automation):**

**Tier 1 - AI (Level 5 automation): Simple inquiries**
- "What's my balance?" → AI answers from database
- "When's my bill due?" → AI answers
- "Pay bill" → AI processes payment
- "Report outage" → AI logs and provides estimate
- 65% of calls handled entirely by AI
- Average handle time: 45 seconds

**Tier 2 - AI + Human (Level 2-3 automation): Moderate complexity**
- AI gathers information first: "I see you're calling about your June bill. I notice a $15 increase. Would you like to discuss that?"
- AI transfers to human agent with full context
- Agent sees:
  - AI conversation summary
  - Customer sentiment (frustrated, neutral, satisfied)
  - Account history and previous interactions
  - Suggested solutions from knowledge base
- Agent uses judgment to resolve (AI suggestions help but don't constrain)
- 28% of calls

**Tier 3 - Human (Level 1): Complex/emotional**
- Complaints, escalations, sales, retention
- AI provides context but human handles entirely
- 7% of calls

**Results:**
- Customer satisfaction: +22% (fast resolution for simple, human empathy for complex)
- Cost: -40% (AI handles volume, humans handle value)
- Agent satisfaction: +31% (more interesting work, AI does tedious tasks)
- Agent skill development: Improved (handling complex cases develops expertise)

**Why human-centered:**
- Automation level matched to stakes and complexity
- Humans empowered with AI insights, not replaced
- Customers get appropriate interaction (efficiency for simple, empathy for complex)
- Agents doing meaningful work, not script-reading

---

### Case Study 3: Collaborative Fraud Detection at Bank

**Previous system (AI-dominant):**
- AI flagged transactions
- Human reviewers approve or deny flags
- Reviewers had no visibility into AI logic
- High false positive rate (20% of blocks were legitimate transactions)
- Customer frustration, reviewer frustration

**Human-centered redesign:**

**System components:**
- AI risk score (0-100) for each transaction
- AI explanation: "Flagged because: (1) First time at this merchant, (2) Large amount ($850 vs avg $47), (3) Unusual location (200 miles from home)"
- Fraud analyst reviews with context:
  - Customer history and patterns
  - Recent account activity
  - Merchant information
  - Similar cases and outcomes
- Analyst decision: Approve, Block, Contact Customer
- Analyst can adjust AI for this customer: "Customer frequently travels for work, don't flag location changes alone"

**Collaboration in action:**

**Case 1 - AI catches fraud human might miss:**
- Transaction: $47 purchase at grocery store (small, routine)
- AI flags: Unusual time (3 AM), unusual frequency (3rd grocery purchase today)
- Human investigates: Customer's card was used at 3 stores in 20 minutes across 10-mile area
- Human conclusion: Fraud (card was stolen)
- Action: Block card, contact customer
- Result: Actual fraud caught by AI pattern detection + human investigation

**Case 2 - Human catches AI false positive:**
- Transaction: $2,400 purchase at electronics store in different state
- AI flags: Large amount, unusual location, unusual merchant category
- Human sees context: Customer recently moved (address change filed), purchase is at store near new address
- Human conclusion: Legitimate (customer buying electronics for new home)
- Action: Approve, teach AI (moved customers buy home goods)
- Result: Customer not inconvenienced by false positive

**Results:**
- Fraud catch rate: +15% (AI patterns + human investigation)
- False positive rate: -60% (human catches AI overreactions)
- Customer satisfaction: +28% (fewer false declines)
- Analyst satisfaction: +19% (doing investigation, not just button-clicking)

---

## Part 5: Stakeholder Mapping Examples

### Example 1: Hiring AI Stakeholder Map

**Primary users (who operates the AI):**
- Recruiters (screen resumes)
- Hiring managers (review candidate rankings)
- HR team (configure system)

**Secondary users (use outputs without direct interaction):**
- Interview panels (receive recommended candidates)
- Department heads (receive diversity metrics)

**Affected non-users (subject to AI decisions):**
- Job applicants (scored and ranked by AI)
- Current employees (if AI used for promotions)

**Indirect stakeholders:**
- Company reputation (AI discrimination would harm brand)
- Industry talent pool (if AI systematically excludes groups)
- Regulatory agencies (EEOC oversight)

**Design implications:**

| Stakeholder | Needs | Design Response |
|-------------|-------|-----------------|
| **Recruiters** | Efficiency, accuracy, explainability | AI screens and ranks, provides explanation for rankings |
| **Hiring managers** | Control, ability to override, diverse candidate pool | Override capability, diversity monitoring, can add candidates AI didn't rank highly |
| **Applicants** | Fairness, transparency, ability to challenge | Explanation of decision factors, appeal process, bias testing |
| **Company** | Legal compliance, reputation protection | Regular bias audits, documentation, discrimination safeguards |
| **Regulators** | Demonstrable non-discrimination | Audit trail, statistical monitoring, transparent criteria |

**Conflicting interests identified:**
- Recruiter efficiency vs Applicant fairness (solution: efficient system that's also transparent)
- Manager preference for known backgrounds vs Company diversity goals (solution: highlight diverse candidates, explain value)

---

### Example 2: Healthcare Diagnostic AI Stakeholder Map

**Primary users:**
- Physicians (use AI recommendations)
- Radiologists (use AI image analysis)

**Secondary users:**
- Nurses (act on diagnostic-based care plans)
- Specialists (receive referrals based on diagnoses)

**Affected non-users:**
- Patients (receive treatment based on AI-assisted diagnoses)
- Patients' families (affected by diagnostic accuracy)

**Indirect stakeholders:**
- Hospital (liability, reputation, cost)
- Insurance companies (pay for treatments)
- Healthcare system (broader impacts of diagnostic patterns)
- Regulators (FDA, state medical boards)

**Design implications:**

| Stakeholder | Needs | Design Response |
|-------------|-------|-----------------|
| **Physicians** | Diagnostic accuracy, efficiency, trust, autonomy | AI as assistant (not replacement), transparent reasoning, easy override |
| **Patients** | Accurate diagnosis, understanding of decision, human connection | Human physician maintains authority, explanation provided, patient can request second opinion |
| **Hospital** | Liability protection, quality improvement | Documentation of AI use, human accountability, continuous monitoring |
| **Regulators** | Patient safety, accountability, quality assurance | Clinical validation, audit trails, adverse event reporting |

**Vulnerable populations considered:**
- Elderly patients: May need simpler explanations, may trust technology less
- Limited English proficiency: Explanations must be translatable
- Rare diseases: AI trained on common conditions may miss rare ones
- Pediatric patients: Different diagnostic criteria than adults

**Design for vulnerable populations:**
- Confidence indicators (AI less confident on rare conditions - triggers specialist referral)
- Multilingual explanations
- Age-specific models
- Human oversight especially strong for atypical cases

---

### Example 3: Content Recommendation AI Stakeholder Map

**Primary users:**
- Platform users (see recommended content)

**Secondary users:**
- Content creators (reach affected by recommendation algorithm)
- Advertisers (ad placement affected by content recommendations)

**Affected non-users:**
- Children exposed to content via other users' feeds
- Society (aggregate effects of content amplification)

**Indirect stakeholders:**
- Platform company (reputation, liability, ad revenue)
- Regulators (misinformation, child safety concerns)
- Democratic institutions (affected by viral content)

**Design implications:**

| Stakeholder | Needs | Often Conflicting Interests |
|-------------|-------|----------------------------|
| **Platform users** | Engaging content, control over recommendations | Want personalized content BUT privacy concerns about data collection |
| **Content creators** | Fair chance for content to reach audience | Want organic reach BUT algorithm favors engagement over quality |
| **Advertisers** | Reach target audiences | Want ads near engaging content BUT not controversial/harmful content |
| **Children/parents** | Age-appropriate content | Children want freedom BUT parents want protection |
| **Society** | Reduced misinformation, reduced polarization | Free speech concerns BUT viral misinformation causes harm |
| **Platform** | User engagement (revenue) | Higher engagement via controversy BUT reputation damage from harmful content |

**Conflicts to navigate:**
- Engagement vs Well-being: Most engaging content often most polarizing/enraging
- Personalization vs Privacy: Best recommendations require most data collection
- Creator reach vs User experience: Showing all creators' content equally would overwhelm users
- Free speech vs Harm prevention: Removing content risks censorship, amplifying harmful content causes damage

**Human-centered responses:**
- User controls: Allow users to adjust recommendation settings (more/less personalized, topic preferences)
- Transparency: Explain why content was recommended
- Diverse recommendations: Don't trap users in filter bubbles
- Friction for sharing: Add delay/context before sharing emotional content
- Human review: Human oversight for content moderation
- Stakeholder council: Include users, creators, experts in governance

---

## Part 6: Implementation Process Examples

### Implementation Example: Predictive Maintenance AI for Manufacturing

**Phase 1: Research Before Building (3 months)**

**User research (maintenance technicians):**
- Shadowed technicians for 40 hours
- Observed: Technicians use equipment sounds, vibrations, temperature to diagnose
- Observed: Current system generates too many false alarms (technicians ignore them)
- Interview findings: "We need to know WHY the system thinks something is wrong, not just that it is"

**Stakeholder interviews:**
- Operations manager: "Minimize downtime, but unplanned maintenance is expensive"
- Plant manager: "Can't have technicians chasing false alarms"
- Technicians: "Want to catch failures early, but need to trust the system"
- Finance: "What's the ROI? Reduced downtime vs system cost"

**Contextual inquiry:**
- Documented current workflow: Scheduled maintenance every 500 hours + reactive repairs
- Identified pain points: Failures still happen between scheduled maintenance, wasting production time
- Identified informal practices: Senior technicians keep logs of subtle changes preceding failures

**Key insights:**
- Current alarm systems have 40% false positive rate - credibility destroyed
- Technicians have expertise to interpret subtle signals - AI should augment, not replace
- Different equipment types have different failure modes - one-size-fits-all doesn't work

**Phase 2: Design Iteratively (4 months)**

**Prototype 1 - Simple threshold alerts:**
- AI monitors vibration levels
- Alert when vibration exceeds threshold
- Tested with 5 technicians for 2 weeks
- Feedback: "Too many false alarms, same problem as old system"
- Learning: Need pattern-based, not just threshold-based detection

**Prototype 2 - Pattern detection with explanation:**
- AI monitors vibration, temperature, sound, operating parameters
- AI detects patterns that historically preceded failures
- Alert includes: Equipment ID, pattern detected, historical context ("This pattern preceded bearing failure 8 times in past year")
- Tested with 5 technicians for 4 weeks
- Feedback: "Much better! I can see WHY you think something is wrong. But I need more time info - how urgent is this?"

**Prototype 3 - Time-to-failure prediction + prioritization:**
- AI predicts estimated time to failure (e.g., "Bearing likely to fail in 24-72 hours")
- AI prioritizes alerts (Critical = <24hr, Important = 24-72hr, Monitor = >72hr)
- Technician interface: Map view showing all equipment with alert status
- Drill-down: Historical trend, pattern explanation, recommended action
- Override capability: Technician can delay alert with reason ("Scheduled shutdown next week anyway")
- Tested with 10 technicians for 8 weeks across 2 plants
- Feedback: "This works. I trust these alerts and know how to act on them."

**Phase 3: Pilot Deployment (6 months)**

**Pilot at Plant A:**
- 50 critical machines monitored
- Technicians trained on system use (4 hours classroom + 2 weeks supervised use)
- Weekly review meetings: Technicians + operations + AI team review alerts, discuss false positives/negatives
- Iterative improvements based on feedback

**Pilot results:**
- Unplanned downtime: -31% (caught failures before catastrophic breakdown)
- False positive rate: 12% (vs 40% for old system)
- Technician trust: 8.2/10 ("I trust these alerts")
- ROI: Positive after 4 months (downtime reduction > system cost)

**Key success factors:**
- Technicians involved from day 1
- Iterative design based on real feedback
- System augments technician expertise (doesn't replace)
- Transparent AI (technicians understand reasoning)

**Phase 4: Full Deployment (ongoing)**

**Rollout to 5 plants:**
- Gradual rollout plant by plant
- Local customization (different equipment types, different failure patterns)
- Continuous learning (AI learns from new failure data)
- Ongoing training (new technicians, system updates)

**Evaluation (after 2 years):**
- Unplanned downtime: -42% across all plants
- Maintenance cost: -18% (targeted maintenance vs scheduled overhauls)
- Technician skill: Improved (system teaches failure patterns)
- Safety: Improved (fewer emergency repairs, better planning)
- AI accuracy: Improved over time (learning from technician feedback)

**Human-centered outcomes:**
- Technicians retained jobs (doing higher-value diagnostic work)
- Technician expertise valued (AI learns from them)
- Human-AI collaboration superior to either alone

---

## Summary: Keys to Human-Centered AI Success

**Design Principles:**
1. Start with human needs, not AI capabilities
2. Choose automation level appropriate to stakes and context
3. Design for complementary strengths (AI + human better than either alone)
4. Preserve human agency and skill
5. Consider all stakeholders, especially vulnerable populations
6. Build trust through transparency and control

**Process Principles:**
1. Research before building (understand users, context, workflows)
2. Iterate based on real user feedback
3. Pilot before broad deployment
4. Evaluate human outcomes, not just AI accuracy
5. Continuous improvement driven by human-AI collaboration

**When Human-Centered AI Works:**
- Technology serves human goals
- Humans remain capable and empowered
- Trust is calibrated to actual trustworthiness
- Collaboration outperforms either alone
- All stakeholders benefit (or conflicts are navigated transparently)

**When It Fails:**
- AI optimized without considering human factors
- Humans deskilled and unable to supervise AI
- Trust miscalibrated (over-reliance or under-reliance)
- AI or humans alone would be better than poor collaboration
- Some stakeholders harmed for others' benefit

---

**Related Templates:**
- Human-Centered AI Design Framework (assessment, automation level selection, implementation process)

**Related Articles:**
- Human-Centered AI Design - Keeping People in the Loop
- The Black Box Problem - Why AI Explainability Matters
- Building Trustworthy AI - The Seven Pillars
