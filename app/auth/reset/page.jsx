export default function Forgot() {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full font-outfit font-bold">
        <div className="hidden sm:block">
          <img className="w-full h-screen object-cover bg-cover bg-no-repeat" src="/assests/bgimage.png" alt="" />
        </div>
        <div className="bg-black flex flex-col">
          <div className="bg-black flex flex-col">
            <h1 className="text-2xl font-semibold text-center text-white mt-10">
              RESET YOUR PASSWORD
            </h1>
  
            <form className="w-full mx-auto rounded-1g p-8 px-8">
              <div className="mb-2">
                <label
                  htmlFor="password"
                  className="block text-sm font-semibold text-gray-800"
                ></label>
                <input
                  type="password"
                  placeholder="Enter New Password"
                  className="block w-full px-3 py-2 mt-5 text-black bg-white border rounded-full focus:border-black focus:ring-black focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              <div className="mb-2">
                <label
                  htmlFor="password"
                  className="block text-sm font-semibold text-gray-800"
                ></label>
                <input
                  type="password"
                  placeholder="Confirm New Password"
                  className="block w-full px-3 py-2 mt-5 text-black bg-white border rounded-full focus:border-black focus:ring-black focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
            </form>
  
            <div className="text-center">
              <a
                href="logIn"
                className="rounded-full px-6 pb-1 pt-2 text-xl uppercase mt-10 sm:mt-80 text-black bg-white inline-block"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                Reset
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }