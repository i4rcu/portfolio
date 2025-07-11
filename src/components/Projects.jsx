import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const Projects = () => {
  const { t } = useTranslation();
  
  const completedProjects = [
    {
      title: "Reporting Application",
      description: "A comprehensive reporting system with user-based authorization using Flutter and ASP.NET Web API. Users can view only authorized reports, with each report running predefined SQL queries and displaying results in dynamic tables. Features responsive UI for desktop and mobile platforms.",
      technologies: ["Flutter", "ASP.NET Web API", "SQL Server", "BLoC Pattern", "C#"],
      year: "2024",
      features: [
        "User-based authorization system",
        "Dynamic SQL query execution",
        "Responsive UI (desktop & mobile)",
        "State management with BLoC pattern"
      ],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Solution Center Platform",
      description: "An internal technical support platform for managing and searching problem solutions. Users can submit solutions in multiple formats (text, PDF, image, link) with advanced search functionality. Includes comprehensive admin panel for user and content management.",
      technologies: ["Flutter", "Node.js", "Express", "MongoDB", "REST API"],
      year: "2025",
      features: [
        "Multi-format content support",
        "Advanced search functionality",
        "Admin panel for management",
        "Modern responsive interface"
      ],
      liveUrl: "#",
      githubUrl: "#"
    }
  ]

  const currentProjects = [
    {
      title: "E-Commerce Mobile App",
      description: "A full-featured e-commerce mobile application with Flutter frontend and Node.js backend. Features include product catalog, shopping cart, payment integration, and order tracking.",
      technologies: ["Flutter", "Node.js", "MongoDB", "Payment Gateway", "REST API"],
      status: "In Development",
      progress: "70%",
      features: [
        "Product catalog and search",
        "Shopping cart functionality",
        "Payment gateway integration",
        "Order tracking system"
      ]
    },
    {
      title: "Inventory Management System",
      description: "A desktop application for inventory management using C# WinForms and SQL Server. Includes barcode scanning, stock alerts, and comprehensive reporting features.",
      technologies: ["C# WinForms", "SQL Server", "Barcode Scanner", "Crystal Reports"],
      status: "Planning Phase",
      progress: "25%",
      features: [
        "Barcode scanning integration",
        "Real-time stock alerts",
        "Comprehensive reporting",
        "Multi-user access control"
      ]
    }
  ]

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {t('projects.title')}
        </motion.h2>
        
        {/* Completed Projects */}
        <motion.h3 
          className="projects-section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Completed Projects
        </motion.h3>
        
        <div className="projects-grid">
          {completedProjects.map((project, index) => (
            <motion.div 
              key={index}
              className="project-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="project-header">
                <div className="project-year">
                  {project.year}
                </div>
                <div className="project-links">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={20} />
                  </a>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github size={20} />
                  </a>
                </div>
              </div>
              
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                
                <div className="project-features">
                  <h4>Key Features:</h4>
                  <ul>
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>{feature}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="project-technologies">
                  {project.technologies.join(' - ')}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Current Projects */}
        <motion.h3 
          className="projects-section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          Projects I'm Working On
        </motion.h3>
        
        <div className="projects-grid">
          {currentProjects.map((project, index) => (
            <motion.div 
              key={index}
              className="project-card current-project"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="project-header">
                <div className="project-status">
                  {project.status}
                </div>
                <div className="project-progress">
                  {project.progress}
                </div>
              </div>
              
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                
                <div className="project-features">
                  <h4>Planned Features:</h4>
                  <ul>
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>{feature}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="project-technologies">
                  {project.technologies.join(' - ')}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects