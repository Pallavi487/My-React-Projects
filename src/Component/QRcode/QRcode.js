import React, { useState } from "react";
import QRCode from "qrcode.react";

const Qrcode = () => {
  const [text, setText] = useState("");
  const [qrtext, setQrtext] = useState("");
  const handleChange = (event) => {
    setText(event.target.value);
  };
  const handleClick = () => {
    setQrtext(text);
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">QR Code Generator</h1>
      <input
        type="text"
        onChange={handleChange}
        placeholder="Enter the name"
        className="mb-4 p-2 border border-gray-300 rounded"
      />
      <button
        onClick={handleClick}
        className="mb-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        QRCode Generator
      </button>
      {qrtext && <QRCode value={qrtext} />}
    </div>
  );
};

export default Qrcode;
