import React, { useState , useEffect } from 'react'

import { scorecandidate } from './utils/scoring'
import topfivelist from './components/topfivelist'

function App() {
  const [topfive, settopfive] = useState([])

  useEffect(() => {
    fetch("/form-submissions.json")
    .then(res => res.json())
    .then(data => {
      const scored = data.map( c => ({ ...c , score : scorecandidate(c)}));
      const top = scored.sort((a,b) => b.score - a.score).slice(0,5)
      settopfive(top)
    })
  }, [])

  return React.createElement("div" , { style: { padding:"20px" , fontFamily : "Arial"} } , 
    React.createElement("h1" , null , "mercor hiring app"),
    React.createElement(topfivelist, {candidates:topfive})

    )
}

export default App
