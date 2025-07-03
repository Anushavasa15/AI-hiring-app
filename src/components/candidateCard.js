
import React from "react";

export default function CandidateCard({candidate}) {
      return React.createElement("div" ,
            {style : { border : "1px solid #ccc" , padding:"10px" , marginBottom:"10px"}} , 
            React.createElement("h3" , null , candidate.name) ,
            React.createElement("p" , null , `Email : ${candidate.email}`),
            React.createElement("p" , null ,`Location : ${candidate.location}`),
            React.createElement("p" , null , `score: ${candidate.score}`),
            React.createElement("p" , null , `skills: ${candidate.skills?.join(", ")}`),
            React.createElement("p" , null , `experience: ${candidate["work_experiences"]?.length || 0}`),
            React.createElement("p" , null , `education : ${(candidate.education?.degrees || []).map(d => d.subject).join(", ")}`)

      )
}