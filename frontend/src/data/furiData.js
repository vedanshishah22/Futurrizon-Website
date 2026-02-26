// ─── Furi Chatbot — Company Knowledge Base ───────────────────────────────────
// All data sourced from Futurrizon's official company/HR/contact datasets.

export const GROQ_API_KEY = "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";
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
            total_daily_hours: 9,
            productive_hours: 8,
            break_hours: 1,
            office_presence_required: true,
        },
        attendance_rules: {
            late_arrival_policy: "Allowed up to 1.5 hours once per month with prior approval.",
            early_departure_policy: "Allowed with manager approval once per month.",
            absence_without_notice: "May be treated as half-day leave.",
        },
        employee_engagement: [
            "Monthly team lunches",
            "Festival celebrations",
            "Birthday celebrations",
            "Team bonding activities",
            "Work-life balance initiatives",
        ],
    },
    leave_policy: {
        leave_types: {
            casual_leave: { annual_quota: 12, monthly_credit: 1, carry_forward: true, encashment: false },
            sick_leave: { annual_quota: 6, monthly_credit: 0.5, medical_proof_required: "For extended sick leave." },
            flexi_leave: {
                total_days: 5,
                eligibility: "After completion of 6 months",
                restrictions: [
                    "Prior manager approval required",
                    "Cannot combine with major festival holidays",
                    "Valid only within financial year",
                ],
            },
            compensatory_off: {
                eligibility_conditions: [
                    "0.5 day comp off for more than 3 extra working hours",
                    "1 day comp off for working more than 6 hours on weekends or holidays",
                ],
                approval_required: true,
            },
        },
        leave_rules: [
            "Prior approval from reporting manager mandatory.",
            "More than 5 continuous leave days require advance approval.",
            "Leaves beyond allowed balance treated as unpaid.",
            "Employees must inform at least one month in advance for planned long leaves.",
        ],
        leave_application_process: {
            step_1: "Discuss leave verbally with reporting manager or HR.",
            step_2: "Submit formal leave request in HR system (e.g., Zoho).",
            step_3: "Wait for approval before proceeding on leave.",
        },
    },
    salary_and_compensation: {
        salary_credit: { credit_date: "7th of every month", mode: "Bank transfer" },
        performance_incentive: {
            basis: "KPIs / KRAs performance evaluation",
            review_frequency: "Periodic or quarterly",
            eligibility_condition: "Not applicable if employee resigns during review cycle.",
        },
        retention_bonus: {
            eligibility: "Completion of 1 year continuous service.",
            invalid_conditions: [
                "Resignation before completion",
                "Termination due to performance issues",
                "Absconding",
                "Mutual separation",
            ],
        },
    },
    probation_policy: {
        probation_period: "3 months from joining date",
        review_process: "Formal performance evaluation conducted.",
        possible_outcomes: [
            "Confirmation of employment",
            "Extension of probation (max 3 additional months)",
            "Termination if performance unsatisfactory",
        ],
    },
    separation_policy: {
        resignation_process: [
            "Initial discussion with HR.",
            "Formal resignation email submission.",
            "Completion of notice period.",
        ],
        notice_period: { confirmed_employee: "60 days", probation_employee: "15 days" },
        salary_hold_policy: "Salary for notice period released after exit completion.",
        leave_balance: "Remaining leave lapses post resignation except approved cases.",
        final_settlement: "Full & Final settlement processed after clearance.",
    },
    exit_policy: {
        documentation_required: [
            "Company asset handover",
            "Clearance form submission",
            "Exit interview participation",
            "Knowledge transfer completion",
        ],
        relieving_letter: "Issued after full and final settlement.",
        salary_release: "Typically released within next salary cycle (~30 days).",
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
        phone_numbers: ["+91 9825148533", "+91 7046414070", "+91 9586779534"],
        email_addresses: ["info@futurrizon.com", "yashesh.nagori@futurrizon.com", "hr@futurrizon.com"],
        office_address: {
            company_name: "Futurrizon Technologies Pvt Ltd",
            street: "B1213 & B1214, Sivanta One Business Park",
            area: "Ashram Road, Paldi",
            city: "Ahmedabad",
            state: "Gujarat",
            postal_code: "380007",
            country: "India",
        },
        business_hours: {
            monday_to_friday: "10:00 AM – 7:00 PM IST",
            saturday: "10:00 AM – 2:00 PM IST",
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
4. Keep responses concise, structured, and professional. Use bullet points and short paragraphs.
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
- Structured with headings/bullets
- Concise — avoid long walls of text
- Friendly and approachable, not robotic
- **CRITICAL URL RULE**: Whenever you include a URL (https://...), ALWAYS place it on its own dedicated line by itself — never embedded inside a sentence. Example:
  Form link:
  https://forms.office.com/r/ZLRhtSxcdG
- Use * or - for bullet points, one item per line
`.trim();
