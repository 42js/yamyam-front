import axios from "axios";

export async function getOrders() {
  // TODO: CORS 해결 이후 처리
  axios.get('/orders').then((data) => {
    console.log(data);
  });
}