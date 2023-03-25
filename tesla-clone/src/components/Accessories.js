import React from 'react'
import Footer from './Footer'

const Accessories = () => {
  return (
    
    <div className="flex flex-col snap-center snap-always h-screen bg-[url('https://tesla-cdn.thron.com/delivery/public/image/tesla/dd739764-bcaa-4263-9488-8c73bc9fb046/bvlatuR/std/0x0/dd739764-bcaa-4263-9488-8c73bc9fb046')] bg-cover bg-center">
      <div className="flex flex-col items-center p-32">
        <h1 className="text-4xl font-bold">Accessories</h1>
      </div>

      <div className="flex relative flex-col mt-auto">
        <div className="flex items-center flex-col text-sm mb-20 lg:flex-row lg:justify-center">
          <a href="https://www.tesla.com/solarroof/design">
            <button className="bg-[#393c41] rounded-md w-96 lg:w-64 mx-4 h-10 mt-2 text-white">
              Shop Now
            </button>
          </a>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Accessories