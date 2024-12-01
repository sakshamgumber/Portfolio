import React, { useState } from "react";

const TabComponent = () => {
  // State to toggle tab visibility
  const [isTabOpen, setIsTabOpen] = useState(false);

  // Function to toggle tab visibility
  const toggleTab = () => {
    setIsTabOpen(!isTabOpen);
  };

  return (
    <div className="font-mono mx-8 bg-gradient-to-b from-zinc-900 to-zinc-900 bg-opacity-0 p-6">
      {/* Skills Button */}
      <button
        onClick={toggleTab}
        className="text-white bg-blue-500 px-4 py-2 rounded hover:bg-blue-700"
      >
        Skills
      </button>

      {/* Tab Content: Visible only when isTabOpen is true */}
      {isTabOpen && (
        <div className="mt-5 p-4 bg-white rounded-lg shadow-lg w-full">
          <h2 className="text-lg font-bold mb-2">My Skills</h2>
          <ul className="list-disc pl-5 text-gray-700">
            <li>React.js</li>
            <li>JavaScript</li>
            <li>Node.js</li>
            <li>MongoDB</li>
            <li>Tailwind CSS</li>
            {/* Add more skills as needed */}
          </ul>
        </div>
      )}
    </div>
  );
};

export default TabComponent;
