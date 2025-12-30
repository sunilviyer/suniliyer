
![Article 132: AI and Copyright – The Unresolved Legal Questions]({{IMAGE_PLACEHOLDER_article-132-ai-and-copyright-the-unresolved-legal-questions}})

---
category: "Legal Frameworks"
learning_objectives:

  - "Understand the key concepts and principles of ai governance frameworks"
  - "Implement compliance strategies in real-world scenarios"
  - "Evaluate regulatory requirements for organizational compliance"
seo_keywords:

  - "article"
  - "copyright"
  - "AI governance"
  - "artificial intelligence"
  - "three"
word_count: 2257
processed_date: "2025-12-18T20:00:53.666Z"
---


## The Three Big Questions


### Question 1: Is Training AI on Copyrighted Material Legal?

**The core issue:** AI systems learn by processing enormous amounts of data, much of which is copyrighted—books, articles, images, code, music. Did AI companies need permission to use this material for training?

**The AI company argument:**

- Training is "transformative"—the AI doesn't copy works, it learns patterns
- Similar to how humans learn by reading books they don't own
- Training is a "fair use" (U.S.) or falls under exceptions (EU)
- Requiring licenses would make AI development impossible

**The copyright holder argument:**

- Training involves making copies (into training datasets)
- Commercial purpose undermines fair use claims
- Copyright holders have the right to control how their work is used
- If AI replaces the market for original works, that's not fair use

**Current legal status:**

- No definitive court ruling in the U.S. yet
- Major cases pending (NYT v. OpenAI, visual artists v. Stability AI)
- EU has some training exceptions but with opt-out rights
- Japan has broader AI training exceptions


### Question 2: Who Owns AI-Generated Content?

**The core issue:** When AI creates something—an image, a story, code—who owns the copyright?

**Possible answers:**

| Claimant | Argument | Counter-argument |
|----------|----------|------------------|
| AI company | Created the system that generated it | Didn't create the specific output |
| User | Provided the prompt that directed creation | Minimal creative input |
| No one (public domain) | Copyright requires human authorship | Leaves creators unprotected |
| Shared/complex | Multiple contributors | Difficult to administer |

**U.S. Copyright Office position:**

- Copyright requires human authorship
- Pure AI output cannot be copyrighted
- Human selection, arrangement, or modification may qualify
- Case-by-case analysis required

**Example:** An AI-generated image is probably not copyrightable on its own. But a comic book where a human selected AI images, arranged them, and added dialogue might be copyrightable as a compilation.


### Question 3: Does AI Output Infringe Existing Copyrights?

**The core issue:** If AI generates something that looks like an existing copyrighted work, is that infringement?

**When this might happen:**

- AI image looks very similar to a famous photograph
- AI text closely matches passages from copyrighted books
- AI music sounds like a specific artist's song
- AI code matches open-source code with specific licenses

**The complication:** AI doesn't "copy" in the traditional sense—it generates new content based on patterns learned. But if the output is substantially similar to copyrighted input, it might still infringe.

**Example:** The New York Times showed that ChatGPT could reproduce nearly verbatim passages from Times articles. OpenAI argued this was unusual behavior requiring specific prompting; the Times argued it proves unlawful copying.

---


## Major Lawsuits and Their Implications


### The New York Times v. OpenAI and Microsoft

**Filed:** December 2023

**Claims:**

- OpenAI trained GPT models on millions of NYT articles without permission
- ChatGPT can reproduce substantial portions of copyrighted articles
- Microsoft Copilot incorporates infringing technology
- Billions of dollars in damages sought

**Key arguments:**

- NYT: "Defendants' unlawful use of The Times's work to create artificial intelligence products that compete with it threatens The Times's ability to provide that service."
- OpenAI: Training is fair use; reproducible content is a bug being fixed; collaboration was attempted.

**Significance:**

- First major newspaper lawsuit against AI companies
- Could establish precedent for text-based training
- Damages could be enormous if NYT wins
- Settlement could create licensing framework


### Visual Artists v. Stability AI, Midjourney, DeviantArt

**Filed:** January 2023

**Claims:**

- AI image generators trained on billions of copyrighted images
- Artists' work used without consent or compensation
- AI systems compete with the artists they learned from
- Class action on behalf of affected artists

**Key arguments:**

- Artists: Our copyrighted work was used to create tools that now compete with us
- Defendants: Training is transformative fair use; output is new creative work

**Status:**

- Initial court ruling allowed some claims to proceed, dismissed others
- Case ongoing; likely years from resolution
- Similar cases filed by Getty Images and others


### Getty Images v. Stability AI

**Filed:** February 2023

**Claims:**

- Stability AI trained on 12+ million Getty images
- Some outputs include distorted Getty watermarks
- Copyright infringement on massive scale
- Trademark claims regarding watermarks

**Significance:**

- Major commercial entity as plaintiff
- Watermark issue suggests direct copying, not just learning
- UK and US cases filed


### Authors Guild v. OpenAI

**Filed:** September 2023

**Claims:**

- OpenAI trained on copyrighted books without permission
- Represents thousands of authors
- ChatGPT can summarize and discuss copyrighted books in detail

**Key authors involved:**

- John Grisham, Jodi Picoult, George R.R. Martin, and others

---


## The Fair Use Question (U.S. Law)


### What Is Fair Use?

Fair use is a legal doctrine allowing use of copyrighted material without permission in certain circumstances. Courts consider four factors:

**Factor 1: Purpose and Character of Use**

- Commercial use weighs against fair use
- Transformative use (creating something new) weighs for fair use
- AI companies argue training is transformative

**Factor 2: Nature of the Copyrighted Work**

- Creative works get more protection than factual ones
- Published works get less protection than unpublished
- AI training uses both creative and factual works

**Factor 3: Amount Used**

- Using small portions favors fair use
- Using the "heart" of a work weighs against
- AI training typically uses entire works (weighs against)

**Factor 4: Effect on the Market**

- If use competes with or substitutes for the original, weighs against
- Most contested factor in AI cases
- Does AI compete with original creators?


### How Courts Might Rule

**Precedent potentially favoring AI companies:**

- *Google v. Oracle*: Supreme Court found Google's use of Java API code in Android was fair use
- *Authors Guild v. Google*: Google Books scanning for search indexing was fair use

**Precedent potentially favoring copyright holders:**

- These cases involved different uses (search, not generation)
- AI output can directly compete with original works
- Commercial nature of AI products

**Likely outcome:** Different results for different uses. Training might be fair use; generating content that competes with training data might not be.

---


## International Perspectives


### European Union

**Text and Data Mining Exception:**

- EU allows copying for text and data mining (including AI training)
- BUT copyright holders can opt out
- Opt-out must be "reserved in an appropriate manner"
- How this works in practice is unclear

**AI Act Considerations:**

- Transparency requirements for AI models
- Must disclose if copyrighted material used in training
- May need to publish summaries of training data


### United Kingdom

**Proposed exception expansion:**

- UK considered expanding exceptions for AI training
- Plans paused after creative industry pushback
- Currently limited to non-commercial research


### Japan

**Broad exception:**

- Japan has relatively broad exception for AI training
- Allows copying "where it is not a person's purpose to personally enjoy or cause another person to enjoy the thoughts or sentiments expressed in that work"
- One of the most AI-friendly copyright regimes


### China

**Developing approach:**

- Some cases have addressed AI-generated content
- Generally requires human creative input for copyright
- Training rights still being defined

---


## Practical Implications


### For Organizations Using AI

**Current risks:**

| Activity | Risk Level | Considerations |
|----------|-----------|----------------|
| Using AI for internal research | Lower | Less commercial impact |
| Publishing AI-generated content | Medium | Ownership and infringement questions |
| AI-generated content for sale | Higher | Commercial purpose; market impact |
| Training custom AI on proprietary data | Medium | Depends on data rights |
| Training AI on scraped data | Higher | May include copyrighted material |

**Risk mitigation strategies:**

1. **Know your AI provider's training practices**
   - What was the model trained on?
   - Does the provider offer indemnification?
   - What are the terms of service regarding IP?

2. **Document human creative input**
   - Keep records of prompts and creative decisions
   - Show human selection and arrangement
   - Maintain evidence of originality

3. **Review output for potential infringement**
   - Check if generated content closely matches existing works
   - Be especially careful with well-known copyrighted material
   - Consider plagiarism/similarity detection tools

4. **Understand your terms of use**
   - What rights do you get to AI-generated content?
   - What restrictions exist?
   - What happens if infringement claims arise?


### For Content Creators

**Protecting your work:**

1. **Opt out where possible**
   - Many platforms now offer AI training opt-outs
   - robots.txt can signal AI scrapers to avoid your site
   - Register with services that track AI training usage

2. **Register copyrights**
   - Registration enables statutory damages in U.S.
   - Creates public record of ownership
   - Strengthens position in disputes

3. **Monitor for infringement**
   - Watch for AI output that resembles your work
   - Document instances of potential copying
   - Consider joining collective action

4. **Negotiate licenses**
   - Some AI companies are now licensing content
   - Collective licensing organizations may emerge
   - Early agreements might set precedents

---


## What's Likely to Happen


### Near-Term (1-3 Years)

**Court decisions:** Major cases will reach initial decisions, though appeals will continue.

**Licensing frameworks:** More AI companies will license content, especially from large publishers.

**Legislation:** Some jurisdictions will pass AI-specific copyright rules.

**Industry practices:** Standards will emerge for AI training data documentation.


### Medium-Term (3-5 Years)

**Legal clarity:** Appellate decisions will establish clearer precedent.

**Licensing markets:** More mature licensing mechanisms for AI training data.

**Technical solutions:** Better tools for tracking training data and detecting similarities.

**International coordination:** Some harmonization of approaches across jurisdictions.


### What Won't Be Resolved Quickly

**Fundamental tensions:**

- Who should benefit from AI that learns from human creativity?
- How do we value the contribution of training data?
- Should AI development pay for inputs or proceed freely?

These are policy questions as much as legal ones, and societies will continue debating them.

---


## Governance Recommendations


### For Legal and Compliance Teams

**Assess current exposure:**

- What AI tools is your organization using?
- What are the IP terms in your agreements?
- Are you generating content for commercial use?

**Establish policies:**

- Clear guidelines on AI-generated content
- Documentation requirements
- Review processes for high-risk uses

**Monitor developments:**

- Track major case decisions
- Watch for regulatory changes
- Update policies as law develops


### For Business Leaders

**Strategic questions:**

- How dependent are we on AI-generated content?
- What's our exposure if licensing becomes required?
- Should we invest in licensed AI tools?

**Risk tolerance:**

- Can we afford legal uncertainty?
- What's the cost of being wrong?
- Do we need to wait for clarity?


### For Product Teams

**If you're building AI products:**

- Document training data sources and rights
- Consider licensing content from the start
- Build opt-out mechanisms
- Plan for potential legal requirements

---


## Conclusion

AI and copyright law are fundamentally mismatched. Copyright was designed for a world where copying was deliberate and specific. AI "copies" by learning patterns from vast amounts of data—something copyright law never anticipated.

The key unresolved questions:

1. **Training:** Is using copyrighted material to train AI fair use or infringement?
2. **Ownership:** Who owns what AI creates?
3. **Output:** When does AI output infringe existing copyrights?

These questions are being fought out in courtrooms, legislatures, and international bodies. The outcomes will significantly affect:

- Creative industries and how creators are compensated
- AI development costs and who can afford to build AI
- How businesses can use AI-generated content
- The balance between innovation and creator rights

For now, organizations must navigate uncertainty. The practical approach is: understand the risks, document your practices, monitor legal developments, and build flexibility into your AI strategies.

The law will eventually catch up to the technology. Until it does, caution and awareness are essential.

---


## Sources and Further Reading

1. **New York Times v. OpenAI:** The New York Times Company v. Microsoft Corporation et al. (2023). S.D.N.Y. Case No. 1:23-cv-11195.

2. **Andersen v. Stability AI:** Andersen et al. v. Stability AI Ltd. et al. (2023). N.D. Cal. Case No. 3:23-cv-00201.

3. **Getty Images v. Stability AI:** Getty Images (US), Inc. v. Stability AI, Inc. (2023). D. Del. Case No. 1:23-cv-00135.

4. **U.S. Copyright Office AI Guidance:** U.S. Copyright Office. (2023). Copyright Registration Guidance: Works Containing Material Generated by Artificial Intelligence.

5. **Google v. Oracle:** Google LLC v. Oracle America, Inc. (2021). 593 U.S. ___, 141 S. Ct. 1183.

6. **Authors Guild v. Google:** Authors Guild v. Google, Inc. (2015). 804 F.3d 202 (2d Cir.).

7. **EU DSM Directive:** European Parliament. (2019). Directive (EU) 2019/790 on copyright in the Digital Single Market.

8. **EU AI Act:** European Parliament and Council. (2024). Regulation (EU) 2024/1689, transparency provisions.

9. **Japan Copyright Act:** Japan Copyright Act, Article 30-4 (AI training exception).

10. **WIPO Conversations on IP and AI:** World Intellectual Property Organization. Issues papers on IP and AI.

11. **Copyright Alliance AI Resources:** Copyright Alliance. Resources on AI and copyright.

12. **Authors Guild AI Resources:** Authors Guild. Advocacy on AI and authors' rights. https://www.authorsguild.org/

---

*This article is part of the AI Governance Mastery Program by AIDefence (suniliyer.ca). For more resources on AI governance, visit the complete article series.*
