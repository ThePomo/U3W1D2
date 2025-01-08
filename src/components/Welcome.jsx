/* eslint-disable react/no-unescaped-entities */
import Alert from 'react-bootstrap/Alert';

const Welcome = () => {
  return (
    <div className="welcome-container d-flex justify-content-center align-items-center bg-white">
      <Alert variant="white" className="text-center">
        <h1>Welcome to Giuseppe's Shop!</h1>
        <p>Get your favorite books here!</p>
      </Alert>
    </div>
  );
};

export default Welcome;