import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log("Login Data:", data);
    navigate("/settings");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      <div className="bg-white p-8 rounded-lg shadow-sm w-full max-w-md">
        <h2 className="text-[28px] font-bold text-gray-800 ml-8 ">
          Signin to your <br /> PopX account
        </h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4 p-8  max-w-[360px] w-full"
        >

          <p className="text-gray-500 text-[18px] mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          </p>

          {/* Email */}
          <div className="relative mb-2">
            <label
              htmlFor="email"
              className="absolute -top-2 left-3 bg-white px-1 text-purple-600 text-xs font-semibold"
            >
              Email Address
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter email address"
              className="w-full border border-gray-300 rounded-lg h-10 px-3 pt-2 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-purple-600 focus:border-transparent"
              {...register("email", {
                required: "Email is required",
              })}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* Password */}
          <div className="relative mb-4">
            <label
              htmlFor="password"
              className="absolute -top-2 left-3 bg-white px-1 text-purple-600 text-xs font-semibold"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter password"
              className="w-full border border-gray-300 rounded-lg h-10 px-3 pt-2 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-purple-600 focus:border-transparent"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Minimum 6 characters",
                },
              })}
            />
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">
                {errors.password.message}
              </p>
            )}
          </div>


          <button
            type="submit"
            className="bg-purple-600 text-white rounded-lg h-10 font-semibold text-base   hover:bg-[#6e25ffdc] cursor-pointer transition-all duration-200"
          >
            Login
          </button>


        </form>
      </div>
    </div>
  );
}

export default Login;