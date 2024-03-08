import { useRouteError, isRouteErrorResponse, Link } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    let message: string;

    if (isRouteErrorResponse(error)) {
        // error is type `ErrorResponse`
        message = error.statusText || error.data;
    } else if (error instanceof Error) {
        message = error.message;
    } else if (typeof error === 'string') {
        message = error;
    } else {
        console.error(error);
        message = 'Unknown error';
    }

    return (
        <div id="error-page" className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-2xl font-bold mb-5">Oops!</h1>
            <p className="text-lg mb-3">Sorry, an unexpected error has occurred.</p>
            <p className="mb-4">
                <i className="font-italic">{message}</i>
            </p>

            <Link to='/'>
                <button
                    className="block rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring"
                    type="button"
                >
                    Go Back Home
                </button>
            </Link>
        </div>
    );
}