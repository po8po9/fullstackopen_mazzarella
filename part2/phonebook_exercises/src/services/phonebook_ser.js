import axios from 'axios'
const baseURL = 'http://localhost:3001/persons'

const getPeople = () =>{
  
    const request=  axios.get(baseURL)
   
    
    return request.then(response => response.data)
     //   console.log(response.data)
       // console.log(response)


  


}

const addPerson =  (newPerson) =>{
    
    const request = axios.post(baseURL, newPerson)   
    return request.then (response => response.data)

}

const popPerson = (poppedPerson)=>{  
    axios.delete(`${baseURL}/${poppedPerson}`).then (response => response.data)

}
export default {getPeople, addPerson, popPerson}

