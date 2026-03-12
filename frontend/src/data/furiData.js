// ─── Furi Chatbot — Company Knowledge Base ───────────────────────────────────
// All data sourced from Futurrizon's official company/HR/contact datasets.

export const GROQ_API_KEY = import.meta.env.VITE_GROQ_API_KEY;
export const GROQ_MODEL = "llama-3.1-8b-instant";
export const GROQ_ENDPOINT = "https://api.groq.com/openai/v1/chat/completions";

// ─── Dataset 1: HR & Culture ──────────────────────────────────────────────────
export const hrData = {
    company_overview: {
        company_name: "Futurrizon IT Company",
        chatbot_name: "Furi",
        tagline: "Your Trusted Tech Buddy from Futurrizon",
        working_model:
            "Corporate IT services company focused on Microsoft 365 solutions, AI automation, cloud services, and enterprise IT consulting.",
    },
    company_culture: {
        working_days: {
            schedule: "Monday to Friday",
            days_per_week: 5,
            weekend_policy:
                "Saturday and Sunday generally off unless business requirements arise.",
        },
        working_hours: {
            schedule: "Monday to Friday, 9:30 AM – 6:30 PM IST",
            office_presence_required: true,
        },
    },
};

// ─── Dataset 2: Company Story & Tech ─────────────────────────────────────────
export const companyData = {
    company_story: {
        tagline: "Founded with vision to bridge technology and business impact.",
        about:
            "Futurrizon Technologies is a Microsoft-focused digital transformation partner delivering enterprise solutions powered by Microsoft 365, SharePoint, Power Platform, Azure, AI, and automation.",
        founded_year: 2022,
        mission_summary:
            "Help businesses unlock full potential through intelligent digital transformation and modern technology architecture.",
        business_focus: [
            "Digital transformation",
            "AI automation",
            "Microsoft cloud solutions",
            "Enterprise productivity solutions",
        ],
    },
    company_highlights: {
        projects_delivered: "600+",
        microsoft_expertise_years: "15+",
        client_return_rate: "95%",
    },
    vision_mission: {
        vision:
            "To be a globally recognized leader in digital transformation empowering organizations with intelligent technology.",
        mission:
            "Deliver customized Microsoft-powered solutions that eliminate inefficiencies, enhance productivity, and unlock growth through innovation and automation.",
    },
    technology_stack: {
        core_platforms: [
            { name: "Microsoft 365", description: "Collaboration tools including Teams, SharePoint, Outlook and enterprise productivity ecosystem." },
            { name: "Power Platform", description: "Power Apps, Power Automate, and Power BI for automation, analytics, and application development." },
            { name: "Azure Cloud", description: "Secure, scalable cloud infrastructure for enterprise digital transformation." },
            { name: "AI & GPT Capabilities", description: "AI assistants, automation bots, knowledge systems, and intelligent business solutions." },
        ],
        solution_benefits: [
            "High performance systems",
            "Advanced security and compliance",
            "Seamless integrations",
            "Zero downtime migration",
            "Scalable architecture",
        ],
    },
    delivery_approach: [
        { stage: "Listen & Discover", description: "Understand business challenges, workflows, and goals in detail." },
        { stage: "Design & Co-Build", description: "Create tailored digital solutions focused on user needs." },
        { stage: "Automate & Deploy", description: "Implement automation and ensure seamless adoption across departments." },
        { stage: "Train & Support", description: "Provide continuous improvement, support, and productivity optimization." },
    ],
    differentiators: [
        { title: "Tailored Solutions", description: "Custom-built solutions designed specifically for business operations." },
        { title: "AI-Driven Automation", description: "Automation of repetitive processes using AI to enhance productivity." },
        { title: "Real Business Impact", description: "Focus on measurable ROI rather than just technology deployment." },
        { title: "Secure & Scalable", description: "Microsoft-grade governance, security, and compliance." },
        { title: "Industry Expertise", description: "Experience across multiple industries with real-world case studies." },
        { title: "Certified Experts", description: "Professional team with deep Microsoft ecosystem expertise." },
    ],
    leadership: {
        founder: "Yashesh Nagori",
        designation: "Founder & CEO",
        description:
            "Visionary leader focused on empowering businesses with Microsoft technologies, automation, and digital innovation.",
        expertise: ["Microsoft 365", "SharePoint", "Power Platform", "Azure", "AI automation"],
        quote:
            "Help businesses work smarter, collaborate better, and grow faster using technology tailored to their needs.",
    },
};

// ─── Dataset 3: Contact ───────────────────────────────────────────────────────
export const contactData = {
    contact_information: {
        response_time: "We typically respond within 24 hours.",
        phone_numbers: [],
        email_addresses: ["info@futurrizon.com", "yashesh.nagori@futurrizon.com", "hr@futurrizon.com"],
        office_address: {
            company_name: "Futurrizon Technologies Pvt Ltd",
            street: "B-1212, B-1213, B-1214, Sivanta one Business Park",
            area: "Ashram Rd, opp. Nalli Silk Sarees, Pritam Nagar, Paldi",
            city: "Ahmedabad",
            state: "Gujarat",
            postal_code: "380006",
            country: "India",
        },
        business_hours: {
            monday_to_friday: "9:30 AM – 6:30 PM IST",
            timezone: "India Standard Time (IST)",
        },
    },
};

// ─── System Prompt ────────────────────────────────────────────────────────────
export const buildSystemPrompt = (userName = null) => `
You are Furi — Your Tech Buddy from Futurrizon, a professional IT company chatbot.

## YOUR IDENTITY
- Name: Furi
- Company: Futurrizon Technologies Pvt Ltd
- Role: Client engagement, company information assistant, lead generation

## STRICT RULES
1. ONLY use the information provided in the KNOWLEDGE BASE below. Do NOT hallucinate or guess.
2. If information is not in the knowledge base, respond: "I currently don't have that information. Please connect with our team for accurate details."
3. Always respond in English only. If user writes in another language, say: "Currently, I support English only. Please continue in English."
4. **CRITICAL: Keep all responses VERY BRIEF (max 2-3 short sentences). Do NOT provide long, detailed explanations unless specifically asked to elaborate.**
5. ${userName ? `The user's name is ${userName}. Address them by name occasionally.` : ""}

## KNOWLEDGE BASE

### HR & CULTURE DATA
${JSON.stringify(hrData, null, 2)}

### COMPANY & TECHNOLOGY DATA
${JSON.stringify(companyData, null, 2)}

### CONTACT DATA
${JSON.stringify(contactData, null, 2)}

## CONNECT CTA
When users show interest in: projects, collaboration, services, pricing, implementation, technology consultation, or any business inquiry — remind them they can connect at:
- Form: https://forms.office.com/r/ZLRhtSxcdG
- Meeting: https://calendly.com/futurrizon/30min

## RESPONSE STYLE
- Professional IT corporate tone
- Structured with headings/bullets when needed
- **EXTREMELY CONCISE** — Give just the core answer without unnecessary fluff
- Friendly and approachable, not robotic
- **CRITICAL URL RULE**: Whenever you include a URL (https://...), ALWAYS place it on its own dedicated line by itself — never embedded inside a sentence. Example:
  Form link:
  https://forms.office.com/r/ZLRhtSxcdG
- Use * or - for bullet points, one item per line
`.trim();
