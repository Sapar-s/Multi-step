import React from "react";
import { useState } from "react";

const ImageUpload = ({ onImageUpload, error }) => {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
        onImageUpload(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <h5 className="text-[14px] font-[600] text-[#334155] mt-2 flex gap-1 ">
        {" "}
        Profile image
        <span className="text-[#E14942]">*</span>
      </h5>
      <div className="w-[100%] h-[180px] flex flex-col items-center justify-center  bg-[#7F7F80]/5 rounded-md ">
        <label
          htmlFor="file-input"
          className="w-[100%] h-[100%] flex items-center justify-center cursor-pointer "
          style={{
            backgroundImage: image ? `url(${image})` : "none",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundColor: image ? "transparent" : "#f9f9f9",
          }}
        >
          {!image && <span>Add image</span>}{" "}
        </label>

        <input
          id="file-input"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          style={{ display: "none" }}
        />
      </div>
      {error && <p className="text-[#E14942] text-sm mt-2">{error}</p>}
    </div>
  );
};

export default ImageUpload;
