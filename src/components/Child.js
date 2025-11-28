import React, { useState } from 'react'

const Child = ({tabs}) => {
    const [activeTab, setActiveTab] = useState(1);

    function handleTab(id){
        let t = tabs.find(t=>t.id==id);
        if(t)setActiveTab(t.content);
    }

  return (
    <div>
        <ul>
            {tabs.map(t=>{
                return(
                    <li key={t.id} onClick={()=>handleTab(t.id)}><span>{t.title} {t.content}</span></li>
                )
            })}
        </ul>
        <p>This is the content for Tab {activeTab}.</p>
    </div>
  )
}

export default Child