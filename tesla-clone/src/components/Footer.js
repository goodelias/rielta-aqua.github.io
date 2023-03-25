import React from "react";

const Footer = () => {
  return (
    <footer className="flex absolute inset-x-0 bottom-[3%] justify-center pb-5 text-xs font-bold text-[#5c5e62]">
      <ul className="flex justify-center">
        <li className="px-2">
          <a href="https://www.tesla.com/about">Tesla © 2023</a>
        </li>
        <li className="px-2">
          <a href="https://www.tesla.com/legal">Privacy & Legal</a>
        </li>
        <li className="px-2">
          <a href="https://www.tesla.com/vin-recall-search">Vehicle Recalls</a>
        </li>
        <li className="px-2">
          <a href="https://www.tesla.com/contact">Contact</a>
        </li>
        <li className="px-2">
          <a href="https://www.tesla.com/careers">Careers</a>
        </li>
        <li className="px-2">
          <a href="https://www.tesla.com/blog">News</a>
        </li>
        <li className="px-2">
          <a href="https://engage.tesla.com/">Engage</a>
        </li>
        <li className="px-2">
          <a href="https://www.tesla.com/findus/list">Locations</a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
