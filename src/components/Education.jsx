import { motion } from 'framer-motion';
import { BookOpen, Award, FileText } from 'lucide-react';

const Education = () => {
  const educationList = [
    {
      degree: "Master of Arts in Political Science",
      school: "Presidency College, Chennai",
      score: "CGPA 76%"
    },
    {
      degree: "Bachelor of Arts in Political Science",
      school: "Presidency College, Chennai",
      score: "CGPA 74%"
    }
  ];

  const projects = [
    "Study on Public Perception of Pre-Poll Alliances in the 2021 Tamil Nadu Assembly Elections",
    "Prime Media - Public Opinion Collector (30 days)",
    "Water Resources Department, Tindivanam Sub-Division (30 days)"
  ];

  return (
    <section id="education" className="section container">
      <h2 className="section-title">Education & <span>Projects</span></h2>
      
      <div className="edu-grid">
        {/* Education Column */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.5rem' }}>
            <BookOpen className="skill-icon" size={28} style={{ width: 'auto', height: 'auto', background: 'none', padding: 0 }} /> Academic Background
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {educationList.map((item, index) => (
              <div key={index} className="glass-card edu-card">
                <h4 className="edu-degree">{item.degree}</h4>
                <p className="edu-school">{item.school}</p>
                <div className="edu-meta">
                  <Award size={18} /> {item.score}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Projects Column */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.5rem' }}>
            <FileText className="skill-icon" size={28} style={{ width: 'auto', height: 'auto', background: 'none', padding: 0 }} /> Project & Internship Experience
          </h3>
          <div className="projects-list">
            {projects.map((project, index) => (
              <div key={index} className="glass-card project-item">
                <Award className="project-icon" size={24} />
                <p style={{ fontWeight: 500 }}>{project}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
