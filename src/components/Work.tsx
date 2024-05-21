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
        console.log(scrollTop);
        
        if (scrollTop >= contentHeight - viewportHeight && scrollTop <= contentHeight + (2*viewportHeight)) {
          sidebar.style.translate = `translateY(${viewportHeight - sidebar.offsetHeight}px)`;
          sidebar.style.marginTop = `12vh`;
          sidebar.style.position = "fixed";
        } else {
          console.log("out");
          sidebar.style.translate = ``;
          sidebar.style.marginTop = ``;
          sidebar.style.position = "relative";
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
