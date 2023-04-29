import {  useState, useEffect } from "react";
import useAuth from "../hooks/useAuth";
import AdminNavigation from "../features/admin/AdminNavigation";
import ClientNavigation from "../features/customer/ClientNavigation";
import CompanyNavigation from "../features/company/CompanyNavigation";
const Navigation = () => {
  const { auth } = useAuth();
  const [role, setRole] = useState("");

  useEffect(() => {
    if (auth?.role) {
      setRole(auth.role);
    }
  }, [auth]);

  return (
    <nav>
      {/* Render navigation based on user role */}
      {role === "admin" ? <AdminNavigation /> : role ==="user" ?  <ClientNavigation />:role ==="company" ? <CompanyNavigation /> : <></>}
    </nav>
  );
};

export default Navigation;