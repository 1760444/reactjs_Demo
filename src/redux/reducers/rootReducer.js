import {combineReducers} from 'redux';
import BaiTapGioHangReducer from './BaiTapGioHangReducer';
import BaiTapGameBauCuaReducer from './BTGameBauCuaReducer';

// rootReducer quản lý state của toàn bộ ứng dụng
const rootReducer = combineReducers({
    // Nơi khai báo các state(reducer) theo từng nghiệp vụ
    GioHangReducer: BaiTapGioHangReducer,
    BaiTapGameBauCuaReducer,
});

export default rootReducer;