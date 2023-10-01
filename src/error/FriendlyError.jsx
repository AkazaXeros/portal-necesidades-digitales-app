import robot from '../assets/robot.jpg';

const FriendlyRobotErrorFallback = () => {
  return (
    <div style={styles.container}>
      <img
        src={robot} // Replace with your own robot image
        alt="Friendly Robot"
        style={styles.robotImage}
      />
      <h1>Oops! Something went wrong</h1>
      <p>
        We apologize for the inconvenience. Our friendly robot is here to assist
        you.
      </p>
      <p>Error details:</p>
      <pre>Server is down.Try later!!!</pre>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '100px',
  },
  robotImage: {
    width: '200px',
    height: '200px',
    borderRadius: '50%',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
  },
};

export default FriendlyRobotErrorFallback;
