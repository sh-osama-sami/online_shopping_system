import Items from "./components/Items";
import { useState ,useEffect} from "react";
import AdminNavigation from "./features/admin/AdminNavigation";
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
import ViewInStockProducts from "./features/company/ViewInStockProducts";
import CreateCompany from "./features/admin/AddCompany";
import CreateShipping from "./features/admin/AddShipping";
import ShippingCompany from "./features/shipping/ShippingHome";
import ShippedPurchases from "./features/customer/ShippedPurchases";
import ShippingCompanies from "./features/admin/ListShipping";
import Users from "./features/admin/Users";
import SellingCompanies from "./features/admin/ListSelling";
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
      <Route path="/shipping" element={<ShippingCompany/>} />
      {/* private routes  */}
      <Route element={<RequiredAuth allowedRoles={["admin"]} />}>
        <Route path="/admin" element={<AdminHome />} />
        <Route path="/admin/users" element={<Users />}/>
        <Route path="/admin/createcompany" element={<CreateCompany />}/>
        <Route path="/admin/createshipping" element={<CreateShipping/>} />
        <Route path="/admin/listshipping" element={<ShippingCompanies/>} />
        <Route path="/admin/listselling" element={<SellingCompanies/>} />


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
        <Route path="/user/history/Shipped" element={<ShippedPurchases />} />

      </Route>

      <Route element={<RequiredAuth allowedRoles={["company"]} />}>
        <Route path="/company" element={<CompanyHome />} />
        <Route path="/addProduct" element= {<AddProduct/>}/>
        <Route path = "/ViewInstock" element= {<ViewInStockProducts/>}/>
        
      </Route> 

      <Route element={<RequiredAuth allowedRoles={["shipping"]} />}> 
      <Route path="/shipping" element={<ShippingCompany/>} />

      </Route>
    </Routes>
  );
}

export default App;
