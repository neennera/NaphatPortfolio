import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import ExperienceData from '../assets/ExperienceData.json';
interface ItemInterface {
  id: number;
  subtitle: string;
  title: string;
  info: string;
  width: string;
  image : string;
}

const Experience_Card = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const items: ItemInterface[] = ExperienceData;
  const selectedItem = items.find(item => item.id === selectedId);

  return (
    <div className="relative sm:absolute w-[95%] pt-8">
      {/* all exp card*/}
      <div className="relative sm:absolute flex flex-wrap sm:px-6 justify-center">
        {items.map(item => (
          <motion.div
            className={`overflow-hidden h-[25vh] rounded drop-shadow-lg shadow-gray-600 cursor-pointer bg-beight  hover:bg-gray-200 my-2 sm:m-2 ${item.width} group`}
            layoutId={item.id.toString()}
            onClick={() => setSelectedId(item.id)}
          >
            <div className="absolute flex-1 flex flex-col justify-end p-4 z-20">
              <motion.h2 className="text-md sm:text-2xl font-semibold text-primary group-hover:text-white">
                {item.title}
              </motion.h2>
              <motion.h5 className="text-sm sm:text-lg text-white">
                {item.subtitle}
              </motion.h5>
            </div>

        
            
            <img
              src={item.image}
              className="absolute z-2 h-full w-full object-cover opacity-50 group-hover:opacity-70"
            />
            <div className="absolute h-[30vh] z-2 inset-0 bg-gradient-to-t from-transparent to-black opacity-100 group-hover:opacity-70 transition-opacity duration-300"></div>

            <div className='absolute text-dark bg-beight sm:opacity-0 opacity-100 z-40 inset-0 hidden p-2 h-full w-full text-sm overflow-scroll group-hover:block'>
              {item.info}
            </div>
          </motion.div>
        ))}
      </div>

      {/* blury background */}
      <AnimatePresence>
        {selectedId !== null && selectedItem && (
          <div className="hidden sm:block sm:absolute backdrop-blur-sm w-full h-[65vh] t-0 l-0"></div>
        )}
      </AnimatePresence>
      {/* card on display */}
      <AnimatePresence>
        {selectedId !== null && selectedItem && (
          <motion.div
            className="hidden sm:absolute overflow-auto pb-5 drop-shadow-lg shadow-gray-600 border-3 bg-beightDark rounded-md  w-[60vw] md:h-[50vh] sm:flex flex-row justify-between left-[15%] top-[300%] p-8"
            layoutId={selectedId.toString()}
          >
            

            <div className='pr-5 space-y-3 w-[95%]'>
              <motion.h2 className="text-2xl font-semibold">
                {selectedItem.title}
              </motion.h2>
              <img src={selectedItem.image} className='h-[65%] w-full object-cover'/>
              <motion.h5 className='text-lg'>{selectedItem.info}</motion.h5>
            </div>

            <motion.button
              className="bg-primary w-10 h-10 hover:text-white items-center justify-center rounded-sm"
              onClick={() => setSelectedId(null)}
            >X
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Experience_Card;
