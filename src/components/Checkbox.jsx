function Checkbox({ label }) {
  return (
    <>
      <div className="relative flex flex-col text-[#000000] bg-white  rounded-xl bg-clip-border">
        <nav className="flex min-w-[240px] flex-col  p-2 font-sans text-base font-normal text-blue-gray-700">
          <div
            role="button"
            className="flex items-center w-full p-0 leading-tight transition-all rounded-[4px] outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
          >
            <label
              htmlFor={`vertical-list/${label}`}
              className="flex items-center w-full px-3 py-[7px] cursor-pointer"
            >
              <div className="grid mr-3 place-items-center">
                <div className="inline-flex items-center">
                  <label
                    className="relative flex items-center p-0 rounded-full cursor-pointer"
                    htmlFor={`vertical-list/${label}`}
                  >
                    <input
                      id={`vertical-list/${label}`}
                      type="checkbox"
                      className="before:content[''] peer relative h-[24px] w-[24px] cursor-pointer appearance-none rounded-[4px] border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-[#000000] bg-[#CCCCCC] checked:bg-[#000000] checked:before:bg-[#000000] hover:before:opacity-0"
                    />
                    <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-[18px] w-[18px] "
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        stroke="currentColor"
                        strokeWidth="1"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </span>
                  </label>
                </div>
              </div>
              <p className="block font-normal text-[16px] leading-[26px] text-[#0000000]  ">
                {label}
              </p>
            </label>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Checkbox;
