import Link from "next/link";
export default function Login() {

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2  h-screen w-full font-bold">
      <div className="hidden sm:block">
        <img className="w-full h-screen object-cover bg-cover bg-no-repeat" src="/assests/bgimage.png" alt="" />
      </div>

      <div className="bg-black flex flex-col">
        <h1 className="text-3xl text-outfit font-outfit font-semibold text-center text-white mt-10">
          BLACKDEFYNITION
        </h1>

        <form className="w-full mx-auto rounded-1g  p-8 px-8">
          <div className="mb-2 ">
            <label
              className="block text-gray-700 text-sm font- mb-2"
              htmlFor="email"
            ></label>
            <input
              className="shadow appearance-none border rounded-full w-full py-2 mt-5 px-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
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
              className="block w-full px-10 py-2 mt-5 text-black bg-white border rounded-full focus:border-black focus:ring-black focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="flex justify-between text-white h-10 accent-black py-2 my-5">
            <p className="flex items-center mt-10">
              <input className="mr-3" type="checkbox" /> Remember Me
            </p>
            <Link href={'/auth/forGot'} >
              <div

                className="font:medium text-[#808080] hover:underline"
              >
                Forgot password?
              </div>
            </Link>

          </div>

          <div className="text-center mt-20 lg:text-">


            <a
              href="/pages/chat"
              type="bt"
              className="rounded-full   px-6 pb-2 pt-2 text-xl  text-black bg-white"
            >
              Log in
            </a>

          </div>

          <div className="flex-col">
            <h2 className="text-medium mt-4 font-semibold text-center text-white mt-10">
              OR
            </h2>
            <h3 className="text-medium mt-5 font-semibold text-center text-white">
              SIGNUP WITH
            </h3>
          </div>
          
          <div className="flex justify-center mt-5 space-x-4">
            <img className="w-10 h-10" src="/assests/facebook.png" alt="" width={0} height={0} />
            <img className="w-10 h-10" src="/assests/linkedin.png" alt="" width={0} height={0} />
            <img className="w-10 h-10" src="/assests/goggle.png" alt="" width={0} height={0} />
          </div>
        </form>
        <div className="mb-4">
        <p className="text-sm text-center  text-white  ">
          {" "}
          Don't have an account?{" "}
          <a href="/auth/signup" className="font:medium text-[#808080]  hover:underline">
            Sign up
          </a>
        </p>
        </div>
       
      </div>
    </div>
  );
}