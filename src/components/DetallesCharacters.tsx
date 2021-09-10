import { Link, useParams } from 'react-router-dom';
import React, {useState,useEffect} from "react";

const DetallesCharacters = () => {
    const { id } = useParams()
    const [episode,setEpisode]=useState<any[]>([]);
      const [character,setCharacter]=useState({
      name:"",
      status:"",
      species:"",
      gender:"",
      episode:[]
      });
      useEffect(() =>{
        function getCharacter(){
      fetch(`https://rickandmortyapi.com/api/character/${ id }`)
      .then(data=>data.json())
      .then(data=>{
        setCharacter(data);
        return data.episode;
      })
      .then(epdata=>{
        
      
        epdata.forEach(async element => {
          const result=await(await fetch(element)).json();
          setEpisode(state=>state.concat(result));
        });
  
      });
    }
    getCharacter();
  
    },[]);
    return (
<div className="DetallesCharacters">
<div>
<div className="card">
  <div className="card-body">
  <p className="card-text"><h1>Details</h1></p>
  <p className="card-text">Name: { character.name }</p>
  <p className="card-text">Specie: { character.species }</p>
  <p className="card-text">Gender: { character.gender }</p>
  <p className="card-text">Status: { character.status }</p>
  </div>
</div>
        <table  className="table">
    <thead>
      <tr className="table-dark">
        
        <th scope="col">No.</th>
        <th scope="col">Name</th>
        <th scope="col">Date</th>
        <th scope="col">Episode Code</th>
         
      </tr>
    </thead>    
    <tbody>
    {episode.map((item, index) => {
              return (
                
            <tr className={index%2?"table-info":"table-primary"}>
            <td>{ index+1 }</td>
            <td>{ item.name }</td>
            <td>{ item.air_date }</td>
            <td>{ item.episode }</td>
            </tr>
         );
    })} 
  
    </tbody>
  </table>
  <div className="btn">
  <button id="btn-1"><Link to="/">prev</Link></button>
  </div>
  </div>
    


<Link to="/">home Salir de character = { id }</Link>
</div>

    );
}

export default DetallesCharacters