import React, { useState } from "react";
import { TfiClose } from "react-icons/tfi";

const Menu = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div>
      <div className="hidden lg:inline">
        <ul className="flex justify-center hover:cursor-pointer">
          <li className="py-1 px-3 hover:rounded hover:bg-black/5">
            <a href="https://shop.tesla.com">Shop</a>
          </li>
          <li className="py-1 px-3 hover:rounded hover:bg-black/5">
            <a href="https://tesla.com/teslaaccount">Account</a>
          </li>
          <li
            onClick={handleNav}
            className="py-1 px-3 hover:rounded hover:bg-black/5"
          >
            Menu
          </li>
        </ul>
      </div>
      <div className="lg:hidden">
        <button
          onClick={handleNav}
          className="inline-flex items-center rounded-md py-2 px-4 text-sm font-bold bg-black/5 shadow-sm hover:bg-black/10"
        >
          Menu
        </button>
      </div>

      <div
        className={
          nav
            ? "bg-white absolute top-0 right-0 w-80 h-screen z-10 overflow-scroll"
            : "fixed left-[100%]"
        }
      >
        <div className="flex justify-end pr-8 pt-8 cursor-pointer">
          <TfiClose
            onClick={handleNav}
            className="rounded p-1 hover:bg-black/5"
            size={28}
          />
        </div>
        <ul className="pt-8 px-6">
          <li className="py-3 pl-3 lg:hidden hover:rounded hover:bg-black/5">
            <a href="https://www.tesla.com/models">Model S</a>
          </li>
          <li className="py-3 pl-3 lg:hidden hover:rounded hover:bg-black/5">
            <a href="https://www.tesla.com/model3">Model 3</a>
          </li>
          <li className="py-3 pl-3 lg:hidden hover:rounded hover:bg-black/5">
            <a href="https://www.tesla.com/modelx">Model X</a>
          </li>
          <li className="py-3 pl-3 lg:hidden hover:rounded hover:bg-black/5">
            <a href="https://www.tesla.com/modely">Model Y</a>
          </li>
          <li className="py-3 pl-3 lg:hidden hover:rounded hover:bg-black/5">
            <a href="https://www.tesla.com/solarroof">Solar Roof</a>
          </li>
          <li className="py-3 pl-3 lg:hidden hover:rounded hover:bg-black/5">
            <a href="https://www.tesla.com/solarpanels">Solar Panels</a>
          </li>
          <li className="py-3 pl-3 lg:hidden hover:rounded hover:bg-black/5">
            <a href="https://www.tesla.com/powerwall">Powerwall</a>
          </li>
          <li className="py-3 pl-3 hover:rounded hover:bg-black/5">
            <a href="https://www.tesla.com/inventory/new/m3">
              Existing Inventory
            </a>
          </li>
          <li className="py-3 pl-3 hover:rounded hover:bg-black/5">
            <a href="https://www.tesla.com/inventory/used/m3">Used Inventory</a>
          </li>
          <li className="py-3 pl-3 hover:rounded hover:bg-black/5">
            <a href="https://www.tesla.com/tradein">Trade-In</a>
          </li>
          <li className="py-3 pl-3 hover:rounded hover:bg-black/5">
            <a href="https://www.tesla.com/drive">Demo Drive</a>
          </li>
          <li className="py-3 pl-3 hover:rounded hover:bg-black/5">
            <a href="https://www.tesla.com/insurance">Insurance</a>
          </li>
          <li className="py-3 pl-3 hover:rounded hover:bg-black/5">
            <a href="https://www.tesla.com/commercial">Commercial Energy</a>
          </li>
          <li className="py-3 pl-3 hover:rounded hover:bg-black/5">
            <a href="https://www.tesla.com/utilities">Utilities</a>
          </li>
          <li className="py-3 pl-3 hover:rounded hover:bg-black/5">
            <a href="https://www.tesla.com/charging">Charging</a>
          </li>
          <li className="py-3 pl-3 hover:rounded hover:bg-black/5">
            <a href="https://www.tesla.com/findus">Find Us</a>
          </li>
          <li className="py-3 pl-3 hover:rounded hover:bg-black/5">
            <a href="https://www.tesla.com/support">Support</a>
          </li>
          <li className="py-3 pl-3 hover:rounded hover:bg-black/5">
            <a href="https://ir.tesla.com/">Investor Relations</a>
          </li>
          <li className="py-3 pl-3 lg:hidden hover:rounded hover:bg-black/5">
            <a href="https://shop.tesla.com/">Shop</a>
          </li>
          <li className="py-3 pl-3 lg:hidden hover:rounded hover:bg-black/5">
            <a href="https://www.tesla.com/teslaaccount">Account</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
