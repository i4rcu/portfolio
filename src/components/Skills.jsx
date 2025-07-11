import React from 'react'
import { motion } from 'framer-motion'
import { Code, Database, Globe, Smartphone, Server, Monitor } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const Skills = () => {
  const { t } = useTranslation();
  
  const skillCategories = [
    {
      icon: <Smartphone size={32} />,
      title: t('skills.categories.mobile'),
      skills: ["Flutter", "Dart", "Mobile UI/UX"]
    },
    {
      icon: <Monitor size={32} />,
      title: t('skills.categories.desktop'),
      skills: ["C# WinForms", "Desktop Applications", "Windows Development"]
    },
    {
      icon: <Server size={32} />,
      title: t('skills.categories.backend'),
      skills: ["C#", "ASP.NET", "Node.js", "C++", "C"]
    },
    {
      icon: <Database size={32} />,
      title: t('skills.categories.database'),
      skills: ["SQL Server", "MongoDB", "SQL", "Database Design"]
    },
    {
      icon: <Globe size={32} />,
      title: t('skills.categories.web'),
      skills: ["HTML", "CSS", "PHP", "Web Development"]
    },
    {
      icon: <Code size={32} />,
      title: t('skills.categories.frameworks'),
      skills: [".NET Framework", "BLoC Pattern", "State Management", "API Integration"]
    }
  ]

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {t('skills.title')}
        </motion.h2>
        
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index}
              className="skill-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="skill-icon">
                {category.icon}
              </div>
              <h3>{category.title}</h3>
              <div className="skill-list">
                {category.skills.join(' - ')}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills