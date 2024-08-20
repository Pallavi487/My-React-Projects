import React, { useState } from "react";

const tabs = [
  { id: 1, title: "Tab 1", content: "This is the content of Tab 1" },
  { id: 2, title: "Tab 2", content: "This is the content of Tab 2" },
  { id: 3, title: "Tab 3", content: "This is the content of Tab 3" },
];

const Tab = () => {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <div className="w-full max-w-xl mx-auto mt-10">
      <div className="flex border-b border-gray-300">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`flex-1 py-2 text-center ${
              activeTab === tab.id
                ? "border-b-2 border-blue-500 text-blue-500"
                : ""
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className="p-4">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`${activeTab === tab.id ? "block" : "hidden"}`}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tab;
