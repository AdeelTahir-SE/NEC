"use client";
import { useContext, createContext } from "react";
import { useState, useEffect } from "react";
import { getUser,logoutUser } from "@/db/UserDB";
const Context = createContext();
export const useUserContext = () => useContext(Context);
export default function UserContext({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    async function fetchUser() {
        try {
            const data = await getUser();
            console.log(data);
            setUser(data);
            setLoading(false);
        } catch (err) {
            setUser(null);
        }
        setLoading(false);
    }
    async function handleLogout() {
        try {
            await logoutUser();
            setUser(null);
        } catch (error) {
            console.error("Logout failed:", error.message);
        }
    }

    useEffect(() => {
        fetchUser();
    }, []);
    return (
        <Context.Provider value={{ user, loading, logout: handleLogout }}>
            {children}
        </Context.Provider>
    );
}
