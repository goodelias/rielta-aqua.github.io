import React from 'react'

const Solarroof = () => {
  return (
    <div className="flex flex-col snap-center snap-always h-screen bg-[url('https://tesla-cdn.thron.com/delivery/public/image/tesla/4a41ec0e-7316-46a8-8ce9-e2f195ba644d/bvlatuR/std/2880x1800/Homepage-SolarRoof-Desktop-Global')] bg-cover bg-center">
      <div className="flex flex-col items-center p-32">
        <h1 className="text-4xl font-bold">Solar Roof</h1>
        <p className="p-2 text-sm">Produce Clean Energy From Your Roof</p>
      </div>

      <div className="flex relative flex-col mt-auto">
        <div className="flex items-center flex-col text-sm mb-20 lg:flex-row lg:justify-center">
          <a href="https://www.tesla.com/solarroof/design">
            <button className="bg-[#393c41] rounded-md w-96 lg:w-64 mx-4 h-10 mt-2 text-white">
              Order Now
            </button>
          </a>
          <a href="https://www.tesla.com/solarroof">
            <button className="bg-[#fff] rounded-md w-96 lg:w-64 mx-4 h-10 mt-2">
              Learn More
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Solarroof