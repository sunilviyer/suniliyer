import React from 'react'
import { BookOpen, CheckCircle, Clock, Calendar, Award, ArrowRight } from 'lucide-react'

export default function CourseOverviewPage() {
    const phases = [
        {
            title: "Pre-Launch Setup",
            weeks: "Weeks -2 to -1",
            focus: "Infrastructure & Planning",
            description: "Setting up the digital environment, tools, and content strategy.",
            items: [
                { week: "Week -2", title: "Infrastructure Setup", focus: "Domain, Hosting & Tools" },
                { week: "Week -1", title: "Content Preparation", focus: "Templates & Planning" }
            ]
        },
        {
            title: "Phase 1: AI Fundamentals",
            weeks: "Weeks 1-4",
            focus: "Domain I: Understanding AI",
            description: "Mastering the core definitions, history, and technology stack of AI.",
            items: [
                { week: "Week 1", title: "What AI Actually Is", focus: "Definitions & Terminology" },
                { week: "Week 2", title: "Types of AI Systems", focus: "ML Methods & Architectures" },
                { week: "Week 3", title: "AI Technology Stack", focus: "Infrastructure & Providers" },
                { week: "Week 4", title: "AI History & Evolution", focus: "Milestones & Trends" }
            ]
        },
        {
            title: "Phase 2: Risks & Principles",
            weeks: "Weeks 5-7",
            focus: "Domain II: AI Impacts",
            description: "Understanding AI risks, harms, and the principles of trustworthy AI.",
            items: [
                { week: "Week 5", title: "AI Risks & Harms", focus: "Categories of Harm" },
                { week: "Week 6", title: "Trustworthy AI", focus: "Characteristics & Design" },
                { week: "Week 7", title: "Global AI Principles", focus: "Ethics Frameworks" }
            ]
        },
        {
            title: "Phase 3: Legal Frameworks",
            weeks: "Weeks 8-10",
            focus: "Domain III: Current Laws",
            description: "Navigating existing laws, GDPR, and liability in the context of AI.",
            items: [
                { week: "Week 8", title: "Existing Laws & AI", focus: "Consumer Protection" },
                { week: "Week 9", title: "GDPR & AI", focus: "Article 22 & DPIAs" },
                { week: "Week 10", title: "AI Liability", focus: "Product Liability Reform" }
            ]
        },
        {
            title: "Phase 4: Emerging AI Laws",
            weeks: "Weeks 11-13",
            focus: "Domain IV: Emerging Standards",
            description: "Deep dive into the EU AI Act and global regulatory trends.",
            items: [
                { week: "Week 11", title: "EU AI Act", focus: "Risk Classification" },
                { week: "Week 12", title: "Global AI Laws", focus: "US, Canada, China" },
                { week: "Week 13", title: "Risk Management Frameworks", focus: "NIST AI RMF & ISO" }
            ]
        },
        {
            title: "Phase 5: AI Development Lifecycle",
            weeks: "Weeks 14-17",
            focus: "Domain V: Lifecycle",
            description: "Governing AI through planning, design, development, and implementation.",
            items: [
                { week: "Week 14", title: "AI System Planning", focus: "Business Objectives" },
                { week: "Week 15", title: "AI System Design", focus: "Data Strategy & PETs" },
                { week: "Week 16", title: "AI Development", focus: "Training & Testing" },
                { week: "Week 17", title: "AI Implementation", focus: "Deployment & Monitoring" }
            ]
        },
        {
            title: "Phase 6: Governance Implementation",
            weeks: "Weeks 18-23",
            focus: "Domain VI: Governance",
            description: "Building the organizational structure, culture, and processes for AI governance.",
            items: [
                { week: "Week 18", title: "AI Risk Interoperability", focus: "Enterprise Risk" },
                { week: "Week 19", title: "Governance Integration", focus: "Culture & Leadership" },
                { week: "Week 20", title: "Governance Infrastructure", focus: "Roles & Structure" },
                { week: "Week 21", title: "Project Governance", focus: "Mapping & Scoping" },
                { week: "Week 22", title: "Testing & Validation", focus: "Trustworthiness" },
                { week: "Week 23", title: "Post-Deployment Management", focus: "Monitoring" }
            ]
        },
        {
            title: "Phase 7: Future Concerns",
            weeks: "Weeks 24-26",
            focus: "Domain VII: Ongoing Issues",
            description: "Addressing unresolved legal issues, user concerns, and future trends.",
            items: [
                { week: "Week 24", title: "Legal Frontier", focus: "Unresolved Issues" },
                { week: "Week 25", title: "User Concerns", focus: "Trust & Adoption" },
                { week: "Week 26", title: "Future Trends", focus: "Generative AI & Beyond" }
            ]
        },
        {
            title: "Phase 8: Certification & Launch",
            weeks: "Weeks 27-28",
            focus: "AIGP Exam & Portfolio",
            description: "Final preparation for the AIGP certification and portfolio launch.",
            items: [
                { week: "Week 27", title: "Exam Preparation", focus: "Review & Practice" },
                { week: "Week 28", title: "Launch", focus: "Certification & Showcase" }
            ]
        }
    ]

    return (
        <div className="max-w-5xl mx-auto px-6 py-12">
            <div className="mb-12 text-center">
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">AI Governance Mastery Program</h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                    A comprehensive 30-week journey to master AI governance, build a professional portfolio, and achieve AIGP certification.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-100 dark:border-blue-800">
                    <div className="flex items-center gap-3 mb-2 text-primary-blue">
                        <Clock className="w-6 h-6" />
                        <h3 className="font-bold text-lg">Duration</h3>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">30 Weeks</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">33-39 hours/week</p>
                </div>
                <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-100 dark:border-purple-800">
                    <div className="flex items-center gap-3 mb-2 text-purple-600 dark:text-purple-400">
                        <BookOpen className="w-6 h-6" />
                        <h3 className="font-bold text-lg">Content</h3>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">158 Articles</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">26 Core + 132 Deep Dives</p>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-100 dark:border-green-800">
                    <div className="flex items-center gap-3 mb-2 text-green-600 dark:text-green-400">
                        <Award className="w-6 h-6" />
                        <h3 className="font-bold text-lg">Outcome</h3>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">AIGP Certification</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">7 Portfolio Projects</p>
                </div>
            </div>

            <div className="space-y-12">
                {phases.map((phase, index) => (
                    <div key={index} className="relative pl-8 md:pl-0">
                        {/* Timeline Line (Desktop) */}
                        <div className="hidden md:block absolute left-[149px] top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-800 -z-10 last:bottom-auto last:h-full"></div>

                        <div className="md:flex gap-12 items-start">
                            {/* Phase Header (Left Column on Desktop) */}
                            <div className="md:w-32 md:text-right flex-shrink-0 mb-4 md:mb-0">
                                <span className="inline-block px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 text-xs font-bold rounded-full uppercase tracking-wider">
                                    {phase.weeks}
                                </span>
                            </div>

                            {/* Phase Content (Right Column on Desktop) */}
                            <div className="flex-grow bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{phase.title}</h2>
                                    <span className="text-sm font-medium text-primary-blue bg-blue-50 dark:bg-blue-900/20 px-3 py-1 rounded-full">
                                        {phase.focus}
                                    </span>
                                </div>
                                <p className="text-gray-600 dark:text-gray-400 mb-6">{phase.description}</p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {phase.items.map((item, i) => (
                                        <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-800/50">
                                            <div className="mt-1">
                                                <CheckCircle className="w-4 h-4 text-gray-400" />
                                            </div>
                                            <div>
                                                <p className="font-semibold text-gray-900 dark:text-white text-sm">{item.week}: {item.title}</p>
                                                <p className="text-xs text-gray-500 dark:text-gray-400">{item.focus}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
