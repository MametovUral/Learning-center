import { useEffect, useState } from "react";
import AuthService from "../../service/auth";
import useAuthStore from "../../stores/use-auth-store";
import FillLoading from "../shared/fill-loading";
import { getItem } from "../../helpers/persistance-store";

function AuthProvider({ children }) {
  const { signUserSuccess } = useAuthStore();
  const token = getItem("token");

  const [isLoaded, setIsLoaded] = useState(true);

  useEffect(() => {
    async function getUser() {
      try {
        if (token) {
          const res = await AuthService.getUser();
          signUserSuccess(res);
          setIsLoaded(false);
        } else {
          setIsLoaded(false);
        }
      } catch (error) {
        console.log(error);
        setIsLoaded(false);
      }
    }
    getUser();
  }, []);

  return isLoaded ? <FillLoading /> : <>{children}</>;
}

export default AuthProvider;
