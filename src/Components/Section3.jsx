import React from 'react'
import bag1 from '../assets/bag1.png'
import bag2 from '../assets/bag2.png'

const Section3 = () => {
  return (
    <div className="
      w-full
      px-4 sm:px-6 md:px-10 lg:px-[80px] xl:px-[120px]
      py-16 md:py-24
      mx-auto
      flex flex-col items-center
      max-w-[1600px]
      bg-[#FFF0DE]
    ">

      {/* Heading */}
      <div>
        <h1 className="
          text-[#F6973F]
          text-[28px]
          sm:text-[36px]
          md:text-[42px]
          lg:text-[48px]
          font-playfair
          text-center
        ">
          Best Selling Pieces
        </h1>
      </div>

      {/* Grid */}
      <div className="
        mt-10 md:mt-[64px]
        gap-9 sm:gap-6
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-4
        w-full
      ">

        {[bag1, bag2, bag1, bag1].map((bag, index) => (
          <div key={index} className="md:w-full md:max-w-[350px] w-[200px] mx-auto">

            <div className="
              w-full
              rounded-xl
              overflow-hidden
           
            
              transition
            ">
              {/* IMAGE (UNCHANGED HEIGHT) */}
              <img
                src={bag}
                alt=""
                className="w-full object-contain"
              />
            </div>

          </div>
        ))}

      </div>

    </div>
  )
}

export default Section3