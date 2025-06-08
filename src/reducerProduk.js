export const cartReducer = (draft, action) => {
  switch (action.type) {
    case "TAMBAH_PRODUK":
      draft.push(action.payload);
    case "HAPUS_PRODUK":
      const index = draft.findIndex((item) => item.id === action.id);
      if (index !== -1) {
        draft.splice(index, 1);
      }
    default:
      draft;
  }
};
