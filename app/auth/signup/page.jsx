export default function Signup() {


    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full font-outfit font-bold">
      <div className="hidden sm:block">
        <img className="w-full h-screen object-cover bg-cover bg-no-repeat" src="/assests/bgimage.png" alt="" />
      </div>

      <div className="bg-black flex flex-col">
        <h1 className="text-3xl font-semibold text-center text-white mt-8">
          BLACKDEFYNITION
        </h1>

        <form className=" w-full mx-auto rounded-1g p-4 px-8">
          <div className="mb-2">
            <p className="text-white">Create your Account!</p>
            <label
              htmlFor="fname"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              
            </label>
            <input
              type="text"
              id="fname"
              className="shadow appearance-none border rounded-full w-full py-2 mt-5 px-6  text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="First name"
              required
            />{" "}
          </div>
          <div className="mb-2">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="lname"
            ></label>
            <input
              type="text"
              id="lname"
              className="shadow appearance-none border rounded-full w-full py-2 mt-5 px-6 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Last name"
              required
            />{" "}
          </div>
          <div className="mb-2">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            ></label>
            <input
              className="shadow appearance-none border rounded-full w-full py-2 mt-5 px-6 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-800"
            ></label>
            <input
              type="password"
              placeholder="Password"
              className="block w-full px-6 py-2 mt-5 text-black bg-white border rounded-full focus:border-black focus:ring-black focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-800"
            ></label>
            <input
              type="password"
              placeholder="Confirm Password"
              className="block w-full px-6 py-2 mt-5 text-black bg-white border rounded-full focus:border-black focus:ring-black focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <h1 className="text-[#808080]">Gender</h1>

          <div className="flex">
            <div className="flex items-center accent-black mr-4 mt-1">
              <input
                id="inline-radio"
                type="radio"
                value=""
                name="inline-radio-group"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="inline-radio"
                className="ml-2 text-sm font-medium text-white dark:text-white"
              >
                Male
              </label>
            </div>
            <div className="flex items-center accent-black mr-6 mt-1">
              <input
                id="inline-2-radio"
                type="radio"
                value=""
                name="inline-radio-group"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="inline-2-radio"
                className="ml-2 text-sm font-medium text-white dark:text-white"
              >
                Female
              </label>
            </div>
          </div>
          <div className="flex items-start mb-6 mt-5">
            <div className="flex items-center accent-black h-6">
              <input
                id="remember"
                type="checkbox"
                value=""
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                required
              />
            </div>
            <label
              htmlFor="remember"
              className="ml-3 text-sm  text-white dark:text-gray-300"
            >
              By creating your account, you agree with our{" "}
              <a
                href="https://transparency.fb.com/en-gb/policies/community-standards/privacy-violations//"
                className="text-[#808080] hover:underline dark:text-grey"
              >
                terms of use & privacy policy
              </a>
            </label>
          </div>
          <div className="text-center lg:text-">
            <a
             href="logIn"
              type="button"
              className="rounded-full mt-4  px-6 pb-1 pt-2 text-xl  text-black  bg-white"
            >
              Sign in
            </a>
          </div>
        </form>

        <p className="text-sm  text-center text-white ">
          {" "}
          Already have an account?{" "}
          <a
           
            className="font:medium  text-[#808080] hover:underline"
          >
            Login
          </a>
        </p>
      </div>
    </div>
    );
  }
  