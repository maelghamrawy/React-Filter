import { useState } from "react";


const Filter = ({filteration}) =>{

    const [filter, setFilter] = useState("")
    const filterHandler = (e) => {
       const name = e.target.value
       setFilter(name)
       filteration(name)
    }


    return(
        <div style={{marginTop:"20px"}}>
            <input type="text" placeholder="for test ref" value={filter} onChange={filterHandler} />

        </div>
        
    )
}

export default Filter