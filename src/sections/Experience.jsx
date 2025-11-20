import { experienceData } from '../data/experience';
import ExperienceCard from '../components/ExperienceCard';

const Experience = () => {
    return (
        <section id="experience" className="section experience-section">
            <div className="container">
                <h2 className="section-title">Experience</h2>

                <div className="experience-list">
                    {experienceData.map((item) => (
                        <ExperienceCard key={item.id} {...item} />
                    ))}
                </div>
            </div>

            <style>{`
        .experience-section {
          background: var(--bg-secondary);
        }

        .experience-list {
          max-width: 800px;
          margin: 0 auto;
        }
      `}</style>
        </section>
    );
};

export default Experience;
