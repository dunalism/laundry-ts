import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { User } from "lucide-react";

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

type FormValues = z.infer<typeof signUpSchema>;

function EksperimenInput() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log("Form submitted: ", data);
  };

  return (
    <div className="flex items-center justify-center min-h-screen ">
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md p-6 ">
        <h1 className="mb-6 text-xl font-bold text-center text-gray-700">
          Validasi Form
        </h1>
        <div className="mb-4">
          {/*  */}
          <div className="flex flex-col">
            <label className="label" htmlFor="username">
              Username
            </label>
            <div className="input input-bordered focus-within:border-none hover:border-base-content  flex items-center gap-2">
              <User className=" stroke-1 h-6 w-6 mr-[-7px] " />
              <input
                id="username"
                {...register("username")}
                placeholder="Username"
                className="input w-full focus:outline-none focus:border-none"
              />
            </div>
          </div>
          {errors.username && (
            <p className="mt-1 text-sm text-red-500">
              {errors.username.message}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="password"
            className="block mb-1 text-sm font-medium text-gray-600"
          >
            Password
          </label>
          <div>
            <input
              id="password"
              type="password"
              {...register("password")}
              className="w-full px-3 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {errors.password && (
            <p className="mt-1 text-sm text-red-500">
              {errors.password.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default EksperimenInput;
