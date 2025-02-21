import { logout } from "../redux/redurces/authSlice";


export const handleLogout = (dispatch, navigate) => {
    dispatch(logout()); 
    navigate("/login"); 
};
