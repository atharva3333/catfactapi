import { useState} from 'react'
import axios from 'axios'
import {useSpeechSynthesis} from 'react-speech-kit';

function Api() {

    const [catfact, setcatFact] = useState('');
    const {speak} = useSpeechSynthesis();

  

    const Api1 = () => {
      
        return axios.get("https://catfact.ninja/fact")
              .then((response) => {
               console.log(response.data.fact)
               setcatFact(response.data.fact)
              
            })
            
            }

            const SpeakFunc = () =>{
              {speak({text: catfact})}
            }

           

  return (
    <div><h1>Cat Facts Api</h1>
    <br/>
        
    <div className='center'>
    <button className='button' onClick={Api1}>Get Facts</button>
    <button className='button' onClick={SpeakFunc}>Listen it</button>
    
    </div>
    
    
    <div className='card'>
        <h3>{catfact} </h3>
        
        </div>
       
        
    </div>
  )
}

export default Api