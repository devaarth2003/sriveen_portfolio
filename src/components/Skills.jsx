import { motion } from 'framer-motion';
import { Target, Users, Map, PieChart, Megaphone, Calendar } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Strategy & Planning",
      icon: <Target size={24} />,
      skills: ["Election Campaign Planning", "Constituency Management", "War-room Operations"]
    },
    {
      title: "Research & Analysis",
      icon: <PieChart size={24} />,
      skills: ["Voter Sentiment Analysis", "Demographic Studies", "Booth-level Assessment", "Grassroots Research"]
    },
    {
      title: "Communication",
      icon: <Megaphone size={24} />,
      skills: ["Political Communication", "Public Relations", "Digital Campaigning", "Social Media Coordination"]
    },
    {
      title: "Coordination",
      icon: <Users size={24} />,
      skills: ["Stakeholder Management", "Field-team Coordination", "Event Planning", "Public Rally Coordination"]
    },
    {
      title: "Compliance & Data",
      icon: <Map size={24} />,
      skills: ["ECI Regulations", "Electoral Compliance", "Data Management", "Excel & Google Sheets"]
    }
  ];

  return (
    <section id="skills" className="section container">
      <h2 className="section-title">Core <span>Competencies</span></h2>
      
      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <motion.div 
            key={index}
            className="glass-card skill-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="skill-icon">
              {category.icon}
            </div>
            <h3 className="skill-title">{category.title}</h3>
            <div className="skill-items">
              {category.skills.map((skill, i) => (
                <span key={i} className="skill-tag">{skill}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
