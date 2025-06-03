import { CiCamera } from "react-icons/ci";
import { useNavigate } from "react-router-dom"; 

function Settings() {
  const navigate = useNavigate(); 
  const handleLogout = () => {
    
    console.log("Logging out...");
    navigate("/"); 
  };

  return (
    <div className="items-center justify-center flex flex-col min-h-screen bg-gray-50 p-4">
      <div className="bg-white rounded-lg shadow-sm w-full max-w-md mx-auto mt-8 pb-6"> 
        {/* Header  */}
        <div className="px-6 py-4 border-b border-gray-200">
          <h1 className="text-xl font-bold text-gray-800">Account Settings</h1>
        </div>

        {/* Profile */}
        <div className="p-6">
          <div className="flex items-center space-x-4 mb-6">
            {/* pfp with Camera Icon */}
            <div className="relative w-20 h-20">
              <img 
                src="/pfp.png" 
                alt="Profile"
                className="w-full h-full rounded-full object-cover border border-gray-200"
              />
              <div className="absolute bottom-0 right-0 bg-purple-600 rounded-full p-1 text-white text-base flex items-center justify-center border-2 border-white cursor-pointer">
                <CiCamera className="w-4 h-4" /> 
              </div>
            </div>
            
            {/* Name / Email */}
            <div className="flex flex-col">
              <h2 className="text-lg font-semibold text-gray-800">Marry Doe</h2>
              <p className="text-gray-600 text-sm">Marry@Gmail.Com</p>
            </div>
          </div>
          
          {/* Description  */}
          <p className="text-gray-700 text-sm leading-relaxed">
            Lorem Ipsum Dolor Sit Amet, Consectetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
          </p>
        </div>

        {/* line */}
        <div className="border-t border-dashed border-gray-300 mx-6 my-4"></div>
        
        {/* Logout Button */}
        <div className="px-6 mt-4"> 
          <button 
            onClick={handleLogout}
            className="w-full bg-purple-600 text-white rounded-lg h-10 font-semibold text-base 
                       focus:outline-none focus:ring-2 focus:ring-purple-700 focus:ring-opacity-50 
                       hover:bg-purple-700 transition-colors duration-200"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Settings;