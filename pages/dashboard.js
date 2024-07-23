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
  }, [isAuthenticated, user]);

  if (!isAuthenticated) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <button onClick={() => loginWithRedirect()} className="bg-orange text-black py-2 px-4 rounded">
          Log in
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-4">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Welcome, {user.name}</h1>
        <button onClick={() => logout({ returnTo: window.location.origin })} className="bg-orange text-black py-2 px-4 rounded">
          Log out
        </button>
      </div>
      <h2 className="text-2xl mb-4">Your Applications</h2>
      <ul className="space-y-4">
        {applications.map(app => (
          <li key={app._id} className="p-4 bg-gray-800 rounded">
            {app.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
