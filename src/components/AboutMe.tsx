const AboutMe = () => {
  return (
    <div
      id="aboutMe"
      className="flex scroll-my-10 py-[4vw] flex-col sm:flex-col w-full items-start p-10 section-min-height"
    >
      <p className="text-5xl font-bold">About Me</p>
      <div className="flex flex-col sm:flex-row w-full items-start justify-between pt-5">
        <div className="flex flex-col items-start justify-center w-[90%] sm:w-[60%] space-y-4 sm:space-y-3">
          <p className="text-mxl w-[80%]">
            I'm a Computer Engineering student at Chulalongkorn University. My
            primary interest is Web development and Machine Learning.
          </p>
        </div>
        <div className="flex flex-col items-start justify-center w-[90%] sm:w-[60%] space-y-4 sm:space-y-3">
          <div className="flex flex-col space-y-3 text-sm">
            <p className="text-2xl font-bold">Skills</p>
            <ul>
              <li>sd</li>
              <li>sd</li>
              <li>sd</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
