import React from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import abdurrahmanPhoto from '../assets/abdurrahman.jpg' // Add your photo here

const Hero = () => {
  const { t } = useTranslation()
  
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-wrapper">
          {/* Photo Section */}
          <motion.div 
            className="hero-image"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="image-container">
              <img 
                src={abdurrahmanPhoto} 
                alt="Abdurrahman Naccar" 
                className="profile-image"
              />
              <div className="image-overlay"></div>
            </div>
          </motion.div>
          
          {/* Content Section */}
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1 
              className="hero-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {t('hero.greeting')} <span className="highlight">{t('hero.name')}</span>
            </motion.h1>
            
            <motion.p 
              className="hero-subtitle"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {t('hero.title')}
            </motion.p>
            
            <motion.p 
              className="hero-description"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {t('hero.description')}
            </motion.p>
            
            <motion.div 
              className="hero-buttons"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <a href="#projects" className="btn btn-primary">
                {t('hero.viewWork')}
              </a>
              <a href="#contact" className="btn btn-secondary">
                {t('hero.getInTouch')}
              </a>
            </motion.div>
            
            <motion.div 
              className="hero-social"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <a href="https://github.com/abdurrahman" target="_blank" rel="noopener noreferrer">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com/in/abdurrahman-naccar" target="_blank" rel="noopener noreferrer">
                <Linkedin size={24} />
              </a>
              <a href="mailto:abdurrahman@example.com">
                <Mail size={24} />
              </a>
            </motion.div>
          </motion.div>
        </div>
        
        <motion.div 
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
        >
          <ChevronDown size={24} />
        </motion.div>
      </div>
    </section>
  )
}

export default Hero