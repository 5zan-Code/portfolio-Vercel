import { FaEnvelope, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>

        <div className="contact-content glass">
          <div className="contact-text">
            <h3>Let's Work Together</h3>
            <p>
              I'm currently open to new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            <a href="mailto:f97aizan@hotmail.com" className="btn primary contact-btn">
              <FaEnvelope /> Say Hello
            </a>
          </div>

          <div className="social-links">
            <a href="#" className="social-link"><FaGithub /></a>
            <a href="#" className="social-link"><FaLinkedin /></a>
            <a href="#" className="social-link"><FaTwitter /></a>
          </div>
        </div>
      </div>

      <style>{`
        .contact-section {
          background: var(--bg-secondary);
          min-height: 60vh;
          display: flex;
          align-items: center;
        }

        .contact-content {
          max-width: 800px;
          margin: 0 auto;
          padding: 4rem;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2rem;
        }

        .contact-text h3 {
          font-size: 2rem;
          margin-bottom: 1rem;
          color: var(--text-primary);
        }

        .contact-text p {
          color: var(--text-secondary);
          margin-bottom: 2rem;
          font-size: 1.1rem;
          max-width: 500px;
          margin-left: auto;
          margin-right: auto;
        }

        .contact-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
        }

        .social-links {
          display: flex;
          gap: 2rem;
          margin-top: 1rem;
        }

        .social-link {
          font-size: 1.5rem;
          color: var(--text-secondary);
          transition: all 0.3s ease;
        }

        .social-link:hover {
          color: var(--accent-primary);
          transform: translateY(-3px);
        }

        @media (max-width: 600px) {
          .contact-content {
            padding: 2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
