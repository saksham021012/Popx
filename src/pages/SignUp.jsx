import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log('Form data:', data);
    navigate('/settings')
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      <div className="bg-white p-8 rounded-lg shadow-sm w-full max-w-md">
        <h1 className="text-3xl font-bold text-gray-800 mb-10">
          Create your <br/> PopX account
        </h1>
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Full Name */}
          <div className="relative">
            <label 
              htmlFor="fullName"
              className="absolute -top-2 left-3 bg-white px-1 text-purple-600 text-xs font-semibold"
            >
              Full Name<span className="text-red-500">*</span>
            </label>
            <input
              id="fullName"
              type="text"
              placeholder="Marry Doe"
              className="w-full border border-gray-300 rounded-lg h-10 px-3 pt-2 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-purple-600 focus:border-transparent"
              {...register('fullName', { required: 'Full name is required' })}
            />
            {errors.fullName && <span className="text-red-500 text-xs mt-1 block">{errors.fullName.message}</span>}
          </div>

          {/* Phone number */}
          <div className="relative">
            <label 
              htmlFor="phoneNumber"
              className="absolute -top-2 left-3 bg-white px-1 text-purple-600 text-xs font-semibold"
            >
              Phone number<span className="text-red-500">*</span>
            </label>
            <input
              id="phoneNumber"
              type="tel"
              placeholder="Marry Doe"
              className="w-full border border-gray-300 rounded-lg h-10 px-3 pt-2 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-purple-600 focus:border-transparent"
              {...register('phoneNumber', { 
                required: 'Phone number is required',
              })}
            />
            {errors.phoneNumber && <span className="text-red-500 text-xs mt-1 block">{errors.phoneNumber.message}</span>}
          </div>

          {/* Email address */}
          <div className="relative">
            <label 
              htmlFor="email"
              className="absolute -top-2 left-3 bg-white px-1 text-purple-600 text-xs font-semibold"
            >
              Email address<span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              type="email"
              placeholder="Marry Doe"
              className="w-full border border-gray-300 rounded-lg h-10 px-3 pt-2 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-purple-600 focus:border-transparent"
              {...register('email', { 
                required: 'Email is required',
              })}
            />
            {errors.email && <span className="text-red-500 text-xs mt-1 block">{errors.email.message}</span>}
          </div>

          {/* Password */}
          <div className="relative">
            <label 
              htmlFor="password"
              className="absolute -top-2 left-3 bg-white px-1 text-purple-600 text-xs font-semibold"
            >
              Password<span className="text-red-500">*</span>
            </label>
            <input
              id="password"
              type="password"
              placeholder="Marry Doe"
              className="w-full border border-gray-300 rounded-lg h-10 px-3 pt-2 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-purple-600 focus:border-transparent"
              {...register('password', { required: 'Password is required', minLength: { value: 6, message: 'Minimum 6 characters' } })}
            />
            {errors.password && <span className="text-red-500 text-xs mt-1 block">{errors.password.message}</span>}
          </div>

          {/* Company name */}
          <div className="relative">
            <label 
              htmlFor="companyName"
              className="absolute -top-2 left-3 bg-white px-1 text-purple-600 text-xs font-semibold"
            >
              Company name
            </label>
            <input
              id="companyName"
              type="text"
              placeholder="Marry Doe"
              className="w-full border border-gray-300 rounded-lg h-10 px-3 pt-2 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-purple-600 focus:border-transparent"
              {...register('companyName')}
            />
          </div>

          {/* Are you an Agency? */}
          <div className="pt-2">
            <label className="block text-gray-800 text-sm font-medium mb-3">
              Are you an Agency?<span className="text-red-500">*</span>
            </label>
            <div className="flex items-center space-x-6">
              <div className="flex items-center">
                <input
                  type="radio"
                  id="agency-yes"
                  value="yes"
                  className="rounded-full border-2 border-gray-400 w-5 h-5 cursor-pointer"
                  {...register('isAgency', { required: 'Please select an option' })}
                />
                <label htmlFor="agency-yes" className="ml-2 text-gray-700 text-base cursor-pointer">Yes</label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="agency-no"
                  value="no"
                  className="rounded-full border-2 border-gray-400 w-5 h-5 cursor-pointer"
                  {...register('isAgency', { required: 'Please select an option' })}
                />
                <label htmlFor="agency-no" className="ml-2 text-gray-700 text-base cursor-pointer">No</label>
              </div>
            </div>
            {errors.isAgency && <span className="text-red-500 text-xs mt-1 block">{errors.isAgency.message}</span>}
          </div>

          {/* Create Account Button */}
          <button 
            type="submit" 
            className="w-full bg-purple-600 text-white rounded-lg h-10 font-semibold text-base 
                       focus:outline-none focus:ring-2 focus:ring-purple-700 focus:ring-opacity-50 
                       hover:bg-purple-700 transition-colors duration-200 mt-8"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;