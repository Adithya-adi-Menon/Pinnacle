import axios from "axios";

const API_URL = "http://127.0.0.1:5000";

class AuthService {
    
    account_details(pubkey){
        // const params = JSON.stringify({
        //     "pub_key":pubkey
        // });
        // console.log(params);
        return axios
       
        .post(API_URL + "/account",{
           "pub_key":pubkey
        }).then(response => {
           
            return response.data;
        }).catch(Error);
    }
}
export default new AuthService();