export interface ArticleSection {
    title?: string
    content: string
    type: "text" | "list" | "quote" | "image"
    items?: string[] // For lists
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
        tags: ["EU AI Act", "Compliance", "Regulation", "Governance"],
        sections: [
            {
                type: "text",
                content: "With the EU Council's acceptance of the EU AI Act and the associated rules that govern AI systems, we have officially entered the era of enhanced AI Governance. This isn't just another regulatory framework—it's the world's first comprehensive AI law, setting the global standard for how artificial intelligence should be governed."
            },
            {
                type: "quote",
                content: "The EU AI Act is a watershed moment in AI governance, applying across an entire economic region with extraterritorial reach."
            },
            {
                title: "Why an EU-Level Framework?",
                type: "list",
                content: "The framework aims to solve several key problems:",
                items: [
                    "Avoid legal uncertainties for operators developing AI systems",
                    "Prevent fragmentation of the internal market",
                    "Ensure free market movement and innovation",
                    "Maintain compliance with GDPR",
                    "Establish accountability and penalties"
                ]
            },
            {
                title: "Does This Apply to You?",
                type: "text",
                content: "The regulations apply to AI actors: developers, organizations using AI to serve customers, and users of AI systems. You are covered if you use data from EU member countries, your systems are used in the EU, or you plan to enter the EU market."
            },
            {
                title: "Penalties and Enforcement",
                type: "text",
                content: "Non-compliance carries significant risks. Penalties can reach up to €35M or 7% of annual global turnover for prohibited AI practices. Even providing incorrect information can lead to fines of up to €7.5M."
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
        tags: ["Responsible AI", "Organization", "Ethics"],
        sections: [
            {
                type: "quote",
                content: "Without proper controls, AI systems can amplify, perpetuate, or exacerbate inequitable or undesirable outcomes for individuals and communities — NIST"
            },
            {
                type: "text",
                content: "Responsible AI for an organization is not limited to developers or vendors—rather, everyone has equal responsibility. From users identifying malicious injection to QA ensuring quality controls, and leadership setting the tone."
            },
            {
                title: "The Three Major Pitfalls",
                type: "list",
                content: "Common pitfalls in building a governance structure:",
                items: [
                    "Ill-defined governance structure",
                    "Unclear governance mandate",
                    "Lack of foresight"
                ]
            },
            {
                title: "Case Study: Mata vs Avianca Airlines",
                type: "text",
                content: "In this case, lawyers used ChatGPT to build their case with nonexistent examples. It highlights the need for organizations to account for how data is used and provide guidance on trustworthiness."
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
        tags: ["Definitions", "OECD", "ISO/IEC", "Socio-technical"],
        sections: [
            {
                type: "text",
                content: "What if I told you that AI isn't actually intelligent? That might sound provocative, but it's precisely the kind of misconception that makes AI governance so challenging. Before we can govern AI, we need to agree on what AI actually is."
            },
            {
                title: "Defining AI: The OECD Definition",
                type: "quote",
                content: "An AI system is a machine-based system that, for explicit or implicit objectives, infers, from the input it receives, how to generate outputs such as predictions, content, recommendations, or decisions that can influence physical or virtual environments."
            },
            {
                title: "AI as Socio-Technical Systems",
                type: "text",
                content: "AI systems are not just code and algorithms—they include people, processes, rules, and organizational contexts. Human factors are critical: who labels the training data, who interprets the outputs, who decides when to override the system."
            },
            {
                title: "The OECD Classification Framework",
                type: "list",
                content: "Five classification dimensions for governance:",
                items: [
                    "People & Planet: Who is affected?",
                    "Economic Context: What sector?",
                    "Data & Input: What data does it use?",
                    "AI Model: What type of model?",
                    "Task & Output: What does it do?"
                ]
            }
        ]
    }
}
