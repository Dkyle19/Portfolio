export const portfolioData = {
  personal: {
    name: "Daryl Kyle S. Bristol",
    shortName: "Daryl Bristol",
    nickname: "Daryl",
    role: "Full Stack Developer",
    tagline: "Building high-performance web applications, scalable backend systems, and robust database architectures.",
    bio: "Computer Science graduate with hands-on experience as a Full Stack Developer at Urdaneta City University. Proficient in modern web technologies including JavaScript, React, PHP, and PostgreSQL, with a proven track record of developing and maintaining scalable web applications and responsive user interfaces. Skilled in backend systems, database management, enhancing operational modules (billing, enrollment, and student records), and optimizing overall system performance. Brings strong problem-solving abilities, adaptability, and effective team collaboration skills to fast-paced technical environments.",
    email: "darylkyle17@gmail.com",
    phone: "+63 945-517-3430",
    location: "Urdaneta City, Pangasinan, Philippines",
    availability: "Available for Full-time, Contract & Remote Roles",
    github: "https://github.com/Dkyle19",
    linkedin: "https://www.linkedin.com/in/daryl-kyle-bristol-707b62270",
    avatar: "/assets/avatar.png",
    cvPath: "/assets/docs/CV.pdf",
    resumePath: "/assets/docs/Resume.pdf"
  },

  stats: [
    { label: "Degree & Major", value: "BSCS '25", sublabel: "PHINMA UPang Graduate" },
    { label: "Enterprise OJT", value: "504+ Hrs", sublabel: "Cura Property Management" },
    { label: "Systems Built", value: "3+", sublabel: "Full-Stack Web & Mobile" },
    { label: "Verified Credentials", value: "4+", sublabel: "Cisco & Industry Certs" }
  ],

  projects: [
    {
      id: "leo-propert-ease",
      title: "Leo PropertEase",
      subtitle: "Property Leasing & Tenant Management Platform",
      category: "Thesis Projects",
      badge: "Capstone Thesis",
      featured: true,
      thumbnail: "/assets/projects/leo/462574301_353013327868890_843748714339796998_n%201.jpg",
      description: "Comprehensive property leasing & rental management system designed for property managers, landlords, and tenants. Features a landing page, apartment directory, tenant portal with GCash payment integration, and an Android mobile application.",
      longDescription: "Developed as an undergraduate thesis project to modernize the rental property ecosystem. The platform provides a full-stack web portal and Android mobile application for managing multi-building inventories. Tenants can view rented apartments, rental addresses, and complete GCash digital payments, while administrators manage property listings, tenant records, and transaction histories.",
      role: "Project Analyst & Lead Developer",
      period: "2024",
      type: "Web Application & Android App",
      techStack: [
        "HTML",
        "CSS",
        "JavaScript",
        "C#",
        ".NET",
        "Airtable",
        "Android",
        "Figma"
      ],
      highlights: [
        "Multi-screen Android mobile application for tenant and admin portals",
        "GCash and digital payment integration with transaction history",
        "Landing page with apartment discovery, FAQs, and About Us sections",
        "Apartment directory with unit availability and floor plan layouts",
        "Download-the-App promotional integration bridging web and mobile"
      ],
      screenshots: [
        {
          url: "/assets/projects/leo/462574301_353013327868890_843748714339796998_n%201.jpg",
          caption: "Landing Page — Leo's Rental Apartment home page with property hero, navigation, and Download The App CTA"
        },
        {
          url: "/assets/projects/leo/462541982_8851734018182568_8609523619368643914_n%201.jpg",
          caption: "Apartment Discovery — 'Discover Leo's Apartment' property grid listing units with price, rooms, and location details"
        },
        {
          url: "/assets/projects/leo/462572747_1203179807418800_466375847824244278_n%201.jpg",
          caption: "About Us — Property overview with aerial view and company introduction section"
        },
        {
          url: "/assets/projects/leo/462567176_451602267563672_3326800779076973820_n%201.jpg",
          caption: "FAQ Page — Frequently Asked Questions section addressing common renting process inquiries"
        },
        {
          url: "/assets/projects/leo/Android%20Design.jpg",
          caption: "Android Mobile App — Admin & Tenant login portals, properties dashboard, tenant directory, payment status tracker, and GCash payment gateway"
        }
      ],
      githubUrl: "https://github.com/Dkyle19",
      liveUrl: null
    },
    {
      id: "barangay-econn",
      title: "Barangay eConn",
      subtitle: "Emergency Dispatch & Resident Services Mobile System",
      category: "Thesis Projects",
      badge: "Mobile Solution",
      featured: true,
      thumbnail: "/assets/projects/econnect/image%202.png",
      description: "Community governance and digital services mobile platform for Barangay Nancayasan, enabling residents to request barangay certificates, pay community bills (garbage, association dues, daycare tuition), and manage their resident profile via E-Wallet (GCash).",
      longDescription: "Barangay eConn is an all-in-one community services mobile system built on Android with Firebase and Figma. Residents can sign up, log in, request official barangay documents (Clearance, Business Permit, Cedula, Certificate of Residency), pay utility and community fees through GCash or Cash on Delivery, track transactions, receive notifications, and manage their account profile.",
      role: "Project Analyst & Mobile Developer",
      period: "2022",
      type: "Mobile & Cloud Platform",
      techStack: [
        "Android",
        "Firebase",
        "Figma",
        "Bubble Framework",
        "REST APIs",
        "IDE"
      ],
      highlights: [
        "Digital Barangay Certificate filing: Clearance, Business Permit, Summon, Cedula, Residency, Association Registration",
        "Community Bill Payments: Daycare tuition, garbage collection fees, and HOA dues",
        "E-Wallet integration: GCash verification and Cash on Delivery checkout flows",
        "Resident account management with My Points, linked accounts, activity history, and profile editor",
        "Push notification system for community advisories and transaction updates"
      ],
      screenshots: [
        {
          url: "/assets/projects/econnect/image%202.png",
          caption: "Barangay Nancayasan Portal — Resident login screen and home dashboard with Certificates, Pay Bills, Transactions, and Notifications"
        },
        {
          url: "/assets/projects/econnect/image%204.png",
          caption: "Barangay Certificates Center — Digital filing for Clearance, Business Permit, Summon, Cedula, and Certificate of Residency"
        },
        {
          url: "/assets/projects/econnect/image%203.png",
          caption: "Community Bill Payments & Resident Profile — Daycare tuition, garbage collection, HOA dues, and account settings"
        },
        {
          url: "/assets/projects/econnect/image.png",
          caption: "E-Wallet & GCash Checkout — Payment method selection with GCash verification and Cash on Delivery options"
        }
      ],
      githubUrl: "https://github.com/Dkyle19",
      liveUrl: null
    },
    {
      id: "cura-property-platform",
      title: "Cura Website",
      subtitle: "Enterprise Real Estate Administration & Property Leasing Portal",
      category: "Enterprise / Internship",
      badge: "Industry Internship Project",
      featured: true,
      thumbnail: "/assets/projects/cura/Web%20Design.jpg",
      description: "Commercial web administration and property leasing portal built during a 504-hour On-the-Job Training internship at Cura Property Management Corp. in Baguio City. Developed front-end interfaces for property listings, unit directories, and tenant search filters.",
      longDescription: "Engineered at Cura Property Management Corp. (Baguio City) as a Front-End Computer Science Intern. Responsibilities included building responsive UI components with Laravel and Tailwind CSS, implementing property search and filter interfaces, integrating AWS S3 for document storage, and maintaining the MariaDB database. Internship ran from December 9, 2024 to March 8, 2025 (504 hours total).",
      role: "Front-End Developer Intern",
      period: "Dec 2024 – Mar 2025",
      type: "Enterprise Web Suite",
      techStack: [
        "Laravel",
        "Tailwind CSS",
        "AWS",
        "MariaDB",
        "JavaScript",
        "Git"
      ],
      highlights: [
        "Developed the Cura Services Corp. public-facing portal with property listings across 4 cities",
        "Built unit directory interfaces for North Cambridge (Harvard, Princeton, Wharton) and The Courtyards",
        "Implemented residential lodging catalogs: Cabins, Manors 1–3, Manors 4, and Lodges A & B",
        "Integrated AWS for secure cloud asset storage and document management pipelines",
        "Collaborated in an agile team with CI/CD deployment workflows and code reviews"
      ],
      screenshots: [
        {
          url: "/assets/projects/cura/Web%20Design.jpg",
          caption: "Cura Services Portal — Commercial real estate hub for Baguio, Tuguegarao, Urdaneta, and Dagupan"
        },
        {
          url: "/assets/projects/cura/Web%20Design-1.jpg",
          caption: "North Cambridge Estate — University-adjacent condominium leasing for Harvard, Princeton, and Wharton"
        },
        {
          url: "/assets/projects/cura/Web%20Design-2.jpg",
          caption: "The Courtyards Portfolio — Residential unit clusters (Cabins, Manors, and Lodges)"
        },
        {
          url: "/assets/projects/cura/Web%20Design-3.jpg",
          caption: "Unit Specifications & Leasing — Commercial, residential, and studio unit inventory management"
        }
      ],
      githubUrl: "https://github.com/Dkyle19",
      liveUrl: null
    }
  ],

  skills: {
    frontend: [
      { name: "React.js / JSX", level: "Advanced", icon: "react", experience: "3+ Years", highlight: true },
      { name: "JavaScript (ES6+)", level: "Advanced", icon: "js", experience: "4+ Years", highlight: true },
      { name: "Tailwind CSS", level: "Advanced", icon: "tailwind", experience: "3+ Years", highlight: true },
      { name: "HTML5 & CSS3", level: "Expert", icon: "html", experience: "4+ Years", highlight: true },
      { name: "Vite & Modern Bundlers", level: "Proficient", icon: "vite", experience: "2+ Years" }
    ],
    backend: [
      { name: "PHP & Laravel", level: "Proficient", icon: "laravel", experience: "2+ Years", highlight: true },
      { name: "C# / .NET", level: "Proficient", icon: "csharp", experience: "2+ Years", highlight: true },
      { name: "RESTful API Design", level: "Advanced", icon: "api", experience: "3+ Years", highlight: true },
      { name: "Kotlin & Java (Android)", level: "Proficient", icon: "kotlin", experience: "2+ Years" },
      { name: "Node.js Basics", level: "Intermediate", icon: "node", experience: "1+ Year" }
    ],
    databasesCloud: [
      { name: "PostgreSQL", level: "Proficient", icon: "postgres", experience: "2+ Years", highlight: true },
      { name: "MariaDB & MySQL", level: "Advanced", icon: "mysql", experience: "3+ Years", highlight: true },
      { name: "Firebase (Firestore/Auth)", level: "Proficient", icon: "firebase", experience: "2+ Years" },
      { name: "AWS (EC2 & S3)", level: "Intermediate", icon: "aws", experience: "1+ Year", highlight: true },
      { name: "Airtable", level: "Intermediate", icon: "airtable", experience: "1+ Year" }
    ],
    toolsDesign: [
      { name: "Figma (Wireframing & Specs)", level: "Advanced", icon: "figma", experience: "3+ Years", highlight: true },
      { name: "Git & GitHub", level: "Advanced", icon: "git", experience: "4+ Years", highlight: true },
      { name: "Postman / API Testing", level: "Proficient", icon: "postman", experience: "2+ Years" },
      { name: "Agile & Scrum Workflow", level: "Proficient", icon: "agile", experience: "2+ Years" },
      { name: "Responsive & Accessible Design", level: "Expert", icon: "responsive", experience: "4+ Years", highlight: true }
    ]
  },

  coreWorkSkills: [
    "Problem-Solving",
    "Communication",
    "Team Collaboration",
    "Time Management",
    "Adaptability"
  ],

  experience: [
    {
      id: "ucu-mis",
      role: "Full Stack Developer",
      company: "Management Information System (MIS) — Urdaneta City University",
      location: "Urdaneta City, Pangasinan",
      period: "Jan 2026 – Present",
      type: "Full-Time",
      description: "Developed and maintained web-based information systems for the university's administrative and academic operations using JavaScript, React, PHP, and PostgreSQL. Contributed to both front-end and back-end development, ensuring reliable performance, scalability, and a user-friendly experience.",
      achievements: [
        "Designed and implemented responsive user interfaces using React and modern web technologies.",
        "Developed and maintained backend functionalities and database structures using PHP and PostgreSQL.",
        "Built and enhanced modules for student records, billing, enrollment, and university management processes.",
        "Optimized system performance, improved application security, and resolved technical issues."
      ],
      techUsed: ["JavaScript", "React", "PHP", "PostgreSQL", "HTML/CSS", "Git", "REST APIs"]
    },
    {
      id: "cura-corp",
      role: "Computer Science Intern (Front-End Developer)",
      company: "Cura Property Management Corp.",
      location: "Baguio City, Philippines",
      period: "Dec 2024 – Mar 2025",
      type: "Internship (504 Hours OJT)",
      description: "Completed 504 hours of On-the-Job Training, developing enterprise client-facing web interfaces, property listing pages, and administrative dashboards for a commercial real estate firm.",
      achievements: [
        "Built dynamic, responsive web interfaces using Laravel and Tailwind CSS based on Figma mockups.",
        "Integrated AWS storage for secure tenant lease contract storage and cloud asset pipelines.",
        "Implemented property search interfaces with unit filtering for North Cambridge and The Courtyards portfolios.",
        "Participated in daily standups, sprint reviews, and code reviews, accelerating ticket resolution."
      ],
      techUsed: ["Laravel", "Tailwind CSS", "AWS", "MariaDB", "JavaScript", "Figma"]
    }
  ],

  education: [
    {
      degree: "Bachelor of Science in Computer Science (BSCS)",
      institution: "PHINMA UPANG College Urdaneta",
      location: "Urdaneta City, Pangasinan",
      period: "2021 – 2025",
      badge: "Graduated Class of 2025",
      description: "Focused on Software Engineering, Database Systems, Object-Oriented Programming, Mobile App Architecture, and Full-Stack Web Systems. Lead developer and project analyst for undergraduate thesis projects (Leo PropertEase & Barangay eConn).",
      highlights: [
        "Project Analyst & Developer for thesis projects 'Leo PropertEase' and 'Barangay eConn'",
        "Dean's List / Academic Excellence recognition",
        "Active member of the Junior Computer Science Society"
      ]
    },
    {
      degree: "Senior High School — General Academic Strand (GAS)",
      institution: "PHINMA UPANG College Urdaneta",
      location: "Urdaneta City, Pangasinan",
      period: "2019 – 2021",
      badge: "High Honors",
      description: "Foundation in analytical problem solving, introductory algorithms, web fundamentals, and communication skills.",
      highlights: [
        "Graduated with Academic Honors",
        "Leadership in tech and academic student organizations"
      ]
    }
  ],

  certifications: [
    {
      title: "Certificate of Completion — On-the-Job Training (Computer Science Intern)",
      issuer: "Cura Property Management Corp.",
      date: "March 10, 2025",
      credentialId: "CPMC-OJT-504HRS",
      description: "Completed 504 hours of On-the-Job Training as a Computer Science Intern from December 9, 2024 to March 8, 2025. Recognized by Laurence N. Ferrer (Head of Human Resources) and Pamela L. Tecson (Chief Operations Officer).",
      badge: "Verified Industry Credential"
    },
    {
      title: "JobReady Employability Skills",
      issuer: "Wadhwani Skilling Foundation",
      date: "November 29, 2024",
      credentialId: "WSF-JOBREADY-123HRS",
      description: "Successfully completed the JobReady Employability Skills course (123 hours) from PHINMA - University of Pangasinan. Certificate signed by Ajay Kela, CEO of Wadhwani Foundation.",
      badge: "Employability Certification"
    },
    {
      title: "Introduction to Modern AI",
      issuer: "Cisco Networking Academy (DICT-ITU DTC Initiative)",
      date: "July 1, 2026",
      credentialId: "CISCO-AI-DICT-ITU",
      description: "Successfully completed the Introduction to Modern AI course offered by the DICT-ITU DTC Initiative through Cisco Networking Academy. Instructor: Joelybev Ordiz.",
      badge: "Cisco Certified"
    },
    {
      title: "Introduction to Cybersecurity",
      issuer: "Cisco Networking Academy (DICT-ITU DTC Initiative)",
      date: "July 1, 2026",
      credentialId: "e51aca0c-9d5d-483c-86b8-7a70d37deed8",
      description: "Successfully completed the Introduction to Cybersecurity course offered by the DICT-ITU DTC Initiative through Cisco Networking Academy. Instructor: Joelybev Ordiz.",
      badge: "Cisco Certified"
    }
  ]
};