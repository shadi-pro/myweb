

// :
import axios from 'axios';



// define  a constant variable of [baseURL] :
const BASE_URL = 'http://localhost:3500' ;


//  Define the main axios api :
export default axios.create({
    baseURL: BASE_URL
});



//  Define another private axios api    : 
export const axiosPrivate   = axios.create({
    baseURL: BASE_URL , 
    headers : { 'Content-Type' : 'application/json' } ,
    withCredentials : true
});



 