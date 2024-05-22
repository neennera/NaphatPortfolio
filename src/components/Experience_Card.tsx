import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import ExperienceData from '../assets/ExperienceData.json';
import integralBee from '../assets/image/exp/integralBee.jpg';
import integralBee2 from '../assets/image/exp/integralBee2.jpg';
import jwc13 from '../assets/image/exp/jwc13.png';
import julist from '../assets/image/exp/julist.png';
import highSchoolPic from '../assets/image/exp/highSchoolPic.jpg';
import langear from '../assets/image/exp/langear.jpg';

interface ItemInterface {
  id: number;
  subtitle: string;
  title: string;
  info: string;
  width: string;
  image: string;
}

type ImageMap = {
  integralBee: string;
  integralBee2: string;
  jwc13?: string;
  julist?: string;
  highSchoolPic?: string;
  langear?: string;
};

const images: ImageMap = {
  integralBee: integralBee,
  integralBee2: integralBee2,
  jwc13: jwc13,
  julist: julist,
  highSchoolPic: highSchoolPic,
  langear: langear,
};

const Experience_Card = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const items: ItemInterface[] = ExperienceData;
  const selectedItem = items.find(item => item.id === selectedId);

  return (
    <div className="relative sm:absolute w-[60vw] sm:w-[95vw] pt-8">
      {/* all exp card*/}
      <div className="relative sm:absolute flex flex-wrap justify-start left-5 sm:left-0 sm:justify-center w-[60vw] sm:w-[95vw]">
        {items.map(item => (
          <motion.div
            className={`overflow-hidden h-[25vh] ${item.width} rounded drop-shadow-lg shadow-gray-600 cursor-pointer bg-beight  hover:bg-gray-200 my-2 sm:m-1 group`}
            layoutId={item.id.toString()}
            onClick={() => {
              console.log(item.id);

              setSelectedId(item.id);
            }}
          >
            <div className="overflow-hidden absolute flex-1 flex flex-col justify-end p-4 z-20">
              <motion.h2 className="text-md sm:text-2xl font-semibold text-black">
                {item.title}
              </motion.h2>
              <motion.h5 className="text-sm sm:text-lg text-black">
                {item.subtitle}
              </motion.h5>
            </div>

            <img
              src={images[item.image as keyof ImageMap]}
              className="overflow-hidden absolute z-2 h-full w-full object-cover opacity-20 group-hover:opacity-30"
            />
            {/* <div className="overflow-hidden absolute h-[30vh] z-2 inset-0 bg-gradient-to-t from-transparent to-black opacity-100 group-hover:opacity-70 transition-opacity duration-300"></div> */}

            <div className=" absolute text-dark bg-beight sm:opacity-0 opacity-100 z-40 inset-0 hidden p-2 h-full w-full text-sm overflow-scroll group-hover:block">
              {item.info}
            </div>
          </motion.div>
        ))}
      </div>

      {/* blury background */}
      <AnimatePresence>
        {selectedId !== null && selectedItem && (
          <div className="hidden sm:block sm:absolute backdrop-blur-sm w-full h-[78vh] t-0 l-0"></div>
        )}
      </AnimatePresence>
      {/* card on display */}
      <AnimatePresence>
        {selectedId !== null && selectedItem && (
          <motion.div
            className="hidden sm:absolute overflow-auto pb-5 drop-shadow-lg shadow-gray-600 border-3 bg-beightDark rounded-md  w-[60vw] md:h-[50vh] sm:flex flex-row justify-between left-[15%] top-[300%] p-8"
            layoutId={selectedId.toString()}
          >
            <div className="pr-5 space-y-3 w-[95%]">
              <motion.h2 className="text-2xl font-semibold">
                {selectedItem.title}
              </motion.h2>
              <img
                src={images[selectedItem.image as keyof ImageMap]}
                className="h-[65%] w-full object-cover"
              />
              <motion.h5 className="text-lg">{selectedItem.info}</motion.h5>
            </div>

            <motion.button
              className="bg-primary w-10 h-10 hover:text-white items-center justify-center rounded-sm"
              onClick={() => setSelectedId(null)}
            >
              X
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Experience_Card;
