export const Input = ({ label, placeholder, oninvalid }) => {
  return (
    <>
      <div className="flex flex-col mt-3">
        <label
          htmlFor="fname"
          className="text-[14px] font-[600] text-[#334155]"
        >
          {label} <span className="text-[#E14942]">*</span>
        </label>
        <input
          type="text"
          placeholder={placeholder}
          className=" placeholder:text-[16px] w-[416px] mt-2 p-3 rounded-lg border-[2px] border-[#CBD5E1] focus:outline-none focus:border-[#0CA5E9] "
          onInvalid={oninvalid}
        />
        {/* <h5>{oninvalid}</h5> */}
      </div>
    </>
  );
};
