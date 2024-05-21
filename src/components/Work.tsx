import { useEffect } from 'react';
import Work_projectDisplay from './Work_projectDisplay';
import Work_projectName from './Work_projectName';

const Work = () => {
  useEffect(() => {
    const sidebar = document.getElementById("workSidebar");
    const content = document.getElementById("workContent");
    
    window.onscroll = () => {
      const scrollTop = window.scrollY;
      const viewportHeight = window.innerHeight;
      const contentHeight = (content?.getBoundingClientRect().height || 0 )

      if (sidebar != null) {               
        if (scrollTop >= contentHeight - viewportHeight +200 && scrollTop <= contentHeight + (2*viewportHeight) - 100) {
          sidebar.style.marginTop = `${scrollTop - (2*viewportHeight) + 10}px`;
        } else {
          sidebar.style.marginTop = ``;
        }
      }
    }
    
    
  }, []);
  return (
    <div
      id="works"
      className="flex scroll-my-10 py-[4vw] flex-col sm:flex-row w-full lg:section-min-height items-start justify-between p-10 space-y-5"
    >
      <Work_projectName />
      <Work_projectDisplay />
    </div>
  );
};

export default Work;
