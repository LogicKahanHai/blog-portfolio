import './Navbar.css'
function NavBar() {
    return (
        <header className="bg-gray-50 navbar">
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <div className="text-center sm:text-left">
                        <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">Hey! I am Rishi Bhalla.</h1>

                        <p className="mt-1.5 text-sm text-gray-500">A Passionate Full Stack Web and App Developer! 🎉</p>
                        {/* <p className="mt-1.5 text-sm text-gray-500">You can read about some of my interests below...</p> */}
                    </div>

                    <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
                        <button
                            className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-gray-200 bg-white px-5 py-3 text-gray-500 transition hover:text-gray-700 focus:outline-none focus:ring"
                            type="button"
                        >
                            <span className="text-sm font-medium"> Download my Resume </span>

                            <svg className="svg-icon" fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2">
                                <path strokeLinecap='round' strokeLinejoin='round' fill="none" d="M15.608,6.262h-2.338v0.935h2.338c0.516,0,0.934,0.418,0.934,0.935v8.879c0,0.517-0.418,0.935-0.934,0.935H4.392c-0.516,0-0.935-0.418-0.935-0.935V8.131c0-0.516,0.419-0.935,0.935-0.935h2.336V6.262H4.392c-1.032,0-1.869,0.837-1.869,1.869v8.879c0,1.031,0.837,1.869,1.869,1.869h11.216c1.031,0,1.869-0.838,1.869-1.869V8.131C17.478,7.099,16.64,6.262,15.608,6.262z M9.513,11.973c0.017,0.082,0.047,0.162,0.109,0.226c0.104,0.106,0.243,0.143,0.378,0.126c0.135,0.017,0.274-0.02,0.377-0.126c0.064-0.065,0.097-0.147,0.115-0.231l1.708-1.751c0.178-0.183,0.178-0.479,0-0.662c-0.178-0.182-0.467-0.182-0.645,0l-1.101,1.129V1.588c0-0.258-0.204-0.467-0.456-0.467c-0.252,0-0.456,0.209-0.456,0.467v9.094L8.443,9.553c-0.178-0.182-0.467-0.182-0.645,0c-0.178,0.184-0.178,0.479,0,0.662L9.513,11.973z"></path>
                            </svg>
                        </button>

                        <button
                            className="block rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring"
                            type="button"
                        >
                            Contact Me
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default NavBar;