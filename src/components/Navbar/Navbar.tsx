import { Link } from 'react-router-dom';
import './Navbar.css'
function NavBar() {
    return (
        <header className="bg-gray-50 sticky z-50">
            <div className="mx-auto max-w-screen-xl px-4 py-8 tablet:px-6 tablet:py-12 laptop:px-8">
                <div className="flex phone:max-laptop:flex-col phone:max-laptop:items-center phone:max-laptop:justify-center laptop:flex-row laptop:justify-around">
                    <div className="text-center tablet:text-left">
                        <h1 className="text-2xl font-bold text-gray-900 tablet:text-3xl">Hey! I am Rishi Bhalla.</h1>

                        <p className="mt-1.5 text-sm text-gray-500">A Passionate Full Stack Web and App Developer! 🎉</p>
                        {/* <p className="mt-1.5 text-sm text-gray-500">You can read about some of my interests below...</p> */}
                    </div>

                    <div className="mt-4 flex flex-col gap-4 tablet:mt-4 tablet:flex-row tablet:items-center">
                        <Link to="/projects">
                            <button
                                className="flex items-center justify-center gap-1.5 rounded-lg border border-gray-200 bg-white px-5 py-3 text-gray-500 transition hover:text-gray-800 hover:border-gray-800 focus:outline-none focus:ring"
                                type="button"
                            >
                                <span className="text-sm font-medium"> View My Project Journeys </span>

                                {/* <svg className="svg-icon" fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2">
                                <path strokeLinecap='round' strokeLinejoin='round' fill="none" d="M12.943 3.463A.748.748 0 0012.25 3h-5.5a.75.75 0 000 1.5h3.69l-7.22 7.22a.75.75 0 101.06 1.06l7.22-7.22v3.69a.75.75 0 001.5 0v-5.5a.747.747 0 00-.057-.287z"></path>
                            </svg> */}
                                <svg
                                    className='svg-icon'
                                    viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#000000" d="M12.943 3.463A.748.748 0 0012.25 3h-5.5a.75.75 0 000 1.5h3.69l-7.22 7.22a.75.75 0 101.06 1.06l7.22-7.22v3.69a.75.75 0 001.5 0v-5.5a.747.747 0 00-.057-.287z"></path></g></svg>
                            </button>
                        </Link>

                        <button
                            className="block rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-800 focus:outline-none focus:ring"
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