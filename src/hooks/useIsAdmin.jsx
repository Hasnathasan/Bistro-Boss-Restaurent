import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const useIsAdmin = () => {
    const {user} = useContext(AuthContext);
    const {data: isAdmin, isLoading: isAdminLoading} = useQuery({
        queryKey: ["admin", user?.email],
        queryFn: async() => {
            const res = await fetch(`http://localhost:5000/isadmin/${user?.email}`)
            return res.json()
        }
    })
    return [isAdmin, isAdminLoading]
};

export default useIsAdmin;