import React, { useEffect } from "react";
import { Navigate} from "react-router-dom";

import useTokenStore from "../../stores/token-store";
import { getItem } from "../../helpers/persistance-store";

const isValid = getItem("token");

export default function ProtectedRoutes({ children }) {
  const { loggedIn } = useTokenStore();

  return loggedIn || isValid ? children : <Navigate to={"login"} />;
}
