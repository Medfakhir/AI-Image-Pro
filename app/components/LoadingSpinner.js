// components/LoadingSpinner.js
export default function LoadingSpinner() {
    return (
      <div className="fixed inset-0 bg-gray-100 bg-opacity-75 flex items-center justify-center z-50">
        <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32"></div>
      </div>
    );
  }
  