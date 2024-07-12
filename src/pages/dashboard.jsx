import React, { useEffect } from "react";
import AuthService from "../service/auth";
import useAuthStore from "../stores/use-auth-store";

function Dashboard() {
  const { signUserSuccess } = useAuthStore();

  // async function getUser() {
  //   try {
  //     const res = await AuthService.getUser();
  //     signUserSuccess(res);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  // useEffect(() => {
  //   getUser();
  // }, []);

  return <div>Dashboard</div>;
}

export default Dashboard;
