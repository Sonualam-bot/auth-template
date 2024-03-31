import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
    navigate("/verify");
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <section className="w-full pt-[40px] pb-[30px] ">
      <div className=" w-[42%] flex flex-col gap-[32px] px-[60px] pt-[40px] pb-[131px] rounded-[20px] border border-[#C1C1C1] m-auto  ">
        <div className=" flex flex-col  gap-[36px] ">
          <h1 className=" m-auto font-semibold text-[32px] leading-[38.73px] text-[#000000] ">
            Login
          </h1>
          <div className="flex flex-col gap-[13px] m-auto ">
            <h2 className="font-medium text-[24px] leading-[29.05px] text-[#000000]  ">
              Welcome back to ECOMMERCE
            </h2>
            <p className="font-normal text-[16px] leading-[19.36px] text-[#000000] m-auto ">
              The next gen business marketplace
            </p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="m-auto w-full flex flex-col gap-[32px] "
        >
          <div className="flex flex-col gap-[7px] ">
            <label className="font-normal text-[16px] leading-[19.36px] text-[#000000] ">
              Email
            </label>
            <input
              {...register("email", { required: true })}
              placeholder="Enter"
              className=" border-[#C1C1C1] w-full rounded-[6px] border pb-[14px] pt-[15px] pl-[16px]  "
            />

            {errors.email && (
              <p className="text-red-600 before:content-['⚠-'] ">
                This field is required
              </p>
            )}
          </div>

          <div className=" relative flex flex-col gap-[7px] ">
            <label className="font-normal text-[16px] leading-[19.36px] text-[#000000] ">
              Password
            </label>
            <input
              {...register("password", { required: true })}
              placeholder="Enter"
              type={showPassword ? "text" : "password"}
              className=" border-[#C1C1C1] w-full rounded-[6px] border pb-[14px] pt-[15px] pl-[16px]  "
            />
            <p
              onClick={handleShowPassword}
              className=" absolute font-normal text-[16px] leading-[19.36px] text-[#000000] underline right-[14.4px] bottom-4 "
            >
              Show
            </p>

            {errors.password && (
              <p className="text-red-600 before:content-['⚠-'] ">
                This field is required
              </p>
            )}
          </div>

          <input
            type="submit"
            value="Login"
            className=" w-full bg-[#000000] text-[#FFFFFF] rounded-[6px] border border-[#000000] m-auto py-[18px] uppercase font-medium text-[16px] leading-[19.36px]  tracking-[2px] cursor-pointer transition ease-in-out duration-150 hover:bg-[#0c0b0b]  "
          />
        </form>
        <div className="h-[1px] bg-[#C1C1C1]  "></div>
        <p className="m-auto font-normal text-[16px] leading-[19.36px] text-[#333333] ">
          Don&apos;t have an Account?{" "}
          <Link
            to="/"
            className="uppercase tracking-[2px] font-medium text-[16px] leading-[19.36px] text-[#000000] hover:underline "
          >
            Signup
          </Link>{" "}
        </p>
      </div>
    </section>
  );
}

export default Login;
