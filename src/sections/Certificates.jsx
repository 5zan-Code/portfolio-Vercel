import { FaExternalLinkAlt, FaAward } from 'react-icons/fa';

const Certificates = () => {
  const certificates = [
    {
      id: 1,
      title: 'Microsoft Certified: Azure Security Engineer Associate (AZ-500)',
      issuer: 'Microsoft',
      date: 'Sep 2024 - Sep 2026',
      link: 'https://learn.microsoft.com/en-us/users/faizanansari-8760/credentials/certification/azure-security-engineer?tab=credentials-tab'
    },
    {
      id: 2,
      title: 'Microsoft Certified: Azure Administrator Associate (AZ-104)',
      issuer: 'Microsoft',
      date: 'Jun 2024 - Jun 2026',
      link: 'https://learn.microsoft.com/en-us/users/faizanansari-8760/credentials/certification/azure-administrator?tab=credentials-tab'
    },
    {
      id: 3,
      title: 'AWS Certified Solutions Architect – Associate (SAA)',
      issuer: 'Amazon Web Services',
      date: 'Valid',
      link: 'https://www.credly.com/badges/33218c0f-751d-4f87-8092-68078bd6ed3c/public_url'
    },
    {
      id: 4,
      title: 'AWS Certified Developer – Associate',
      issuer: 'Amazon Web Services',
      date: 'Valid',
      link: 'https://www.credly.com/earner/earned/badge/18f6f249-7368-4923-ba9c-aa47f09f5703'
    },
    {
      id: 5,
      title: 'AWS Certified Cloud Practitioner (CCP)',
      issuer: 'Amazon Web Services',
      date: 'Valid',
      link: 'https://www.credly.com/earner/earned/badge/6e97b801-028a-44c7-b247-24a79ac69702'
    }
  ];

  return (
    <section id="certificates" className="section certificates-section">
      <div className="container">
        <h2 className="section-title">Certifications</h2>

        <div className="certificates-grid">
          {certificates.map((cert) => (
            <div key={cert.id} className="certificate-card glass">
              <div className="cert-icon">
                <FaAward />
              </div>
              <div className="cert-content">
                <h3 className="cert-title">{cert.title}</h3>
                <p className="cert-issuer">{cert.issuer}</p>
                <span className="cert-date">{cert.date}</span>
              </div>
              <a href={cert.link} className="cert-link" target="_blank" rel="noopener noreferrer" aria-label="View Certificate">
                <FaExternalLinkAlt />
              </a>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .certificates-section {
          background: var(--bg-primary);
        }

        .certificates-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .certificate-card {
          padding: 2rem;
          display: flex;
          align-items: flex-start;
          gap: 1.5rem;
          position: relative;
          transition: transform 0.3s ease;
        }

        .certificate-card:hover {
          transform: translateY(-5px);
          border-color: var(--accent-primary);
        }

        .cert-icon {
          font-size: 2rem;
          color: var(--accent-primary);
          background: rgba(100, 108, 255, 0.1);
          padding: 1rem;
          border-radius: 12px;
        }

        .cert-content {
          flex-grow: 1;
        }

        .cert-title {
          font-size: 1.1rem;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
          line-height: 1.4;
        }

        .cert-issuer {
          color: var(--text-secondary);
          font-size: 0.9rem;
          margin-bottom: 0.5rem;
        }

        .cert-date {
          font-size: 0.8rem;
          color: var(--text-secondary);
          opacity: 0.7;
        }

        .cert-link {
          color: var(--text-secondary);
          transition: color 0.3s ease;
        }

        .cert-link:hover {
          color: var(--accent-primary);
        }
      `}</style>
    </section>
  );
};

export default Certificates;
