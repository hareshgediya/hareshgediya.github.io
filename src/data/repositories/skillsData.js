// src/data/repositories/skillsData.js

import { SkillModel } from '../models/SkillModel.js';

const skillsData = {
  skills: [
    // Mobile Development
    {
      name: "iOS",
      category: "Mobile Development",
      proficiency: 0.95,
      logoPath: "./techIcons/iOS.png",
      description: "Operating system for iPhone and iPad",
    },
    {
      name: "Swift",
      category: "Mobile Development",
      proficiency: 0.95,
      logoPath: "./techIcons/Swift.png",
      description: "Programming language for iOS development",
    },
    {
      name: "Flutter",
      category: "Mobile Development",
      proficiency: 0.95,
      logoPath: "./techIcons/Flutter.png",
      description: "Cross-platform mobile app development with beautiful UIs",
    },
    {
      name: "Dart",
      category: "Mobile Development",
      proficiency: 0.90,
      logoPath: "./techIcons/Dart.png",
      description: "Primary programming language for Flutter development",
    },
    {
      name: "Kotlin",
      category: "Mobile Development",
      proficiency: 0.90,
      logoPath: "./techIcons/Kotlin.png",
      description: "Cross-platform mobile app development with beautiful UIs",
    },

    // Frontend & Web Development
    /* {
      name: "React",
      category: "Frontend & Styling",
      proficiency: 0.90,
      logoPath: "./techIcons/React.png",
      description: "Modern JavaScript library for building user interfaces",
    },
    {
      name: "Next.js",
      category: "Frontend & Styling",
      proficiency: 0.75,
      logoPath: "./techIcons/Next.js.png",
      description: "React framework for production-ready applications",
    },
    {
      name: "JavaScript",
      category: "Programming Language",
      proficiency: 0.70,
      logoPath: "./techIcons/JavaScript.png",
      description: "Core programming language for web development",
    },
    {
      name: "TypeScript",
      category: "Programming Language",
      proficiency: 0.75,
      logoPath: "./techIcons/TypeScript.png",
      description: "Typed superset of JavaScript for better development",
    },
    {
      name: "HTML5",
      category: "Frontend & Styling",
      proficiency: 0.85,
      logoPath: "./techIcons/HTML5.png",
      description: "Modern markup language for creating web pages",
    },
    {
      name: "CSS3",
      category: "Frontend & Styling",
      proficiency: 0.80,
      logoPath: "./techIcons/CSS3.png",
      description: "Advanced styling language for web interfaces",
    }, */

    // Backend & APIs  
    /* {
      name: "Node.js",
      category: "Backend & APIs",
      proficiency: 0.80,
      logoPath: "./techIcons/Node.js.png",
      description: "Server-side JavaScript runtime environment",
    }, */
    {
      name: "Python",
      category: "Backend & APIs",
      proficiency: 0.80,
      logoPath: "./techIcons/Python.png",
      description: "Versatile programming language for backend development",
    },
    {
      name: "Go",
      category: "Backend & APIs",
      proficiency: 0.80,
      logoPath: "./techIcons/Go.png",
      description: "Programming language for backend development",
    },

    // Database & State Management
    {
      name: "MongoDB",
      category: "Database & State Management",
      proficiency: 0.70,
      logoPath: "./techIcons/MongoDB.png",
      description: "NoSQL document database for modern applications",
    },
    {
      name: "MySQL",
      category: "Database & State Management",
      proficiency: 0.65,
      logoPath: "./techIcons/MySQL.png",
      description: "Popular relational database management system",
    },
    {
      name: "PostgreSQL",
      category: "Database & State Management",
      proficiency: 0.70,
      logoPath: "./techIcons/PostgreSQL.png",
      description: "Object-relational database management system",
    },
    {
      name: "Firebase",
      category: "Backend & APIs",
      proficiency: 0.90,
      logoPath: "./techIcons/Firebase.png",
      description: "Backend-as-a-Service platform for mobile and web apps",
    },

    // Design & Prototyping
    {
      name: "Figma",
      category: "Design & Prototyping",
      proficiency: 0.70,
      logoPath: "./techIcons/Figma.png",
      description: "Collaborative design and prototyping tool",
    },
    /* {
      name: "Sketch",
      category: "Design & Prototyping",
      proficiency: 0.70,
      logoPath: "./techIcons/Sketch.png",
      description: "UI/UX design and prototyping tool",
    }, */

    // Version Control & Collaboration
    {
      name: "Git",
      category: "Version Control & Collaboration",
      proficiency: 0.85,
      logoPath: "./techIcons/Git.png",
      description: "Distributed version control system",
    },
    /* {
      name: "GitHub",
      category: "Version Control & Collaboration",
      proficiency: 0.85,
      logoPath: "./techIcons/GitHub.png",
      description: "Version control and collaborative development platform",
    },
    {
      name: "Bitbucket",
      category: "Version Control & Collaboration",
      proficiency: 0.65,
      logoPath: "./techIcons/Bitbucket.png",
      description: "Git repository hosting service",
    }, */
    {
      name: "Docker",
      category: "Deployment & Hosting",
      proficiency: 0.70,
      logoPath: "./techIcons/Docker.png",
      description: "Containerization platform for applications",
    },

    // Project Management
    {
      name: "Jira",
      category: "Version Control & Collaboration",
      proficiency: 0.65,
      logoPath: "./techIcons/Jira.png",
      description: "Project management and issue tracking tool",
    },
    {
      name: "Trello",
      category: "Version Control & Collaboration",
      proficiency: 0.65,
      logoPath: "./techIcons/Trello.png",
      description: "Kanban-style project management tool",
    },

    // Additional Cloud & Deployment (Optional - you can keep or remove)
    {
      name: "AWS",
      category: "Deployment & Hosting",
      proficiency: 0.75,
      logoPath: "./techIcons/AWS.png",
      description: "Amazon Web Services cloud platform",
    },
    {
      name: "Vercel",
      category: "Deployment & Hosting",
      proficiency: 0.75,
      logoPath: "./techIcons/Vercel.png",
      description: "Frontend deployment platform with serverless functions",
    }
  ]
};

export class SkillsRepository {
  // Simply return all skills data
  static getAllSkills() {
    return skillsData.skills.map(skill => SkillModel.fromJson(skill));
  }
}
