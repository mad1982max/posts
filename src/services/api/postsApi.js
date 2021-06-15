import axios from 'axios';
import  {query, apiRoute} from "../../config"

export default loadPosts = () => axios.get(`${apiRoute}?&api-key=${query['api-key']}`)