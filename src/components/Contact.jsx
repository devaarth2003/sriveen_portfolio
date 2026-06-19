import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section container">
      <h2 className="section-title">Get In <span>Touch</span></h2>
      
      <div className="contact-grid">
        <motion.div 
          className="contact-info"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="contact-item">
            <div className="contact-icon">
              <Phone size={24} />
            </div>
            <div className="contact-text">
              <h4>Phone</h4>
              <p>+91 89252 97170</p>
              <p>+91 72008 90380</p>
            </div>
          </div>
          
          <div className="contact-item">
            <div className="contact-icon">
              <Mail size={24} />
            </div>
            <div className="contact-text">
              <h4>Email</h4>
              <p>sriveenkrishna239@gmail.com</p>
            </div>
          </div>
          
          <div className="contact-item">
            <div className="contact-icon">
              <MapPin size={24} />
            </div>
            <div className="contact-text">
              <h4>Location</h4>
              <p>Avadaiyarpattu, Vikravandi</p>
              <p>Villupuram, Tamil Nadu - 605652</p>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="glass-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <form 
            className="contact-form" 
            action="https://formsubmit.co/sriveenkrishna239@gmail.com" 
            method="POST"
          >
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_subject" value="New message from Portfolio Website!" />

            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" className="form-input" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" className="form-input" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" className="form-input" placeholder="How can we work together?" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary" style={{ alignSelf: 'flex-start' }}>
              Send Message <Send size={18} />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
