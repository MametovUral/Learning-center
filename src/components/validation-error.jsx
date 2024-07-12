import React from "react";
import useAuthStore from "../stores/use-auth-store";
import useTokenStore from "../stores/token-store";

function ValidationError() {
  const { error } = useTokenStore();

  return error && <p className=" text-red-600">{error.message}</p>;
}

export default ValidationError;
