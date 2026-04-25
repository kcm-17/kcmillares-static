import type { CVData } from '@/types'

export const cvData: CVData = {
  name: 'Karl Cedrick G. Millares',
  title: 'Full-Stack Software Engineer | Associate Manager',
  email: 'karl@kcmillares.com',
  linkedin: 'linkedin.com/in/kcmillares/',
  location: 'Sydney, Australia',
  visaStatus: 'Permanent Resident (Subclass 190)',

  profile:
    'Full-Stack and AI Engineer with 12+ years delivering enterprise solutions for Australian health insurance and wealth management industries. Demonstrated expertise in agentic AI systems, cloud-native architecture, and modern web technologies. Proven ability to lead cross-functional teams, drive technical direction, and deliver AI-powered products aligned with business outcomes.',

  competencies: {
    ai: [
      'Azure OpenAI Service',
      'Orchestrator-Agent Architecture',
      'Prompt Engineering',
      'Vector Embeddings',
      'Azure AI Search',
      'RAG (Retrieval-Augmented Generation)',
    ],
    technical: [
      '.NET (C#)',
      'ReactJS',
      'Python',
      'REST APIs',
      'Microsoft SQL Server',
      'Azure Service Bus',
      'Azure Logic Apps',
      'Azure App Services',
      'Azure CosmosDB',
      'OAuth 2.0',
      'Event-Driven Architecture',
    ],
    practices: [
      'Agile / Scrum',
      'CI/CD',
      'Unit Testing',
      'Code Review',
      'API Integration',
      'Team Leadership',
      'Stakeholder Engagement',
      'Sprint Planning',
    ],
  },

  experience: [
    {
      company: 'Avanade Australia Pty Ltd',
      role: 'Associate Manager, Full-Stack Development',
      period: 'January 2026 – Present',
      clients: [
        {
          name: 'Major Australian Health Insurance Company',
          bullets: [
            'Designed and built an agentic AI chat application using Azure OpenAI, implementing an orchestrator-agent architecture where the orchestrator handles general knowledge queries directly and delegates company-specific inquiries to specialised assistant agents based on their capability descriptions',
            'Each assistant agent implements a RAG (Retrieval-Augmented Generation) pipeline — converting queries to vector embeddings, performing semantic search via Azure AI Search against SharePoint-indexed document libraries, and returning document-grounded responses to the orchestrator',
            'Orchestrator evaluates the completeness of assistant responses, re-routing to additional agents if needed, before summarising the final answer to the user',
            "Implemented user-directed agent selection — users can tag a specific assistant directly, bypassing orchestrator routing and invoking the assistant's full RAG pipeline and Azure AI Search index independently",
            "Led technical delivery across a cross-functional team of 2 developers and 1 tester, conducting sprint planning, monthly deliverable commitments, and ensuring alignment with client architecture standards",
            "Collaborated directly with the client's enterprise architect to translate business requirements into scalable AI solution designs",
            'Built with Python, ReactJS, CosmosDB, and Microsoft Azure services, integrating Azure AI Search for Retrieval-Augmented Generation (RAG)'
          ],
        },
      ],
    },
    {
      company: 'Accenture, Inc.',
      role: 'Software Engineering Consultant / Packaged App Development Manager (CL7)',
      period: 'March 2021 – December 2025',
      clients: [
        {
          name: 'Major Australian Health Insurance Company',
          bullets: [
            'Developed AI-powered campaign content generation platform using ReactJS, Python, and CosmosDB, integrating OpenAI APIs to automatically generate marketing content based on user inputs.',
            'Implemented event-driven architecture using Azure Service Bus and Logic Apps, creating message queue triggered by user information updates for asynchronous processing workflows.',
            'Engineered OAuth 2.0 authentication service using ReactJS and .NET 8, enabling secure cross-application authentication for multiple customer-facing applications including mobile apps on PlayStore and AppStore.',
            'Drove technical direction for front-end development of public-facing website focused on sales conversion optimisation.',
            'Established comprehensive unit testing framework for front-end and backend services, supporting CI/CD workflows.',
          ],
        },
        {
          name: 'Major Australian Wealth Management Company',
          bullets: [
            'Led team of 5 software engineers developing internal portfolio management system using ReactJS, .NET, and Microsoft SQL Server, enabling financial advisers to manage specialist portfolios and client relationships.',
            'Built web-based PDF viewer with dynamic customer detail pre-population in 2 sprints (50% faster than initial 4-sprint estimate), streamlining document workflow processes.',
            'Implemented feature enhancements aligned with regulatory and operational standards in wealth management sector.',
            'Conducted defect analysis and root cause investigation, improving system stability and reducing production incidents.',
            'Championed software development best practices and mentored team members through code reviews.',
          ],
        },
      ],
    },
    {
      company: 'Foundever (formerly SYKES Asia, Inc.)',
      role: 'Senior Software Engineer, Global IS',
      period: 'December 2019 – March 2021',
      bullets: [
        'Developed .NET API endpoints enabling recruitment teams and candidates to confirm scheduled availability.',
        'Successfully migrated multiple projects from .NET Framework to .NET Core.',
        'Led software engineering team in implementing newly planned systems and developed proof of concepts for stakeholders.',
        'Resolved critical production issues through systematic debugging and replication in lower environments.',
      ],
    },
    {
      company: 'Cypherdigital, Inc.',
      role: 'Lead Software Engineer',
      period: 'July 2018 – December 2019',
      bullets: [
        'Operated as sole developer, working directly with CEO and CTO with full ownership of all technical decisions.',
        'Designed and implemented scalable web and mobile applications from concept to deployment using Azure cloud infrastructure.',
        'Developed cross-platform mobile applications with integrated third-party services (Facebook Login, Payment APIs, Delivery APIs).',
        'Managed end-to-end deployment across Azure Services, Google PlayStore, and Apple AppStore.',
      ],
    },
    {
      company: 'AIG Shared Services Corporation',
      role: 'Analyst Programmer',
      period: 'June 2017 – July 2018',
      bullets: [
        'Managed application system maintenance, provided primary support for business user incidents, and documented run-books for recurring issues.',
      ],
    },
    {
      company: 'Accenture, Inc.',
      role: 'Software Engineer Analyst / Application Development Senior Analyst (Level 10)',
      period: 'April 2013 – June 2017',
      bullets: [
        'Migrated custom SharePoint 2010 applications to SharePoint 2013 provider-hosted architecture.',
        'Developed custom SharePoint applications from requirements to production and created development tools that improved team productivity.',
      ],
    },
  ],

  education: {
    degree: 'Bachelor of Science in Information Technology',
    institution: 'University of Santo Tomas',
    location: 'Manila, Philippines',
    period: '2009 – 2013',
  },
}
