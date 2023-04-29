
import axios from 'axios';
import Cookies from 'js-cookie';

const sessionId = Cookies.get('JSESSIONID');
export const axiosClient = axios.create({
    baseURL: 'https://589f-41-36-162-222.ngrok-free.app',
    headers: {
        'Content-type': 'application/json',
         Cookie: `JSESSIONID=${sessionId}`
    },
    withCredentials: true
  
    
});
export const axiosSelling = axios.create({
    baseURL: 'http://localhost:8080/AdminService-1.0-SNAPSHOT/api',
    headers: { 'Content-Type': 'application/json' ,
    Cookie: `JSESSIONID=${sessionId}`},
    withCredentials: true
   
                    
   
});