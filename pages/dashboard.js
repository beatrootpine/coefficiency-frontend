import { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';

const Dashboard = () => {
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    if (isAuthenticated) {
      axios.get('/api/applications', {
        params: {
          userId: user.sub,
        },
      })
        .then(response => setApplications(response.data))
        .catch(error => console.error(error));
    }
  }, [isAuthenticated]);

  if (!isAuthenticated) {
    return <button onClick={() => loginWithRedirect()}>Log in</button>;
  }

  return (
    <div>
      <h1>Welcome, {user.name}</h1>
      <button onClick={() => logout({ returnTo: window.location.origin })}>
        Log out
      </button>
      <h2>Your Applications</h2>
      <ul>
        {applications.map(app => (
          <li key={app._id}>{app.status}</li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
