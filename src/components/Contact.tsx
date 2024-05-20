import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';

const Contact = () => {
  const [showCopied, setShowCopied] = useState(false);

  const handleGmailClick = () => {
    const neenGmail = 'neennera@gmail.com';
    navigator.clipboard.writeText(neenGmail).then(() => {
      setShowCopied(true);
      setTimeout(() => {
        setShowCopied(false);
      }, 3000);
    });
  };

  return (
    <div
      id="contact"
      className="flex flex-col sm:flex-row w-full items-start justify-between p-10 pt-14 pb-5 bg-dark text-white space-y-5"
    >
      <p className="text-5xl font-bold">Contact Me</p>
      <div className="flex flex-col space-y-8 md:w-[50%] sm:w-[70%] justify-between">
        <button
          className="flex flex-row items-center button-50 w-[80vw] md:w-[35vw]  py-3 rounded-lg border border-primary drop-shadow-lg sm:hover:w-[38vw] sm:hover:ml-3 hover:bg-primary hover:text-black transition-all duration-300 text-start"
          onClick={handleGmailClick}
        >
          <FontAwesomeIcon icon={faEnvelope} className="pl-5 size-5" />
          <p className="pl-5">Email : neennera@gmail.com</p>
          {showCopied && (
            <div className="ml-4 flex bg-green-700 text-beight w-20  rounded items-center justify-center">
              <p>Copied</p>
            </div>
          )}
        </button>
        <a href="https://www.linkedin.com/in/naphat-serirak/" target="_blank">
          <button className="flex flex-row items-center button-50 md:w-[35vw] w-[80vw]  py-3 rounded-lg border border-primary drop-shadow-lg sm:hover:w-[38vw] sm:hover:ml-3 hover:bg-primary hover:text-black transition-all duration-300 text-start">
            <FontAwesomeIcon icon={faLinkedin} className="pl-5 size-5" />
            <p className="pl-5">Linkedin</p>
          </button>
        </a>
        <a href="https://github.com/neennera/" target="_blank">
          <button className="flex flex-row items-center button-50 md:w-[35vw] w-[80vw]  py-3 rounded-lg border border-primary drop-shadow-lg sm:hover:w-[38vw] sm:hover:ml-3 hover:bg-primary hover:text-black transition-all duration-300 text-start">
            <FontAwesomeIcon icon={faGithub} className="pl-5 size-5" />
            <p className="pl-5">GitHub</p>
          </button>
        </a>
        <p className="self-end pt-5">I'm looking forward to work with you :)</p>
      </div>
    </div>
  );
};

export default Contact;
