import Project from "./Project"
import './ProjectWrap.css'
import React, {useState, useEffect} from "react";
import data from './data/projectData.json'

const ProjectWrap = () =>{
    const [projectId, setProjectId] = useState(0)

    const handleClick = (num) =>{
        let temp = projectId+num
        

        if(temp>=data.length){
            temp = 0
        }
        if(temp<0){
            temp = data.length-1
        }
        setProjectId(temp)
    }

    useEffect(()=>{
        console.log(projectId);
    },[projectId])

    return (
        <div className="container">
            <div className="container-bar"><p style={{"font-weight":"bold"}}>My Project</p></div>
            <div style={{"display":"inline"}}>
                <button class="button-30" onClick={()=>{handleClick(-1)}}>Back</button>
                <button class="button-30" onClick={()=>{handleClick(1)}}>Next</button>                
            </div>
            
            <hr/>
            <Project idd={projectId}/>
        </div>


    );
}

export default ProjectWrap;