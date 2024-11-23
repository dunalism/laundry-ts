import { Eye, EyeClosed } from "lucide-react";
import React, { useState } from "react";
type InputProps = {
  label: string;
  errors?: boolean; // Tipe untuk errors (bisa disesuaikan)
  errorsMessage?: any;
  Icon?: React.ReactElement;
  type?: string;
};

const InputBordered = React.forwardRef<
  HTMLInputElement,
  React.ComponentProps<"input"> & InputProps
>(({ label, errors, errorsMessage, className, Icon, type, ...props }, ref) => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
  return (
    <div className="relative mb-3">
      <div className="flex">
        {Icon
          ? React.cloneElement(Icon, {
              className: `${
                Icon.props.className || ""
              } absolute left-3 top-4 stroke-1`,
            })
          : ""}
        <input
          {...props}
          ref={ref}
          type={type === "password" ? (isVisible ? "text" : "password") : type}
          className={`bg-base-100 peer p-4 ${
            Icon ? "pl-11" : ""
          }  block w-full rounded-xl text-sm border border-base-300 dark:border-base-content/50 outline-none hover:border-blue-400 focus:border-blue-600 dark:hover:border-violet-400 dark:focus:border-violet-600 placeholder:text-transparent  focus:pt-6 focus:pb-2 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 autofill:pt-6 autofill:pb-2 ${
            errors
              ? "border-red-500 dark:border-red-500 dark:focus:border-red-500 focus:border-red-500 "
              : ""
          } ${className} `}
          placeholder="********"
        />
        <label
          htmlFor={label}
          className={`absolute top-0 ${
            Icon ? "start-7 peer-focus:left-7" : ""
          } p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent  origin-[0_0]  peer-disabled:opacity-50 peer-disabled:pointer-events-none peer-focus:scale-90 peer-focus:translate-x-0.5 peer-focus:-translate-y-1.5  peer-focus:text-gray-500  peer-[:not(:placeholder-shown)]:scale-90 peer-[:not(:placeholder-shown)]:translate-x-0.5 peer-[:not(:placeholder-shown)]:-translate-y-1.5 ${
            errors ? "peer-focus:text-red-500 text-red-500" : ""
          } `}
        >
          {label}
        </label>
        {type === "password" && (
          <button
            className="focus:outline-none"
            type="button"
            onClick={toggleVisibility}
            aria-label="toggle password visibility"
          >
            {isVisible ? (
              <Eye className="absolute h-7 w-7 right-3 top-[13px]" />
            ) : (
              <EyeClosed className="absolute h-7 w-7 right-3 top-[13px]" />
            )}
          </button>
        )}
      </div>
      {errors && <p className="mt-1 text-sm text-red-500">{errorsMessage}</p>}
    </div>
  );
});

InputBordered.displayName = "Input";
export { InputBordered };
