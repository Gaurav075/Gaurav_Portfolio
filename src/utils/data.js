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
    // {
    //     title:" DATA SCIENCE AND DATA ANALYTICS Intern at  NOVITECHPVT.LTD ",
    //     date:" JUNE-JULY 2023",
    //     domain:"Data Science",  
    //     responsibilities:[
    //         " Gathered, organized, and cleaned data from multiple sources for further analysis.",
    //         "Translated raw data into meaningful information using statistical techniques.",
    //         "  Conductedexploratory analysis of complex datasets using Python libraries such as Numpy and Pandas.",
    //         " Builtvisualizations that enabled users to quickly interpret results from complex analyses."
    //     ],
    // },
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
  image: "./Assets/Frontend/W-1.PNG", // Add your main preview image path here
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
        title:"Luthen Analytics",
        domain:"  Web Development",
        Description:[
           "I was responsible for designing and developing the official website for Luthen Analytics, focusing on creating a modern, user-friendly, and responsive platform that effectively showcases the company’s data analytics solutions. My work included:",
"Building a clean, professional UI/UX that reflects the brand’s innovative approach.",
"Implementing responsive design to ensure seamless experience across devices (desktop, tablet, mobile).",
"Developing interactive and visually appealing data visualization demos to highlight core features.",
"Optimizing website performance for fast loading and smooth navigation.",
"Integrating SEO best practices to improve online visibility and search ranking.",
"Collaborating closely with the analytics and marketing teams to align website content with business goals.",
"Using React.js (or your tech stack) and modern web development tools to ensure maintainability and scalability.",
"This project helped establish Luthen Analytics’ online presence with a forward-thinking website that supports lead generation and communicates the company’s expertise effectively."],
 image: "./Assets/WebDevelopment/Luthen/0.jpg",
        images: [
     "./Assets/WebDevelopment/Luthen/1.png",
     "./Assets/WebDevelopment/Luthen/2.png",
     "./Assets/WebDevelopment/Luthen/3.png",
     "./Assets/WebDevelopment/Luthen/4.png",
     "./Assets/WebDevelopment/Luthen/5.png", "./Assets/WebDevelopment/Luthen/6.png", "./Assets/WebDevelopment/Luthen/6.png", "./Assets/WebDevelopment/Luthen/7.png", "./Assets/WebDevelopment/Luthen/8.png",],
      liveLink: "https://www-luthen-analytics-com.onrender.com",
        codeLink: "https://github.com/akashak0823/Analyz",
    },
    {
        title:"   Weather Forecasting Using Machine Learning",
        domain:"  Machine Learning",
        Description:[
           "I developed a weather forecasting system using machine learning in Python that predicts future weather conditions such as temperature, humidity, wind speed, and rainfall based on historical weather data. This project demonstrates the application of data science in real-world environmental forecasting.",
"Key Contributions",
"Collected and preprocessed historical weather datasets from trusted sources (e.g., NOAA, Kaggle).",
"Engineered relevant features like time-based patterns, moving averages, and lag values to improve model accuracy.",
"Implemented regression models such as Linear Regression, Random Forest Regressor, and XGBoost to predict weather parameters.",
"Evaluated models using performance metrics like RMSE, MAE, and R² score for accurate and reliable forecasting.",
"Visualized predictions and actual weather trends using Matplotlib and Seaborn to showcase model performance.",
"Designed a simple command-line interface (or Flask web app, if applicable) to input date/location and get forecast results.",
"Tech Stack: Python, Pandas, NumPy, Scikit-learn, Matplotlib, Seaborn, Jupyter Notebook",
"This project highlights my ability to apply machine learning techniques to solve real-world problems, showcasing strong skills in data preprocessing, model training, and result interpretation within the context of environmental analytics."
           , ],
        image: "./Assets/1.jpg",
        codeLink: "https://github.com/akashak0823/iris_prediction",
    },

]