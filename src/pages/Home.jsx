import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">


            <div className="bg-white p-8 rounded-lg shadow-sm w-full max-w-md">
                <div className="max-w-[355px] w-full">
                    {/* Heading  */}
                    <h1 className="text-3xl font-semibold mb-2 text-left">Welcome to PopX</h1>
                    {/* paragraph */}
                    <p className="text-[#1D2226] opacity-60 text-xl mb-6 text-left">
                        Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit,
                    </p>

                    {/* button div  */}
                    <div className="flex flex-col gap-3">
                        {/* create account */}
                        <Link to="/signup">
                            <div className="w-full h-[46px] flex items-center justify-center bg-[#6e25ffd9] hover:bg-[#6e25fffb] transition-all duration-200 text-white text-[16px] font-medium rounded-[6px]">
                                Create Account
                            </div>
                        </Link>

                        {/* login  */}
                        <Link to="/login">
                            <div className="w-full h-[46px] flex items-center justify-center bg-[#d9d9d98c] hover:bg-[#D9D9D9] transition-all duration-200 text-[#1D2226] text-[16px] font-medium rounded-[6px]">
                                Already Registered? Login
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
