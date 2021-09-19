import axios from "axios";

const API_URL = 'http://127.0.0.1:5000';

class Generatepay {

    getdetails(name,description,price,conditions,secretproduct){
        return axios
        .post(API_URL + "/generate_payment",{
            "name":name,
            "description":description,
            "price":price,
            "conditions":conditions,
            "secretproduct":secretproduct

        },{}).then(Response=>{
            console.log(Response.data)
            return Response.data;
        }).catch(Error)
    }
}

export default new Generatepay();