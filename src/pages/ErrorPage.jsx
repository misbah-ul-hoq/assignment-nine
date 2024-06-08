const ErrorElement = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <div className="text-center">
        <h1 className="text-9xl font-extrabold">404</h1>
        <p className="text-2xl mt-4">Oops! Page Not Found</p>
        <p className="text-lg mt-2">
          The page you &apos; re looking for doesn &apos; t exist.
        </p>
        <div className="mt-8">
          <a
            href="/"
            className="btn btn-primary text-xl bg-white text-blue-600 hover:bg-gray-200 hover:text-blue-800 border-none px-6 py-3 rounded-full"
          >
            Go Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default ErrorElement;
