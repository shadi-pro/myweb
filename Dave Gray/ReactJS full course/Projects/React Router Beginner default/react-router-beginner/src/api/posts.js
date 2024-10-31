
// importing the [axios] -> to be used to define a creatino of the axios  :
import axios from "axios"

// define the main axios baseURL to be used as prefix[assign the  localhost in this project ,  but will be replaced by a live api in the future ]  access to database api: 
export default axios.create({
  baseURL : 'http://localhost:3500' 
}) ;




