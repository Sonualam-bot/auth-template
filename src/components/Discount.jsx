import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

function Discount() {
  return (
    <section className="w-full  bg-[#F4F4F4] pt-[10px] pb-[8px] ">
      <div className="w-[290px] text-[#000000] font-medium text-[14px] leading-[16.94px] m-auto flex gap-[20px] ">
        <FaAngleLeft />
        <p>Get 10% off on business sign up</p>
        <FaAngleRight />
      </div>
    </section>
  );
}

export default Discount;
