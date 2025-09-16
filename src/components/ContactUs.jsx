import React from "react";

const socialMedia = [
  {
    name: "Telegram",
    url: "https://t.me/yourusername",
    icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/telegram.svg",
  },
  {
    name: "Instagram",
    url: "https://instagram.com/yourusername",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/instagram/instagram-original.svg",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/yourprofile",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg",
  },
  {
    name: "GitHub",
    url: "https://github.com/yourusername",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  {
    name: "Email",
    url: "mailto:your@email.com",
    icon: "https://cdn.jsdelivr.net/gh/feathericons/feather/icons/mail.svg",
  },
];

function ContactUs() {
  return (
    <div className="bg-white flex items-center justify-center flex-col p-8 ">
      <div className="container max-w-6xl w-full flex items-center justify-between p-8">
        <div>
          <h1 className="text-3xl text-gray-700 font-bold"> Contact Us</h1>
          <p className="text-gray-600 mt-2">
            Have any questions or want to work together? Feel free to reach out!
          </p>
          <ul className="mt-4 space-y-6">
            {socialMedia.map((social, index) => {
              return (
                <>
                  <li key={index} className="flex items-center space-x-10 ">
                    <img
                      src={social.icon}
                      alt={social.name}
                      srcset=""
                      className="w-8 mr-4"
                    />
                    <a
                      href={social.url}
                      className="text-lg font-semibold text-gray-700 hover:text-blue-500 transition duration-300"
                    >
                      {social.name}
                    </a>
                  </li>
                </>
              );
            })}
          </ul>
        </div>
        <div className="w-full max-w-md mt-8 shadow-lg p-6 bg-gray-50 rounded-lg">
          <h2 className="text-2xl text-gray-800 font-semibold mb-4">
            Send a Message
          </h2>
          <form className="space-y-6">
            {/* Name */}
            <div className="relative">
              <input
                type="text"
                name="name"
                id="name"
                placeholder=" "
                className="peer border border-gray-400 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
              <label
                htmlFor="name"
                className="absolute left-3 top-3 bg-gray-50 px-1 text-gray-600 transition-all duration-200 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-600 peer-focus:-top-2 peer-focus:text-sm peer-focus:text-gray-500"
              >
                Name
              </label>
            </div>

            {/* Email */}
            <div className="relative">
              <input
                type="email"
                name="email"
                id="email"
                placeholder=" "
                className="peer border border-gray-400 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
              <label
                htmlFor="email"
                className="absolute left-3 top-3 bg-gray-50 px-1 text-gray-600 transition-all duration-200 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-600 peer-focus:-top-2 peer-focus:text-sm peer-focus:text-gray-500"
              >
                Email
              </label>
            </div>

            {/* Message */}
            <div className="relative">
              <textarea
                name="message"
                id="message"
                placeholder=" "
                rows="4"
                className="peer border border-gray-400 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-gray-500"
              ></textarea>
              <label
                htmlFor="message"
                className="absolute left-3 top-3 bg-gray-50 px-1 text-gray-500 transition-all duration-200 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-600 peer-focus:-top-2 peer-focus:text-sm peer-focus:text-gray-500"
              >
                Message
              </label>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="bg-gray-500 hover:bg-gray-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
