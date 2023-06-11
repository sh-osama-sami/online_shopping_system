
import axios from 'axios';
import Cookies from 'js-cookie';

const sessionId = Cookies.get('JSESSIONID');
export const axiosClient = axios.create({
    baseURL: 'http://127.0.0.1:4000/',
    headers: {
        'Content-type': 'application/json',
         Cookie: `JSESSIONID=${sessionId}`
    },
    withCredentials: true
  
    
});
export const axiosSelling = axios.create({
    baseURL: 'http://127.0.0.1:8080/AdminService-1.0-SNAPSHOT/api',
    headers: { 'Content-Type': 'application/json' ,
    Cookie: `JSESSIONID=${sessionId}`
},
    withCredentials: true
   
    
                    
   
});