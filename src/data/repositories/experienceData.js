// src/data/repositories/experienceData.js

import { ExperienceModel } from '../models/ExperienceModel.js';

class ExperienceData {
  static experiences = [
    new ExperienceModel({
      id: 'exp_001',
      company: 'TUDO Inc.',
      position: 'Mobile Application Developer',
      duration: 'May 2020 - Present',
      location: '(USA) Remote',
      type: 'Freelance',
      description:
        'Working as a Mobile Application Developer, leading the development and maintenance of two major Flutter applications built from scratch. Responsible for managing the full mobile development team, implementing GraphQL APIs, ensuring high performance, and delivering seamless user experiences across all devices. Focused on clean architecture, scalable solutions, and mentoring team members in Flutter best practices.',
      responsibilities: [
        'Led the mobile development team, managing project timelines and coordinating tasks across members',
        'Developed and maintained two major Flutter applications built from scratch',
        'Integrated and optimized **GraphQL APIs** for efficient data management',
        'Mentored junior developers and interns in Flutter and mobile best practices',
        'Implemented robust testing strategies ensuring high code quality and maintainability',
        'Optimized application performance, resolved complex technical challenges, and ensured smooth user experiences',
        'Participated in architectural decisions, establishing scalable and maintainable Flutter project structures',
        'Conducted comprehensive code reviews and enforced team development standards',
      ],
      technologies: [
        'Flutter',
        'Dart',
        'GraphQL',
        'Firebase',
        'PostgreSQL',
        'REST APIs',
        'Provider',
        'Bloc',
        'Git',
        'Jira',
        'Trello',
        'nTask',
      ],
      companyLogo: null,
      companyWebsite: null,
      isCurrentJob: true,
    }),
    new ExperienceModel({
      id: 'exp_002',
      company: 'Kartum Infotech',
      position: 'iOS & Flutter Developer',
      duration: 'June 2018 - May 2020',
      location: 'Surat, India',
      type: 'Full-time',
      description:
        'Collaborated with an international team to build innovative iOS (Swift, UIKit) and Flutter applications. Focused on developing responsive interfaces for iPhone and iPad, implementing clean architecture, optimizing performance, and delivering seamless cross-platform user experiences across multiple projects.',
      responsibilities: [
        'Developed and maintained 10+ iOS applications and 4+ Flutter applications',
        'Led mobile development initiatives as the iOS lead while mentoring junior developers and interns in Flutter',
        'Handled project management and coordinated mobile development across the team',
        'Implemented robust testing strategies achieving 95% code coverage across mobile projects',
        'Collaborated with international teams using agile methodologies and modern workflows',
        'Optimized application performance and resolved complex technical challenges',
        'Participated in architectural decisions for mobile technology stacks',
        'Conducted comprehensive code reviews and established mobile development best practices',
      ],
      technologies: [
        'iOS',
        'Swift',
        'UIKit',
        'SwiftUI',
        'MVVM',
        'CoreData',
        'Flutter',
        'Dart',
        'Firebase',
        'REST APIs',
        'Provider',
        'Bloc',
        'SQLite',
        'Git',
        'Jira',
        'Trello',
        'Figma',
        'Sketch',
      ],
      companyLogo: '',
      companyWebsite: 'https://kartuminfotech.com',
    }),
  ];

  // Helper methods
  static getExperienceById(id) {
    return this.experiences.find(exp => exp.id === id) || null;
  }

  static getCurrentJobs() {
    return this.experiences.filter(exp => exp.isCurrentJob);
  }

  static getExperiencesByType(type) {
    return this.experiences.filter(exp => exp.type === type);
  }

  static getAllTechnologies() {
    const allTechs = new Set();
    this.experiences.forEach(exp => {
      exp.technologies.forEach(tech => allTechs.add(tech));
    });
    return Array.from(allTechs).sort();
  }
}

export default ExperienceData;