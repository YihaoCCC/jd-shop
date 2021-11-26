import axios from "axios";
import { TIME_OUT} from './config'

const yhRequest = axios.create({
    timeout: TIME_OUT,
    // baseURL: BASE_URL
})
yhRequest.interceptors.response.use( (res) => {
        console.log('收到了请求')
        return res.data
    }   
)
export default yhRequest