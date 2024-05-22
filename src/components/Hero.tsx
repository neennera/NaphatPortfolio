import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import github_pf from '../assets/image/github_pf.jpg';
import neen_pf from '../assets/image/neen_pf.jpg';
import Resume_Naphat_2024 from '../assets/Resume_Naphat_2024.pdf';

const Hero = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = Resume_Naphat_2024;
    link.download = 'Resume_Naphat_2024.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      id="hero"
      className="heroMain flex scroll-my-10 space-y-20 flex-col sm:flex-row  w-full section-min-height items-center justify-between p-10"
    >
      <div className="upAndDown absolute w-full h-[90vh] inset-0 top-[10vh]">
        <div className="absolute w-3 h-3 top-[5%] sm:top-[28%] left-[30%] bg-violet-400 rounded-md " />
        <div className="absolute w-3 h-3 top-[10%] sm:top-[40%] left-[75%] bg-yellow-400 rounded-md " />
        <div className="absolute w-3 h-3 top-[65%] left-[10%] bg-red-400 rounded-md " />
        <div className="absolute w-3 h-3 top-[70%] sm:top-[80%] left-[35%] bg-blue-400 rounded-md " />
        <div className="absolute w-3 h-3 top-[70%] sm:top-[85%] left-[80%] bg-orange-400 rounded-md " />
        <div className="absolute w-3 h-3 top-[40%] sm:top-[55%] left-[50%] bg-pink-500 rounded-md " />
      </div>
      <div className="md:left-[10vw] relative group flex flex-row justify-between">
        <img
          src={neen_pf}
          className="rotating-left sm:h-[65vh] max-h-[400px] max-w-[280px] h-[45vh] rounded-xl"
        />
        <img
          src={github_pf}
          className="rotating-right absolute -right-16 sm:-right-20 bottom-0 sm:h-[22vh] h-[20vh] max-h-[150px] rounded-full"
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
          <div className="flex flex-row pt-10 space-x-7 text-md sm:text-md">
            <button
              onClick={handleDownload}
              className="w-[40vw] sm:w-[15vw] p-3 bg-primary rounded-xl text-white"
            >
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
