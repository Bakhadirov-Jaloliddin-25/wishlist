import React from "react";
import { useStateValue } from "../../context";
import Products from "../../components/products/Products";
import LikesImg from "../../assets/images/likes.jpg";

const WishList = () => {
  const { wishList } = useStateValue();
  console.log(wishList);

  return (
    <div className="p-20">
      {wishList.length ? (
        <Products title="Wishlist" data={wishList} />
      ) : (
        <div className="text-center flex flex-col gap-6">
          <p className="text-3xl text-[#56B280] font-bold">
            Sizga yoqqanini qo'shing
          </p>
        </div>
      )}
    </div>
  );
};

export default WishList;
