import Badge_Google1 from '../assets/image/badge/Badge_Google1.png';
import Badge_Google2 from '../assets/image/badge/Badge_Google2.png';
import Badge_Google3 from '../assets/image/badge/Badge_Google3.png';
import Badge_Google4 from '../assets/image/badge/Badge_Google4.png';
import Badge_dataRookie from '../assets/image/badge/Badge_dataRookie.png';

const AboutMe = () => {
  return (
    <div
      id="aboutMe"
      className="flex text-lg scroll-my-10 py-[4vw] flex-col w-full items-start p-10 lg:section-min-height space-y-1 bg-white"
    >
      <p className="text-5xl font-bold">About Me</p>
      <div className="flex flex-col sm:flex-row w-full items-start justify-between pt-5 space-y-5">
        <div className="flex flex-col items-start justify-center w-[90%] sm:w-[70%] space-y-4 sm:space-y-2">
          <p className="text-mxl w-[80%]">
            I'm a Computer Engineering student at Chulalongkorn University. My
            primary interest is Web development and Machine Learning.
          </p>

          <div className="flex flex-col space-y-3 pt-2 sm:pt-20">
            <p className="text-2xl font-bold">👩🏻‍🏭 My current works</p>
            <ul className="space-y-2">
              <li className="list-disc ml-10">
                Julist’s frontend web developer team
              </li>
              <li className="list-disc ml-10">JWC13 IMA team (frontend dev)</li>
              <li className="list-disc ml-10">
                Co-founder of The Blitz, Online tutoring business
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-start justify-center w-[90%] sm:w-[60%] space-y-4 sm:space-y-14">
          <div className="flex flex-col space-y-3">
            <p className="text-2xl font-bold">Skills</p>
            <ul className="space-y-2">
              <li className="list-disc ml-10">
                <b>Programming : </b> C++, Python, Java, JavaScript
              </li>
              <li className="list-disc ml-10">
                <b>Web development : </b> React, TypeScript, TailwindCSS
              </li>
              <li className="list-disc ml-10">
                <b>Data Analysis : </b> Spreadsheet, Data Visuallization, SQL, R
              </li>
              <li className="list-disc ml-10">
                <b>English : </b> Advanced working proficiency English (TOEIC
                835)
              </li>
            </ul>
          </div>

          <div className="flex flex-col space-y-3">
            <p className="text-2xl font-bold">Badges</p>
            <div className="flex flex-row space-x-3 overflow-auto">
              <img
                src={Badge_Google1}
                alt="advanced data anlysis"
                className="h-[100px]"
              />
              <img
                src={Badge_Google2}
                alt="business intelligence"
                className="h-[100px]"
              />
              <img
                src={Badge_Google3}
                alt="marketing & e-commerse"
                className="h-[100px]"
              />
              <img
                src={Badge_Google4}
                alt="data anlysis"
                className="h-[100px]"
              />
              <img
                src={Badge_dataRookie}
                alt="data rookie data analysis"
                className="h-[100px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
