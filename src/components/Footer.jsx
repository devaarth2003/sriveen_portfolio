const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Sriveen Krishna D. All rights reserved.</p>
        <p style={{ fontSize: '0.875rem', marginTop: '0.5rem', opacity: 0.7 }}>Political Consultant | Tamil Nadu</p>
      </div>
    </footer>
  );
};

export default Footer;
