import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { ReadProducts } from "../Api/ApiRequest";

const ProductList = () => {
  useEffect(() => {
    (async () => {
      await ReadProducts();
    })();
  }, []);

  let productList = useSelector((state) => state.product.List);
  // console.log(productList)
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>ProductCode</th>
                  <th>ProductName</th>
                  <th>Qty</th>
                  <th>UnitPrice</th>
                  <th>TotalPrice</th>
                </tr>
              </thead>
              <tbody>
                {productList?.map((item) => (
                  <tr key={item["_id"]}>
                    <td>{item["ProductCode"]}</td>
                    <td>{item["ProductName"]}</td>
                    <td>{item["Qty"]}</td>
                    <td>{item["UnitPrice"]}</td>
                    <td>{item["TotalPrice"]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductList;
