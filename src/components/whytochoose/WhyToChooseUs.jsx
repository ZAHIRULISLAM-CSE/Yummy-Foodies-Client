import React from "react";
import { FaAdn } from "react-icons/fa";
import { FaCalendarPlus } from "react-icons/fa";
import { FaUserSecret } from "react-icons/fa";

const WhyToChooseUs = () => {

  //why to code section

  return (
    <div className="text-gray-300 w-[85%] mx-auto">
      <h1 className="text-center  mt-8 text-4xl font-semibold">
        Why To Choose Us
      </h1>
      <div className="grid mt-12 mb-12  md:mt-20 grid-cols-1  md:grid-cols-3">
        <div className="flex items-center gap-3">
          <div>
            <FaAdn></FaAdn>
          </div>
          <div>
            <h1 className="text-2xl font-bold">15</h1>
            <p className="text-2xl font-semibold">Years of Experience</p>
          </div>
        </div>
        <div className="flex mb-3 items-center gap-3">
          <div>
            <FaCalendarPlus></FaCalendarPlus>
          </div>
          <div>
            <h1 className="text-2xl font-bold">2500</h1>
            <p className="text-2xl font-semibold">Orders Delivery</p>
          </div>
        </div>
        <div className="flex mb-3 items-center gap-3">
          <div>
            <FaUserSecret></FaUserSecret>
          </div>
          <div>
            <h1 className="text-2xl font-bold">150+</h1>
            <p className="text-2xl font-semibold">Chef Avaliable</p>
          </div>
        </div>
      </div>
      <div className="grid  gap-6 grid-cols-1 md:grid-cols-3">
        <div className="max-w-sm  dark:bg-gray-800">
          <img
            className="rounded-t-lg"
            src="https://img.freepik.com/free-photo/side-lamb-ragout-with-fried-onion-carrot-tomato-sauce-greens-vegetable-salad-table_141793-4744.jpg?w=740&t=st=1683143440~exp=1683144040~hmac=534a58c37c3c73f822d66972eb7934be99436e7a1a90376773aac0ee6ee54a02"
            alt=""
          />
          <div className="">
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-300 dark:text-white">
              <p className="mt-3">Premium Quality</p>
              <p className="mt-2 text-sm">
                Our Chef Serve here good quality of foods,To ensure that your
                chef serves premium quality food, it's important to use only the
                freshest and highest-quality ingredients and we use fresh items
                always.
              </p>
            </h5>
            <button className="bg-blue-600 mt-4  rounded-xl p-3">Select Best Chef Now</button>
          </div>
        </div>
        <div className="max-w-sm  dark:bg-gray-800">
          <img
            className="rounded-t-lg"
            src="https://img.freepik.com/free-photo/side-view-baked-chicken-with-cucumber-lemon-seasoning-bread-table_141793-4757.jpg?w=740&t=st=1683144208~exp=1683144808~hmac=c8845329ea8649c84a89d5ff5c386fa92860f4e1143caeb302fa00b85d5e9c48"
            alt=""
          />
          <div className="">
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-300 dark:text-white">
              <p className="mt-3">Always Fresh</p>
              <p className="mt-2 text-sm">
              When ingredients are fresh, they are at their peak flavor and nutritional value, and this translates into better-tasting dishes for your customers,so thats why our chef focus on to provide fresh food with fresh ingredients.
              </p>
            </h5>
            <button className="bg-blue-600 mt-4 rounded-xl p-3">Select Best Chef Now</button>
          </div>
        </div>
        <div className="max-w-sm  dark:bg-gray-800">
          <img
            className=" h-[243px] rounded-t-lg"
            src="https://img.freepik.com/free-photo/high-angle-tasty-pakistani-dish_23-2148825123.jpg?w=826&t=st=1683144648~exp=1683145248~hmac=27cd4663499ceaf182051182d84f065af46d5562994fa4a07608ff5baa6a371c"
            alt=""
          />
          <div className="">
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-300 dark:text-white">
              <p className="mt-3">Variety of Dishes</p>
              <p className="mt-2 text-sm">
              In addition to satisfying customers' diverse tastes and preferences,Our chef offers variety of Bangladeshi delicious food,so you can order here many foods from our famous chef.
              </p>
            </h5>
            <button className="bg-blue-600 mb-12 mt-4 rounded-xl p-3">Select Best Chef Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyToChooseUs;
