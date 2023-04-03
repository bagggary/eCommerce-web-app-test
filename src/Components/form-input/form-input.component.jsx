
 
 const FormInput = ({label , ...otherProps}) => {
  return (
  <div className="relative my-11">
    {/* otherprops.value.length > 0 ? 'top-[-14px] text-xs text-black' : '' */}
    <label className={` ${otherProps.value.length > 0 ? 'top-[-14px] text-xs text-black' : ''} text-gray-500 text-base font-normal absolute pointer-events-none left-[5px] top-[10px] transition-all duration-300 ease-linear `}>{label}</label>
    <input className="w-full bg-white bg-none text-gray-500 p-[10px] focus:outline-none pl-[5px] block border-b-2 border-gray-500 my-[25px]" {...otherProps} />
    {/* <label> {label}</label>
    <input {...otherProps} /> */}
  </div>
  )

}

export default FormInput;