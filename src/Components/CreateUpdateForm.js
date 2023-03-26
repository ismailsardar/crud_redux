import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CreatedProducts } from "../Api/ApiRequest";
import { onChangeProductInput } from "../Redux/Slice/ProductSlice";
import store from "../Redux/Store/store";

const CreateUpdateForm = () => {
  let navigate = useNavigate()

    let createList = useSelector((state)=> state.product.FormValue);
    
    const SaveData = async ()=>{
        // console.log(createList)
        await CreatedProducts(createList);
        navigate('/');
    }
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <label>Image :</label>
            <input
              type="text"
              className="form-control form-control-sm"
              onChange={(e) =>
                store.dispatch(
                  onChangeProductInput({ Name: "Img", Value: e.target.value })
                )
              }
            />
          </div>
          <div className="col-md-3">
            <label>ProductCode :</label>
            <input
              type="text"
              className="form-control form-control-sm"
              onChange={(e) =>
                store.dispatch(
                  onChangeProductInput({ Name: "ProductCode", Value: e.target.value })
                )
              }
            />
          </div>
          <div className="col-md-3">
            <label>ProductName :</label>
            <input
              type="text"
              className="form-control form-control-sm"
              onChange={(e) =>
                store.dispatch(
                  onChangeProductInput({ Name: "ProductName", Value: e.target.value })
                )
              }
            />
          </div>
          <div className="col-md-3">
            <label>Qty :</label>
            <input
              type="text"
              className="form-control form-control-sm"
              onChange={(e) =>
                store.dispatch(
                  onChangeProductInput({ Name: "Qty", Value: e.target.value })
                )
              }
            />
          </div>
          <div className="col-md-3">
            <label>TotalPrice :</label>
            <input
              type="text"
              className="form-control form-control-sm"
              onChange={(e) =>
                store.dispatch(
                  onChangeProductInput({ Name: "TotalPrice", Value: e.target.value })
                )
              }
            />
          </div>
          <div className="col-md-3">
            <label>UnitPrice :</label>
            <input
              type="text"
              className="form-control form-control-sm"
              onChange={(e) =>
                store.dispatch(
                  onChangeProductInput({ Name: "UnitPrice", Value: e.target.value })
                )
              }
            />
          </div>
          <div className="col-md-3">
            <button onClick={SaveData} className='btn btn-primary mt-3' >Save Change</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateUpdateForm;
