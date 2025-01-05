import { Link2, MapPin } from 'lucide-react';
import { UserGitHub } from '../../interfaces/UserGitHub';
import './style.css';
import { Link } from 'react-router-dom';

export const UserCard = ({
  login,
  avatar_url,
  location,
  followers,
  following,
}: UserGitHub) => {
  return (
    <div className="user-card">
      <h2>{login}</h2>
      <img src={avatar_url} alt={login} />
      {location && (
        <p className="location">
          <MapPin />
          {location}
        </p>
      )}
      <div className="stats">
        <div className="followers">
          <p>Followers:</p>
          <p className="number">{followers}</p>
        </div>
        <div className="following">
          <p>Following:</p>
          <p className="number">{following}</p>
        </div>
      </div>
      <Link className="repositories-link" to={`/repos/${login}`}>
        <Link2 /> Best projects
      </Link>
    </div>
  );
};
