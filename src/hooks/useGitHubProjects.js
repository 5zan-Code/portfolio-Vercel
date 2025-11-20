import { useState, useEffect } from 'react';

const useGitHubProjects = (repoNames) => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!repoNames || repoNames.length === 0) return;

        const fetchProjects = async () => {
            try {
                const projectPromises = repoNames.map(async (repoName) => {
                    const response = await fetch(`https://api.github.com/repos/${repoName}`);
                    if (!response.ok) {
                        throw new Error(`Failed to fetch ${repoName}`);
                    }
                    return response.json();
                });

                const results = await Promise.all(projectPromises);
                setProjects(results);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchProjects();
    }, [JSON.stringify(repoNames)]); // Depend on the array content

    return { projects, loading, error };
};

export default useGitHubProjects;
