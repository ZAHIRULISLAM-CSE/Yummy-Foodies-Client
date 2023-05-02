import React from 'react';
// import img1 from '../../../public/images'


const Bannar = () => {
    return (
        <div className="bg-cover  bg-no-repeat bg-center h-screen" style={{backgroundImage: "url('../../../public/images/banner-bg1.jpg')", opacity: 0.7}}>

            <div className='w-[85%] mx-auto justify-center  h-full  items-center flex '>
                <div>
                    <h1 className='text-[#ECB365] mb-2 text-2xl' >Welcome to <span className='text-[#FB2576] mb-3'>Yummy Foodies</span></h1>
                    <h1 className='text-4xl font-bold'>The Authentice</h1>
                    <h1 className='text-4xl mb-6 font-semibold'>Food House For Food Lover</h1>
                    <p className='text-sm' >Savor the flavors of our delicious dishes</p>
                    <p className='text-sm'>Taste the difference with our farm-to-table cuisine</p>
                    <p className='text-sm'>Explore the world on a plate with our global menu</p>
                    <p className='text-sm'>Unleash your taste buds with our delectable dishes</p>
                    <p className='text-sm  '>Take a culinary journey with our diverse menu</p>
                    <button type="button" class="text-gray-900 mt-4 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Get Started</button>
                </div>

            </div>



        </div>
    );
};

export default Bannar;