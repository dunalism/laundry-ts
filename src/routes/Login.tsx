// import React from 'react'

import ThemeToggle from "@/components/theme-toggle";
import { User } from "lucide-react";

function Login() {
  return (
    <main className="grid min-h-screen grid-cols-12 overflow-auto">
      <section className="hidden bg-[#FFE9D1] dark:bg-[#14181c] lg:col-span-7 lg:block xl:col-span-8 2xl:col-span-9 ">
        <img src="/laundry.png" alt="Auth Image" className="object-cover" />
      </section>

      <section className="col-span-12 lg:col-span-5 xl:col-span-4 2xl:col-span-3">
        <div className="flex flex-col items-stretch p-8 lg:p-16">
          <div className="flex items-center justify-between">
            <h3 className="text-xl text-gradient font-bold ">Laundry App</h3>
            <ThemeToggle />
          </div>
          <h3 className="mt-12 text-center text-xl font-semibold lg:mt-28">
            Welcome Back!
          </h3>
          <p className="mt-2 text-center text-sm text-base-content/70">
            Login to your dashboard
          </p>
          <div className="mt-10 flex gap-8 flex-col">
            <input
              type="text"
              className="input input-bordered focus:border-none  hover:border-base-content "
              placeholder="Username"
            />
            <label className="input input-bordered focus-within:border-none hover:border-base-content flex items-center gap-2">
              <User className=" stroke-1 " />
              <input
                required
                type="text"
                className="grow "
                placeholder="Username"
              />
            </label>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Login;
