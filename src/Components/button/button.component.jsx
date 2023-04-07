const  BUTTON_TYPE_CLASSES = {
  google : ' bg-[#4285f4] text-white hover:bg-[#357ae8] border-none  ',
  inverted : 'bg-black text-white border border-solid border-black hover:bg-white hover:text-black ' ,
}


const Button = ({children , buttonType , ...otherProps}) => {
  return (
    <button className={`min-w-[165px] w-auto h-[50px] tracking-[0.5px]  leading-[50px] px-9 text-[15px] uppercase font-extrabold cursor-pointer flex justify-center border border-solid border-black ${BUTTON_TYPE_CLASSES[buttonType]} ${otherProps.styles}`} {...otherProps}>
      {children}
    </button>
  )
}

export default Button