import { TypeAnimation } from 'react-type-animation';

const ExampleComponent = () => {
  return (
    <div style={{ textAlign: 'center', padding: '1em' }}>
      <TypeAnimation
        sequence={[
          "I'M KP Rahul. ", 1500,
          "I'M A Full Stack Web Developer. ", 1500,
        ]}
        wrapper="span"
        speed={50}
        style={{
          fontSize: 'clamp(1.5em, 4vw, 2.5em)', // Base responsive font size
          display: 'inline-block',
          whiteSpace: 'pre-wrap', // Handle spaces and line breaks
          transition: 'font-size 0.3s ease', // Smooth font size transitions
        }}
        repeat={Infinity}
      />
    </div>
  );
};

export default ExampleComponent;
