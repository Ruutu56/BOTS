import axios from 'axios'

const USER_REST_API_URL = "http://localhost:8080/auth/getUser?email=";
const GROUND_BOOKING_REST_URL="http://localhost:8080/auth";
class UserLoginService{

    doLog(){
        return axios.get(GROUND_BOOKING_REST_URL+"/login");
    }


    getUid(fid){
        return axios.get(USER_REST_API_URL + fid);
    }
}

export default new UserLoginService();