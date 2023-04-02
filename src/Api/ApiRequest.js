import axios from "axios";
import {
  onChangeProductInput,
  setProductList,
} from "../Redux/Slice/ProductSlice";
import { HideLoader, ShowLoader } from "../Redux/Slice/settingsSlice";
import { setUsers } from "../Redux/Slice/userSlice";
import store from "../Redux/Store/store";

const baseUrl = "https://crud.teamrabbil.com/api/v1";
export async function ReadProducts() {
  store.dispatch(ShowLoader());
  let URL = `${baseUrl}/ReadProduct`;
  let result = await axios.get(URL);
  store.dispatch(HideLoader());
  if (result.status === 200 && result.data["status"] === "success") {
    store.dispatch(setProductList(result.data["data"]));
  } else {
    store.dispatch(setProductList([]));
  }
}

export async function CreatedProducts(createPro, ObjectID) {
  store.dispatch(ShowLoader());

  let URL = `${baseUrl}/CreateProduct`;

  if (ObjectID !== 0) {
    URL = `${baseUrl}/UpdateProduct/${ObjectID}`;
  }

  let result = await axios.post(URL, createPro);
  store.dispatch(HideLoader());
  if (result.status === 200 && result.data["status"] === "success") {
    return true;
  } else {
    return false;
  }
}

export async function DeleteProducts(id) {
  store.dispatch(ShowLoader());
  let URL = `${baseUrl}/DeleteProduct/${id}`;
  let result = await axios.get(URL);
  store.dispatch(HideLoader());
  if (result.status === 200 && result.data["status"] === "success") {
    return true;
  } else {
    return false;
  }
}

export async function UpdateRequest(id, updatePro) {
  store.dispatch(ShowLoader());
  let URL = `${baseUrl}/UpdateProduct/${id}`;
  let result = await axios.post(URL, updatePro);
  store.dispatch(HideLoader());
  if (result.status === 200 && result.data["status"] === "success") {
    return true;
  } else {
    return false;
  }
}

export async function DetailsRequest(id) {
  let URL = `${baseUrl}/ReadProductByID/${id}`;
  let result = await axios.get(URL);
  if (result.status === 200 && result.data["status"] === "success") {
    let details = result.data["data"];
    store.dispatch(
      onChangeProductInput({ Name: "Img", Value: details[0]["Img"] })
    );
    store.dispatch(
      onChangeProductInput({
        Name: "ProductCode",
        Value: details[0]["ProductCode"],
      })
    );
    store.dispatch(
      onChangeProductInput({
        Name: "ProductName",
        Value: details[0]["ProductName"],
      })
    );
    store.dispatch(
      onChangeProductInput({ Name: "Qty", Value: details[0]["Qty"] })
    );
    store.dispatch(
      onChangeProductInput({
        Name: "TotalPrice",
        Value: details[0]["TotalPrice"],
      })
    );
    store.dispatch(
      onChangeProductInput({
        Name: "UnitPrice",
        Value: details[0]["UnitPrice"],
      })
    );
    return true;
  } else {
    return false;
  }
}

export async function DemoUsers() {
  let URL = `/allUsers`;
  let result = await axios.get(URL);
  if (result.status === 200 && result.data["data"] === "success") {
    store.dispatch(setUsers(result.data["data"]));
  } else {
    store.dispatch(setUsers([]));
  }
}
