import { Auth0Provider } from '@auth0/auth0-react';
import { useRouter } from 'next/router';

const AuthProvider = ({ children }) => {
  const router = useRouter();
  const onRedirectCallback = (appState) => {
    router.push(appState?.returnTo || '/');
  };

  return (
    <Auth0Provider
      domain="dev-txtt0slkawqof3po.us.auth0.com"
      clientId="xNQ5ZsifVuNoauZTfI2045WurVl80sZu"
      redirectUri={typeof window !== "undefined" && window.location.origin}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};

export default AuthProvider;
