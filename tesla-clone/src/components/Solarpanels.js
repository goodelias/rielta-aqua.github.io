import React from "react";

const Solarpanels = () => {
  return (
    <div className="flex flex-col snap-center snap-always h-screen bg-[url('https://tesla-cdn.thron.com/delivery/public/image/tesla/16b04537-a4be-4bf9-8637-86862a858da8/bvlatuR/std/2880x1800/_25-HP-SolarPanels-D')] bg-cover bg-center">
      <div className="flex flex-col items-center p-32">
        <h1 className="text-4xl font-bold">Solar Panels</h1>
        <p className="p-2 text-sm">Lowest Cost Solar Panels in America</p>
      </div>

      <div className="flex relative flex-col mt-auto">
        <div className="flex items-center flex-col text-sm mb-20 lg:flex-row lg:justify-center">
          <a href="https://www.tesla.com/energy/design">
            <button className="bg-[#393c41] rounded-md w-96 lg:w-64 mx-4 h-10 mt-2 text-white">
              Order Now
            </button>
          </a>
          <a href="https://www.tesla.com/solarpanels">
            <button className="bg-[#fff] rounded-md w-96 lg:w-64 mx-4 h-10 mt-2">
              Learn More
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Solarpanels;
