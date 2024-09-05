"use client";

import { useState } from "react";
import { FiCopy } from "react-icons/fi";
import { HiDownload } from "react-icons/hi";
import { motion } from "framer-motion";

const PasswordGenerator = () => {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(12);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  const [copied, setCopied] = useState(false);
  const [showActions, setShowActions] = useState(false); // Controls visibility of Copy & Download buttons

  const generatePassword = () => {
    const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

    let charset = letters;
    if (includeNumbers) charset += numbers;
    if (includeSymbols) charset += symbols;

    let newPassword = "";
    for (let i = 0; i < length; i++) {
      newPassword += charset.charAt(Math.floor(Math.random() * charset.length));
    }

    setPassword(newPassword);
    setCopied(false);
    setShowActions(true); // Show buttons after password is generated
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    setCopied(true);
  };

  const downloadAsTxt = () => {
    const element = document.createElement("a");
    const file = new Blob([password], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "password.txt";
    document.body.appendChild(element);
    element.click();
  };

  return (
    <div className="flex flex-col items-center justify-center  text-white">
      <div className="w-full max-w-lg p-8 bg-gray-900 bg-opacity-80 rounded-2xl shadow-lg">
        {/* Password Length */}
        <div className="mb-6">
          <label className="block text-lg font-medium mb-2 text-green-200">
            Password Length
          </label>
          <input
            type="number"
            value={length}
            onChange={(e) => setLength(parseInt(e.target.value))}
            min="6"
            max="32"
            className="w-full p-3 rounded-md bg-gray-700 text-white border border-green-400 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        {/* Include Numbers - Toggle */}
        <div className="flex items-center justify-between mb-4">
          <label className="text-lg font-medium text-green-200">
            Include Numbers
          </label>
          <div
            className={`relative w-12 h-6 rounded-full cursor-pointer transition-colors ${
              includeNumbers ? "bg-green-500" : "bg-gray-600"
            }`}
            onClick={() => setIncludeNumbers(!includeNumbers)}
          >
            <div
              className={`absolute w-6 h-6 bg-white rounded-full shadow-md transform transition-transform ${
                includeNumbers ? "translate-x-6" : ""
              }`}
            ></div>
          </div>
        </div>

        {/* Include Symbols - Toggle */}
        <div className="flex items-center justify-between mb-6">
          <label className="text-lg font-medium text-green-200">
            Include Symbols
          </label>
          <div
            className={`relative w-12 h-6 rounded-full cursor-pointer transition-colors ${
              includeSymbols ? "bg-green-500" : "bg-gray-600"
            }`}
            onClick={() => setIncludeSymbols(!includeSymbols)}
          >
            <div
              className={`absolute w-6 h-6 bg-white rounded-full shadow-md transform transition-transform ${
                includeSymbols ? "translate-x-6" : ""
              }`}
            ></div>
          </div>
        </div>

        {/* Generate Button */}
        <button
          onClick={generatePassword}
          className="w-full py-3 text-lg font-semibold bg-gradient-to-r from-green-400 to-green-500 rounded-lg hover:bg-gradient-to-r hover:from-green-500 hover:to-green-600 text-white shadow-lg transition-all duration-300"
        >
          Generate Password
        </button>

        {/* Password Display */}
        <div className="mt-8 text-center relative">
          <input
            type="text"
            readOnly
            value={password}
            className="w-full p-4 text-lg text-black rounded-md bg-gray-200 shadow-md focus:outline-none"
          />
        </div>

        {/* Copy and Download Buttons - Show only after password generation */}
        {showActions && (
          <motion.div
            className="flex justify-between mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <button
              onClick={copyToClipboard}
              className={`flex items-center justify-center py-3 px-4 text-lg font-semibold rounded-lg transition-all duration-300 shadow-lg ${
                copied
                  ? "bg-green-600 cursor-default"
                  : "bg-blue-600 hover:bg-blue-500"
              }`}
              disabled={copied}
            >
              <FiCopy className="mr-2" />
              {copied ? "Copied!" : "Copy"}
            </button>

            <button
              onClick={downloadAsTxt}
              className="flex items-center justify-center py-3 px-4 text-lg font-semibold text-white bg-purple-600 hover:bg-purple-500 rounded-lg shadow-lg transition-all duration-300"
            >
              <HiDownload className="mr-2" />
              Download as .txt
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default PasswordGenerator;
