export class ProjectModel {
  constructor({
    id,
    title,
    shortDescription,
    detailedDescription,
    thumbnailUrl,
    videoUrl,
    technologies,
    category,
    completionDate,
    websiteUrl = null,
    appStoreUrl = null,
    playStoreUrl = null,
    platforms = [],
    featured = true,
  }) {
    this.id = id;
    this.title = title;
    this.shortDescription = shortDescription;
    this.detailedDescription = detailedDescription;
    this.thumbnailUrl = thumbnailUrl;
    this.videoUrl = videoUrl;
    this.technologies = technologies;
    this.category = category;
    this.completionDate = completionDate;
    this.websiteUrl = websiteUrl;
    this.appStoreUrl = appStoreUrl;
    this.playStoreUrl = playStoreUrl;
    this.platforms = platforms;
    this.featured = featured;
  }

  get hasStoreLinks() {
    return Boolean(this.appStoreUrl || this.playStoreUrl || this.websiteUrl);
  }

  static fromJson(json, thumbnailUrl = null) {
    return new ProjectModel({
      id: json.id,
      title: json.title,
      shortDescription: json.shortDescription,
      detailedDescription: json.detailedDescription,
      thumbnailUrl: thumbnailUrl ?? json.thumbnailUrl ?? null,
      videoUrl: json.videoUrl,
      technologies: [...(json.technologies || [])],
      category: json.category,
      completionDate: json.completionDate ? new Date(json.completionDate) : null,
      websiteUrl: json.websiteUrl ?? null,
      appStoreUrl: json.appStoreUrl ?? null,
      playStoreUrl: json.playStoreUrl ?? null,
      platforms: [...(json.platforms || [])],
      featured: json.featured ?? true,
    });
  }

  toJson() {
    return {
      id: this.id,
      title: this.title,
      shortDescription: this.shortDescription,
      detailedDescription: this.detailedDescription,
      thumbnailUrl: this.thumbnailUrl,
      videoUrl: this.videoUrl,
      technologies: [...this.technologies],
      category: this.category,
      completionDate: this.completionDate?.toISOString?.() ?? this.completionDate,
      websiteUrl: this.websiteUrl,
      appStoreUrl: this.appStoreUrl,
      playStoreUrl: this.playStoreUrl,
      platforms: [...this.platforms],
      featured: this.featured,
    };
  }
}
