import axios from "axios";

const CHALLENGER_REST_URL="http://localhost:8080/challengers"

class ChallengerService{
    
    createChallenger(challenger){
        return axios.post(CHALLENGER_REST_URL+"/postchallenge" ,challenger )
    }

    getChallenger(){
        return axios.get(CHALLENGER_REST_URL+"/getchallenge")
    }

    editChallenger(id){
        return axios.put(CHALLENGER_REST_URL+"/editChallange/"+id)
    }
}
export default new ChallengerService();