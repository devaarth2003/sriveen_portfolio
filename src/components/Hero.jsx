import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="hero container section">
      <div className="hero-grid">
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="hero-badge">Political Consultant</span>
          </motion.div>
          
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Sriveen Krishna D
          </motion.h1>
          
          <motion.h2 
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Turning Data & Sentiment into Electoral Wins
          </motion.h2>
          
          <motion.p 
            className="hero-desc"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Dedicated political consultant with hands-on, ground-level experience running election campaigns across multiple Assembly constituencies in Tamil Nadu. I bridge the gap between grassroots realities and high-level strategy.
          </motion.p>
          
          <motion.div 
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <a href="#contact" className="btn btn-primary">
              Discuss Strategy <ArrowRight size={20} />
            </a>
            <a href="/Sriveen_Krishna_Resume.pdf" target="_blank" className="btn btn-secondary">
              View Resume <Download size={20} />
            </a>
          </motion.div>
        </div>

        <motion.div 
          className="hero-image-container"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="hero-image-wrapper">
            <div className="hero-image-inner">
              <img src="/profile photo/20250204_115139.jpg.jpeg" alt="Sriveen Krishna D" className="hero-image" />
            </div>
            <div className="hero-image-backdrop"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
