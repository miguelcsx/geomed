import { useRouteError } from "react-router-dom";
import { handleGoBack } from "../lib/utils";

export default function ErrorPage() {
    const error = useRouteError();

    return (
        <div id="error-page" className="min-h-screen flex flex-col items-center justify-center bg-white">
            <h1 className="text-4xl text-gray-700">Oops!</h1>
            <p className="text-xl mt-4 text-gray-600">Sorry, an unexpected error has occurred.</p>
            <p className="italic mt-2 text-gray-600">{error.statusText || error.message}</p>
            <button onClick={handleGoBack} className="mt-4 bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded">
                Go Back
            </button>
        </div>
    );
};
