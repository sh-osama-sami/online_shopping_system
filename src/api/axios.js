
import axios from 'axios';
import Cookies from 'js-cookie';

const sessionId = Cookies.get('JSESSIONID');
export const axiosClient = axios.create({
    baseURL: 'http://localhost:4000/',
    headers: {
        'Content-type': 'application/json',
         Cookie: `JSESSIONID=${sessionId}`
    },
    withCredentials: true
  
    
});
export const axiosSelling = axios.create({
    baseURL: 'https://8a75-197-39-201-230.ngrok-free.app/AdminService-1.0-SNAPSHOT/api',
    headers: { 'Content-Type': 'application/json' ,
    Cookie: `JSESSIONID=${sessionId}`
},
    withCredentials: true
   
                    
   
});