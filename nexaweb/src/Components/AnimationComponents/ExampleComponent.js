import { TypeAnimation } from "react-type-animation";

const ExampleComponent = () => {
  return (
    <div className="flex justify-center items-center p-9">
      {" "}
      {/* Parent container set to flexbox */}
      <TypeAnimation
        className="text-white text-4xl text-center font-mono"
        sequence={[
          "We Play With Artificial Intelligence",
          1000,
          "We Play With Developing Websites",
          1000,
          "We Play With Creating Applications",
          1000,
          "We Play With .NET Development",
          1000,
        ]}
        wrapper="span"
        speed={50}
        repeat={Infinity}
      />
    </div>
  );
};

export default ExampleComponent;
