import "./App.scss";
import NavBar from "./NavBar";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

function App() {
  const baseUrl = "https://localhost:44348/api/OrderModels";
  const [data, setData] = useState([]);

  const petitionGET = async () => {
    axios
      .get(baseUrl)
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    petitionGET();
  }, []);

  return (
    <div className="App">
      <NavBar />
      
      <div className="dash-content">
      <form action="/" method="get" className="search-box">
        <input
          class = "search-text" type="text" placeholder = "Search Order"
        />
        <button type="submit" className="search-btn"> <FontAwesomeIcon className="i" icon={faSearch}/> </button>

      </form>
        <div className="container1">
          <table striped bordered hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>CustomerId</th>
                <th>Date</th>
                <th>DateDistribute</th>
                <th>Product</th>
                <th>Order Price</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {data.map((OrderModel) => (
                <tr key={OrderModel.id}>
                  <td>{OrderModel.id}</td>
                  <td>{OrderModel.customerId}</td>
                  <td>{OrderModel.date}</td>
                  <td>{OrderModel.dateDispatch}</td>
                  <td>{OrderModel.products}</td>
                  <td>{OrderModel.orderPrice}</td>
                  <td>{OrderModel.productPrice}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="container2">
          <table striped bordered hover>
            <thead>
              <tr>
                <th className="col-1">ID</th>
                <th>CustomerId</th>
                <th>Date</th>
                <th>DateDistribute</th>
                <th>Product</th>
                <th>Order Price</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {data.map((OrderModel) => (
                <tr key={OrderModel.id}>
                  <td>{OrderModel.id}</td>
                  <td className="col-1">{OrderModel.customerId}</td>
                  <td>{OrderModel.date}</td>
                  <td>{OrderModel.dateDispatch}</td>
                  <td>{OrderModel.products}</td>
                  <td>{OrderModel.orderPrice}</td>
                  <td>{OrderModel.productPrice}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
