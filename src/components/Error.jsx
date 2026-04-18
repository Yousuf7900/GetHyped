import { Link } from "react-router";

const Error = () => {
    return (
        <div className="min-h-screen bg-linear-to-br from-base-100 to-base-200 flex items-center justify-center px-6">
            <div className="text-center max-w-2xl">
                <div className="text-8xl md:text-9xl font-black text-error drop-shadow-sm">
                    404
                </div>

                <h1 className="mt-4 text-3xl md:text-5xl font-bold text-base-content">
                    Something went wrong
                </h1>

                <p className="mt-4 text-base md:text-lg text-base-content/70 leading-relaxed">
                    Sorry, we could not find the page you were looking for.
                    It may have been moved, deleted, or never existed.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        to="/"
                        className="btn btn-primary px-8"
                    >
                        Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Error;