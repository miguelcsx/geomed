// src/components/Banner.js

const Banner = () => {
    return (
        <div className="fixed top-0 left-0 w-full h-full bg-slate-700 text-white p-4 text-center flex flex-col items-center justify-center z-50">
            <p className="mb-6 text-lg">Rotate your device to landscape orientation</p>
            <div className="flex">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-phone w-10 h-10 mr-2" viewBox="-3 0 16 16">
                    <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z" />
                    <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-phone-landscape-fill w-10 h-10" viewBox="8 0 16 10">
                    <path d="M2 12.5a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H2zm11-6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                </svg>
            </div>
        </div>
    );
}

export default Banner;