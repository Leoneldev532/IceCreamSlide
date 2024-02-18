

        import React from 'react'
        
        const Header = () => {
          return (
            <div className='px-8 py-8 fixed flex justify-between items-center w-full max-h-16   top-0 left-0'>
                <h2 className="text-3xl font-semibold ff"> Fruite </h2>

                <ul className=" flex gap-x-8 w-1/2 justify-center items-center">
                        <li>Home</li>
                        <li>shop</li>
                        <li>Contact</li>
                </ul>

                <h2 className='text-xl font-medium'>
                Choose Your Favorite Beer

                </h2>
        </div>
          )
        }
        
        export default Header