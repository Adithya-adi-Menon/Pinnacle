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

        },{headers: "Cookie:session=eyJwdWJfa2V5IjoiR0NWMkxRNllBVk42Tk9USUNNWU1TRkJBQUxINVQyNFMyVzNBUDQyRFdTN1o3RUNTQjNWM1NURFcifQ.YUcqdA.urZ6S51_pJjGxmZFM9vAMdhvByI"}).then(Response=>{
            console.log(Response.data)
            return Response.data;
        }).catch(Error)
    }
}

export default new Generatepay();