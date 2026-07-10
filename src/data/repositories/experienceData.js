import { ExperienceModel } from '../models/ExperienceModel.js';
import experienceJson from '../experience.json';

class ExperienceData {
  static experiences = (experienceJson.experiences || []).map((experience) =>
    ExperienceModel.fromJson(experience)
  );

  static getExperienceById(id) {
    return this.experiences.find((exp) => exp.id === id) || null;
  }

  static getCurrentJobs() {
    return this.experiences.filter((exp) => exp.isCurrentJob);
  }

  static getExperiencesByType(type) {
    return this.experiences.filter((exp) => exp.type === type);
  }

  static getAllTechnologies() {
    const allTechs = new Set();
    this.experiences.forEach((exp) => {
      exp.technologies.forEach((tech) => allTechs.add(tech));
    });
    return Array.from(allTechs).sort();
  }
}

export default ExperienceData;
