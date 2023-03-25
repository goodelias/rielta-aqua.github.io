import React from "react";
import { FiChevronDown } from "react-icons/fi";

const Model3 = () => {
  return (
    <div className="flex flex-col snap-center snap-always h-screen bg-[url('https://tesla-cdn.thron.com/delivery/public/image/tesla/a269d7b4-87a9-4057-9ac5-2565e56a188e/bvlatuR/std/4096x2560/Homepage-Model-3-Desktop-LHD')] bg-cover bg-center">
      <div className="flex flex-col items-center p-32">
        <h1 className="text-4xl font-bold">Model 3</h1>
        <p className="p-2">Leasing starting at $349/mo</p>
      </div>

      <div className="flex relative flex-col mt-auto">
        <div className="flex items-center flex-col text-sm mb-20 lg:flex-row lg:justify-center">
          <a href="https://www.tesla.com/model3/design#overview">
            <button className="bg-[#393c41] rounded-md w-96 lg:w-64 mx-4 h-10 mt-2 text-white">
              Custom Order
            </button>
          </a>
          <a href="https://www.tesla.com/drive">
            <button className="bg-[#fff] rounded-md w-96 lg:w-64 mx-4 h-10 mt-2">
              Demo Drive
            </button>
          </a>
        </div>

        <div className="flex absolute inset-x-0 bottom-[3%] justify-center animate-bounce pb-5">
          <FiChevronDown size={25} />
        </div>
      </div>
    </div>
  );
};

export default Model3;
