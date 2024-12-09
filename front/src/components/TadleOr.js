import React, { useEffect, useState } from "react";
import {
  Form,
  FormGroup,
  Modal,
  Spinner,
  Table,
} from "react-bootstrap";
import {Button} from "reactstrap"
import axios from 'axios';


const TableOrd = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchGetOrder = async () => {
    axios
      .get(`http://localhost:8080/order/admin`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response.data.order)
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
      new: "Новый",
      success: "Подтверждено",
      cancel: "Отменено",
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

  //Отказ

  const [show, setShow] = useState(false);
  const [comment, setComment] = useState("");

  const fetchCanOrder = async (id) => {
    let body_data = JSON.stringify({ id: id, comment });
    await axios
      .post(`http://localhost:8080/order/update/cancel`, body_data, {
        headers: {
          "Content-Type": "application/json",
         
        },
      })
      .then((response) => {
        alert('Вы отменили заказ');
        setData(response.data.values)
        setComment("");
        setShow(false)
      })
      .catch((err) => console.log(err));
  };
  //Подтверждение
  const fetchSucOrder = async (id) => {
    await axios
      .post(`http://localhost:8080/order/update/confirm`, JSON.stringify({ id: id}), {
        headers: {
          "Content-Type": "application/json"
        },
      })
      .then((response) => {
        alert('Вы подтвердили заказ');
        setData(response.data.values)
      })
      .catch((err) => console.log(err));
  };
console.log(sortData.length)
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
                  <option value="success">Подтвержденные</option>
                  <option value="cancel">Отмененные</option>
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
                          <Button className="ms-4"
                            style={{ borderRadius:"30px", background:"rgba(66, 222, 41, 0.53)", color:"black", borderColor:"rgba(66, 222, 41, 0.53)"}}
                            onClick={() => fetchSucOrder(item.id)}
                          >
                            Подтвердить
                          </Button>
                          <Button
                          style={{ borderRadius:"30px", background:"rgba(255, 21, 21, 0.48)", color:"black", borderColor:"rgba(255, 21, 21, 0.48)"}}
                            onClick={() => setShow(true)}
                          
                          >
                            Отменить
                          </Button>
                        </td>
                      ) : (
                        <></>
                      )}
                      <Modal centered show={show} onHide={() => setShow(false)}>
                        <Modal.Header closeButton>Отменить заказ</Modal.Header>
                        <Modal.Body>
                          <FormGroup>
                            <Form.Label>Введить причину отказа</Form.Label>
                            <Form.Control
                              value={comment}
                              onChange={(e) => setComment(e.target.value)}
                              as="textarea"
                            ></Form.Control>
                          </FormGroup>
                        </Modal.Body>
                        <Modal.Footer>
                          <div className="text-end">
                            <Button
                             style={{ borderRadius:"30px", background:"rgba(255, 21, 21, 0.48)", color:"black",  borderColor:"rgba(255, 21, 21, 0.48)"}}
                              onClick= { () =>setShow(false)}
                            >
                              Отменить действие
                            </Button>
                            <Button
                           style={{ borderRadius:"30px", background:"rgba(66, 222, 41, 0.53)", color:"black",  borderColor:"rgba(66, 222, 41, 0.53)"}}
                              onClick={() => fetchCanOrder(item.id)}
                            >
                              Отменить заказ
                            </Button>
                          </div>
                        </Modal.Footer>
                      </Modal>
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

export default TableOrd;
