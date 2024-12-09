import React, { useEffect, useState } from "react";
import {
  Button,
  Form,
  FormGroup,
  Modal,
  Spinner,
  Table,
  CloseButton
} from "react-bootstrap";
import axios from 'axios';


const TablePr = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); 
  const id = localStorage.getItem('id')
  const fetchGetOrder = async () => {

    axios
      .get(`http://localhost:8080/order/all/${id}`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        // console.log(response.data.order)
        setData(response.data.order);
        setSortData(response.data.order);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  
  useEffect(() => {
    fetchGetOrder();
 
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [sortType, setSortType] = useState("all");
  const [sortData, setSortData] = useState([]);
  const sortArray = (type) => {
    const types = {
      all: "Все",
      new: "Новый"
    };
    const sortProperty = types[type];
    let sorted = [];
    sortProperty === "Все"
      ? (sorted = [...data])
      : (sorted = [...data].filter((a) => a.status === sortProperty));
    setSortData(sorted);
    setLoading(false);
  };
  useEffect(() => {
    sortArray(sortType);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortType]);


  const fetchDelete = async (id) => {
    await axios
      .post(`http://localhost:8080/order/delete`, JSON.stringify({ id: id}), {
        headers: {
          "Content-Type": "application/json"
        },
      })
      .then((response) => {
        alert('Вы удалили заказ');
        setData(response.data.values)
      })
      .catch((err) => console.log(err));
  };
console.log(sortData)

  return (
    <>
      {!loading ? (
        <>
          {sortData.length > 0 ? (
            <>
              <div className="d-flex justify-content-end">
                <Form.Select
                  onChange={(e) => setSortType(e.target.value)}
                  style={{ minWidth: "150px" }}
                  className="w-25"
                >
                  <option value="all">Все заказы</option>
                  <option value="new">Новые</option>
                 
                </Form.Select>
              </div>

              <Table className="mt-4">
                <thead>
                  <tr>
                    <th>№</th>
                    <th>Статус</th>
                    <th>ФИО</th>
                    <th>Товары</th>
                    {sortType === "new" ? <th>Действия</th> : <></>}
                  </tr>
                </thead>
                <tbody>
                  {sortData.map((item) => (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.status}</td>
                      <td>{item.FIO || ""}</td>
                      <td>
                        {item.products.map((i) => (
                          <div key={i.id}>
                            {i.name} - {i.quantity}
                          </div>
                        ))}
                      </td>
                      {sortType === "new" ? (
                        <td>
                          <CloseButton
                       onClick={() => fetchDelete(item.id)}
                          ></CloseButton>
                          
                        </td>
                      ) : (
                        <></>
                      )}
                      
                    </tr>
                  ))}
                </tbody>
              </Table>
            </>
          ) : (
            <h3>Нет заказов</h3>
          )}
        </>
      ) : (
        <>
          <Spinner animation="border" role="status" />
        </>
      )}
    </>
  );
};

export default TablePr;
