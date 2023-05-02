import React, { useState, useEffect } from "react";
import { axiosSelling } from "../../api/axios";
import ProductDetails from "./ProductDetails";

const ShippingCompany = () => {
  const [orders, setOrders] = useState([]);
  const [showProductDetails, setShowProductDetails] = useState(false);
  const [product, setProduct] = useState(null);
  const id = localStorage.getItem("id");
  // const [order, setOrder] = useState(null);
  useEffect(() => {
    async function fetchOrders() {
      try {
        const response = await axiosSelling.get(
          `/shipping/getOrderRequests/${id}` // Pass the shippingCompanyId as a URL parameter
        );
        setOrders(response.data);
      } catch (error) {
        console.error("Error fetching orders:", error.message);
      }
    }
    fetchOrders();
  }, []);


  const handleOrderProcessing = async (order) => {
    try {
      const response = await axiosSelling.post(`/shipping/shipOrder`, {
        _id: order._id,
        id: order.id,
        total: order.total,
        shipped: order.shipped,
        completed: order.completed,
        customerName: order.customerName,
        customerAddress: order.customerAddress,
        shippingCompany : order.shippingCompany,
        products : order.products
      });
      console.log(`Order  processed:`, response.data);
      // Update orders state
      // setOrders((prevOrders) =>
      //   prevOrders.map((order) => {
      //     if (order.id === product) {
      //       return { ...order, shipped: "true" };
      //     }
      //     return order;
      //   }
      //   )

      // );

      // Notify user
      alert(`Order processed successfully.`);
    } catch (error) {
      console.error(`Error processing order :`, error.message);
      alert(`Error processing order.`);
    }
  };
  // if (showProductDetails) {
  //   return <ProductDetails productId={productId} />;
  // }
  return (
    <div className="shipping-company-container">
      <h1>Customer Orders</h1>
      <table>
        <thead>
          <tr>
            {/* <th>Order ID</th> */}
            <th>Customer Name</th>
            <th>Customer Address</th>
            <th>total</th>
        
            <th>Shipping Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (

            <tr key={order.id}>
              {/* <td>{order.id}</td> */}
              <td>{order.customerName}</td>
              <td>{order.customerAddress}</td>
              <td>{order.total}</td>
             
              <td>{order.shipped?.toString() ?? "N/A"}</td>
              <td>
                {!order.shipped && (
                  <button
                    onClick={() => handleOrderProcessing(order)}
                    style={{ marginTop: "2px" }}
                  >
                    Process
                  </button>
                )}
              </td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShippingCompany;

// http://127.0.0.1:8080/AdminService-1.0-SNAPSHOT/api/shipping/getOrderRequests/2
// [
//     {
//         "id": 4,
//         "shipped": false,
//         "total": 100,
//         "completed": false,
//         "customerName": "test2",
//         "customerAddress": "cairo",
//         "shippingCompany": {
//             "id": 2,
//             "username": "shipping2",
//             "password": "password",
//             "locations": [
//                 "Cairo",
//                 "Alex"
//             ],
//             "products": [],
//             "admin": {
//                 "id": 1,
//                 "role": null,
//                 "username": "admin",
//                 "password": "password"
//             }
//         },
//         "sellingCompany": null,
//         "products": [
//             {
//                 "id": 2,
//                 "name": "Product2",
//                 "price": 100,
//                 "sellingCompany": {
//                     "id": 1,
//                     "role": "selling",
//                     "username": "company",
//                     "password": "TTpmKBuj",
//                     "admin": {
//                         "id": 1,
//                         "role": null,
//                         "username": "admin",
//                         "password": "password"
//                     }
//                 },
//                 "shippingCompany": null,
//                 "customerOrders": [
//                     4,
//                     {
//                         "id": 3,
//                         "shipped": true,
//                         "total": 100,
//                         "completed": false,
//                         "customerName": "test2",
//                         "customerAddress": "cairo",
//                         "shippingCompany": {
//                             "id": 2,
//                             "username": "shipping2",
//                             "password": "password",
//                             "locations": [
//                                 "Cairo",
//                                 "Alex"
//                             ],
//                             "products": [],
//                             "admin": {
//                                 "id": 1,
//                                 "role": null,
//                                 "username": "admin",
//                                 "password": "password"
//                             }
//                         },
//                         "sellingCompany": null,
//                         "products": [
//                             2
//                         ]
//                     }
//                 ],
//                 "isAvailableForSale": true,
//                 "quantity": 9,
//                 "quantitySold": 0,
//                 "imageUrl": null,
//                 "shipped": false,
//                 "availableForSale": true
//             }
//         ]
//     }
// ]
// http://127.0.0.1:8080/AdminService-1.0-SNAPSHOT/api/shipping/shipOrder
// {
//         "id": 2,
//         "shipped": false,
//         "total": 100,
//         "completed": false,
//         "customerName": "test2",
//         "customerAddress": "cairo",
//         "shippingCompany": {
//             "id": 2,
//             "username": "shipping2",
//             "password": "password",
//             "locations": [
//                 "Cairo",
//                 "Alex"
//             ],
//             "products": [],
//             "admin": {
//                 "id": 1,
//                 "role": null,
//                 "username": "admin",
//                 "password": "password"
//             }
//         },
//         "sellingCompany": null,
//         "products": [
//             {
//                 "id": 1,
//                 "name": "Product1",
//                 "price": 100,
//                 "sellingCompany": {
//                     "id": 1,
//                     "role": "selling",
//                     "username": "company",
//                     "password": "TTpmKBuj",
//                     "admin": {
//                         "id": 1,
//                         "role": null,
//                         "username": "admin",
//                         "password": "password"
//                     }
//                 },
//                 "shippingCompany": null,
//                 "customerOrders": [
//                     2
//                 ],
//                 "isAvailableForSale": true,
//                 "quantity": 9,
//                 "quantitySold": 0,
//                 "imageUrl": null,
//                 "shipped": false,
//                 "availableForSale": true
//             }
//         ]
//     }
// 5odi 2li rag3 mn al getOrderRequests we 5odi one instance 7oteha fe al ship order



// {
//   "id": 18,
//   "shipped": false,
//   "total": 46,
//   "completed": false,
//   "_id": "6450e4d08a6c3c7f26b4b778",
//   "customerName": "luxorUser@gmail.com",
//   "customerAddress": "luxor",
//   "shippingCompany": {
//       "id": 9,
//       "username": "pass",
//       "password": "pass",
//       "locations": [
//           "luxor"
//       ],
//       "products": [],
//       "admin": {
//           "id": 1,
//           "role": null,
//           "username": "admin",
//           "password": "password"
//       }
//   },
//   "sellingCompany": null,
//   "products": [
//       {
//           "id": 3,
//           "name": "shampoo",
//           "price": 46,
//           "sellingCompany": null,
//           "shippingCompany": null,
//           "customerOrders": [
//               18,
//               {
//                   "id": 22,
//                   "shipped": false,
//                   "total": 46,
//                   "completed": false,
//                   "_id": "6450e98c8a6c3c7f26b4b7a4",
//                   "customerName": "luxorUser@gmail.com",
//                   "customerAddress": "luxor",
//                   "shippingCompany": {
//                       "id": 9,
//                       "username": "pass",
//                       "password": "pass",
//                       "locations": [
//                           "luxor"
//                       ],
//                       "products": [],
//                       "admin": {
//                           "id": 1,
//                           "role": null,
//                           "username": "admin",
//                           "password": "password"
//                       }
//                   },
//                   "sellingCompany": null,
//                   "products": [
//                       3
//                   ]
//               }
//           ],
//           "isAvailableForSale": true,
//           "quantity": 19,
//           "quantitySold": 0,
//           "imageUrl": null,
//           "shipped": false,
//           "availableForSale": true
//       }
//   ]
// }