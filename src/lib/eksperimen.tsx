import { z } from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const signUpSchema = z.object({
  username: z.string().min(4),
});

function EksperimenInput() {
  const form = useForm({
    defaultValues: {
      username: "",
    },
    resolver: zodResolver(signUpSchema),
  });

  const signIn = (data) => {
    alert(data);
    alert("telah disumlbi");
    console.log("env", import.meta.env.VITE_API_URL);
    console.log("env TOKEN", import.meta.env.TOKEN_KEY);
  };
  return (
    <div>
      <form
        onSubmit={form.handleSubmit(signIn)}
        className="flex flex-col gap-4"
      >
        <Controller
          name="username"
          control={form.control}
          render={({ field, fieldState }) => <input />}
        />
        <button
          onClick={() => console.log(form.getFieldState("username").error)}
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default EksperimenInput;
