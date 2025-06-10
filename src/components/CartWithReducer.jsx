import {useState } from "react";
import { useImmerReducer } from "use-immer";
import { cartReducer } from "../reducerProduk";
import Component1 from "./Component1";


const CartWithReducer = () => {

  const [cart, dispatch] = useImmerReducer(cartReducer, []);

  const [produk, setProduk] = useState("");

  const handleClickButtonTambahProduk = () => {
    setProduk("");
    const newProduk = { id: Date.now, name: produk };
    dispatch({ type: "TAMBAH_PRODUK", payload: newProduk });
  };

  const handleClickButtonHapusProduk = (produkId) => {
    dispatch({ type: "HAPUS_PRODUK", id: produkId });
  };


  return (
    <div>
      <h2>Cart Item (With Reducer)</h2>
      <div>
        <input
          className="border"
          type="text"
          value={produk}
          onChange={(e) => setProduk(e.target.value)}
        />
        <button
          onClick={handleClickButtonTambahProduk}
          className="bg-blue-400 p-1 rounded-md text-white"
        >
          Tambah Produk
        </button>
      </div>
      <div className="mt-5">
        {cart.map((item, index) => (
          <div key={index}>
            <div className="flex items-center gap-2">
              <p>{item.name}</p>
              <div>
                <button
                  onClick={() => handleClickButtonHapusProduk(item.id)}
                  className="bg-red-400 p-1 rounded-md text-white"
                >
                  Hapus Produk
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <p className="mt-10">Permasalah drilling props</p>
      <Component1 data={cart} />
    </div>
  );
};

export default CartWithReducer;
