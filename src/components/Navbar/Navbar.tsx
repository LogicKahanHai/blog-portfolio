export default function Navbar() {
    return (
        <>

            {/* phone
            <header className="sticky top-0 left-0 right-0 z-50 tablet:hidden bigPhone:flex">
                <div className="flex justify-between items-center w-full h-16 bg-white shadow-md px-5">
                    <div className="text-xl font-bold text-gray-800 cursor-pointer">Logic Kahan Hai?</div>
                    <svg className="h-6 w-6 cursor-pointer" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
            </header> */}


            {/* bigPhone */}
            <header className="sticky top-0 left-0 right-0 z-50 tablet:hidden phone:flex">
                <div className="flex justify-between items-center w-full h-16 bg-white shadow-md px-5">
                    <div className="text-xl font-bold text-gray-800 cursor-pointer">Logic Kahan Hai?</div>
                    <svg className="h-6 w-6 cursor-pointer" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
            </header>


            {/* desktop */}
            <header className="sticky top-0 left-0 right-0 z-50 hidden tablet:flex">
                <div className="flex justify-between items-center w-full h-20 bg-white shadow-md px-20">
                    {/* <div className="flex items-center gap-5"> */}
                    <div className="text-2xl font-bold text-gray-800 cursor-pointer">Logic Kahan Hai?</div>
                    <div className="flex items-center gap-5">
                        <a href="#home" className="text-lg font-bold  text-gray-600 hover:text-indigo-600 transition-all duration-300 ease-in-out">Home</a>
                        <a href="#about" className="text-lg font-bold  text-gray-600 hover:text-indigo-600 transition-all duration-300 ease-in-out">About</a>
                        <a href="#projects" className="text-lg font-bold  text-gray-600 hover:text-indigo-600 transition-all duration-300 ease-in-out">Projects</a>
                        <a href="#blogs" className="text-lg font-bold  text-gray-600 hover:text-indigo-600 transition-all duration-300 ease-in-out">Blogs</a>
                        <a href="#contact" className="text-lg font-bold  text-gray-600 hover:text-indigo-600 transition-all duration-300 ease-in-out">Contact</a>
                        {/* </div> */}
                    </div>
                    {/* <div className="flex items-center gap-5">
                <a href="" className="text-lg font-medium text-gray-600 hover:text-indigo-600 transition duration-300 ease-in-out">Resume</a>
                <a href="" className="text-lg font-medium text-gray-600 hover:text-indigo-600 transition duration-300 ease-in-out">Github</a>
                <a href="" className="text-lg font-medium text-gray-600 hover:text-indigo-600 transition duration-300 ease-in-out">LinkedIn</a>
            </div> */}
                </div>
            </header>
        </>
    )
}