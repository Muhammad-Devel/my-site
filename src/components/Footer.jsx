import React from "react";

function Footer() {
  return (
    <div className="bg-gray-100 text-gray-500 p-6 mt-8">
      <div className="container mx-auto text-center text-md font-semibold">
        <p className="text-sm">
          © {new Date().getFullYear()} Mukhammad J.A. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
