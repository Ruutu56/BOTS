import axios from 'axios'

const USER_REST_API_URL = "http://localhost:8080/auth/signup";

class UserService{

    createUser(user){
        return axios.post(USER_REST_API_URL, user);
    }

    async loginUser(email, pass) {
        const result = await axios
          .get(`http://localhost:8080/auth/login?email=${email}&pass=${pass}`)
          .catch((error) => console.log(error));
    
        return result;
    }
 
}

export default new UserService();