import { useQuery } from '@tanstack/react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchRepositories } from '../../services/fetchRepositories';
import { Code, FolderCode, GitFork, Star } from 'lucide-react';
import './style.css';

export const UserRepositories = () => {
  const { username } = useParams();
  const navigate = useNavigate();
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['gitHubRepositories', username],
    queryFn: () => fetchRepositories(username!),
  });

  return (
    <>
      <button className="return-btn" onClick={() => navigate('/')}>
        Home
      </button>
      <div className="repos-container">
        {isLoading && <p>Loading...</p>}
        {isError && <p>Error {error.message}</p>}
        {data &&
          data.map(userInfo => (
            <div key={userInfo.name} className="repo-card">
              <h3>{userInfo.name}</h3>
              {userInfo.language && (
                <p className="programming-language">
                  <Code />
                  {userInfo.language}
                </p>
              )}
              {userInfo.description && <p>{userInfo.description}</p>}
              <div className="repo-stats">
                <div className="likes">
                  <Star />
                  <span>{userInfo.stargazers_count}</span>
                </div>
                <div className="forks">
                  <GitFork />
                  <span>{userInfo.forks_count}</span>
                </div>
              </div>
              <a href={userInfo.html_url} target="_blank">
                <span>See code</span>
                <FolderCode />
              </a>
            </div>
          ))}
      </div>
    </>
  );
};
