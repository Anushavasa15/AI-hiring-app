
export function scorecandidate(candidate){
      let score = 0 
      const desiredskills = ["Python" , "React" , "Docker" , "AI" , "Microservices"]

      const matchedskills = (candidate.skills || []). filter(skill => desiredskills.includes(skill))

      score += matchedskills.length * 10 

      score += (candidate["work_experiences"]?.length || 0) * 5 

      const hascs = (candidate.education?.degrees || []).some(d => d.subject?.toLowerCase().includes("computer science"))

      if (hascs) score += 20 

      const gpabonus = (candidate.education?.degrees || []).some(d => {
            const gpa = parseFloat(d.gpa?.match(/\d\.\d/)?.[0] || 0)
            return gpa >= 3.5 

      })
      if (gpabonus) score += 10 

      const metro = ["San Francisco" , "New York" , "London" , "Bangalore"]
      if (!metro.includes(candidate.location)) score += 5 

      return score

}






