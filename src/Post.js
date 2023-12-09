
import Aboutpost from './Components/Aboutpost';
const Post = () => {
    axios.interceptors.request.use(function (config) {
        const token = window.localStorage.getItem('token')
        config.headers.Authorization =  token;     
        return config;
    });
    
    return (
        <div>
            <Aboutpost/>
        </div>
    );
};

export default Post;
