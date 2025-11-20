const About = () => {
  const stats = [
    { label: 'Years Experience', value: '5+' },
    { label: 'Certifications', value: '5' },
    { label: 'Cloud Platforms', value: '2' },
  ];

  return (
    <section id="about" className="section about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>

        <div className="about-content">
          <div className="about-text">
            <p>
              I am a DevOps and System Administrator with over 5 years of experience in automating and sustaining hybrid-cloud environments (AWS, Azure). My expertise lies in 24/7 production support, incident management, and Root Cause Analysis (RCA).
            </p>
            <p>
              I specialize in Infrastructure as Code (IaC) using tools like Ansible and Terraform, and I have a proven track record of designing secure, compliant cloud architectures.
            </p>
            <p>
              Currently based in Waterloo, I am passionate about building resilient systems and mentoring the next generation of developers as a part-time faculty member.
            </p>
          </div>

          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card glass">
                <h3 className="stat-value">{stat.value}</h3>
                <p className="stat-label">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .about-section {
          background: var(--bg-primary);
        }

        .section-title {
          font-size: 2.5rem;
          margin-bottom: 3rem;
          text-align: center;
          background: linear-gradient(to right, #fff, #a5a5a5);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .about-content {
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .about-text p {
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
          font-size: 1.1rem;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
        }

        .stat-card {
          padding: 2rem;
          text-align: center;
          transition: transform 0.3s ease;
        }

        .stat-card:hover {
          transform: translateY(-5px);
          background: rgba(255, 255, 255, 0.08);
        }

        .stat-value {
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--accent-primary);
          margin-bottom: 0.5rem;
        }

        .stat-label {
          color: var(--text-secondary);
          font-size: 0.9rem;
        }

        @media (max-width: 768px) {
          .about-content {
            grid-template-columns: 1fr;
            gap: 3rem;
          }

          .stats-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 480px) {
          .stats-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
