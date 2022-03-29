import { useAuth0 } from '@auth0/auth0-react';

const Home = () => {
  const { 
    isAuthenticated, 
    error,
    user
  } = useAuth0();
  if (isAuthenticated) {
    return ( 
      <div>
        <h1>Welcome!</h1>
        <h3>Logged in as {user.name}</h3>
      </div>
    );
  } else {
    if (error) {
      return ( 
        <div>
          <h1>Unauthorized</h1>
          <p>
            This is not an admin account. 
            Please logout, then login to an admin account to access HeartBit Data.
          </p>
        </div>
      );
    } else {
      return ( 
        <div>
          <h1>Welcome!</h1>
          <p>Please login to your admin account to access HeartBit Data.</p>
        </div>
      );
    }
  }
}
 
export default Home;