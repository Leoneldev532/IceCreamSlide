
      import Image from 'next/image'
import React from 'react'
      import im1 from "@/public/1.png"
      import im2 from "@/public/2.png"
      import im3 from "@/public/3.png"
      import im4 from "@/public/4.png"
      import im5 from "@/public/5.png"
      import im6 from "@/public/6.png"
      import im7 from "@/public/7.png"
      const Page = () => {
        return (
          <div className='flex gap-x-4 bg-[#EB3D6C] min-h-screen  py-10 px-8'>

            <div className="w-1/2 flex  flex-col gap-y-4">

              <h1 className="text-[10rem] h-48 p-0 m-0 ff">ice cream</h1>
              <h3 className=' f2 font-extrabold text-7xl'>Strawberry cone</h3>
              <span className='text-xl f2'>
              Embark on a culinary journey of Delight as You Immerse Yourself in Our Artisan-Crafted Ice Cream Collection—Each Flavor a Story, Each Scoop an Unforgettable Chapter in Your Sweet Odyssey! 
              Indulge in a World of Imagination, Where Every Scoop Unveils  a New Taste Adventure! Choose your favorite
              </span>
              <div className="flex gap-x-8 justify-start items-center ">

                  <div className=" h-48 w-36 group  flex justify-end overflow-hidden items-center flex-col ">
                      <div className="border-2 relative w-20 rounded-md h-16 border-white cursor-pointer  bg-white/20">
                        <Image src={im4} alt="im1" className="absolute group-hover:rotate-12 ease-out group-hover:-translate-y-5  group-hover:scale-[1.8] duration-300 scale-150 object-contain -top-40 w-72  h-72 left-0" />
                      </div>

                  </div>


                  <div className=" h-48 w-36 group  flex justify-end overflow-hidden items-center flex-col ">
                      <div className="border-2 relative w-20 rounded-md h-16 border-white cursor-pointer  bg-white/20">
                        <Image src={im2} alt="im1" className="absolute group-hover:rotate-12 ease-out group-hover:-translate-y-5  group-hover:scale-[1.8] duration-300 scale-150 object-contain -top-40 w-72  h-72 left-0" />
                      </div>

                  </div>


                  <div className=" h-48 w-36 group  flex justify-end overflow-hidden items-center flex-col ">
                      <div className="border-2 relative w-20 rounded-md h-16 border-white cursor-pointer  bg-white/20">
                        <Image src={im1} alt="im1" className="absolute group-hover:rotate-12 ease-out group-hover:-translate-y-5  group-hover:scale-[1.8] duration-300 scale-150 object-contain -top-40 w-72  h-72 left-0" />
                      </div>

                  </div>

                  <div className=" h-48 w-36 group  flex justify-end overflow-hidden items-center flex-col ">
                      <div className="border-2 relative w-20 rounded-md h-16 border-white cursor-pointer  bg-white/20">
                        <Image src={im3} alt="im1" className="absolute group-hover:rotate-12 ease-out group-hover:-translate-y-5  group-hover:scale-[1.8] duration-300 scale-150 object-contain -top-40 w-72  h-72 left-0" />
                      </div>

                  </div>


              </div>

            </div>


          </div>
        )
      }
      
      export default Page