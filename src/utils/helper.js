import { useSelector } from "react-redux";

export const useAdminStatus = () => {
    const userData = useSelector((state) => state.userData);

    const isAdmin = () => {
        return userData.email === "admin@gmail.com";
    };

    return {isAdmin};
};