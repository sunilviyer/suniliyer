export interface ArticleSection {
    title?: string
    content: string
    type: "text" | "list" | "quote" | "image"
    items?: string[] // For lists
}

export interface Source {
    title: string
    link?: string
    note?: string
}

export interface Article {
    slug: string
    title: string
    description: string
    date: string
    readTime: string
    category: string
    author: string
    image: string
    tldr: string[]
    sources: Source[]
    sections: ArticleSection[]
    tags: string[]
}

export const articles: Record<string, Article> = {
    "eu-ai-act-gold-standard-ai-governance": {
        slug: "eu-ai-act-gold-standard-ai-governance",
        title: "The New Gold Standard for AI Governance and Responsible AI",
        description: "Understanding the EU AI Act: scope, compliance, penalties, and why it matters.",
        date: "May 21, 2024",
        readTime: "8 min read",
        category: "Regulation",
        author: "Sunil Iyer",
        image: "/images/eu-ai-act.png",
        tldr: [
            "Understand why the EU AI Act was created and what problems it solves at the EU level",
            "Determine whether your organization falls under the EU AI Act's scope",
            "Know the compliance deadline and penalty structure for non-compliance",
            "Recognize that this is a living framework designed to evolve with AI advancements"
        ],
        tags: [
            "EU AI Act", "Compliance", "Regulation", "Governance",
            "AI governance professionals", "Compliance officers", "Organizational leaders", "Developers",
            "EU AI Act penalties", "EU AI Act 2026 deadline", "AI governance regulation", "EU artificial intelligence law", "AI Act requirements", "GDPR AI compliance", "EU AI Act vs NIST"
        ],
        sources: [
            { title: "EU Council Approval: Official acceptance of the EU AI Act", link: "https://www.consilium.europa.eu/en/press/press-releases/2024/05/21/artificial-intelligence-ai-act-council-gives-final-green-light-to-the-first-worldwide-rules-on-ai/" },
            { title: "Full Regulation Text: Regulation laying down harmonised rules on artificial intelligence", link: "https://eur-lex.europa.eu/eli/reg/2024/1689/oj" },
            { title: "Charter of Fundamental Rights of the European Union", link: "https://www.europarl.europa.eu/charter/pdf/text_en.pdf" },
            { title: "NIST AI Risk Management Framework", link: "https://www.nist.gov/itl/ai-risk-management-framework" },
            { title: "EuroHPC Joint Undertaking", link: "https://eurohpc-ju.europa.eu/" }
        ],
        sections: [
            {
                type: "text",
                content: "With the EU Council's acceptance of the EU AI Act and the associated rules that govern AI systems, we have officially entered the era of enhanced AI Governance."
            },
            {
                type: "text",
                content: "This isn't just another regulatory framework—it's the world's first comprehensive AI law, setting the global standard for how artificial intelligence should be governed. Whether you're developing AI systems, deploying them for business operations, or simply using AI-powered tools, understanding this regulation is now essential."
            },
            {
                type: "text",
                content: "This article breaks down the fundamentals: who it applies to, when you need to comply, what happens if you don't, and why this framework matters for the future of responsible AI."
            },
            {
                title: "Why an EU-Level Framework?",
                type: "list",
                content: "Key points to cover:",
                items: [
                    "Avoid legal uncertainties for operators developing AI systems",
                    "Prevent fragmentation of the internal market due to divergent national approaches",
                    "Ensure free market movement, innovation, deployment, and uptake of AI systems",
                    "Maintain compliance with GDPR regarding the \"black box\" functioning of AI systems",
                    "Establish accountability and penalties for non-compliance",
                    "Create an interoperable framework that works across various fields",
                    "Build human-centric, socially responsible, and trustworthy AI systems"
                ]
            },
            {
                type: "list",
                content: "Examples or case studies:",
                items: [
                    "Without harmonized rules, a company operating in France, Germany, and Italy could face three different sets of AI requirements",
                    "The regulation protects rights enshrined in the Charter of Fundamental Rights of the European Union, including health, safety, democracy, rule of law, and environment"
                ]
            },
            {
                type: "list",
                content: "Practical implications:",
                items: [
                    "Organizations can now plan AI development with regulatory certainty across all EU member states",
                    "The framework prioritizes innovation while ensuring fundamental protections remain intact"
                ]
            },
            {
                title: "Does This Apply to You?",
                type: "list",
                content: "The regulations apply to AI actors: developers, organizations using AI to serve customers, and users of AI systems.",
                items: [
                    "You ARE covered if: You use data from EU member countries, Your systems would be used in the EU, You plan to expand and envision entering the EU market, You want your AI systems to be compliant with stricter regulations upfront",
                    "You ARE exempted if: Your systems are used for military and defence purposes, Primary application is research"
                ]
            },
            {
                type: "list",
                content: "Examples or case studies:",
                items: [
                    "A Canadian company using EU customer data for AI training falls under the Act",
                    "A US-based SaaS company with EU customers must comply",
                    "A university research lab developing experimental AI may be exempt"
                ]
            },
            {
                type: "list",
                content: "Practical implications:",
                items: [
                    "The extraterritorial reach means many non-EU organizations will need to comply",
                    "Organizations should assess their data sources and deployment footprint now",
                    "Compliance deadline: June 12, 2026"
                ]
            },
            {
                title: "Penalties and Enforcement",
                type: "list",
                content: "Member States establish rules for penalties and enforcement measures. Penalties must be effective, proportionate, and dissuasive. Special consideration for interests of SMEs.",
                items: [
                    "Non-compliance with prohibited AI practices: up to €35M or 7% of annual global turnover",
                    "Providing incorrect information: up to €7.5M or 1% of annual turnover",
                    "Other violations by operators: up to €15M or 3% of annual turnover"
                ]
            },
            {
                type: "list",
                content: "Examples or case studies:",
                items: [
                    "For a company with €1 billion in annual revenue, the maximum fine for prohibited practices could reach €70 million (7%)",
                    "Compare to GDPR's maximum of 4% of global turnover—the EU AI Act penalties are even steeper for the most serious violations"
                ]
            },
            {
                type: "list",
                content: "Practical implications:",
                items: [
                    "These penalties make non-compliance a serious financial risk",
                    "Organizations should begin compliance assessments well before the 2026 deadline",
                    "SMEs have some consideration built into the penalty structure"
                ]
            },
            {
                title: "A Living Framework",
                type: "list",
                content: "The Act is designed to evolve with AI advancements. The Commission has power to amend regulations based on developments. Regular evaluation and reporting cycles are built into the framework.",
                items: [
                    "Regular evaluations of fines, enforcement, and need for amendments",
                    "Regular assessment of AI Office efficiency and need for upgrades",
                    "Regular evaluation of AI model development with proposed amendments",
                    "Three-year review of voluntary codes of conduct impact",
                    "Seven-year enforcement assessment with potential amendments"
                ]
            },
            {
                type: "list",
                content: "Examples or case studies:",
                items: [
                    "The rise of generative AI (ChatGPT, etc.) after initial drafting led to additions for General Purpose AI (GPAI) systems",
                    "This adaptive approach contrasts with more static regulatory frameworks"
                ]
            },
            {
                type: "list",
                content: "Practical implications:",
                items: [
                    "Organizations should monitor Commission updates and amendments",
                    "Compliance is not a one-time effort—ongoing attention is required",
                    "The framework acknowledges that AI governance must evolve with technology"
                ]
            },
            {
                title: "Key Differences and Additional Considerations",
                type: "list",
                content: "Key points:",
                items: [
                    "EU AI Act vs. NIST Framework: The EU AI Act includes policing and law enforcement, which are generally exempted from other frameworks",
                    "Biometric analysis restrictions: Differentiation based on race, gender, and sex for law enforcement purposes is addressed",
                    "Different application rules for General Purpose AI vs. High-Risk systems",
                    "Establishment of competent authorities like \"Eurodac\" for counter-terrorism and information sharing",
                    "AI Office development to build Union expertise in AI",
                    "EuroHPC Joint Undertaking supports Commission's development of expertise"
                ]
            },
            {
                type: "list",
                content: "Examples or case studies:",
                items: [
                    "Law enforcement use of facial recognition technology faces specific restrictions under the EU AI Act",
                    "High-risk systems (hiring, credit scoring, law enforcement) face stricter requirements than general-purpose systems"
                ]
            },
            {
                type: "list",
                content: "Practical implications:",
                items: [
                    "Organizations in law enforcement, border control, or public safety sectors face additional scrutiny",
                    "Understanding the risk classification of your AI systems is essential for compliance planning"
                ]
            },
            {
                title: "Conclusion",
                type: "text",
                content: "The EU AI Act represents a watershed moment in AI governance. For the first time, we have a comprehensive, legally binding framework that applies across an entire economic region—and due to its extraterritorial reach, affects organizations worldwide."
            },
            {
                type: "text",
                content: "The key takeaways: know whether your organization falls under the Act's scope, understand the June 2026 compliance deadline, recognize the significant penalties for non-compliance, and appreciate that this is a living framework designed to evolve."
            },
            {
                type: "text",
                content: "Next steps: Determine if your organization uses EU data or serves EU markets. Begin inventorying your AI systems and assessing their risk classifications. Stay informed on Commission updates as the framework continues to develop."
            }
        ]
    },
    "responsibility-of-responsible-ai": {
        slug: "responsibility-of-responsible-ai",
        title: "Responsibility of Responsible AI for Organizations",
        description: "Why everyone in an organization shares responsibility for AI governance.",
        date: "May 10, 2024",
        readTime: "3 min read",
        category: "Strategy",
        author: "Sunil Iyer",
        image: "/images/responsible-ai.png",
        tldr: [],
        tags: ["Responsible AI", "Organization", "Ethics", "Governance", "EU AI Act", "Organizational structure"],
        sources: [],
        sections: [
            {
                type: "quote",
                content: "Without proper controls, AI systems can amplify, perpetuate, or exacerbate inequitable or undesirable outcomes for individuals and communities — NIST"
            },
            {
                type: "text",
                content: "Responsible AI for an organization is not limited to developers or vendors—rather, everyone has equal responsibility towards adhering to responsible AI. Be it users who identify potential malicious injection, QA who are responsible for quality controls, data scientists who need to ensure data robustness, and more importantly, the leadership who need to set the tone for ethical AI practices."
            },
            {
                title: "The Three Major Pitfalls",
                type: "list",
                content: "The most common pitfalls when it comes to building a governance structure around responsible AI can be classified into three major categories:",
                items: [
                    "A) Ill-defined governance structure",
                    "B) Unclear governance mandate",
                    "C) Lack of foresight"
                ]
            },
            {
                type: "text",
                content: "While most of the current research and frameworks focus on explainability, bias, and transparency, there is limited research on how to address key challenges for an organization when defining a responsible AI governance model."
            },
            {
                title: "Ill-defined Governance Structure",
                type: "text",
                content: "Ensuring involvement of everyone in some capacity, keeping open lines of communication with all users to ensure issues are identified and reported to the relevant teams can only be possible when there is a clear structure around AI business operations."
            },
            {
                title: "Unclear Governance Mandate",
                type: "text",
                content: "Creating a governance structure with limited resources or improper authorization creates unnecessary red-tape around risk mitigation. Empowering the committee to quickly react to potential risks and regulatory changes would allow organizations to simplify AI operations."
            },
            {
                title: "Lack of Foresight",
                type: "text",
                content: "Unethical AI practices and misunderstood biases often cause undue hardship indirectly to people who might not be directly connected to the usage of AI."
            },
            {
                title: "Case Study: Mata vs Avianca Airlines",
                type: "text",
                content: "In this case, the plaintiff was impacted because the lawyers used ChatGPT to build their case with nonexistent examples. Mr. Mata was impacted by the decision of his lawyers to use ChatGPT and due to ChatGPT's hallucinations which were not recognized by the lawyers."
            },
            {
                type: "text",
                content: "Ensuring that organizations account for how the data may be used, provide guidance on the trustworthiness of the data, or provide relevant source material to offer explainability are critical when designing a system."
            },
            {
                title: "The EU AI Act Imperative",
                type: "text",
                content: "Under the EU AI Act, non-compliance of the AI system will now incur monetary fines, and as such makes it imperative for organizations to build a robust governance structure to ensure there are appropriate guardrails before considering the use of AI systems to improve business processes and client services."
            }
        ]
    },
    "week-1-building-blocks-what-ai-actually-is": {
        slug: "week-1-building-blocks-what-ai-actually-is",
        title: "The Building Blocks - What AI Actually Is",
        description: "Definitions, frameworks, and the socio-technical nature of AI.",
        date: "Oct 24, 2024",
        readTime: "6 min read",
        category: "Foundations",
        author: "Sunil Iyer",
        image: "/images/ai-building-blocks.png",
        tldr: [
            "Understand the official OECD and ISO/IEC definitions of artificial intelligence and why standardized definitions matter for governance",
            "Recognize that AI systems are socio-technical systems requiring cross-disciplinary collaboration—not just code and algorithms",
            "Learn the OECD Framework for Classification of AI Systems and how it helps assess risks and policy implications",
            "Identify common AI use cases and their real-world benefits"
        ],
        tags: [
            "Definitions", "OECD", "ISO/IEC", "Socio-technical",
            "Career-changers", "Professionals", "Policy makers", "Compliance officers",
            "What is artificial intelligence definition", "OECD AI definition", "ISO/IEC 22989 AI terminology", "AI classification framework", "Socio-technical AI systems", "AI governance fundamentals", "AI use cases examples", "Understanding AI for governance"
        ],
        sources: [
            { title: "OECD AI Definition (Updated November 2023)", link: "https://www.oecd.org/en/publications/explanatory-memorandum-on-the-updated-oecd-definition-of-an-ai-system_623da898-en.html" },
            { title: "OECD AI Principles (Updated May 2024)", link: "https://oecd.ai/en/ai-principles" },
            { title: "ISO/IEC 22989:2022: Artificial Intelligence Concepts and Terminology", link: "https://www.iso.org/standard/74296.html" },
            { title: "OECD Framework for Classification of AI Systems (2022)", link: "https://oecd.ai/en/classification" },
            { title: "Socio-technical systems in AI: Research from healthcare AI implementation", link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9873227/" },
            { title: "Human-centered AI research", link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10646176/" }
        ],
        sections: [
            {
                type: "text",
                content: "What if I told you that AI isn't actually intelligent?"
            },
            {
                type: "text",
                content: "That might sound provocative, but it's precisely the kind of misconception that makes AI governance so challenging. When everyone from marketing teams to legislators uses \"AI\" to mean different things, how can we possibly regulate it effectively? A spam filter and a self-driving car are both called \"AI,\" but they present wildly different risks to society."
            },
            {
                type: "text",
                content: "This is why definitions matter. Before we can govern AI, we need to agree on what AI actually is. This article breaks down the official frameworks that governments and organizations worldwide use to define, classify, and understand artificial intelligence—the essential building blocks for anyone entering the AI governance field."
            },
            {
                title: "Defining AI - The OECD and ISO/IEC Frameworks",
                type: "list",
                content: "Key points to cover:",
                items: [
                    "The OECD updated its AI definition in November 2023 to stay current with technological developments",
                    "The OECD definition: \"An AI system is a machine-based system that, for explicit or implicit objectives, infers, from the input it receives, how to generate outputs such as predictions, content, recommendations, or decisions that can influence physical or virtual environments\"",
                    "ISO/IEC 22989:2022 establishes standardized terminology for AI concepts—now available for free to promote global alignment",
                    "Common elements across definitions: technology that processes inputs, makes inferences, and generates outputs that influence environments",
                    "These definitions are used globally—in the EU AI Act, by the Council of Europe, in Japan, and the United States"
                ]
            },
            {
                type: "list",
                content: "Examples or case studies:",
                items: [
                    "The EU AI Act directly incorporates the OECD definition, demonstrating how standardized definitions enable regulatory interoperability",
                    "ISO/IEC 22989 defines key terms like \"bias,\" \"fairness,\" and \"explainability\" that are essential for policy discussions"
                ]
            },
            {
                type: "list",
                content: "Practical implications:",
                items: [
                    "Without agreed definitions, organizations can't consistently inventory their AI systems",
                    "Governance professionals need to understand these frameworks to communicate across jurisdictions",
                    "Definitions determine what falls under AI regulations—and what doesn't"
                ]
            },
            {
                title: "AI as Socio-Technical Systems",
                type: "list",
                content: "Key points to cover:",
                items: [
                    "AI systems are not just code and algorithms—they include people, processes, rules, and organizational contexts",
                    "A socio-technical system consists of technologies, human agents, and institutions (formal and informal rules) working together",
                    "Human factors are critical: who labels the training data, who interprets the outputs, who decides when to override the system",
                    "AI systems are autonomous, interactive, and adaptive—they learn from their environment in ways traditional systems don't"
                ]
            },
            {
                type: "list",
                content: "Examples or case studies:",
                items: [
                    "Healthcare AI implementation failures often stem from ignoring workflow integration—the technology works in the lab but fails in clinical settings",
                    "Amazon's hiring algorithm failed not because of bad code, but because it learned from decades of biased human hiring decisions",
                    "ChatGPT is disrupting education not through technical capabilities alone, but through how humans integrate it into existing practices"
                ]
            },
            {
                type: "list",
                content: "Practical implications:",
                items: [
                    "Governing AI requires expertise beyond computer science: UX designers, anthropologists, sociologists, ethicists, and domain experts",
                    "\"Last mile challenges\" of implementing AI are actually decisions made in early design stages",
                    "Human factors experts should be involved from the outset of AI development, not as an afterthought"
                ]
            },
            {
                title: "The OECD Classification Framework",
                type: "list",
                content: "The OECD Framework for Classification of AI Systems (2022) helps policymakers characterize AI systems for governance purposes. Five classification dimensions:",
                items: [
                    "People & Planet: Who is affected? What are impacts on human rights, wellbeing, environment?",
                    "Economic Context: What sector? Who deploys it? What's the business model?",
                    "Data & Input: What data does it use? How is it collected? What's the quality?",
                    "AI Model: What type of model? How transparent? How robust?",
                    "Task & Output: What does it do? What decisions does it make? Can users opt out?"
                ]
            },
            {
                type: "list",
                content: "Examples or case studies:",
                items: [
                    "Facial recognition: excellent for smartphone security, potentially dangerous for mass surveillance—same technology, vastly different governance needs",
                    "Virtual assistant vs. self-driving vehicle vs. video recommendations for children—each requires distinct policy approaches"
                ]
            },
            {
                type: "list",
                content: "Practical implications:",
                items: [
                    "The framework helps organizations build AI inventories and registries",
                    "Supports risk assessment and incident reporting",
                    "Enables sector-specific governance frameworks (healthcare, finance, etc.)",
                    "Provides common language for cross-jurisdictional policy discussions"
                ]
            },
            {
                title: "AI Use Cases & Benefits",
                type: "list",
                content: "Key points to cover:",
                items: [
                    "Recognition and Detection: Identifying patterns, objects, faces, speech, anomalies",
                    "Forecasting and Prediction: Predicting future events, trends, behaviors, risks",
                    "Personalization: Tailoring content, recommendations, experiences to individual users",
                    "Goal-driven Optimization: Finding optimal solutions within constraints (routing, scheduling, resource allocation)",
                    "Content Generation: Creating text, images, code, music (generative AI)"
                ]
            },
            {
                type: "list",
                content: "Examples or case studies:",
                items: [
                    "Netflix: Personalization algorithms recommend content based on viewing history—estimated to save $1 billion annually in customer retention",
                    "Siri/Alexa: Speech recognition + natural language processing + personalization combined",
                    "ChatGPT: Generative AI that combines pattern recognition, prediction, and content generation",
                    "Google Maps: Goal-driven optimization for route planning",
                    "Medical imaging AI: Recognition and detection for identifying tumors, fractures, abnormalities"
                ]
            },
            {
                type: "list",
                content: "Practical implications:",
                items: [
                    "Understanding use cases helps governance professionals assess appropriate risk levels",
                    "Different use cases trigger different regulatory requirements (high-risk vs. minimal risk under EU AI Act)",
                    "Benefits must be weighed against potential harms when designing governance frameworks"
                ]
            },
            {
                title: "Conclusion",
                type: "text",
                content: "AI isn't magic, and it isn't truly \"intelligent\"—it's a set of technologies that process inputs, make inferences, and generate outputs. But understanding what AI actually is requires more than technical knowledge. It requires recognizing that AI systems are socio-technical systems embedded in human contexts, shaped by human decisions, and affecting human lives."
            },
            {
                type: "text",
                content: "The OECD definition, ISO/IEC 22989 terminology, and the OECD Classification Framework give governance professionals the shared vocabulary they need to work across disciplines, organizations, and borders. As AI becomes more prevalent, these building blocks become essential tools for anyone working to ensure AI benefits society while minimizing harms."
            },
            {
                type: "text",
                content: "Next steps: Familiarize yourself with the OECD AI Principles and the OECD Framework for Classification of AI Systems. Start thinking about AI systems you interact with daily—how would you classify them? What dimensions matter most for governance?"
            }
        ]
    }
}
