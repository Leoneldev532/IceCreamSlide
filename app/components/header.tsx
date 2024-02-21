

        import React from 'react'
        
        const Header = () => {
          return (
            <div className='px-10 py-8 fixed flex justify-between items-center w-full max-h-16   top-0 left-0'>
                <h2 className="text-3xl font-semibold ff">  IceSeller  </h2>

                <ul className=" flex gap-x-8 w-1/2 justify-center items-center">
                        <li>Home</li>
                        <li>Shop</li>
                        <li>Delivery</li>
                        <li>Contact</li>
                </ul>

                <h2 className='text-lg border border-white px-6 py-2 font-medium'>
                Order Your Ice-cream

                </h2>
        </div>
          )
        }
        
        export default Header