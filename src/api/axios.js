
import axios from 'axios';
import Cookies from 'js-cookie';

const sessionId = Cookies.get('JSESSIONID');
export default axios.create({
    baseURL: 'http://localhost:8080/AdminService-1.0-SNAPSHOT/api',
    headers: {
        'Content-type': 'application/json',
         Cookie: `JSESSIONID=${sessionId}`
    },
  
    
});
export const axiosSelling = axios.create({
    baseURL: 'http://localhost:8080/AdminService-1.0-SNAPSHOT/api',
    headers: { 'Content-Type': 'application/json' ,
    Cookie: `JSESSIONID=${sessionId}`},
   
                    
   
});