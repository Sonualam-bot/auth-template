import { useForm } from "react-hook-form";

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <section className="w-full pt-[40px] pb-[30px] ">
      <div className=" w-[42%] flex flex-col gap-[32px] px-[60px] pt-[40px] pb-[131px] rounded-[20px] border border-[#C1C1C1] m-auto  ">
        <h1 className=" m-auto font-semibold text-[32px] leading-[38.73px] text-[#000000] ">
          Create your account
        </h1>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="m-auto w-full flex flex-col gap-[32px] "
        >
          <div className="flex flex-col gap-[7px] ">
            <label className="font-normal text-[16px] leading-[19.36px] text-[#000000] ">
              Name
            </label>
            <input
              {...register("name", { required: true })}
              placeholder="Enter"
              className=" border-[#C1C1C1] w-full rounded-[6px] border pb-[14px] pt-[15px] pl-[16px]  "
            />

            {errors.name && (
              <p className="text-red-600 before:content-['⚠-'] ">
                This field is required
              </p>
            )}
          </div>

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

          <div className="flex flex-col gap-[7px] ">
            <label className="font-normal text-[16px] leading-[19.36px] text-[#000000] ">
              Password
            </label>
            <input
              {...register("password", { required: true })}
              placeholder="Enter"
              type="password"
              className=" border-[#C1C1C1] w-full rounded-[6px] border pb-[14px] pt-[15px] pl-[16px]  "
            />

            {errors.password && (
              <p className="text-red-600 before:content-['⚠-'] ">
                This field is required
              </p>
            )}
          </div>

          <input
            type="submit"
            value="Create account"
            className=" w-full bg-[#000000] text-[#FFFFFF] rounded-[6px] border border-[#000000] px-[148px] py-[18px] uppercase font-medium text-[16px] leading-[19.36px]  tracking-[2px] cursor-pointer transition ease-in-out duration-150 hover:bg-[#0c0b0b]  "
          />
        </form>
        <p className="m-auto font-normal text-[16px] leading-[19.36px] text-[#333333] ">
          Have an Account?{" "}
          <span className="uppercase tracking-[2px] font-medium text-[16px] leading-[19.36px] text-[#000000] hover:underline ">
            login
          </span>{" "}
        </p>
      </div>
    </section>
  );
}

export default Signup;
