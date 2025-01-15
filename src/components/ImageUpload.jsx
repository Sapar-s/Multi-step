import React from "react";

const ImageUpload = () => {
  return (
    <div>
      <h5 className="text-[14px] font-[600] text-[#334155] mt-2 flex gap-1 ">
        {" "}
        Profile image
        <span className="text-[#E14942]">*</span>
      </h5>
      {/* <div className="w-[100%] h-[180px] flex flex-col items-center justify-center cursor-pointer bg-[#7F7F80]/5 rounded-md "> */}
      <form
        id="form"
        encType="multipart/form-data"
        className="w-[100%] h-[180px] flex flex-col items-center justify-center cursor-pointer bg-[#7F7F80]/5 rounded-md "
      >
        <div className="p-2 bg-white rounded-full">
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
          </svg>
        </div>
        Browse or Drop Image <input type="file" id="file" />
      </form>
      {/* </div> */}
    </div>
  );
};

export default ImageUpload;
