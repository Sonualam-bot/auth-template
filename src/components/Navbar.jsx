import { CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className=" w-full flex flex-col rounded-t-lg bg-[#FFFFFF]  ">
      <div className=" ml-auto pr-[40px] pt-[12px] pb-[9px] flex gap-[20px] font-normal text-[12px] leading-[14.52px] text-[#333333] ">
        <h3 className="cursor-pointer">Help</h3>
        <h3 className="cursor-pointer">Orders & Returns</h3>
        <h3 className="cursor-pointer">Hi, John</h3>
      </div>
      <div className=" w-full flex justify-between items-center ">
        <Link
          to="/"
          className=" font-bold text-[32px] leading-[38.73px] text-[#000000] pl-[40px] pt-[7px] pb-[18px]  "
        >
          ECOMMERCE
        </Link>
        <div className="flex gap-[32px] font-semibold text-[16px] leading-[19.36px] text-[#000000]  ">
          <p className="cursor-pointer">Categories</p>
          <p className="cursor-pointer">Sale</p>
          <p className="cursor-pointer">Clearance</p>
          <p className="cursor-pointer">New stock</p>
          <p className="cursor-pointer">Trending</p>
        </div>
        <div className="flex  gap-[38.27px] py-4 pr-10 text-[#333333] ">
          <CiSearch
            size={33}
            className="cursor-pointer py-[6.25px] px-[5.25px] hover:bg-[#F4F4F4] rounded-lg "
          />
          <IoCartOutline
            size={33}
            className="cursor-pointer py-[6.25px] px-[5.25px] hover:bg-[#F4F4F4] rounded-lg "
          />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
