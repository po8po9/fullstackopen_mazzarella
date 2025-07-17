import axios from 'axios'
const baseURL = 'http://localhost:3001/persons'

const getPeople = () =>{
  
    const request=  axios.get(baseURL)
   
    
    return request.then(response => response.data)
     //   console.log(response.data)
       // console.log(response)


  


}

export default {getPeople}

