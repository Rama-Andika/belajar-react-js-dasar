import { useState } from "react";
import { useImmer } from "use-immer";

const CartWithoutReducer = () => {
  const [cart, setCart] = useImmer([]);
  const [produk, setProduk] = useState("");

  const handleClickButtonTambahProduk = () => {
    setProduk("");
    setCart((draft) => {
      draft.push({ id: Date.now(), name: produk });
    });
  };

  const handleClickButtonHapusProduk = (id) => {
    setCart((draft) => {
        const index = draft.findIndex((item) => item.id === id);
        if (index !== -1) {
            draft.splice(index, 1);
        }
    })
  }

  return (
    <div>
      <h2>Cart Item (Without Reducer)</h2>
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
                <button onClick={() => handleClickButtonHapusProduk(item.id)} className="bg-red-400 p-1 rounded-md text-white">
                  Hapus Produk
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartWithoutReducer;
