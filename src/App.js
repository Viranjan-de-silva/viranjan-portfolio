import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Github, Linkedin, Mail, Phone, ChevronDown, 
  Brain, Eye, Cpu, Zap, Code, Database,
  ArrowUpRight, Menu, X
} from 'lucide-react';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'experience', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const projects = [
    {
      id: 1,
      title: "Vision-Based Humanoid Robot Arm",
      category: "Computer Vision & Robotics",
      description: "3-DoF robotic manipulator mimicking human hand posture movements with dual control modes: posture-based and gesture-based control using webcam input.",
      technologies: ["Computer Vision", "Kinematics", "OpenCV", "3D Design", "Arduino"],
      highlights: [
        "Real-time hand tracking and posture recognition",
        "Dual-camera validation system",
        "Dynamic simulation and stress analysis",
        "Gesture-based control with 6 distinct commands"
      ],
      image: "🤖",
      links: {
        github: "https://github.com/Viranjan-de-silva/Computer-Vision_Based_Human_arm_angle_measurement_system"
      }
    },
    {
      id: 2,
      title: "Redundant Robotic Manipulator with Oblique Swivel Joints",
      category: "Advanced Robotics",
      description: "7-DoF manipulator with adaptable access paths for confined spaces, integrated with Intel RealSense D435i RGB-D camera for vision-based navigation.",
      technologies: ["ROS", "Path Planning", "3D Vision", "ICP Algorithm", "Topology Optimization"],
      highlights: [
        "Novel oblique swivel joint design",
        "Real-time 3D environment reconstruction",
        "Autonomous circular hole and pipe bend navigation",
        "Topology-optimized link profiles",
        "Custom control pendant with OLED display"
      ],
      image: "🦾",
      links: {
        Github: "",
      }
    },
    {
      id: 3,
      title: "Trailer Positioning System",
      category: "Industrial Computer Vision",
      description: "Computer vision-based algorithm for precise trailer positioning to optimize container loading/unloading efficiency at CICT.",
      technologies: ["Deep Learning", "Image Processing", "CNN", "OpenCV", "Python"],
      highlights: [
        "Lens distortion correction using checkerboard calibration",
        "Lane and alignment detection",
        "Trained model for real-time positioning",
        "Undefined state handling for edge cases"
      ],
      image: "🚛",
      links: {
        linkedin: "https://www.linkedin.com/feed/update/urn:li:activity:7197870569726386176/",
        Github: "https://github.com/Viranjan-de-silva/Trailer-Positioning-System"
      }
    },
    {
      id: 4,
      title: "Inverter Fan Tester",
      category: "Industrial Automation",
      description: "Portable diagnostic device to identify faulty inverter fans in quay cranes by analyzing RPM response to PWM signals.",
      technologies: ["Arduino", "PWM Control", "Embedded Systems", "Circuit Design"],
      highlights: [
        "Automatic fault detection algorithm",
        "Tachometer feedback integration",
        "Manual and automatic operation modes",
        "Real-time RPM monitoring and classification"
      ],
      image: "⚡",
      links: {
        documentation: "#"
      }
    }
  ];

  const skills = [
    { icon: Brain, name: "Machine Learning", color: "#ff6b6b" },
    { icon: Eye, name: "Computer Vision", color: "#4ecdc4" },
    { icon: Cpu, name: "Robotics & Control", color: "#45b7d1" },
    { icon: Code, name: "Embedded Systems", color: "#96ceb4" },
    { icon: Zap, name: "Automation", color: "#ffeaa7" },
    { icon: Database, name: "3D Design & CAD", color: "#dfe6e9" }
  ];

  return (
    <div className="app">
      {/* Navigation */}
      <motion.nav 
        className="nav"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="nav-container">
          <motion.div 
            className="logo"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="logo-text">V</span>
            <span className="logo-subtext">iranjan</span>
          </motion.div>
          
          <div className="nav-links desktop-nav">
            {['Home', 'About', 'Projects', 'Experience', 'Contact'].map((item) => (
              <motion.button
                key={item}
                className={`nav-link ${activeSection === item.toLowerCase() ? 'active' : ''}`}
                onClick={() => scrollToSection(item.toLowerCase())}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                {item}
              </motion.button>
            ))}
          </div>

          <button 
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div 
            className="mobile-nav"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            {['Home', 'About', 'Projects', 'Experience', 'Contact'].map((item) => (
              <button
                key={item}
                className={`mobile-nav-link ${activeSection === item.toLowerCase() ? 'active' : ''}`}
                onClick={() => scrollToSection(item.toLowerCase())}
              >
                {item}
              </button>
            ))}
          </motion.div>
        )}
      </motion.nav>

      {/* Progress Bar */}
      <motion.div 
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-background">
          <motion.div 
            className="grid-pattern"
            style={{ y: backgroundY }}
          />
        </div>
        
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="hero-tag">Mechatronic Engineer</div>
            <h1 className="hero-title">
              <span className="hero-name">Viranjan</span>
              <span className="hero-surname">De Silva</span>
            </h1>
            <p className="hero-subtitle">
              Designing intelligent systems through robotics, computer vision, 
              and automation to solve real-world challenges.
            </p>
            
            <div className="hero-cta">
              <motion.button 
                className="cta-primary"
                onClick={() => scrollToSection('projects')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
                <ChevronDown className="cta-icon" />
              </motion.button>
              <motion.button 
                className="cta-secondary"
                onClick={() => scrollToSection('contact')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get in Touch
              </motion.button>
            </div>

            <div className="hero-social">
              <motion.a 
                href="https://linkedin.com/in/viranjan-de-silva"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
              >
                <Linkedin />
              </motion.a>
              <motion.a 
                href="https://github.com/Viranjan-de-silva"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
              >
                <Github />
              </motion.a>
              <motion.a 
                href="mailto:viranjandesilva@gmail.com"
                whileHover={{ y: -3 }}
              >
                <Mail />
              </motion.a>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="scroll-indicator"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title">About Me</h2>
            <div className="about-content">
              <div className="about-text">
                <p className="about-intro">
                  A Mechatronic Engineer with a passion for robotics and computer vision, 
                  focused on designing intelligent systems to solve real-world automation challenges.
                </p>
                <div className="about-points">
                  <div className="about-point">
                    <div className="point-icon">✦</div>
                    <p>Hands-on experience developing robotic and vision-based systems using both 
                    model-based and data-driven approaches.</p>
                  </div>
                  <div className="about-point">
                    <div className="point-icon">✦</div>
                    <p>Eager to contribute my skills in control systems and automation to build 
                    robust and efficient robotic systems.</p>
                  </div>
                  <div className="about-point">
                    <div className="point-icon">✦</div>
                    <p>Experienced in both academic research and industrial applications, 
                    bridging theory and practice in mechatronic systems.</p>
                  </div>
                </div>
              </div>

              <div className="skills-grid">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className="skill-card"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5, boxShadow: `0 10px 30px ${skill.color}40` }}
                  >
                    <skill.icon 
                      className="skill-icon" 
                      style={{ color: skill.color }}
                    />
                    <span className="skill-name">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title">Featured Projects</h2>
            
            <div className="projects-grid">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className="project-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ y: -10 }}
                >
                  <div className="project-emoji">{project.image}</div>
                  
                  <div className="project-category">{project.category}</div>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-tech">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="tech-tag">+{project.technologies.length - 4}</span>
                    )}
                  </div>

                  <div className="project-highlights">
                    <strong>Key Highlights:</strong>
                    <ul>
                      {project.highlights.slice(0, 3).map((highlight, i) => (
                        <li key={i}>{highlight}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="project-links">
                    {Object.entries(project.links).map(([type, url]) => (
                      <motion.a
                        key={type}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {type.charAt(0).toUpperCase() + type.slice(1)}
                        <ArrowUpRight className="link-icon" />
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="experience">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title">Experience</h2>
            
            <div className="experience-card">
              <div className="experience-header">
                <div>
                  <h3 className="experience-title">Lecturer, Faculty of Technology</h3>
                  <h4 className="experience-company">
                    University of Sri Jayewardenepura
                  </h4>
                </div>
                <div className="experience-date">Oct 2025 – Present</div>
              </div>
              
              <p className="experience-description">
                Yet to write
              </p>

              <div className="experience-achievements">
                <h5>Key Contributions:</h5>
                <ul>
                  <li>Developed portable inverter fan testing device to diagnose malfunctioning 
                  fans in quay cranes, reducing maintenance downtime</li>
                  <li>Designed and implemented computer vision-based trailer positioning system 
                  to optimize container loading efficiency</li>
                  <li>Collaborated with maintenance and operations teams to identify automation 
                  opportunities</li>
                  <li>Gained hands-on experience with industrial-scale automation systems and 
                  port terminal operations</li>
                </ul>
              </div>
            </div>


            <div className="experience-card">
              <div className="experience-header">
                <div>
                  <h3 className="experience-title">Industrial Intern</h3>
                  <h4 className="experience-company">
                    Colombo International Container Terminals (CICT)
                  </h4>
                </div>
                <div className="experience-date">Dec 2023 – June 2024</div>
              </div>
              
              <p className="experience-description">
                Integral member of a four-person team focused on terminal operations, 
                maintenance processes, and developing key automation projects to enhance 
                operational efficiency.
              </p>

              <div className="experience-achievements">
                <h5>Key Contributions:</h5>
                <ul>
                  <li>Developed portable inverter fan testing device to diagnose malfunctioning 
                  fans in quay cranes, reducing maintenance downtime</li>
                  <li>Designed and implemented computer vision-based trailer positioning system 
                  to optimize container loading efficiency</li>
                  <li>Collaborated with maintenance and operations teams to identify automation 
                  opportunities</li>
                  <li>Gained hands-on experience with industrial-scale automation systems and 
                  port terminal operations</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title">Get In Touch</h2>
            
            <div className="contact-content">
              <div className="contact-text">
                <p className="contact-intro">
                  I'm actively seeking PhD opportunities in robotics, computer vision, 
                  and autonomous systems. If you're a potential supervisor or collaborator, 
                  I'd love to hear from you.
                </p>
              </div>

              <div className="contact-info">
                <motion.a 
                  href="mailto:viranjandesilva@gmail.com"
                  className="contact-item"
                  whileHover={{ x: 5}}
                >
                  <Mail className="contact-icon" />
                  <div>
                    <div className="contact-label">Email</div>
                    <div className="contact-value">viranjandesilva@gmail.com</div>
                  </div>
                </motion.a>

                <motion.a 
                  href="tel:+94768022882"
                  className="contact-item"
                  whileHover={{ x: 5 }}
                >
                  <Phone className="contact-icon" />
                  <div>
                    <div className="contact-label">Phone</div>
                    <div className="contact-value">+94 76 80 22 882</div>
                  </div>
                </motion.a>

                <motion.a 
                  href="https://linkedin.com/in/viranjan-de-silva"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-item"
                  whileHover={{ x: 5 }}
                >
                  <Linkedin className="contact-icon" />
                  <div>
                    <div className="contact-label">LinkedIn</div>
                    <div className="contact-value">Viranjan De Silva</div>
                  </div>
                </motion.a>

                <motion.a 
                  href="https://github.com/Viranjan-de-silva"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-item"
                  whileHover={{ x: 5 }}
                >
                  <Github className="contact-icon" />
                  <div>
                    <div className="contact-label">GitHub</div>
                    <div className="contact-value">@viranjandesilva</div>
                  </div>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <p>&copy; 2026 Viranjan De Silva. All rights reserved.</p>
            <p className="footer-tagline">
              Building the future through intelligent automation
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
