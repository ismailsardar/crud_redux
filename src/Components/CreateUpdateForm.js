import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CreatedProducts, DetailsRequest } from "../Api/ApiRequest";
import { ResetProductFormValue, onChangeProductInput } from "../Redux/Slice/ProductSlice";
import store from "../Redux/Store/store";

const CreateUpdateForm = () => {
  let navigate = useNavigate()
  let [ObjectID,SetObjectID]=useState(null);

    let createList = useSelector((state)=> state.product.FormValue);
    
    useEffect(() => {
      let QueryStrings = new URLSearchParams(window.location.search);
      let id = QueryStrings.get('id');
      if (id!==null) {
        SetObjectID(id);
        (async()=>{
          await DetailsRequest(id);
        })()
      }else{
        store.dispatch(ResetProductFormValue())
      }
    }, []);
    
    
    const SaveData = async ()=>{
      
        await CreatedProducts(createList,ObjectID);
        navigate('/');
      
    }
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <label>Image :</label>
            <input
            value={createList['Img']}
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
            value={createList['ProductCode']}
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
            value={createList['ProductName']}
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
            value={createList['Qty']}
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
            value={createList['TotalPrice']}
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
            value={createList['UnitPrice']}
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
