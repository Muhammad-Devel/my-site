import React from "react";

function Services() {
  return (
    <div className="bg-white py-12">
      <div className="container mx-auto max-w-6xl px-4">
        <h2 className="text-3xl text-gray-800 font-bold text-center mb-10">
          My Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center shadow-md p-6 rounded-lg hover:shadow-lg transition">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2721/2721290.png"
              alt="Web Page"
              className="w-20 h-20 object-contain mb-4"
            />
            <p className="text-lg font-medium">Making Web-Page</p>
          </div>

          <div className="flex flex-col items-center text-center shadow-md p-6 rounded-lg hover:shadow-lg transition">
            <img
              src="https://cdn-icons-png.flaticon.com/512/6390/6390403.png"
              alt="RESTful API"
              className="w-20 h-20 object-contain mb-4"
            />
            <p className="text-lg font-medium">Create the RESTful API</p>
          </div>

          <div className="flex flex-col items-center text-center shadow-md p-6 rounded-lg hover:shadow-lg transition">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="Web App"
              className="w-20 h-20 object-contain mb-4"
            />
            <p className="text-lg font-medium">Create a Web-App</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
