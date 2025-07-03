
import React from "react"; 
import CandidateCard from "./candidateCard"; 

export default function topfivelist({candidates}) {
      return React.createElement("div" , null , 
            React.createElement("h2" , null , "Top 5 Candidates"),
            ...candidates.map((c, i) => 
            React.createElement(CandidateCard , {candidate : c , key : i})
            
            )

)
}