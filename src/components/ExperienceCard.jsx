const ExperienceCard = ({ role, company, period, description, technologies }) => {
    return (
        <div className="experience-card glass">
            <div className="card-header">
                <div>
                    <h3 className="role">{role}</h3>
                    <h4 className="company">{company}</h4>
                </div>
                <span className="period">{period}</span>
            </div>

            <p className="description">{description}</p>

            <div className="tech-stack">
                {technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                ))}
            </div>

            <style>{`
        .experience-card {
          padding: 2rem;
          margin-bottom: 2rem;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .experience-card:hover {
          transform: translateX(10px);
          border-color: var(--accent-primary);
        }

        .experience-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 4px;
          height: 100%;
          background: var(--accent-primary);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .experience-card:hover::before {
          opacity: 1;
        }

        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1rem;
        }

        .role {
          font-size: 1.25rem;
          color: var(--text-primary);
          margin-bottom: 0.25rem;
        }

        .company {
          color: var(--accent-primary);
          font-size: 1rem;
        }

        .period {
          color: var(--text-secondary);
          font-size: 0.9rem;
          background: rgba(255, 255, 255, 0.05);
          padding: 0.25rem 0.75rem;
          border-radius: 15px;
        }

        .description {
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }

        .tech-stack {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .tech-tag {
          font-size: 0.8rem;
          color: var(--text-primary);
          background: rgba(100, 108, 255, 0.1);
          padding: 0.25rem 0.75rem;
          border-radius: 4px;
          border: 1px solid rgba(100, 108, 255, 0.2);
        }

        @media (max-width: 600px) {
          .card-header {
            flex-direction: column;
            gap: 0.5rem;
          }
        }
      `}</style>
        </div>
    );
};

export default ExperienceCard;
