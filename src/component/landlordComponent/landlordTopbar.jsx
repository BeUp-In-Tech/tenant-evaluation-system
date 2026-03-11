import { useState } from 'react';



export default function LandlordTopbar() {

    const [searchQuery, setSearchQuery] = useState('');



    const handleSearch = (e) => {

        setSearchQuery(e.target.value);

        console.log('Landlord searching for:', e.target.value);

    };



    return (

        <header className="fixed top-0 left-52 right-0 h-14 bg-white border-b border-gray-100 flex items-center px-6 gap-4 z-20">

            <div className="flex-1 relative">

                <svg className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" width="15" height="15" fill="none" viewBox="0 0 24 24">

                    <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="1.8" />

                    <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />

                </svg>

                <input

                    className="w-full max-w-md pl-9 pr-4 py-2 text-[13px] bg-gray-50 border border-gray-200 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:border-blue-300 focus:bg-white transition-all"

                    placeholder="Search reports, tenants, logs..."

                />

            </div>

            <div className="flex items-center gap-3 ml-auto">

                {/* <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-lg px-3 py-1.5">

                    <span className="text-[11px] text-gray-500 font-medium">ROLE VIEW:</span>

                    <span className="text-[13px] font-semibold text-gray-800">Landlord</span>

                    <svg width="14" height="14" fill="none" viewBox="0 0 24 24">

                        <path d="M6 9l6 6 6-6" stroke="#6b7280" strokeWidth="1.8" strokeLinecap="round" />

                    </svg>

                </div> */}

                <button className="relative w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-all">

                    <svg width="18" height="18" fill="none" viewBox="0 0 24 24">

                        <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" stroke="#6b7280" strokeWidth="1.8" />

                        <path d="M13.73 21a2 2 0 01-3.46 0" stroke="#6b7280" strokeWidth="1.8" strokeLinecap="round" />

                    </svg>

                    <span className="absolute top-0.5 right-0.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />

                </button>

                <div className="flex items-center gap-2">

                    <div className="text-right">

                        <div className="text-[13px] font-semibold text-gray-800 leading-tight">Alex Johnson</div>

                        <div className="text-[11px] text-gray-400">Landlord</div>

                    </div>

                    <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-[12px] font-bold">AJ</div>

                </div>

            </div>

        </header>

    );

}