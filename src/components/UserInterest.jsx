import Checkbox from "./Checkbox";

const dummyPaginationStart = "<< < 1 2 3 ";
const dummyPaginationEnd = " 5 6 7 ... > >>";

function UserInterest() {
  return (
    <section className="w-full pt-[40px] pb-[30px] ">
      <div className=" w-[42%] flex flex-col gap-[37px] px-[60px] pt-[40px] pb-[131px] rounded-[20px] border border-[#C1C1C1] m-auto  ">
        <div className=" flex flex-col  gap-[23px] ">
          <h1 className=" m-auto font-semibold text-[32px] leading-[38.73px] text-[#000000] ">
            Please mark your interests!
          </h1>
          <p className=" font-normal text-[16px] leading-[26px] text-[#000000] m-auto ">
            We will keep you notified.
          </p>
        </div>

        <div className="flex flex-col gap-[27px] ">
          <h2 className=" font-[590] text-[20px] leading-[26px] text-[#000000] ">
            My saved interests!
          </h2>
          <div className="flex flex-col ">
            <Checkbox label="Shoes" />
            <Checkbox label="Men T-shirts" />
            <Checkbox label="Makeup" />
            <Checkbox label="Jewellery" />
            <Checkbox label="Women T-shirts" />
            <Checkbox label="Furniture" />
          </div>
        </div>
        <div className="mt-[29px]  ">
          <p>
            {dummyPaginationStart}{" "}
            <span className="font-medium text-[20px] leading-[26px]">4</span>{" "}
            {dummyPaginationEnd}{" "}
          </p>
        </div>
      </div>
    </section>
  );
}

export default UserInterest;
