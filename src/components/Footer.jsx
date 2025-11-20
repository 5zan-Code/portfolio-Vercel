import { FaHeart } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <p>
                    Built with <FaHeart className="heart-icon" /> using React & Vanilla CSS
                </p>
                <p className="copyright">
                    &copy; {new Date().getFullYear()} Portfolio. All rights reserved.
                </p>
            </div>

            <style>{`
        .footer {
          padding: 2rem 0;
          text-align: center;
          background: var(--bg-secondary);
          border-top: 1px solid var(--glass-border);
          margin-top: 4rem;
        }

        .footer p {
          color: var(--text-secondary);
          margin-bottom: 0.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }

        .heart-icon {
          color: var(--accent-primary);
        }

        .copyright {
          font-size: 0.8rem;
          opacity: 0.7;
        }
      `}</style>
        </footer>
    );
};

export default Footer;
