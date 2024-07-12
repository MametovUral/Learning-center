import { useEffect, useState } from "react";
import AuthService from "../../service/auth";
import useAuthStore from "../../stores/use-auth-store";
import useTokenStore from "../../stores/token-store";
import FillLoading from "../shared/fill-loading";
import { getItem } from "../../helpers/persistance-store";
import { useNavigate } from "react-router-dom";

function AuthProvider({ children }) {
  const { user, signUserSuccess } = useAuthStore();
  const { isLoading } = useTokenStore();
 
  const token = getItem("token");

  const [isLoaded, setIsLoaded] = useState(true);

  useEffect(() => {
    async function getUser() {
      try {
        if (!isLoading) {
          const res = await AuthService.getUser();
          signUserSuccess(res);
          setIsLoaded(false);
          console.log("tru");
        } else {
          setIsLoaded(false);
          console.log("false");
        }
      } catch (error) {
        console.log(error);
        setIsLoaded(false);
       
      }
    }
    getUser();
  }, [signUserSuccess, isLoading]);

  console.log(user);
  return isLoaded ? <FillLoading /> : <>{children}</>;
}

export default AuthProvider;
