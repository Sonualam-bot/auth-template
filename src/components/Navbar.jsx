import { CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";

function Navbar() {
  return (
    <nav className=" w-full flex flex-col rounded-t-lg bg-[#FFFFFF]  ">
      <div className=" ml-auto pr-[40px] pt-[12px] pb-[9px] flex gap-[20px] font-normal text-[12px] leading-[14.52px] text-[#333333] ">
        <h3>Help</h3>
        <h3>Orders & Returns</h3>
        <h3>Hi, John</h3>
      </div>
      <div className=" w-full flex justify-between items-center ">
        <h1 className=" font-bold text-[32px] leading-[38.73px] text-[#000000] pl-[40px] pt-[7px] pb-[18px]  ">
          ECOMMERCE
        </h1>
        <div className="flex gap-[32px] font-semibold text-[16px] leading-[19.36px] text-[#000000]  ">
          <p>Categories</p>
          <p>Sale</p>
          <p>Clearance</p>
          <p>New stock</p>
          <p>Trending</p>
        </div>
        <div className="flex  gap-[38.27px] py-4 pr-10 text-[#333333] ">
          <CiSearch
            size={33}
            className=" py-[6.25px] px-[5.25px] hover:bg-[#F4F4F4] rounded-lg "
          />
          <IoCartOutline
            size={33}
            className=" py-[6.25px] px-[5.25px] hover:bg-[#F4F4F4] rounded-lg "
          />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
