import axios from "axios";
import { TIME_OUT} from './config'

const yhRequest = axios.create({
    timeout: TIME_OUT
})
yhRequest.interceptors.response.use( () => {
        console.log('收到了请求')
    }   
)
export default yhRequest