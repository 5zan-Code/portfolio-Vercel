import { useEffect, useState } from 'react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="hero" className="hero-section">
      <div
        className="background-glow"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(100, 108, 255, 0.15), transparent 80%)`
        }}
      />

      <div className="container hero-content">
        <div className="text-content">
          <span className="greeting">Hello, I'm</span>
          <h1 className="name">Faizan Ansari</h1>
          <h2 className="title">DevOps & System Admin</h2>
          <p className="description">
            Automating and sustaining hybrid-cloud environments with expertise in AWS, Azure, and Infrastructure as Code.
          </p>
          <div className="cta-buttons">
            <a href="#projects" className="btn primary">View Work</a>
            <a href="#contact" className="btn secondary">Contact Me</a>
          </div>
        </div>

        <div className="visual-content">
          <div className="profile-card glass">
            <div className="code-block">
              <pre>
                <code>
                  {`const engineer = {
  name: 'Faizan Ansari',
  role: 'DevOps Engineer',
  skills: [
    'AWS',
    'Azure',
    'Terraform',
    'Ansible'
  ],
  focus: 'Automation'
};`}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
          padding-top: 80px; /* Navbar height */
        }

        .background-glow {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
          pointer-events: none;
        }

        .hero-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .greeting {
          color: var(--accent-primary);
          font-weight: 600;
          font-size: 1.2rem;
          margin-bottom: 1rem;
          display: block;
        }

        .name {
          font-size: 4rem;
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 1rem;
          background: linear-gradient(to right, #fff, #a5a5a5);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .title {
          font-size: 2rem;
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
        }

        .description {
          font-size: 1.1rem;
          color: var(--text-secondary);
          max-width: 500px;
          margin-bottom: 2.5rem;
        }

        .cta-buttons {
          display: flex;
          gap: 1rem;
        }

        .btn {
          padding: 0.8rem 2rem;
          border-radius: 50px;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .btn.primary {
          background: var(--accent-primary);
          color: white;
        }

        .btn.primary:hover {
          background: var(--accent-secondary);
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(100, 108, 255, 0.4);
        }

        .btn.secondary {
          border: 1px solid var(--glass-border);
          background: rgba(255, 255, 255, 0.05);
          color: white;
        }

        .btn.secondary:hover {
          background: rgba(255, 255, 255, 0.1);
          transform: translateY(-2px);
        }

        .profile-card {
          padding: 2rem;
          transform: rotate(3deg);
          transition: transform 0.3s ease;
        }

        .profile-card:hover {
          transform: rotate(0deg) scale(1.02);
        }

        .code-block {
          font-family: 'Fira Code', monospace;
          font-size: 0.9rem;
          color: #a0a0a0;
        }

        .code-block code {
          white-space: pre-wrap;
        }

        @media (max-width: 768px) {
          .hero-content {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 3rem;
          }

          .description {
            margin: 0 auto 2.5rem;
          }

          .cta-buttons {
            justify-content: center;
          }

          .name {
            font-size: 3rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
