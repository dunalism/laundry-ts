import axios from "@/lib/utils";
import { AxiosError, Register } from "./definition";
import { toast } from "react-toastify";

export const register = async (data: Register) => {
  try {
    const response = await axios.post("/auth/register", data);
    console.log("response", response);
    toast.success("Registration successful");
    return response.data;
  } catch (error) {
    const errorx = error as AxiosError;
    const sameUsername = errorx.response.data.error;
    if (sameUsername)
      toast.error(`${sameUsername}!`, {
        draggable: true,
      });

    const serverError = Boolean(errorx.status === 500);

    if (serverError) toast.error("Internal server error", { draggable: true });
  }
};
