import { useSelector } from "react-redux";

const CartRtk = () => {
  const cartValues = useSelector((store) => store.cartSlice.items);
  console.log(cartValues)// 

  return (
    <>
      {cartValues.map((element) => (
          <div key={element.id}>
            <div>{element.id}</div>
            <div>{element.title}</div>
            <div>{element.poster}</div>
            <div>{element.desc}</div>
            <div>{element.trailer}</div>
            <div>{element.rating}</div>
          </div>
        )
      )}
    </>
  );
};

export default CartRtk;