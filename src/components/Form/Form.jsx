import React from "react";
import "../../style.css";
import "../../index.css";

function Form() {
  return (
    <div className="w-full max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
      <form className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Full Name
          </label>
          <input
            type="text"
            placeholder="John Doe"
            className="mt-1 px-4 py-2 w-full border rounded-md shadow-sm focus:ring-blue-400 focus:border-blue-400"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Phone Number
          </label>
          <input
            type="tel"
            placeholder="1234567890"
            className="mt-1 px-4 py-2 w-full border rounded-md shadow-sm focus:ring-blue-400 focus:border-blue-400"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email Address
          </label>
          <input
            type="email"
            placeholder="johndoe@example.com"
            className="mt-1 px-4 py-2 w-full border rounded-md shadow-sm focus:ring-blue-400 focus:border-blue-400"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Message
          </label>
          <textarea
            rows="4"
            placeholder="Your message here..."
            className="mt-1 px-4 py-2 w-full border rounded-md shadow-sm focus:ring-blue-400 focus:border-blue-400"
          ></textarea>
        </div>
        <div>
          <button className="w-full px-4 py-2 text-sm font-medium text-white bg-third rounded-md hover:bg-secondary focus:outline-none focus:ring focus:ring-secondary focus:ring-opacity-50">
            Get in touch
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
