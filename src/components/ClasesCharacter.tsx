import React, {useState,useEffect} from "react";
import _ from "lodash";
import { info } from "console";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory 
} from "react-router-dom";
import { render } from "@testing-library/react";


export default function ClasesCharacter(){
    const [character,setCharacter]=useState({
      
      info:{
        next:"",
        prev:""
      },
      results:[]
    });
    
    useEffect(() =>{
      
      function getCharacter(){
        fetch("https://rickandmortyapi.com/api/character")
      .then(data=>data.json()).then(data=>setCharacter(data));
      }
      getCharacter();
      
    },[]);

    function Siguiente(){
      if(character.info.next!==null){
        fetch(character.info.next).then(data=>data.json()).then(data=>setCharacter(data)).catch(error=>console.log(error));
      }else{
        alert("Last Page");
      }
    }

    function Atras(){
      if(character.info.prev!==null){
        fetch(character.info.prev).then(data=>data.json()).then(data=>setCharacter(data)).catch(error=>console.log(error));
      }else{
        alert("First page");
      }
    }

    return(
        <div>
        <table  className="table">
    <thead>
      <tr className="table-dark">
      <th scope="col">No.</th>
        <th scope="col">Character Name</th>
        <th scope="col">Character Status</th>
        <th scope="col">Character Specie</th>
        <th scope="col">Character Gender</th>
        
      </tr>
    </thead>    <tbody>
      {character.results.map((item, index) => {
        return (
     
            <tr className={index%2?"table-primary":"table-info"}>
              <td >{item.id}</td>
         
              <td ><Link to={`/DetallesCharacters/${item.id}`}>
                {item.name}
                </Link> </td>
            
              <td >{item.status}</td>
              <td >{item.species}</td>
              <td >{item.gender}</td>
             
            </tr>
           
          
        );
      })}
    </tbody>
  </table>
  <div className="btn">
    <button id="btn-1" onClick={Atras}>prev</button>
    <button  id="btn-2" onClick={Siguiente}>next</button>
  </div>
  </div>
  )
}

