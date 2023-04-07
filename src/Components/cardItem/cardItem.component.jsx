const CartItem = ({cartItem}) => {
  const {name , quantity , imageUrl , price} = cartItem
return (
<div className="w-full flex h-20 mb-[15px]">
      <img src={imageUrl} alt={`${name}`} className=" w-[30%]" />
      <div className="w-[70%] flex flex-col items-start justify-center py-[10px] px-5">
          <span className=" text-base">{name}</span>
          <span>{quantity} x ${price}</span>
      </div>
</div>
)
}

export default CartItem ;