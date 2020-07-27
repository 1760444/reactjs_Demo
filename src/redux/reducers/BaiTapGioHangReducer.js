const stateDefault = {
  stateGioHang: [
    {
      maSP: 1,
      tenSP: "VinSmart Live",
      gia: 1000,
      hinhAnh: "./img/vsphone.jpg",
      soLuong: 1,
    },
  ],
};

const BaiTapGioHangReducer = (state = stateDefault, action) => {
  console.log("reducer", action);
  switch (action.type) {
    case "THEM_GIO_HANG": {
      let gioHangCapNhat = [...state.stateGioHang];
      let index = gioHangCapNhat.findIndex(
        (spGH) => spGH.maSP === action.spGH.maSP
      );
      if (index !== -1) {
        gioHangCapNhat[index].soLuong += 1;
      } else {
        gioHangCapNhat.push(action.spGH);
      }
      return { ...state, stateGioHang: gioHangCapNhat };
    }
    case "XOA_GIO_HANG": {
      let gioHangCapNhat = [...state.stateGioHang];
      let index = gioHangCapNhat.findIndex((spGH) => spGH.maSP === action.maSP);
      if (index !== -1) {
        gioHangCapNhat.splice(index, 1);
      }

      return { ...state, stateGioHang: gioHangCapNhat };
    }
    case "TANG_SO_LUONG": {
      let gioHangCapNhat = [...state.stateGioHang];
      let index = gioHangCapNhat.findIndex((spGH) => spGH.maSP === action.maSP);
      if (index !== -1) {
        gioHangCapNhat[index].soLuong += 1;
      }

      return { ...state, stateGioHang: gioHangCapNhat };
    }
    case "GIAM_SO_LUONG": {
      let gioHangCapNhat = [...state.stateGioHang];
      let index = gioHangCapNhat.findIndex((spGH) => spGH.maSP === action.maSP);
      if (index !== -1) {
        const soluong = gioHangCapNhat[index].soLuong;
        if (soluong > 0) {
          gioHangCapNhat[index].soLuong -= 1;
        }
      }

      return { ...state, stateGioHang: gioHangCapNhat };
    }
    default:
      return { ...state };
  }
};

export default BaiTapGioHangReducer;
