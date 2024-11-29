// import React from 'react'

import ThemeToggle from "@/components/theme-toggle";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { KeyRound, LogIn, User } from "lucide-react";
import { InputBordered } from "@/components/ui/inputBordered";
import { Form, Link, Navigate, useNavigation } from "react-router-dom";
import { useAuth } from "@/lib/AuthProvider";

const loginSchema = z.object({
  username: z.string().min(1, "Username is required."),
  password: z.string().min(1, "Password is required."),
});

function Login() {
  const navigation = useNavigation();
  const submitting: boolean = navigation.state === "submitting";
  const { auth } = useAuth();
  const isLogout = !auth;

  type FormValues = z.infer<typeof loginSchema>;
  const {
    register,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(loginSchema),
  });

  // const onSubmit: SubmitHandler<FormValues> = (data) => {
  //   alert(`form submitted: ${data}`);
  // };

  if (isLogout) {
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
              login to your dashboard.
            </p>
            <Form method="post" className="w-full mx-auto mt-20">
              {/* prlineInput */}

              <InputBordered
                label="Username"
                {...register("username")}
                errors={!!errors.username}
                errorsMessage={errors.username?.message}
                Icon={<User />}
                required
              />

              <InputBordered
                label="Password"
                {...register("password")}
                errors={!!errors.password}
                errorsMessage={errors.password?.message}
                type="password"
                Icon={<KeyRound />}
                required
              />

              <button
                type="submit"
                className="btn bg-blue-600 hover:bg-blue-700 text-base-100 text-base dark:bg-violet-600 dark:hover:bg-violet-700 dark:text-white w-full"
              >
                <div aria-hidden hidden={!submitting}>
                  <span className="loading loading-spinner"></span>
                </div>
                <LogIn className="w-5 h-5 mt-[2px]" />
                Login
              </button>
            </Form>
            <p className="text-center mt-4">
              haven't account?
              <Link
                className="ml-1 link-hover text-blue-700 dark:text-violet-500"
                to="/auth/register"
              >
                Create one!
              </Link>{" "}
            </p>
          </div>
        </section>
      </main>
    );
  }
  return <Navigate to="/dashboard" />;
}

export default Login;
