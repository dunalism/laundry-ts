import axios from "@/lib/utils";
import { AxiosError, Register } from "./definition";

export const register = async (data: Register) => {
  try {
    const response = await axios.post("/auth/register", data);
    console.log("response", response);
    return response.data;
  } catch (error) {
    const errorx = error as AxiosError;
    const sameUsername = errorx.response.data.error;
    if (sameUsername) {
      alert(sameUsername);
    }
    console.log("errorx", errorx);
  }
};
