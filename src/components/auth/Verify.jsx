import VerificationInput from "./VerificationInput";

function Verify() {
  return (
    <section className=" w-full pt-[40px]  ">
      <div className=" w-[42%] flex flex-col pt-[40px] rounded-[20px] border border-[#C1C1C1] m-auto px-[60px] pb-[60px]  ">
        <div className=" w-[75%] flex flex-col gap-[32px] m-auto ">
          <h1 className=" font-semibold text-[32px] leading-[38.73px] text-[#000000] m-auto ">
            Verify your email
          </h1>
          <p className=" font-normal text-[16px] leading-[19.36px]  ">
            Enter the 8 digit code you have received on
            <p className=" font-semibold text-[16px] leading-[19.36px] text-center text-[#000000] ">
              swa***@gmail.com
            </p>{" "}
          </p>
        </div>

        <div className="mt-[46px] mb-[64px] ">
          <label className=" font-normal text-[16px] leading-[19.36px] text-[#000000] ">
            code
          </label>
          <div className="flex gap-[12px]">
            <VerificationInput />
            <VerificationInput />
            <VerificationInput />
            <VerificationInput />
            <VerificationInput />
            <VerificationInput />
            <VerificationInput />
            <VerificationInput />
          </div>
        </div>

        <button className=" w-full rounded-[6px] border border-[#000000] bg-[#000000] py-[18px] text-center font-medium text-[16px] leading-[19.36px] tracking-[2px] text-[#FFFFFF] uppercase ">
          Verify
        </button>
      </div>
    </section>
  );
}

export default Verify;
