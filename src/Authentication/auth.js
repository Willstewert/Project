import axios from "axios";
export class AuthService {
  async regsiter(data) {
    try {
      const respones = await axios.post("http://localhost:5000/registerUser", data,{withCredentials:true});
      const result = await respones.data;
      console.log(result);
    } catch (error) {
      console.log("registration error", error);
    }
  }
}

const authService = new AuthService();

export default authService;
