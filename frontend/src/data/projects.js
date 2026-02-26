import p1 from '../assets/projects/p1.png';
import p2 from '../assets/projects/p2.jpg';
import p3 from '../assets/projects/p3.png';
import p4 from '../assets/projects/p4.jpg';
import p5 from '../assets/projects/p5.png';
import p6 from '../assets/projects/p6.png';
import p7 from '../assets/projects/p7.jpg';
import p8 from '../assets/projects/p8.png';
import p9 from '../assets/projects/p9.png';
import p2bg from '../assets/projects/p2_background.jpg';
import p3bg from '../assets/projects/p3_background.png';
import p4bg from '../assets/projects/p4_background.png';

export const projects = [
    {
        id: 'consultation-m365-power-platform',
        title: '30/60/120 Min Consultation – Microsoft 365, Power Platform & Power BI',
        accent: '#002379',
        tag: 'Consultation',
        image: p1,
        heroBackground: p1,
        summary: 'Expert architectural guidance and strategic consultation for Microsoft 365 ecosystem optimization.',
        overview: 'This solution was designed to streamline internal operations and eliminate manual dependency by leveraging Microsoft 365 and the Power Platform ecosystem. The objective was to create a secure, scalable, and automation-driven system tailored to enterprise needs.',
        challenges: [
            'Manual approval bottlenecks in existing workflows',
            'Lack of centralized data management across departments',
            'Security & access control concerns with legacy systems',
            'Inefficient reporting visibility for stakeholders'
        ],
        solution: 'We implemented a centralized SharePoint-based data layer integrated with Power Automate workflows to manage approval routing and notifications. A Power Apps interface was built for seamless user interaction, while Power BI dashboards provided real-time analytics and insights.',
        features: [
            { title: 'Automated Approval Workflows', description: 'Streamlined multi-stage approval processes with instant notifications.' },
            { title: 'Role-Based Access Control', description: 'Granular security permissions ensuring data privacy and compliance.' },
            { title: 'Real-Time Notifications', description: 'Adaptive alerts via Teams and Email for critical project updates.' },
            { title: 'Dashboard Reporting', description: 'Interactive Power BI visualizations for executive decision making.' }
        ],
        impact: {
            timeReduction: '45%',
            efficiency: 'Improved operational efficiency by 60%',
            transparency: 'Increased visibility across cross-team collaboration units'
        },
        technologies: ['Microsoft 365', 'SharePoint', 'Power Platform', 'Azure', 'Power BI']
    },
    {
        id: 'automation-m365-workflow',
        title: 'Microsoft 365 Workflow Automation using Power Automate & SharePoint',
        accent: '#FF5F00',
        tag: 'Automation',
        image: p2,
        heroBackground: p2bg,
        summary: 'End-to-end workflow automation reducing manual tasks and improving process accuracy.',
        overview: 'Leveraging Power Automate and SharePoint, we built an automated engine that handles repetitive tasks, ensuring 100% accuracy and consistency across enterprise workflows.',
        challenges: [
            'High error rates in manual data entry',
            'Process delays due to human intervention',
            'Lack of standardized workflow triggers'
        ],
        solution: 'A suite of Power Automate flows triggered by SharePoint list events, integrating with external APIs for data validation and enrichment.',
        features: [
            { title: 'Trigger-Based Execution', description: 'Automated start of processes based on data changes.' },
            { title: 'Multi-System Integration', description: 'Seamless data flow between M365 and 3rd party apps.' },
            { title: 'Error Handling', description: 'Robust retry logic and error reporting system.' }
        ],
        impact: {
            timeReduction: '70%',
            efficiency: 'Process accuracy increased to 100%',
            transparency: 'Full audit logs for every automated step'
        },
        technologies: ['Power Automate', 'SharePoint', 'M365']
    },
    {
        id: 'sharepoint-doc-management',
        title: 'Secure SharePoint Document Management System with Approval Workflow',
        accent: '#002379',
        tag: 'SharePoint',
        image: p3,
        heroBackground: p3bg,
        summary: 'Secure, centralized document repository with automated lifecycle management.',
        overview: 'We transformed a fragmented file system into a secure, metadata-driven SharePoint document management solution with automated retention and approval policies.',
        challenges: [
            'Fragmented storage across multiple platforms',
            'Difficulty in document version control',
            'Compliance and security risks'
        ],
        solution: 'Custom SharePoint document libraries with advanced metadata tagging, unified search, and Power Automate approval gates.',
        features: [
            { title: 'Version Control', description: 'Sophisticated tracking of document changes and history.' },
            { title: 'Automated Retention', description: 'Policy-based document lifecycle management.' },
            { title: 'Granular Permissions', description: 'Secure access limited to authorized personnel only.' }
        ],
        impact: {
            timeReduction: '50%',
            efficiency: 'Compliance readiness achieved in 4 weeks',
            transparency: 'Single source of truth for all enterprise documents'
        },
        technologies: ['SharePoint Online', 'Power Automate', 'M365 Compliance']
    },
    {
        id: 'ai-chatbot-azure-m365',
        title: 'AI-Powered Chatbot for Internal Documents using Azure & Microsoft 365',
        accent: '#FF5F00',
        tag: 'AI & Azure',
        image: p4,
        heroBackground: p4bg,
        summary: 'Intelligent assistant that learns from your corporate documents to provide instant answers.',
        overview: 'Built using Azure Cognitive Search and OpenAI, this chatbot serves as an internal knowledge base, allowing employees to query millions of document pages with natural language.',
        challenges: [
            'Slow knowledge retrieval from large document sets',
            'Employee frustration with keyword-only searches',
            'Difficulty in training new staff'
        ],
        solution: 'A RAG (Retrieval-Augmented Generation) pipeline using Azure AI Search and GPT models, integrated directly into Microsoft Teams.',
        features: [
            { title: 'Natural Language Querying', description: 'Ask questions as if talking to a human expert.' },
            { title: 'Citation Tracking', description: 'Every answer links back to the source document.' },
            { title: 'Continuous Learning', description: 'Self-improving model based on user feedback.' }
        ],
        impact: {
            timeReduction: '85%',
            efficiency: 'Onboarding time reduced by 40%',
            transparency: ' democratized access to institutional knowledge'
        },
        technologies: ['Azure AI Search', 'Azure OpenAI', 'Teams', 'Power Virtual Agents']
    },
    {
        id: 'vendor-mgm-power-platform',
        title: 'Vendor Management System using Microsoft 365 & Power Platform',
        accent: '#002379',
        tag: 'Power Platform',
        image: p5,
        heroBackground: p5,
        summary: 'Complete vendor lifecycle management from onboarding to performance tracking.',
        overview: 'A comprehensive Power Platform solution to manage vendor relationships, contracts, and performance metrics in one unified dashboard.',
        challenges: [
            'Manual vendor onboarding processes',
            'Oversight in contract renewals',
            'Lack of vendor performance data'
        ],
        solution: 'Power Apps portal for vendor self-service, SharePoint for contract storage, and Power BI for performance analytics.',
        features: [
            { title: 'Self-Service Portal', description: 'Vendors can submit documents and track status.' },
            { title: 'Renewal Alerts', description: 'Automated reminders for expiring contracts.' },
            { title: 'Scorecarding', description: 'KPI-based vendor performance assessment.' }
        ],
        impact: {
            timeReduction: '35%',
            efficiency: 'Contract renewal oversight eliminated',
            transparency: 'Real-time visibility into vendor health'
        },
        technologies: ['Power Apps', 'Power Automate', 'SharePoint', 'Power BI']
    },
    {
        id: 'project-portal-sharepoint',
        title: 'Custom Project Management Portal using Microsoft 365 & SharePoint',
        accent: '#FF5F00',
        tag: 'Project Mgmt',
        image: p6,
        heroBackground: p6,
        summary: 'Unified hub for project tracking, task management, and team collaboration.',
        overview: 'A custom SharePoint-based portal that integrates Project Online data with custom Power Apps for a tailored PMO experience.',
        challenges: [
            'Siloed project data across teams',
            'Lack of real-time project status visibility',
            'Complicated task management tools'
        ],
        solution: 'A centralized portal combining SharePoint site templates, custom SPFx components, and integrated Power BI project dashboards.',
        features: [
            { title: 'Unified Dashboard', description: 'All projects visible at a glance.' },
            { title: 'Automated Reporting', description: 'Weekly status reports generated with one click.' },
            { title: 'Resource Allocation', description: 'Visual tools for managing team capacity.' }
        ],
        impact: {
            timeReduction: '30%',
            efficiency: 'Meeting time reduced by 25% due to data availability',
            transparency: 'Consistent reporting across all project tiers'
        },
        technologies: ['SharePoint', 'Project Online', 'Power BI', 'SPFx']
    },
    {
        id: 'crm-system-sharepoint-power-platform',
        title: 'Custom CRM System on Microsoft 365 using SharePoint & Power Platform',
        accent: '#002379',
        tag: 'CRM',
        image: p7,
        heroBackground: p7,
        summary: 'Tailored CRM solution focused on lead management and sales pipeline automation.',
        overview: 'We built a lean, high-efficiency CRM using SharePoint as a back-end and Power Apps as the front-end, designed for rapid sales teams.',
        challenges: [
            'Expensive licensing for enterprise CRMs',
            'Feature bloat in off-the-shelf solutions',
            'Difficult mobile access for sales reps'
        ],
        solution: 'A custom mobile-first Power App integrated with Outlook and SharePoint, providing just the features the team needed.',
        features: [
            { title: 'Lead Tracking', description: 'Visual pipeline management with drag-and-drop.' },
            { title: 'Outlook Integration', description: 'Auto-syncing client communications.' },
            { title: 'Mobile First Design', description: 'Full functionality available on the go.' }
        ],
        impact: {
            timeReduction: '20%',
            efficiency: 'Sales rep productivity increased by 40%',
            transparency: 'Clear visibility into the sales pipeline'
        },
        technologies: ['Power Apps', 'SharePoint', 'Outlook', 'Power Automate']
    },
    {
        id: 'power-bi-dashboards',
        title: 'Custom Power BI Dashboards for Business Intelligence & Reporting',
        accent: '#FF5F00',
        tag: 'Power BI',
        image: p8,
        heroBackground: p8,
        summary: 'Data-driven insights to transform raw information into strategic business decisions.',
        overview: 'Designing and implementing advanced Power BI dashboards that connect to diverse data sources to provide real-time, actionable insights.',
        challenges: [
            'Manual data preparation and cleaning effort',
            'Static reports that were outdated by arrival',
            'Lack of cross-functional data correlation'
        ],
        solution: 'Automated ETL pipelines using Power Query and centralized data models in Power BI Service for unified reporting.',
        features: [
            { title: 'Data Visualizations', description: 'Advanced charting and mapping of business metrics.' },
            { title: 'Automated Refresh', description: 'Dashboards always reflect current data.' },
            { title: 'Drill-Down Analysis', description: 'Move from executive summaries to raw data instantly.' }
        ],
        impact: {
            timeReduction: '60%',
            efficiency: 'Reporting effort reduced significantly',
            transparency: 'Empowered data-driven culture'
        },
        technologies: ['Power BI', 'SQL Server', 'Excel', 'Power Query']
    },
    {
        id: 'hrms-system-power-apps',
        title: 'Custom HRMS System using Power Apps & SharePoint for HR Automation',
        accent: '#002379',
        tag: 'HRMS',
        image: p9,
        heroBackground: p9,
        summary: 'Streamlining HR processes from recruitment to exit interviews.',
        overview: 'A comprehensive HR management system built on M365 to handle employee records, leave requests, and performance reviews.',
        challenges: [
            'Manual leave tracking and approvals',
            'Lack of employee record security',
            'Inefficient recruitment tracking'
        ],
        solution: 'A central HR portal in Power Apps with secure SharePoint storage and automated notification workflows.',
        features: [
            { title: 'Leave Management', description: 'Self-service portal with automated approval routing.' },
            { title: 'Employee Directory', description: 'Searchable organizational chart and contact info.' },
            { title: 'Performance Tracking', description: 'Digital records for reviews and feedback.' }
        ],
        impact: {
            timeReduction: '40%',
            efficiency: 'HR administrative overhead reduced by 50%',
            transparency: 'Increased employee satisfaction with HR services'
        },
        technologies: ['Power Apps', 'SharePoint', 'Power Automate']
    },
];

export const blogs = [
    {
        id: 'blog-1',
        title: 'Why Microsoft 365 is the Choice for Enterprises',
        summary: 'Discover the key reasons why leading organizations choose M365 for their digital core.',
        image: p1,
        date: 'Oct 24, 2023',
        author: 'Sarah Jenkins',
        readTime: '6 min read',
        content: [
            {
                type: 'heading',
                text: 'The Shift to Unified Ecosystems'
            },
            {
                type: 'paragraph',
                text: 'In today\'s rapidly evolving digital landscape, enterprise agility is no longer a luxury—it\'s a survival requirement. Microsoft 365 has emerged as the definitive choice for organizations seeking to unify their communication, productivity, and security under one roof.'
            },
            {
                type: 'heading',
                text: 'Security Without Friction'
            },
            {
                type: 'paragraph',
                text: 'Security is often cited as the primary reason for M365 adoption. With integrated threat protection, data loss prevention, and identity management, it offers a "Zero Trust" security model that doesn\'t hinder user experience. By consolidating security tools into the M365 stack, enterprises are reducing their attack surface while also lowering licensing costs by eliminating redundant point solutions.'
            },
            {
                type: 'heading',
                text: 'Future-Proofing through AI'
            },
            {
                type: 'paragraph',
                text: 'With the introduction of Copilot and deep AI integration across Outlook, Teams, and Excel, Microsoft is repositioning the entire suite as an "AI-first" platform. This gives M365 enterprises a significant competitive edge, allowing employees to automate mundane tasks and focus on high-value strategic work.'
            }
        ]
    },
    {
        id: 'blog-2',
        title: 'Leveraging AI in Internal Operations',
        summary: 'How Azure AI and Chatbots are changing the way teams access internal knowledge.',
        image: p4,
        date: 'Nov 12, 2023',
        author: 'Michael Chen',
        readTime: '8 min read',
        content: [
            {
                type: 'heading',
                text: 'Beyond the Keyword Search'
            },
            {
                type: 'paragraph',
                text: 'For decades, searching for internal documents was a frustrating exercise in guessing the exact keyword used by an author three years ago. Azure AI Search has fundamentally changed this by introducing semantic understanding to corporate repositories.'
            },
            {
                type: 'heading',
                text: 'The Rise of RAG Architecture'
            },
            {
                type: 'paragraph',
                text: 'Retrieval-Augmented Generation (RAG) is the secret sauce behind modern internal chatbots. By combining the vast reasoning capabilities of LLMs with a company\'s private, secure data, organizations can now offer their employees a "Siri for work" that provides accurate, cited answers based on actual company policies.'
            },
            {
                type: 'heading',
                text: 'Operational Efficiency at Scale'
            },
            {
                type: 'paragraph',
                text: 'When an employee can ask a chatbot "What is our policy on remote work in Singapore?" and get a 2-second answer instead of spending 20 minutes digging through SharePoint, the cumulative impact on enterprise productivity is staggering. We are seeing early adopters reduce knowledge-retrieval time by up to 80%.'
            }
        ]
    },
    {
        id: 'blog-3',
        title: 'Maximizing ROI with Power Platform',
        summary: 'Learn how low-code solutions can drive significant returns on investment with minimal overhead.',
        image: p5,
        date: 'Dec 05, 2023',
        author: 'David Rodriguez',
        readTime: '5 min read',
        content: [
            {
                type: 'heading',
                text: 'The Democratization of Development'
            },
            {
                type: 'paragraph',
                text: 'Shadow IT used to be a nightmare for CIOs. Now, through Governance-first Power Platform implementation, it has become a driver of innovation. By empowering "Citizen Developers" to build their own tools within a secure environment, IT teams are finally clearing their multi-year backlogs.'
            },
            {
                type: 'heading',
                text: 'Cost Avoidance via Low-Code'
            },
            {
                type: 'paragraph',
                text: 'Building a custom CRM or Inventory tool from scratch can cost hundreds of thousands in dev hours. The Power Platform allows organizations to assemble these tools in days using pre-built connectors. The ROI isn\'t just in the speed of delivery, but in the massive reduction in maintenance overhead.'
            },
            {
                type: 'heading',
                text: 'Strategic Data Integration'
            },
            {
                type: 'paragraph',
                text: 'The true power of the platform lies in its ability to act as the "connective tissue" between siloed systems. Whether it\'s pulling data from an on-prem SQL server into a mobile Power App or triggering a SAP workflow from a SharePoint list, the integration possibilities are virtually limitless.'
            }
        ]
    },
];
