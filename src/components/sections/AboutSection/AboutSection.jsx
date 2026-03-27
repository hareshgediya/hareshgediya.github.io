import React, { useState, useEffect, useRef } from 'react';
import styles from './AboutSection.module.css';
import myProfile from '../../../assets/images/profile.png'

const AboutSection = ({ scrollController }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!hasAnimated && isInView()) {
        setIsVisible(true);
        setHasAnimated(true);
      }
    };

    const scrollElement = window;

    scrollElement.addEventListener('scroll', handleScroll);
    setTimeout(handleScroll, 100);

    return () => {
      scrollElement.removeEventListener('scroll', handleScroll);
    };
  }, [hasAnimated]);

  const isInView = () => {
    if (!sectionRef.current) return false;

    const rect = sectionRef.current.getBoundingClientRect();
    const screenHeight = window.innerHeight;

    return rect.top < screenHeight * 0.7 && rect.top > -rect.height * 0.3;
  };

  const handleSocialClick = (platform) => {
    const links = {
      Twitter: 'https://x.com/hareshgediya',
      LinkedIn: 'https://www.linkedin.com/in/hareshgediya/',
      GitHub: 'https://github.com/hareshgediya'
    };

    if (links[platform]) {
      window.open(links[platform], '_blank');
    }
  };

  return (
    <section 
      ref={sectionRef}
      className={`${styles.aboutSection} ${isVisible ? styles.animate : ''}`}
    >
      <div className={styles.container}>
        <div className={styles.content}>

          {/* Desktop Layout */}
          <div className={styles.desktopLayout}>
            <div className={`${styles.textContent} ${styles.slideFromLeft}`}>
              <div className={styles.textWrapper}>
                <div className={styles.sectionLabel}>About Me</div>
                <h1 className={styles.name}>Haresh Gediya</h1>
                              <p className={styles.introduction}>
                  I am a Mobile Application Developer with over eight years of experience building powerful, high-quality apps for iOS, Android, and cross-platform environments. I began my career as an iOS developer, mastering Swift, SwiftUI, and Objective-C, and later expanded into Flutter, Kotlin Multiplatform, and backend development with Go.
                </p>
                <p className={styles.skillsBrief}>
                  I've developed and launched numerous applications on the App Store and Google Play Store, focusing on creating seamless user experiences and clean, maintainable code. Passionate about mobile architecture, performance optimization, and modern development practices, I’m dedicated to turning ideas into impactful digital products that perform beautifully across all platforms.
                </p>
                <div className={styles.socialLinks}>
                  {['Twitter', 'LinkedIn', 'GitHub'].map((platform) => (
                    <button
                      key={platform}
                      className={styles.socialLink}
                      onClick={() => handleSocialClick(platform)}
                    >
                      <span className={styles.socialText}>{platform}</span>
                      <div className={styles.socialUnderline}></div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className={`${styles.imageContent} ${styles.slideFromRight}`}>
              <div className={styles.imageWrapper}>
                <img 
                  src={myProfile} 
                  alt="Haresh Gediya - Senior Mobile and Web Developer" 
                  className={styles.profileImage}
                />
              </div>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className={styles.mobileLayout}>
            <div className={`${styles.imageContent} ${styles.slideFromRight}`}>
              <div className={styles.imageWrapper}>
                <img 
                  src={myProfile} 
                  alt="Haresh Gediya - Senior Mobile and Web Developer" 
                  className={styles.profileImage}
                />
              </div>
            </div>

            <div className={`${styles.textContent} ${styles.slideFromLeft}`}>
              <div className={styles.textWrapper}>
                <div className={styles.sectionLabel}>About Me</div>
                <h1 className={styles.name}>Haresh Gediya</h1>
                <p className={styles.introduction}>
                  Hello, I'm Haresh Gediya.<br />
                  I'm a senior mobile and web developer who brings digital ideas to life. With expertise in both 
                  mobile app development and modern web technologies, I create seamless user experiences that work 
                  beautifully across all platforms.
                </p>
                <p className={styles.skillsBrief}>
                  Over the years, I've successfully built and launched numerous applications on both Google Play Store 
                  and Apple App Store using Flutter and React Native. My web development skills span modern frameworks 
                  and technologies, allowing me to create responsive, fast-loading websites that engage users and drive results. 
                  I believe in writing clean, maintainable code and always stay updated with the latest industry trends 
                  to deliver cutting-edge solutions.
                </p>
                <div className={styles.socialLinks}>
                  {['Twitter', 'LinkedIn', 'GitHub'].map((platform) => (
                    <button
                      key={platform}
                      className={styles.socialLink}
                      onClick={() => handleSocialClick(platform)}
                    >
                      <span className={styles.socialText}>{platform}</span>
                      <div className={styles.socialUnderline}></div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
