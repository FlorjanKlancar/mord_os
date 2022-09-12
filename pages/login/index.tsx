import React, { useState } from "react";
import { UserIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { loginFormModel } from "../../model/loginFormModel";
import axios from "axios";
import { useRouter } from "next/router";

function LoginPage() {
  const router = useRouter();

  const [signInTrigger, setSignInTrigger] = useState<boolean>(false);
  const [loginForm, setLoginForm] = useState<loginFormModel>({
    username: "borgoth@mortos.com",
    password: "",
  });
  const [loginError, setLoginError] = useState<string>("");

  const onSubmitHandler = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/login", loginForm);
      if (response.status === 200) {
        router.push("/");
      }
    } catch (e: any) {
      setLoginError(e.response.data.msg);
    }
  };

  return (
    <div className="h-screen bg-gradient-to-br from-sky-500 via-sky-900 to-indigo-900">
      <div className="flex flex-col space-y-8 justify-center items-center h-full w-full">
        <div className="rounded-full bg-slate-500 w-48 h-48 flex items-center justify-center">
          <UserIcon className="w-24 h-24 " />
        </div>

        <h1 className={`${signInTrigger ? "text-2xl" : "text-base"}`}>
          borgoth@mortos.com
        </h1>

        {!signInTrigger ? (
          <button
            className="bg-slate-500 px-12 py-2 transition duration-200 ease-in-out hover:scale-105 border-2 border-slate-200 animate-pulse"
            onClick={() => setSignInTrigger(!signInTrigger)}
          >
            Sign in
          </button>
        ) : (
          <form
            className="flex flex-col space-y-5"
            onSubmit={(e) => onSubmitHandler(e)}
          >
            <div className="flex bg-white rounded-xl">
              <input
                type="password"
                className="rounded-xl w-64 h-8 placeholder:text-slate-500 px-5 text-black outline-none"
                placeholder="Enter password!"
                onChange={(e) =>
                  setLoginForm({ ...loginForm, password: e.target.value })
                }
              />
              <button className="px-2 text-black bg-slate-400 rounded-xl opacity-70 hover:opacity-100 hover:bg-slate-700 hover:text-white">
                <ArrowRightIcon className="w-5 h-5 " />
              </button>
            </div>

            {loginError.length ? (
              <div className="text-red-500 text-center">{loginError}</div>
            ) : (
              <></>
            )}

            <div className="flex justify-between">
              <p
                className="text-xs hover:underline cursor-pointer"
                onClick={() => setSignInTrigger(!signInTrigger)}
              >
                Close sign in
              </p>
              <p className="text-xs hover:underline cursor-pointer">
                Forgot password?
              </p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default LoginPage;
