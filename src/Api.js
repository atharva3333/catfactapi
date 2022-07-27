import { useState} from 'react'
import axios from 'axios'


function Api() {

    const [catfact, setcatFact] = useState('Click that red Button to get facts');
    

  

    const Api1 = () => {
      
        return axios.get("https://catfact.ninja/fact")
              .then((response) => {
               console.log(response.data.fact)
               setcatFact(response.data.fact)
              
            })
            
            }

           
           

  return (
    <div><h1>Cat Facts Api</h1>
    <br/>
        
    <div className='center'>
    <button className='button' onClick={Api1}>Get Facts</button>
    
    
    </div>
    
    
    <div className='card'>
        <h3>{catfact} </h3>
        
        </div>
       
        
    </div>
  )
}

export default Api
