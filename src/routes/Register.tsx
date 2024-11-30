// import React from 'react'

import ThemeToggle from "@/components/theme-toggle";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { KeyRound, Mail, User, UserPlus, UserSquare } from "lucide-react";
import { InputBordered } from "@/components/ui/inputBordered";
import { Link, Navigate, useNavigate, useNavigation } from "react-router-dom";
import { useAuth } from "@/lib/AuthProvider";
import { register as signUp } from "@/lib/crud";

const registerSchema = z.object({
  name: z.string().min(1, "Full Name is required."),
  username: z.string().min(3, "Username must be at least 3 characters."),
  email: z.string().email(`Invalid email! example: "your@mail.com"`),
  password: z.string().min(8, "Password must be at least 8 characters."),
});

function Register() {
  const navigation = useNavigation();
  const submitting: boolean = navigation.state === "submitting";
  const { auth } = useAuth();
  const isLogout = !auth;
  const navigate = useNavigate();

  type FormValues = z.infer<typeof registerSchema>;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(registerSchema),
    mode: "onTouched",
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    const response = await signUp(data);
    if (response) {
      navigate("/auth/login");
    } else {
      navigate("/auth/register");
    }
  };

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
              Register
            </h3>
            <p className="mt-2 text-center text-sm text-base-content/70">
              Create an account to use the app.
            </p>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="w-full mx-auto mt-20"
            >
              <InputBordered
                label="Full Name"
                {...register("name")}
                errors={!!errors.name}
                errorsMessage={errors.name?.message}
                Icon={<UserSquare />}
                required
              />

              <InputBordered
                label="Username"
                {...register("username")}
                errors={!!errors.username}
                errorsMessage={errors.username?.message}
                Icon={<User />}
                required
              />

              <InputBordered
                label="Email"
                type="email"
                {...register("email")}
                errors={!!errors.email}
                errorsMessage={errors.email?.message}
                Icon={<Mail className=" " />}
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
                <UserPlus className="w-5 h-5 mt-[2px]" />
                Register
              </button>
            </form>
            <p className="text-center mt-4">
              I have already to
              <Link
                className="ml-1 link-hover text-blue-700 dark:text-violet-500"
                to="/auth/login"
              >
                Login
              </Link>{" "}
            </p>
          </div>
        </section>
      </main>
    );
  }
  return <Navigate to="/dashboard" />;
}

export default Register;
