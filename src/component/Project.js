import data from './data/projectData.json'

const Project = (props) =>{
    const id = props.idd
    const checkurl = data[id].url!="-" ? true : false

    return (
        <div className="container-project">
            <center><h3>{id+1} : {data[id].name}</h3>
            <br/><br/>            
        
            <img height="80%" width="80%" src={data[id].pic}></img>
            </center>

            <br/><br/> 
            {checkurl && <div> See my Work At : <a href={data[id].url} target="_blank"><button class="button-30">Link</button></a></div>}
            

            {data[id].des}
        </div>


    );
}

export default Project;