// import { useState } from "react";
import { star } from "../assets/icons";

const PopularProductCard = ({ imgURL, name, price }) => {
  // For changing quantity of add to cart options
  // const [quantity, setQuantity] = useState(0);
  // const changeQuantity = (num) => {
  //   if (num === -1 && quantity === 0) return;
  //   else setQuantity(quantity + num);
  // };

  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <img src={imgURL} alt={name} className="w-[280px] h-[280px]" />
      <div className="mt-8 flex justify-start gap-2.5">
        <img src={star} alt="rating" width={24} height={24} />
        <p className="text-xl leading-normal font-montserrat text-slate-gray">
          (4.5)
        </p>
      </div>
      <h3 className="mt-2 text-xl leading-normal font-semibold font-palanquin">
        {name}
      </h3>
      <p className="mt-2 font-semibold font-montserrat text-coral-red text-xl leading-normal">
        {price}
      </p>

      {/* Add to cart buttons */}
      {/* <div className="flex ">
        <button onClick={() => changeQuantity(-1)}>-1</button>
        <p>{quantity}</p>
        <button onClick={() => changeQuantity(-1)}>+1</button>
      </div> */}
    </div>
  );
};

export default PopularProductCard;
