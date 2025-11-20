import { skillsData } from '../data/skills';

const Skills = () => {
    return (
        <section id="skills" className="section skills-section">
            <div className="container">
                <h2 className="section-title">Skills & Technologies</h2>

                <div className="skills-grid">
                    {skillsData.map((category, index) => (
                        <div key={index} className="skill-category glass">
                            <h3 className="category-title">{category.category}</h3>
                            <div className="skills-list">
                                {category.items.map((skill, idx) => (
                                    <div key={idx} className="skill-item">
                                        <span className="skill-name">{skill}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
        .skills-section {
          background: var(--bg-primary);
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .skill-category {
          padding: 2rem;
          transition: transform 0.3s ease;
        }

        .skill-category:hover {
          transform: translateY(-5px);
        }

        .category-title {
          color: var(--accent-primary);
          margin-bottom: 1.5rem;
          font-size: 1.5rem;
          text-align: center;
        }

        .skills-list {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          justify-content: center;
        }

        .skill-item {
          background: rgba(255, 255, 255, 0.05);
          padding: 0.5rem 1rem;
          border-radius: 8px;
          border: 1px solid transparent;
          transition: all 0.3s ease;
        }

        .skill-item:hover {
          background: rgba(100, 108, 255, 0.1);
          border-color: var(--accent-primary);
          transform: scale(1.05);
        }

        .skill-name {
          color: var(--text-primary);
          font-size: 0.9rem;
        }
      `}</style>
        </section>
    );
};

export default Skills;
