
import React from 'react'

const CompanyHome = () => {
  return (
    <div>CompanyHome</div>
  )
}

export default CompanyHome

// http://127.0.0.1:8080/AdminService-1.0-SNAPSHOT/api/selling/getOldOrders
// [
//     {
//         "sellingCompanyOrder": {
//             "productId": 2,
//             "customerName": "test2",
//             "shippingCompanyName": "shipping2",
//             "id": 1
//         },
//         "product": {
//             "id": 2,
//             "name": "Product2",
//             "price": 100,
//             "sellingCompany": {
//                 "id": 1,
//                 "role": "selling",
//                 "username": "company",
//                 "password": "TTpmKBuj",
//                 "admin": {
//                     "id": 1,
//                     "role": null,
//                     "username": "admin",
//                     "password": "password"
//                 }
//             },
//             "shippingCompany": null,
//             "customerOrders": [
//                 {
//                     "id": 3,
//                     "shipped": true,
//                     "total": 100,
//                     "completed": false,
//                     "customerName": "test2",
//                     "customerAddress": "cairo",
//                     "shippingCompany": {
//                         "id": 2,
//                         "username": "shipping2",
//                         "password": "password",
//                         "locations": [
//                             "Cairo",
//                             "Alex"
//                         ],
//                         "products": [],
//                         "admin": {
//                             "id": 1,
//                             "role": null,
//                             "username": "admin",
//                             "password": "password"
//                         }
//                     },
//                     "sellingCompany": null,
//                     "products": [
//                         2
//                     ]
//                 },
//                 {
//                     "id": 6,
//                     "shipped": true,
//                     "total": 100,
//                     "completed": false,
//                     "customerName": "test2",
//                     "customerAddress": "cairo",
//                     "shippingCompany": {
//                         "id": 2,
//                         "username": "shipping2",
//                         "password": "password",
//                         "locations": [
//                             "Cairo",
//                             "Alex"
//                         ],
//                         "products": [],
//                         "admin": {
//                             "id": 1,
//                             "role": null,
//                             "username": "admin",
//                             "password": "password"
//                         }
//                     },
//                     "sellingCompany": null,
//                     "products": [
//                         2
//                     ]
//                 },
//                 {
//                     "id": 4,
//                     "shipped": true,
//                     "total": 100,
//                     "completed": false,
//                     "customerName": "test2",
//                     "customerAddress": "cairo",
//                     "shippingCompany": {
//                         "id": 2,
//                         "username": "shipping2",
//                         "password": "password",
//                         "locations": [
//                             "Cairo",
//                             "Alex"
//                         ],
//                         "products": [],
//                         "admin": {
//                             "id": 1,
//                             "role": null,
//                             "username": "admin",
//                             "password": "password"
//                         }
//                     },
//                     "sellingCompany": null,
//                     "products": [
//                         2
//                     ]
//                 },
//                 {
//                     "id": 5,
//                     "shipped": true,
//                     "total": 100,
//                     "completed": false,
//                     "customerName": "test2",
//                     "customerAddress": "cairo",
//                     "shippingCompany": {
//                         "id": 2,
//                         "username": "shipping2",
//                         "password": "password",
//                         "locations": [
//                             "Cairo",
//                             "Alex"
//                         ],
//                         "products": [],
//                         "admin": {
//                             "id": 1,
//                             "role": null,
//                             "username": "admin",
//                             "password": "password"
//                         }
//                     },
//                     "sellingCompany": null,
//                     "products": [
//                         2
//                     ]
//                 }
//             ],
//             "isAvailableForSale": true,
//             "quantity": 9,
//             "quantitySold": 0,
//             "imageUrl": null,
//             "shipped": false,
//             "availableForSale": true
//         }
//     }
// ]