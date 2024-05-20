import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import github_pf from '../assets/image/github_pf.jpg';
import neen_pf from '../assets/image/neen_pf.jpg';

const Hero = () => {
  return (
    <div
      id="hero"
      className="flex scroll-my-10 flex-col sm:flex-row  w-full section-min-height items-center justify-between p-10"
    >
      <div className="relative h-[40vh] w-[80vw] sm:h-[80vh] sm:w-[50vw] group">
        <img
          src={neen_pf}
          className="absolute sm:top-20 sm:left-40 sm:h-[400px] h-[300px] rounded-xl rotate-[-5deg] group-hover:rotate-[-7deg]"
        />
        <img
          src={github_pf}
          className="absolute sm:top-72 sm:left-[53%] sm:h-[200px] h-[120px] top-56 left-48  rounded-full rotate-3 group-hover:rotate-6"
        />
      </div>
      <div className="flex flex-col space-y-10">
        <div className="flex flex-col space-y-3 w-[80vw] sm:w-[40vw]">
          <p className="text-xl">👋🏻 Hi, This is ...</p>
          <p className="text-7xl">Naphat Serirak</p>
          <p className="text-sm">
            I'm a second-year Computer Engineering student at Chulalongkorn
            University.
          </p>
          <div className="flex flex-row pt-10 space-x-7 text-sm sm:text-md">
            <button className="w-[40vw] sm:w-[15vw] p-3 bg-primary rounded-xl text-white">
              Dowload My Resume{' '}
              <FontAwesomeIcon className="pl-2" icon={faDownload} />
            </button>
            <a href="#works">
              <button className="w-[40vw] sm:w-[15vw]  p-3 rounded-xl border-2 border-primary ">
                My Works Projects
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
