import { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-content">
        <a href="#" className="logo">Portfolio.</a>

        {/* Desktop Menu */}
        <ul className="nav-links desktop-only">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
        </ul>

        <div className="social-icons desktop-only">
          <a href="https://github.com/5zan-code" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/faizan-ansari-" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
          <ul>
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} onClick={() => setIsOpen(false)}>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          transition: all 0.3s ease;
          padding: 1.5rem 0;
        }

        .navbar.scrolled {
          padding: 1rem 0;
          background: rgba(10, 10, 10, 0.8);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid var(--glass-border);
        }

        .nav-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--text-primary);
          background: linear-gradient(to right, var(--text-primary), var(--accent-primary));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .nav-links {
          display: flex;
          gap: 2rem;
        }

        .nav-links a {
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--text-secondary);
        }

        .nav-links a:hover {
          color: var(--accent-primary);
        }

        .social-icons {
          display: flex;
          gap: 1rem;
          font-size: 1.2rem;
        }

        .social-icons a {
          color: var(--text-secondary);
        }

        .social-icons a:hover {
          color: var(--text-primary);
        }

        .mobile-toggle {
          display: none;
          font-size: 1.5rem;
          color: var(--text-primary);
          z-index: 1001;
        }

        .mobile-menu {
          position: fixed;
          top: 0;
          right: -100%;
          width: 100%;
          height: 100vh;
          background: var(--bg-secondary);
          display: flex;
          justify-content: center;
          align-items: center;
          transition: right 0.3s ease;
        }

        .mobile-menu.open {
          right: 0;
        }

        .mobile-menu ul {
          text-align: center;
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .mobile-menu a {
          font-size: 1.5rem;
          color: var(--text-primary);
        }

        @media (max-width: 768px) {
          .desktop-only {
            display: none;
          }
          .mobile-toggle {
            display: block;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
