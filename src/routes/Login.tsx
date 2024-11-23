// import React from 'react'

import ThemeToggle from "@/components/theme-toggle";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { KeyRound, LogIn, User } from "lucide-react";
import { InputBordered } from "@/components/ui/inputBordered";

const signUpSchema = z.object({
  username: z
    .string()
    .min(3, { message: "Username harus memiliki minimal 3 karakter." })
    .max(20, { message: "Username maksimal 20 karakter." }),
  password: z
    .string()
    .min(6, { message: "Password minimal 6 karakter." })
    .max(50, { message: "Password maksimal 50 karakter." }),
});

function Login() {
  type FormValues = z.infer<typeof signUpSchema>;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    alert(`form submitted: ${data}`);
  };

  return (
    <main className="grid min-h-screen grid-cols-12 overflow-auto">
      <section className="hidden bg-[#FFE9D1] dark:bg-[#14181c] lg:col-span-7 lg:block xl:col-span-8 2xl:col-span-9 ">
        <img src="/laundry.png" alt="Auth Image" className="object-cover" />
      </section>

      <section className="col-span-12 lg:col-span-5 xl:col-span-4 2xl:col-span-3">
        <div className="flex flex-col items-stretch p-8 lg:p-16">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl  font-bold ">Laundry App</h1>
            <ThemeToggle />
          </div>
          <h3 className="mt-12 text-center text-2xl font-semibold lg:mt-28">
            Welcome Back!
          </h3>
          <p className="mt-2 text-center text-sm text-base-content/70">
            Login to your dashboard
          </p>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full mx-auto mt-20"
          >
            {/* prlineInput */}

            <InputBordered
              label="Username"
              id="username"
              errors={!!errors.username}
              errorsMessage={errors.username?.message}
              {...register("username")}
              Icon={<User />}
            />

            <InputBordered
              label="Password"
              {...register("password")}
              errors={!!errors.password}
              errorsMessage={errors.password?.message}
              type="password"
              Icon={<KeyRound />}
            />

            <button
              type="submit"
              className="btn bg-blue-600 hover:bg-blue-700 text-base-100 text-base dark:bg-violet-600 dark:hover:bg-violet-700 dark:text-white w-full"
            >
              <LogIn className="w-5 h-5 mt-[2px]" />
              Login
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}

export default Login;
