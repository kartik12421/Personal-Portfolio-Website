require('dotenv').config();
const mongoose = require('mongoose');
const PersonalInfo = require('./models/PersonalInfo');

const db = process.env.MONGO_URI;

const seedData = {
    name: 'Kartik Joshi',
    github: 'https://github.com/kartik12421',
    linkedin: 'https://www.linkedin.com/in/kartik-joshi-31a509330',
    instagram: 'https://www.instagram.com/kj_is__here_/',
    email: 'kartikjoshi842@gmail.com',
    skills: [
        { name: 'MongoDB', imageUrl: 'https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white', url: 'https://www.mongodb.com/' },
        { name: 'Express.js', imageUrl: 'https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white', url: 'https://expressjs.com/' },
        { name: 'React.js', imageUrl: 'https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB', url: 'https://react.dev/' },
        { name: 'Node.js', imageUrl: 'https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white', url: 'https://nodejs.org/' },
        { name: 'HTML5', imageUrl: 'https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white', url: 'https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5' },
        { name: 'CSS3', imageUrl: 'https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3' },
        { name: 'JavaScript', imageUrl: 'https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
        { name: 'Bootstrap', imageUrl: 'https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white', url: 'https://getbootstrap.com/' },
        { name: 'Material UI', imageUrl: 'https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=material-ui&logoColor=white', url: 'https://mui.com/' },
        { name: 'Tailwind CSS', imageUrl: 'https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white', url: 'https://tailwindcss.com/' },
        { name: 'Java', imageUrl: 'https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=java&logoColor=white', url: 'https://www.java.com/' },
        { name: 'MySQL', imageUrl: 'https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white', url: 'https://www.mysql.com/' },
        { name: 'Docker', imageUrl: 'https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white', url: 'https://www.docker.com/' },
        { name: 'Jira', imageUrl: 'https://img.shields.io/badge/Jira-0052CC?style=for-the-badge&logo=jira&logoColor=white', url: 'https://www.atlassian.com/software/jira' }
    ],
    work: [
        {
            title: 'TravelDen(Ongoing...)',
            description: 'A online marketplace that connects people who want to rent out their homes (hosts) with people who are looking for accommodations in specific locales (guests). (Currently working)',
            github: 'https://github.com/kartik12421/TravelDen.git'
        },
        {
            title: 'Weather Web Application',
            description: 'A react based project that shows the real time data of weather of a particular city, state or town. I use OpenWeather Api in it.',
            github: 'https://github.com/kartik12421/Weather-App-React.js-mini-project-',
            liveUrl: 'https://clinquant-cendol-ba8541.netlify.app/'
        },
        {
            title: 'Spotify clone (UI)',
            description: 'Create a clone Ui of Spotify using HTML and CSS only.',
            github: 'https://github.com/kartik12421/Spotify',
            liveUrl: 'https://dynamic-kitsune-e90d53.netlify.app/'
        }
    ],
    education: [
        {
            institution: 'COER University, Roorkee',
            degree: 'BCA',
            years: '2024 - 2027'
        },
        {
            institution: 'Divine Light School, Haridwar',
            degree: 'Intermediate',
            years: '2023 - 2024'
        },
        {
            institution: 'Divine Light School, Haridwar',
            degree: 'High School',
            years: '2021 - 2022'
        }
    ],
    certifications: [
        {
            name: 'National Hackathon - 2 Certificate',
            path: '/images/National-Hackathon-2.jpeg'
        },
        {
            name: 'National Hackathon - 1 Certificate',
            path: '/images/National-Hackathon-1.jpeg'
        },
        {
            name: 'Internal Hackathon - 5 Certificate',
            path: '/images/Internal-Hackathon-5.jpeg'
        },
        {
            name: 'Digital-Marketing-Workshop-(IIT Roorkee) Certificate',
            path: '/images/Digital-Marketing-Workshop-(IIT Roorkee).jpeg'
        },
        {
            name: 'Content-Creation-Workshop-(IIT Roorkee) Certificate',
            path: '/images/Content-Creation-Workshop-(IIT Roorkee).jpeg'
        },
        {
            name: 'IMS-workshop-(IIT Roorkee) Certificate',
            path: '/images/IMS-workshop-(IIT Roorkee).jpeg'
        },
        {
            name: 'Paytm-workshop-(IIT Roorkee) Certificate',
            path: '/images/Paytm-workshop-(IIT Roorkee).jpeg'
        },
        {
            name: 'Internal Hackathon - 3 Certificate',
            path: '/images/Internal-Hackathon-3.jpeg'
        },
        {
            name: 'Internal Hackathon - 1 Certificate',
            path: '/images/Internal-Hackathon-1.jpeg'
        },
        {
            name: 'HP - Effective Leadership',
            path: '/images/Effective-Leadership.jpeg'
        },
        {
            name: 'Udemy - Python Certificate',
            path: '/images/Python.jpeg'
        },
        
    ],
    experience: [
        {
            title: 'Web Development (MERN Stack) Intern',
            company: 'SkillBuildEra',
            years: '21 January, 2026 - 17 February, 2026',
            description: 'Engaged as a Web Development (MERN Stack) Intern at SkillBuildEra from January 21, 2026, to February 17, 2026. This intensive internship provided a deep dive into full-stack web development, encompassing both front-end and back-end technologies. Responsibilities included designing database schemas, implementing robust server-side logic, developing responsive user interfaces, and managing the complete deployment lifecycle of various web applications. Successfully delivered multiple projects, showcasing proficiency in the MERN stack.'
        }
    ]
};

const seedDB = async () => {
    try {
        await mongoose.connect(db);
        await PersonalInfo.deleteMany({});
        console.log('Previous data cleared.');
        await PersonalInfo.create(seedData);
        console.log('Database seeded successfully!');
    } catch (err) {
        console.error('Error seeding database:', err);
    } finally {
        mongoose.connection.close();
    }
};

seedDB();
