import Items from "./components/Items";
import { useState ,useEffect} from "react";
import AdminNavigation from "./features/admin/AdminNavigation";
import ViewUsers from "./features/admin/ViewUsers";
import ClientNavigation from "./features/customer/ClientNavigation";
import Home from "./features/customer/home";
import Signup from "./features/auth/signup";
import Login from "./features/auth/Login";
import Cart from "./features/customer/Cart";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PurchaseHistory from "./features/customer/PurchaseHistory";
import RequiredAuth from "./features/auth/RequiredAuth";
import Unauthorised from "./features/auth/Unauthorised";
import AdminHome from "./features/admin/AdminHome";
import axiosClient, { axiosSelling } from "./api/axios";
import CompanyHome from "./features/company/CompanyHome";
import AddProduct from "./features/company/AddProduct";
const name = "item";
function App() {
  const [items, setItems] = useState([ ]);
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axiosSelling.get("/product/viewproducts");
        

        if (response.status === 200) {
          setItems(response.data);
        } else {
          console.error("Error fetching items:", response);
        }
      } catch (error) {
        console.error("Error fetching items:", error);
      }

    };

    fetchItems();
  }, []);
  
 

  const handleRemoveFromCart = (item) => {
    const updatedCartItems = items.filter(
      (cartItem) => cartItem.id !== item.id
    );
    setItems(updatedCartItems);
  };
  return (
    
    <Routes>
      {/* public routes  */}
      <Route path="/" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/unauthorized" element={<Unauthorised />} />

      {/* private routes  */}
      <Route element={<RequiredAuth allowedRoles={["admin"]} />}>
        <Route path="/admin" element={<AdminHome />} />
        <Route path="/admin/users" element={<ViewUsers />}/>
      </Route>

      <Route element={<RequiredAuth allowedRoles={["user"]} />}>
        <Route
          path="/user"
          element={<Home   />}
        />
        <Route
          path="/user/cart"
          element={
            <Cart
            />
          }
        />
        <Route path="/user/history" element={<PurchaseHistory />} />
      </Route>

      <Route element={<RequiredAuth allowedRoles={["company"]} />}>
        <Route path="/company" element={<CompanyHome />} />
        <Route path="/addProduct" element= {<AddProduct/>}/>
      </Route>  
    </Routes>
  );
}

export default App;
