import React, { useRef, useEffect } from 'react';
import CustomNavBar from '../../components/common/CustomButton/CustomButton.jsx';
import HeroSection from '../../components/sections/HeroSection/HeroSection.jsx';
import AboutSection from '../../components/sections/AboutSection/AboutSection.jsx';
import ProjectsSection from '../../components/sections/ProjectsSection/ProjectsSection.jsx';
import ExperienceSection from '../../components/sections/ExperienceSection/ExperienceSection.jsx';
import SkillsSection from '../../components/sections/SkillsSection/SkillsSection.jsx';
import ContactSection from '../../components/sections/ContactSection/ContactSection.jsx';
import Footer from '../../components/sections/FooterSection/FooterSection.jsx';
import styles from './Portfolio.module.css';

const Portfolio = () => {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const portfolioRef = useRef(null);
  const experienceRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);
  const scrollControllerRef = useRef(null);

  useEffect(() => {
    scrollControllerRef.current = window;
  }, []);

  return (
    <div className={styles.portfolioContainer}>
      <CustomNavBar
        heroRef={heroRef}
        aboutRef={aboutRef}
        portfolioRef={portfolioRef}
        experienceRef={experienceRef}
        skillsRef={skillsRef}
        contactRef={contactRef}
      />

      <main className={styles.mainContent}>
        <section ref={heroRef} className={styles.section}>
          <HeroSection
            contactRef={contactRef}
            scrollController={scrollControllerRef}
          />
        </section>

        <section ref={aboutRef} className={styles.section}>
          <AboutSection scrollController={scrollControllerRef} />
        </section>

        <section ref={portfolioRef} className={styles.section}>
          <ProjectsSection scrollController={scrollControllerRef} />
        </section>

        <section ref={experienceRef} className={styles.section}>
          <ExperienceSection scrollController={scrollControllerRef} />
        </section>

        <section ref={skillsRef} className={styles.section}>
          <SkillsSection scrollController={scrollControllerRef} />
        </section>

        <section ref={contactRef} className={styles.section}>
          <ContactSection scrollController={scrollControllerRef} />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Portfolio;
