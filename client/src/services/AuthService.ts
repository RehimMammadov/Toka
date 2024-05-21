import { authUrl } from "@/api/api";
import axios from "axios";

export default class AuthService {
  static async register(payload: any) {
    return axios.post(`${authUrl}/auth/register/member`, payload);
  }

  static async login(payload: any) {
    return axios.post(`${authUrl}/auth/login`, payload);
  }
}
