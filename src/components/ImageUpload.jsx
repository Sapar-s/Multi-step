import React, { useRef, useState } from "react";

const ImageUpload = ({ onImageUpload, error }) => {
  const [image, setImage] = useState(null);
  const fileInputRef = useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
        onImageUpload && onImageUpload(file);
      };
      reader.readAsDataURL(file);
    }
  };

  const clearBtn = (e) => {
    e.stopPropagation();
    setImage(null);

    if (fileInputRef.current) {
      fileInputRef.current.value = null;
    }
  };

  return (
    <div>
      <h5 className="text-[14px] font-[600] text-[#334155] mt-2 flex gap-1 ">
        Profile image
        <span className="text-[#E14942]">*</span>
      </h5>
      <div className="w-[100%] h-[180px] flex flex-col items-center justify-center  bg-[#7F7F80]/5 rounded-md relative ">
        <label
          htmlFor="file-input"
          className="w-[100%] h-[100%] flex items-center justify-center cursor-pointer relative mt-1 rounded-lg "
          style={{
            backgroundImage: image ? `url(${image})` : "none",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundColor: image ? "transparent" : "#f9f9f9",
          }}
        >
          {image ? (
            ""
          ) : (
            <div className="flex flex-col items-center gap-2 ">
              <div className="p-2 rounded-full bg-[#fff] w-[28px] h-[28px] ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                >
                  <path
                    d="M9.5 2.5V9.5H2.5V2.5H9.5ZM9.5 1.5H2.5C1.95 1.5 1.5 1.95 1.5 2.5V9.5C1.5 10.05 1.95 10.5 2.5 10.5H9.5C10.05 10.5 10.5 10.05 10.5 9.5V2.5C10.5 1.95 10.05 1.5 9.5 1.5ZM7.07 5.93L5.57 7.865L4.5 6.57L3 8.5H9L7.07 5.93Z"
                    fill="#202124"
                  />
                </svg>{" "}
              </div>
              <span>Browse or Drop Image</span>
            </div>
          )}
        </label>
        {image ? (
          <button
            className="absolute top-4 right-4 p-[6px] bg-[#202124] text-[#ffffff] rounded-full "
            onClick={clearBtn}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
            >
              <path
                d="M9.5 3.205L8.795 2.5L6 5.295L3.205 2.5L2.5 3.205L5.295 6L2.5 8.795L3.205 9.5L6 6.705L8.795 9.5L9.5 8.795L6.705 6L9.5 3.205Z"
                fill="white"
              />
            </svg>
          </button>
        ) : (
          ""
        )}

        <input
          id="file-input"
          ref={fileInputRef}
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
