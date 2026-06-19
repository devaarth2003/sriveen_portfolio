import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      role: "Political Consultant - Voice of Commons",
      company: "TVK (Tamizhaga Vettri Kazhagam)",
      location: "Tamil Nadu",
      period: "Current",
      description: [
        "Currently working with Voice of Commons, the grassroots outreach and political communication initiative of TVK ahead of the Tamil Nadu 2026 Assembly Elections.",
        "Engaged in voter outreach, public sentiment tracking, and campaign communication support.",
        "Strongly confident based on current ground-level momentum that TVK will secure victory."
      ]
    },
    {
      role: "Political Consultant",
      company: "Tenkasi & Ramanathapuram PCs",
      location: "Tamil Nadu",
      period: "Previous",
      description: [
        "Contributed to election campaign planning, constituency management, and day-to-day strategic operations.",
        "Managed and coordinated campaign activities across 12 Assembly constituencies.",
        "Carried out voter sentiment analysis, demographic studies, and grassroots research.",
        "Built constituency-specific campaign strategies and public engagement initiatives.",
        "Supported election war-room operations, campaign monitoring, and performance tracking."
      ],
      result: "Key Result: 4 out of the 12 constituencies managed under this project secured victory (MLA)."
    }
  ];

  return (
    <section id="experience" className="section container">
      <h2 className="section-title">Professional <span>Experience</span></h2>
      
      <div className="timeline">
        {experiences.map((exp, index) => (
          <motion.div 
            key={index}
            className="timeline-item"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="timeline-dot"></div>
            <div className="glass-card timeline-content">
              <h3 className="timeline-title">{exp.role}</h3>
              <h4 className="timeline-subtitle">{exp.company}</h4>
              <p className="timeline-location">{exp.location} | {exp.period}</p>
              
              <ul className="timeline-list">
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              
              {exp.result && (
                <div className="timeline-result">
                  {exp.result}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
