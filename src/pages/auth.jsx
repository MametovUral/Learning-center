import { Button, Label, TextInput } from "flowbite-react";
import { HiOutlineArrowRight } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../stores/use-auth-store";
import { useEffect, useRef } from "react";
import AuthService from "../service/auth";
import ValidationError from "../components/validation-error";
import useTokenStore from "../stores/token-store";

function Auth() {
  const navigate = useNavigate();
  const { isLoading, signUserStart, signUserSuccess, signUserFailure } =
    useTokenStore();

  const { loggedIn } = useAuthStore();

  const loginRef = useRef();
  const passwordRef = useRef();

  async function handleSubmit(e) {
    e.preventDefault();

    const login = {
      phone: loginRef.current.value,
      password: passwordRef.current.value,
    };

    try {
      signUserStart();
      const res = await AuthService.userLogin(login);
      if (!res.message) {
        signUserSuccess(res);
        navigate("/");
      }
      signUserFailure(res);
    } catch (error) {
      signUserFailure(error);
    }
  }

  useEffect(() => {
    if (loggedIn) {
      navigate("/");
    }
  }, [loggedIn, navigate]);

  return (
    <div className="flex justify-center h-screen items-center">
      <div className="w-[500px] rounded-lg shadow px-9 py-12 ">
        <div className="flex justify-center items-center gap-3 mb-[46px]">
          <img
            className="size-[70px]"
            src="/src/assets/logo-2.png"
            alt="logo"
          />
          <div className="flex flex-col">
            <span className="font-mono font-bold text-black text-2xl">
              Learning Center
            </span>
            <span className="font-mono  text-black text-sm">
              O'quv markazlarini boshqarish platformasi
            </span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <h3 className="font-mono mb-5 font-medium text-[25px]  text-[#3C4C99]">
              Tizimga kirish
            </h3>
            <ValidationError />
          </div>
          <div>
            <div className="mb-2 block">
              <Label
                className="font-mono"
                htmlFor="tel1"
                color="indigo"
                value="Telefon raqam"
              />
            </div>
            <TextInput
              id="tel1"
              type="tel"
              placeholder="+998"
              required
              shadow
              color="red"
              ref={loginRef}
              className="outline-red-500"
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label
                className="font-mono"
                htmlFor="password1"
                color="indigo"
                value="Parol"
              />
            </div>
            <TextInput
              id="password1"
              type="password"
              placeholder="********"
              required
              shadow
              color="red"
              ref={passwordRef}
              className="outline-red-500"
            />
          </div>

          <Button
            color="warning"
            className="bg-[#FFD126] border   border-[#3C4C99] font-mono font-bold text-[15px] text-[#3C4C99]"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Login"}
            <HiOutlineArrowRight className="ml-3 h-5 w-5" />
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Auth;
