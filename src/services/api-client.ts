import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'155c50610bc94f3dbec6b15a4bc65003'
    }
})