
import { useState } from "react";
import './LandingPage.css';
import { Socials } from "../../Common";

const LandingComponent: React.FC = () => {
    return (
        <>

            {/* phone */}
            <PhoneLanding />



            {/* Desktop */}
            <WebLanding />
        </>
    );
};

const WebLanding: React.FC = () => {
    const [webLoading, setWebLoading] = useState(true);
    const [appLoading, setAppLoading] = useState(true);
    const [webOpacity, setWebOpacity] = useState(false);
    const [appOpacity, setAppOpacity] = useState(false);

    const imageLoaded = (callback: any) => {
        console.log('Image Loaded');
        callback(false);
    }


    function toggleOpacity(opacity: boolean, callback: any) {
        if (opacity) {
            callback(false);
        } else {
            callback(true);
        }
    }
    return (
        <div className="hidden w-screen h-screen justify-center items-start tablet:flex transition-all duration-300 font-display">
            <div className="w-full h-full odd:bg-gray-100 flex justify-center items-start">
                <div className="mt-20 min-h-fit justify-between desktop:w-[75%] desktop:h-[60%] tablet:w-[90%] tablet:h-[60%] tablet:ml-20 flex flex-col">
                    <div className="flex flex-row mb-10 items-start">
                        <div className="flex flex-1 flex-col py-10">
                            <div>
                                <h1 className="text-4xl font-bold mb-10 font-display">Full Stack Web and App Developer 🧑‍💻</h1>
                            </div>
                            <div>
                                <p className="text-lg text-gray-500 mb-7 font-sans">
                                    Hi, I'm Rishi Bhalla (better known as Logic). A passionate Full Stack Web and App Developer based in Punjab, India. 📍
                                </p>
                            </div>
                            <div className="mb-20">
                                <Socials />
                            </div>
                            <div className="w-full flex flex-col gap-5 justify-start">
                                <div className="w-full flex flex-row gap-8 items-center divide-gray-600 divide-x-4 mb-5">
                                    <p className="font-display text-lg font-semibold text-gray-600 text-nowrap">
                                        Web Stack
                                    </p>
                                    <div className="flex flex-col items-center">
                                        <div className="flex flex-nowrap gap-10 px-10">
                                            <div className={`animate-pulse h-10 w-52 bg-gray-300 rounded-lg ${webLoading ? 'flex' : 'hidden'}`}></div>
                                            <div className={`group cursor-pointer relative flex items-center border-gray-400 text-center ${webLoading ? 'hidden' : 'flex'}`}>
                                                <img src="https://skillicons.dev/icons?i=mongo,express,react,nodejs" onMouseOver={() => toggleOpacity(webOpacity, setWebOpacity)} onMouseLeave={() => toggleOpacity(webOpacity, setWebOpacity)} onLoad={() => { imageLoaded(setWebLoading) }} />
                                                <div id="webStackTooltip" className={`${webOpacity ? 'opacity-100' : 'opacity-0'} mb-3 w-fit bg-gray-800 text-white text-center text-xs rounded-lg py-2 absolute flex flex-col items-center z-10 bottom-full px-3 pointer-events-none transition-all duration-300 ease-in-out`}>
                                                    MongoDB, Express, React, Node.js
                                                    <div className="w-3 h-3 rotate-45 -mb-3 bg-gray-800"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full flex flex-row gap-8 items-center divide-gray-600 divide-x-4">
                                    <p className="font-display text-lg font-semibold text-gray-600 text-nowrap">
                                        App Stack
                                    </p>
                                    <div className="flex flex-col items-center">
                                        <div className="flex flex-nowrap gap-10 px-10">
                                            <div className={`animate-pulse h-10 w-52 bg-gray-300 rounded-lg ${appLoading ? 'flex' : 'hidden'}`}></div>
                                            <div className={`group cursor-pointer relative flex items-center border-gray-400 text-center ${appLoading ? 'hidden' : 'flex'}`}>
                                                <img src="https://skillicons.dev/icons?i=kotlin,java,flutter,react" onMouseOver={() => toggleOpacity(appOpacity, setAppOpacity)} onMouseLeave={() => toggleOpacity(appOpacity, setAppOpacity)} onLoad={() => { imageLoaded(setAppLoading) }} />
                                                <div id="appStackTooltip" className={`${appOpacity ? 'opacity-100' : 'opacity-0'} mt-3 w-fit bg-gray-800 text-white text-center text-xs rounded-lg py-2 absolute flex flex-col items-center z-10 top-full px-3 pointer-events-none transition-all duration-300 ease-in-out`}>
                                                    <div className="w-3 h-3 rotate-45 -mt-3 bg-gray-800"></div>
                                                    Kotlin, Java, Flutter, React Native

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center items-center h-full flex-1">
                            <div className="h-[75%] w-[60%] hero-img object-fill">
                                {/* <img src="/public/rishi.jpg" alt="Hero" className="h-3/4 w-3/4 object-fill rounded-full hero-img" /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}



const PhoneLanding: React.FC = () => {
    const [webLoading, setWebLoading] = useState(true);
    const [appLoading, setAppLoading] = useState(true);
    const [webOpacity, setWebOpacity] = useState(false);
    const [appOpacity, setAppOpacity] = useState(false);

    function toggleWeb() {
        setWebOpacity(!webOpacity);
    }

    function toggleApp() {
        setAppOpacity(!appOpacity);
    }

    const imageLoaded = (callback: any) => {
        console.log('Image Loaded');
        callback(false);
    }

    return (
        <div className="tablet:hidden flex flex-col font-display">
            <div className="h-fit pt-10 odd:bg-gray-100">
                <div className="flex justify-center items-center flex-col">
                    <div className="mb-10 h-[60%] w-[75%] max-w-[15rem] bigPhone:max-w-[22rem] bigPhone:min-h-[22rem] min-h-[15rem] hero-img object-fill">
                        {/* <img src="/public/rishi.jpg" alt="Hero" className="h-3/4 w-3/4 object-fill rounded-full hero-img" /> */}
                    </div>
                    <div className=" px-10 bigPhone:px-20 mb-5 bigPhone:mb-10">
                        <div>
                            <h1 className="text-3xl bigPhone:text-4xl text-center font-bold font-sans mb-10">Full Stack Web and App Developer 🧑‍💻</h1>
                        </div>
                        <div>
                            <p className="text-md bigPhone:text-lg text-center text-gray-500 mb-7 font-sans px-5 bigPhone:px-20">
                                Hi, I'm RIshi Bhalla <br /> &lt; aka LogicKahanHai &gt; <br /> A passionate Full Stack Web and App Developer based in Punjab, India. 📍
                            </p>
                        </div>
                    </div>
                    <div className="mb-20">
                        <Socials />
                    </div>
                    <div className="w-full flex flex-col gap-2 items-center divide-gray-600 divide-y-2 mb-5">
                        <p className="font-sans text-lg font-semibold text-gray-600 text-nowrap">
                            Web Stack
                        </p>

                        <div className="flex flex-col items-center">
                            <div className="flex py-8">
                                <div className={`animate-pulse h-10 w-52 bg-gray-300 rounded-lg ${webLoading ? 'flex' : 'hidden'}`}></div>
                                <div className={`group cursor-pointer relative flex items-center border-gray-400 text-center ${webLoading ? 'hidden' : 'flex'}`}>
                                    <img src="https://skillicons.dev/icons?i=mongo,express,react,nodejs" onClick={() => { console.log('I am from web stack'); toggleWeb(); }} onLoad={() => { imageLoaded(setWebLoading) }} />
                                    <div id="webStackTooltip" className={`${webOpacity ? 'opacity-100' : 'opacity-0'} mt-3 w-fit bg-gray-800 text-white text-center text-xs rounded-lg py-2 absolute flex flex-col items-center z-10 top-full px-3 pointer-events-none transition-all duration-300 ease-in-out`}>
                                        <div className="w-3 h-3 rotate-45 -mt-3 bg-gray-800"></div>
                                        MongoDB, Express, React, Node.js
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="w-full flex flex-col gap-2 items-center divide-gray-600 divide-y-2">
                        <p className="font-sans text-lg font-semibold text-gray-600 text-nowrap">
                            App Stack
                        </p>

                        <div className="flex flex-col items-center">
                            <div className="flex py-8">
                                <div className={`animate-pulse h-10 w-52 bg-gray-300 rounded-lg ${appLoading ? 'flex' : 'hidden'}`}></div>
                                <div className={`mb-8 group cursor-pointer relative flex items-center border-gray-400 text-center ${appLoading ? 'hidden' : 'flex'}`}>
                                    <img src="https://skillicons.dev/icons?i=kotlin,java,flutter,react" onClick={() => { console.log('I am from app stack'); toggleApp(); }} onLoad={() => { imageLoaded(setAppLoading) }} />
                                    <div id="appStackTooltip" className={`${appOpacity ? 'opacity-100' : 'opacity-0'} mt-3 w-fit bg-gray-800 text-white text-center text-xs rounded-lg py-2 absolute flex flex-col items-center z-10 top-full px-3 pointer-events-none transition-all duration-300 ease-in-out`}>
                                        <div className="w-3 h-3 rotate-45 -mt-3 bg-gray-800"></div>
                                        Kotlin, Java, Flutter, React Native

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}



export default LandingComponent;