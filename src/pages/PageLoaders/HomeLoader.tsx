import { HomeComponents } from "../../components/components";

const HomeLoader: React.FC = () => {
    return (
        <div className="w-full flex justify-center h-full mt-10 divide-x items-start">
            <div className="flex-1 w-1/4 px-10">
                <h1 className=" h-5 w-20 text-3xl bg-gray-600 rounded animate-pulse font-bold mb-5"></h1>
                <p className="h-4 bg-gray-300 rounded mb-2 animate-pulse"></p>
                <p className="h-4 bg-gray-300 rounded mb-2 animate-pulse"></p>
                <p className="h-4 bg-gray-300 rounded mb-10 animate-pulse"></p>
                <h1 className="h-5 w-20 text-3xl bg-gray-600 rounded animate-pulse font-bold mb-5"></h1>
                <p className="h-4 bg-gray-300 rounded mb-2 animate-pulse"></p>
                <p className="h-4 bg-gray-300 rounded mb-2 animate-pulse"></p>
                <p className="h-4 bg-gray-300 rounded mb-2 animate-pulse"></p>
            </div>

            <div className="w-3/4 flex-3 px-10">
                <h1 className=" h-5 w-20 text-3xl bg-gray-600 rounded animate-pulse font-bold mb-5"></h1>
                <p className="h-4 bg-gray-300 rounded mb-2 animate-pulse"></p>
                <p className="h-4 bg-gray-300 rounded mb-2 animate-pulse"></p>
                <p className="h-4 bg-gray-300 rounded mb-12 animate-pulse"></p>
                <h1 className=" h-5 w-20 text-3xl bg-gray-600 rounded animate-pulse font-bold mb-5"></h1>
                <div className="flex flex-wrap gap-2 mb-14">
                    {/* <span className="text-sm font-medium bg-gray-100 rounded-lg px-2 py-1.5">Loading...</span> */}
                    <p className="text-sm font-medium bg-gray-100 rounded-lg px-2 py-1.5 w-16 h-7 animate-pulse"></p>
                    <p className="text-sm font-medium bg-gray-100 rounded-lg px-2 py-1.5 w-16 h-7 animate-pulse"></p>
                    <p className="text-sm font-medium bg-gray-100 rounded-lg px-2 py-1.5 w-16 h-7 animate-pulse"></p>
                    <p className="text-sm font-medium bg-gray-100 rounded-lg px-2 py-1.5 w-16 h-7 animate-pulse"></p>
                    <p className="text-sm font-medium bg-gray-100 rounded-lg px-2 py-1.5 w-16 h-7 animate-pulse"></p>
                </div>
                <h1 className=" h-5 w-20 text-3xl bg-gray-600 rounded animate-pulse font-bold mb-5"></h1>
                <div className="flex flex-col gap-5 mb-10">
                    <HomeComponents.BlogTeaserLoader />
                </div>
            </div>
        </div>
    );
};

export default HomeLoader;