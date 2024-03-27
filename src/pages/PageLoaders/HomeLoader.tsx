// import { HomeComponents } from "../../components/components";

const HomeLoader: React.FC = () => {
  return (
    <div className="mt-10 flex h-full w-full items-start justify-center divide-x">
      <div className="w-1/4 flex-1 px-10">
        <h1 className=" mb-5 h-5 w-20 animate-pulse rounded bg-gray-600 text-3xl font-bold"></h1>
        <p className="mb-2 h-4 animate-pulse rounded bg-gray-300"></p>
        <p className="mb-2 h-4 animate-pulse rounded bg-gray-300"></p>
        <p className="mb-10 h-4 animate-pulse rounded bg-gray-300"></p>
        <h1 className="mb-5 h-5 w-20 animate-pulse rounded bg-gray-600 text-3xl font-bold"></h1>
        <p className="mb-2 h-4 animate-pulse rounded bg-gray-300"></p>
        <p className="mb-2 h-4 animate-pulse rounded bg-gray-300"></p>
        <p className="mb-2 h-4 animate-pulse rounded bg-gray-300"></p>
      </div>

      <div className="flex-3 w-3/4 px-10">
        <h1 className=" mb-5 h-5 w-20 animate-pulse rounded bg-gray-600 text-3xl font-bold"></h1>
        <p className="mb-2 h-4 animate-pulse rounded bg-gray-300"></p>
        <p className="mb-2 h-4 animate-pulse rounded bg-gray-300"></p>
        <p className="mb-12 h-4 animate-pulse rounded bg-gray-300"></p>
        <h1 className=" mb-5 h-5 w-20 animate-pulse rounded bg-gray-600 text-3xl font-bold"></h1>
        <div className="mb-14 flex flex-wrap gap-2">
          {/* <span className="text-sm font-medium bg-gray-100 rounded-lg px-2 py-1.5">Loading...</span> */}
          <p className="h-7 w-16 animate-pulse rounded-lg bg-gray-100 px-2 py-1.5 text-sm font-medium"></p>
          <p className="h-7 w-16 animate-pulse rounded-lg bg-gray-100 px-2 py-1.5 text-sm font-medium"></p>
          <p className="h-7 w-16 animate-pulse rounded-lg bg-gray-100 px-2 py-1.5 text-sm font-medium"></p>
          <p className="h-7 w-16 animate-pulse rounded-lg bg-gray-100 px-2 py-1.5 text-sm font-medium"></p>
          <p className="h-7 w-16 animate-pulse rounded-lg bg-gray-100 px-2 py-1.5 text-sm font-medium"></p>
        </div>
        <h1 className=" mb-5 h-5 w-20 animate-pulse rounded bg-gray-600 text-3xl font-bold"></h1>
        <div className="mb-10 flex flex-col gap-5">
          {/* <HomeComponents.BlogTeaserLoader /> */}
        </div>
      </div>
    </div>
  );
};

export default HomeLoader;
