import axios from "../axios";
import * as queryString from "query-string";

const adminService = {
  /**
   * Đăng nhập hệ thống
   * {
   *  "username": "string",
   *  "password": "string"
   * }
   */
  login(LoginBody) {
    return axios.post(`/admin/login`, LoginBody);
  },
};

export default adminService;
