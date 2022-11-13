import React from "react";

const Card = ({namelist, deleteFunc}) => {
    
    const cards = namelist.map((el,idex) => (

        <div className='cardwraper' key = {idex}>
          <div>Names: {el.name}</div>
          <div>Age: {el.age}</div>
          <div>Adress: {el.address}</div>
          
          <div className="deleteBtn" onClick={(e) => deleteFunc(e,idex) }>x</div>
    
        </div>
      ))
      
   return <div>{cards}</div> 
}
  export default Card;