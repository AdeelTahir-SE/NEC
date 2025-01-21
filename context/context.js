import { useContext, createContext } from "react";
import { useState, useEffect } from "react";
import userFromDatabase from "@/db/UserDB"
const Context = createContext();
export const useUserContext = () => useContext(Context);
export default function UserContext({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  async function fetchUser() {
    try {
      const res = await userFromDatabase();
      const data = await res.json();
      setUser(data);
      setLoading(false);
    } catch (err) {
      setUser(null);
    }
    setLoading(false);
  }
  useEffect(() => {
    fetchUser();
  });
  return (
    <Context.Provider value={{ user, loading }}>{children}</Context.Provider>
  );
}
