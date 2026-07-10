import { ProjectModel } from '../models/ProjectModel.js';
import portfolioJson from '../portfolio.json';

import carwashThumbnail from '../../assets/images/carwashThumbnail.png';
import vetpassThumbnail from '../../assets/images/vetpassThumbnail.png';
import dialavetThumbnail from '../../assets/images/dialavetThumbnail.png';
import eeDoctorsThumbnail from '../../assets/images/eeDoctorsThumbnail.png';
import heydividend from '../../assets/images/heydividend.png';
import hubavetThumbnail from '../../assets/images/hubavetThumbnail.png';
import indieFilmsRus from '../../assets/images/indieFilmsRus.png';
import momoyogaThumbnail from '../../assets/images/momoyogaThumbnail.png';
import NOVAThumbnail from '../../assets/images/NOVAThumbnail.png';
import pangoVetThumbnail from '../../assets/images/pangoVetThumbnail.png';
import PapaScore from '../../assets/images/PapaScore.png';
import pawssumThumbnail from '../../assets/images/pawssumThumbnail.png';
import sheTracker from '../../assets/images/sheTracker.png';
import yoyo from '../../assets/images/yoyo.png';

const thumbnailMap = {
  'carwashThumbnail.png': carwashThumbnail,
  'vetpassThumbnail.png': vetpassThumbnail,
  'dialavetThumbnail.png': dialavetThumbnail,
  'eeDoctorsThumbnail.png': eeDoctorsThumbnail,
  'heydividend.png': heydividend,
  'hubavetThumbnail.png': hubavetThumbnail,
  'indieFilmsRus.png': indieFilmsRus,
  'momoyogaThumbnail.png': momoyogaThumbnail,
  'NOVAThumbnail.png': NOVAThumbnail,
  'pangoVetThumbnail.png': pangoVetThumbnail,
  'PapaScore.png': PapaScore,
  'pawssumThumbnail.png': pawssumThumbnail,
  'sheTracker.png': sheTracker,
  'yoyo.png': yoyo,
};

const projects = (portfolioJson.projects || [])
  .filter((project) => project.featured !== false)
  .map((project) =>
    ProjectModel.fromJson(project, thumbnailMap[project.thumbnail] || null)
  );

export const portfolioData = {
  projects,

  get categories() {
    return [...new Set(this.projects.map((project) => project.category))];
  },

  getProjectsByCategory(category) {
    return this.projects.filter((project) => project.category === category);
  },

  getProjectById(id) {
    return this.projects.find((project) => project.id === id) || null;
  },

  getStoreProjects() {
    return this.projects.filter(
      (project) => project.appStoreUrl || project.playStoreUrl
    );
  },
};
