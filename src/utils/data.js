export const SKILLS=[
    {
        title:"Frontend",
        icon:"./Assets/icon 1.png",
        skills:[
            {skill:"HTML",percentage:"80%"},
            {skill:"CSS",percentage:"70%"},
            {skill:"JavaScript",percentage:"50%"},
            {skill:"React.js",percentage:"60%"},
        ],
    },
    {
        title:"Backend",
        icon:"./Assets/icon 2.png",
        skills:[
            {skill:"Node.js",percentage:"70%"},
            {skill:"Express.js",percentage:"60%"}, 
            {skill:"MongoDB",percentage:"70%"},   
            {skill:"RESTful API Devlopement",percentage:"50%"}, 
            {skill:"Socket.io",percentage:"80%"}, 
        ],

    },
    {
        title:"UI & UX Design",
        icon:"./Assets/icon 6.png",
        skills:[
            {skill:"Figma",percentage:"80%"},
              
        ],

    },
    {
        title:"Data Analytics",
        icon:"./Assets/icon 4.png",
        skills:[
        { skill: "SQL", percentage: "85%" }, // You’ve done advanced joins, aggregations – this deserves a slight boost.
        { skill: "Statistics", percentage: "70%" }, // Reasonable if you’ve done basic EDA and interpretation.
        { skill: "Data Cleaning & Preparation", percentage: "85%" }, // Strong skill shown in your Python projects.
        { skill: "Data Visualization", percentage: "75%" }, // You used Power BI, Tableau, Matplotlib, and Seaborn.
        { skill: "Python (Pandas & NumPy)", percentage: "70%" }, // Bump slightly – you’ve done multiple analysis tasks with this.
        { skill: "Data Management", percentage: "60%" } // Reasonable; you’ve used MySQL, PostgreSQL, and DB design.
        ]
        ,
    },
    {
        title:"Tools",
        icon:"./Assets/icon 3.png",
        skills: [
            { skill: "Visual Studio Code", percentage: "85%" }, // Primary development environment
            { skill: "Power BI", percentage: "75%" },            // Great for data dashboards, already used in projects
            { skill: "Figma", percentage: "80%" },               // Strong design work shown in posters, UI
            { skill: "Git & GitHub", percentage: "70%" },        // Used in both dev & open-source contributions
            { skill: "Jupyter Notebook", percentage: "85%" },    // Central to your Python-based analysis work
            { skill: "Postman", percentage: "70%" }              // Add a relevant tool for API testing (used in backend projects)
            ]
            ,
    },
    {
        title:"Soft Skills",
        icon:"./Assets/icon 5.png",
        skills:[
             {skill:"Leadership",percentage:"80%"},
            {skill:"Problem-Solving",percentage:"75%"},
            {skill:"Teamwork & Collaboration",percentage:"65%"},
            {skill:"Communication",percentage:"80%"},
            {skill:"Creativity",percentage:"70%"},
            
        ],
    },
    
];

export const WORK_EXPERIENCES=[
    {
        title:"SDE Intern at  Bluestock ",
        domain:"Webdevelopment",
        date:" Feb-March 2025",
        responsibilities:[
            "Served as the Co-Team Lead in the development of a Hotel Booking Website using the MERN stack.",
            "Focused on the frontend design using HTML, CSS, and JavaScript to create responsive and user-friendly interfaces.",
            "Integrated APIs for payment gateway and ensured secure email communication.",
            { text: "View Certificate", link: "https://drive.google.com/file/d/1cp2dxpBHMe2-9G6OH6VdWPtIPaDp4_oq/view?usp=sharing" }
        ],
    },
    {
        title: "Head of Technical & Design Team at Let's Talk DTU",
        domain: "Leadership & Design",
        date: "Jan 2024 – Present",
        responsibilities: [
            "Led the technical and design initiatives for Let's Talk DTU, focusing on consistent branding and visual identity across digital platforms.",
            "Designed and developed standees, posters, and promotional materials, significantly improving event engagement and outreach.",
            "Managed and curated technical content for official social media handles, resulting in increased follower growth and interaction."
        ]
        },
    // {
    //     title:"  Data Analysis Intern  at   TECHVOLTPVT.LTD",
    //     date:"  MAR- APRIL2023",
    //     domain:"Data Science",
    //     responsibilities:[
    //         " Analyzedcustomer behavior using predictive analytics techniques such as regression, clustering, and decision trees.",
    //         "Builtmachine learning models for classification and regression problems.",
    //         "  Evaluatedmodelperformance metrics such as accuracy, precision, recall, F1 score."
    //     ],
    // },
    
]

export const Project_details=[
   {
  title: "Wealthify - Expense Tracker Application",
  domain: "Frontend", // or "Full Stack" if you prefer
  Description: [
    "Developed a responsive web application to manage daily expenses and income using HTML, CSS, and JavaScript.",
    "Implemented CRUD operations for transactions and integrated local storage for persistent data.",
    "Designed login and signup features with local storage to manage user accounts.",
    "Enhanced UX with a mobile-friendly interface using CSS Grid and media queries."
  ],
  image: "./Assets/Frontend/W-1.png", // Add your main preview image path here
  images: [
    "./Assets/Frontend/W-2.PNG",
    "./Assets/Frontend/W-3.PNG",
    "./Assets/Frontend/W-4.PNG",
    // Add screenshot paths here, e.g., "./Assets/Wealthify/1.jpg"
  ],
  liveLink: "https://wealthify-blond.vercel.app/",
  codeLink: "https://github.com/Gaurav075/Wealthify.git"
},
   {
  title: "Konnect – Real Time Chat Application",
  domain: "Full Stack",
  Description: [
    "Built a real-time chat app using the MERN stack and Socket.IO for seamless, bidirectional messaging.",
    "Implemented secure user authentication with JWT and real-time one-on-one messaging.",
    "Enabled features like image sharing, 20+ theme modes, online users filter, and profile customization.",
    "Used Zustand for global state management and deployed the app on Render with a responsive UI."
  ],
  image: "./Assets/Fullstack/K-1.PNG", // Add your preview image here
  images: [
    // Add your screenshot paths here, e.g., "./Assets/Konnect/1.jpg"
    "./Assets/Fullstack/K-2.PNG",
    "./Assets/Fullstack/K-3.PNG",
    "./Assets/Fullstack/K-4.PNG",
  ],
  liveLink: "https://chat-app-eight-eosin-26.vercel.app/",
  codeLink: "https://github.com/Gaurav075/Chat-App.git" // Replace with specific repo if different
},
    {
    title: "QuickJot – Note Making Application",
    domain: "Full Stack",
    Description: [
        "Developed a full-stack note-making app with features to create, edit, delete, and prioritize notes.",
        "Implemented secure authentication and password reset functionality using JWT and bcrypt.",
        "Integrated priority-based scheduling and user-specific note storage with MongoDB.",
        "Designed a clean and responsive interface using Tailwind CSS and deployed via Vercel & Render."
    ],
    image: "./Assets/Fullstack/Q-1.png", // Add your preview image here
    images: [
        "./Assets/Fullstack/Q-2.PNG",
        "./Assets/Fullstack/Q-3.PNG",
        "./Assets/Fullstack/Q-4.PNG"
    ],
    liveLink: "https://quick-jot-nine.vercel.app/",
    codeLink: "https://github.com/Gaurav075/QuickJot.git" // Replace with actual GitHub repo link
    },
    {
  title: "Inkspire – Full Stack Blog Application",
  domain: "Full Stack",
  Description: [
    "Developed a complete blog platform using the MERN stack with full CRUD functionality for blog posts.",
    "Implemented secure user authentication and protected routes using JWT and bcrypt.",
    "Integrated a rich text editor for formatted content creation and MongoDB for user-specific blog storage.",
    "Designed a fully responsive and clean UI with Tailwind CSS, deployed on Vercel (frontend) and Render (backend)."
  ],
  image: "./Assets/Fullstack/I-1.png", // Add your preview image here
  images: [
    "./Assets/Fullstack/I-2.PNG",
    "./Assets/Fullstack/I-3.PNG",
    "./Assets/Fullstack/I-4.PNG"
  ],
  liveLink: "https://blog-post-theta-three.vercel.app/",
  codeLink: "https://github.com/Gaurav075/Blog_Post.git" // Replace with your actual GitHub repo link
},


]