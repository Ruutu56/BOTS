import axios from "axios";

const AddPay_BOOKING_REST_URL="http://localhost:8080/payment/addpayment";

class PaymentService{

    addPayment(ap){

        return axios.post(AddPay_BOOKING_REST_URL,ap);
    }

}
export default new PaymentService();