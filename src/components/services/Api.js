import axios from "axios"
import { getUserData} from './Storage'

axios.defaults.baseURL = "https://kiscol-backend.onrender.com";


export const RegisterApi = (inputs)=>{
    let data  = {displayName:inputs.name,email:inputs.email,password:inputs.password }
    return axios.post('/Register',data)
}
export const LoginApi = (inputs)=>{
    let data  = {email:inputs.email,password:inputs.password }
    return axios.post('/Login',data)
}
export const UserDetailsApi = ()=>{
    let data = {idToken:getUserData()}
    return axios.post('/Users',data)
}

