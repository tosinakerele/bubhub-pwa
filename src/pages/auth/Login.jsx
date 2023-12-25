import SchoolLogo from "../../assets/logo.png";
const Login = () => {
  return (
    <div className="p-4 bg-red-40 h-screen bg-gray-200 flex flex-col items-center justify-center">
      <div className="logo w-[100px] h-[100px]">
        <img
          src={SchoolLogo}
          alt=""
          className="bg-white rounded-full p-2 w-full h-full"
        />
      </div>
      <form className="space-y-4 bg-white rounded-xl p-4 mt-8">
        <div className="">
          <label htmlFor="" className="font-medium block text-lg leading-10">
            User ID
          </label>
          <input
            type="text"
            className="w-full h-14 border rounded-sm p-2"
            placeholder="User ID"
          />
        </div>
        <div className="">
          <label htmlFor="" className="w-full font-medium text-lg leading-10">
            Password
          </label>
          <input
            type="password"
            className="w-full h-14 border rounded-sm p-2"
            placeholder="Password"
          />
        </div>
        <div className="">
          <button
            type="submit"
            className="w-full text-center bg-primary focus:bg-darkPrimary hover:bg-darkPrimary text-white font-medium text-lg p-2 rounded"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
