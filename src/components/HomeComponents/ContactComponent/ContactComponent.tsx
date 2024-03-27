import React from "react";
import { Common } from "../../components";

const ContactComponent: React.FC = () => {
    return (
        <>
            <ContactPhoneComponent />
            <ContactWebComponent />
        </>
    );
}

const ContactPhoneComponent: React.FC = () => {
    return (
        <div className="tablet:hidden font-display flex h-fit w-screen items-center justify-center">
            <div className="flex h-full w-full items-center justify-center">
                <div className="desktop:min-w-[78%] desktop:min-h-[60%] laptop:min-w-[75%] laptop:ml-0 tablet:w-[90%] tablet:h-[60%] tablet:ml-20  flex min-h-fit flex-col items-center justify-center">
                    <div className=" flex w-[90%] flex-row items-center justify-center">
                        <div className="flex w-full flex-col gap-5 py-10">
                            <div>
                                <h1 className="text-center font-display text-3xl font-bold text-indigo-600">
                                    Contact
                                </h1>
                                <p className="mt-10 px-5">
                                    I am always open to new opportunities and collaborations. You can reach me at the following email.
                                </p>
                            </div>
                            <div className=" flex w-full flex-row items-start justify-center">
                                <div className="flex w-full flex-col gap-5 py-10">
                                    <div className="flex w-full flex-col items-center">
                                        <div className="flex w-full flex-col items-center justify-center gap-5">
                                            <div className="flex w-full flex-col items-center justify-center gap-5">
                                                <div className=" rounded-full shadow-md bg-white p-5 shadow-indigo-600/45">
                                                    <Common.Icons.Map size={32} stroke={2} className=" text-indigo-600" color="currentColor" />
                                                </div>
                                                <span className="text-sm text-gray-600 cursor-default">
                                                    Jalandhar, Punjab, India
                                                </span>
                                            </div>
                                            <div className="flex w-full flex-col items-center justify-center gap-5">
                                                <div className=" rounded-full shadow-md bg-white p-5 shadow-indigo-600/45" onTouchEnd={() => {
                                                    window.open("mailto:contact.logickahanhai@gmail.com");
                                                }}>
                                                    <Common.Icons.Mail size={32} stroke={2} className=" text-indigo-600" color="currentColor" />
                                                </div>
                                                <span className="text-center font-bold font-display">
                                                    Mail
                                                </span>
                                                <span className="text-sm text-gray-600 cursor-default" onTouchEnd={() => {
                                                    window.open("mailto:contact.logickahanhai@gmail.com");
                                                }}>
                                                    contact.logickahanhai@gmail.com
                                                </span>
                                            </div>
                                        </div>
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

const ContactWebComponent: React.FC = () => {
    return (
        <div className="tablet:flex font-display hidden h-[50vh] w-screen items-start justify-center">
            <div className="flex h-full w-full items-center justify-center">
                <div className="desktop:min-w-[78%] desktop:min-h-[60%] laptop:min-w-[75%] laptop:ml-0 tablet:w-[90%] tablet:h-[60%] tablet:ml-20  flex min-h-fit flex-col items-center justify-center">
                    <h1 className="text-3xl text-center font-bold text-indigo-600">Contact</h1>
                    <p className="mt-5">
                        I am always open to new opportunities and collaborations. You can reach me at the following email.
                    </p>
                    <div className=" flex w-[90%] flex-row items-start justify-center">
                        <div className="flex w-full flex-col gap-5 py-10">
                            <div className="flex w-full flex-col items-center">
                                <div className="flex w-full flex-row items-center justify-around gap-5">
                                    <div className="flex w-full flex-row justify-center items-center gap-5">
                                        <div className=" rounded-full shadow-md bg-white p-5 shadow-indigo-600/45">
                                            <Common.Icons.Map size={32} stroke={2} className=" text-indigo-600" color="currentColor" />
                                        </div>
                                        <span className="text-lg text-gray-600 cursor-default hover:text-indigo-600 transition-all duration-300">
                                            Jalandhar, Punjab, India
                                        </span>
                                    </div>
                                    <a className="flex w-full flex-row items-center justify-center gap-5" href="mailto:contact.logickahanhai@gmail.com">
                                        <div className=" rounded-full shadow-md bg-white p-5 shadow-indigo-600/45">
                                            <Common.Icons.Mail size={32} stroke={2} className=" text-indigo-600" color="currentColor" />
                                        </div>
                                        <span className="text-lg text-gray-600 cursor-pointer hover:text-indigo-600 transition-all duration-300">
                                            contact.logickahanhai@gmail.com
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactComponent;