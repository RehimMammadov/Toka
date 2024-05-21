import { apiUrl, authUrl } from "@/api/api";
import axios from "axios";

export default class ProductService {
  static async getAllProducts(payload: any) {
    return axios.post(`${apiUrl}`, payload);
  }

  static async getProduct(payload: any) {
    return axios.post(`${apiUrl}`, payload);
  }

  static async createProduct(payload: any) {
    return axios.post(`${apiUrl}`, payload);
  }

  static async updateProduct(payload: any) {
    return axios.post(`${apiUrl}`, payload);
  }

  static async deleteProduct(payload: any) {
    return axios.post(`${apiUrl}`, payload);
  }
}
