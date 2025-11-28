import React, { useState } from 'react'

const Child = ({tabs}) => {
    const[tab, setTab] = useState("");

    function handleTab(id){
        let t = tabs.find((t,ind)=>ind==id);
        setTab(t);
    }
  return (
    <div>
        <ul>
            {tabs.map((t,ind)=>{
                return(
                    <li key="ind" onClick={()=>handleTab(ind)}>{t}</li>
                )
            })}
        </ul>
        <p>This is the content for {tab}</p>
    </div>
  )
}

export default Child