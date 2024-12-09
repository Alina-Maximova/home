import React from "react";
import { CloseButton, Image, Table } from "react-bootstrap";
import { Button } from "reactstrap"
import cart from "../store/cart";

const OrderTable = () => {
  console.log(cart.cart)
  return (
    <Table className="fs-5 align-middle " responsive="sm" >
      <thead>
        <tr>
          <th>Фото</th>
          <th>Название</th>
          <th>Кол-во</th>
          <th>Удалить</th>
        </tr>
      </thead>
      <tbody>
        {cart.cart.map((item) => (
          <tr key={item.id}>
            <td>
              <img
                width="150"
                height="150"
                src={`/file/${item.img}`}
                
              />
            </td>
            <td>{item.name}</td>
            <td>
            <button onClick={() => cart.addQuantity(item.id)} style={{ background:"rgba(234, 86, 117, 0.26)", borderColor:"rgba(234, 86, 117, 0.26)" } }>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  className="bi-plus"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                </svg>
              </button>
              
             <h3>{item.quantity}</h3> 
             <button onClick={() => cart.delQuantity(item.id)} style={{ background:"rgba(234, 86, 117, 0.26)", borderColor:"rgba(234, 86, 117, 0.26)" } }>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  className="bi-dash"
                  viewBox="0 0 16 16"
                 
                 
                >
                  <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                </svg>
              </button>
            </td>
            <td>
              <CloseButton
                onClick={() => cart.delProduct(item.id)}
              ></CloseButton>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default OrderTable;