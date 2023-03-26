import axios from "axios";
import { setProductList } from "../Redux/Slice/ProductSlice";
import { HideLoader, ShowLoader } from "../Redux/Slice/settingsSlice";
import { setUsers } from "../Redux/Slice/userSlice";
import store from "../Redux/Store/store";

const baseUrl = 'https://crud.teamrabbil.com/api/v1';
export async function ReadProducts() {
    store.dispatch(ShowLoader());
    let URL = `${baseUrl}/ReadProduct`;
    let result = await axios.get(URL);
    store.dispatch(HideLoader());
    if (result.status===200 && result.data['status']==='success') {
        store.dispatch(setProductList(result.data['data']));
    } else {
        store.dispatch(setProductList([]));
    }
}

export async function CreatedProducts(createPro) {
    store.dispatch(ShowLoader());
    let URL = `${baseUrl}/CreateProduct`;
    let result = await axios.post(URL,createPro);
    store.dispatch(HideLoader());
    if (result.status===200 && result.data['status']==='success') {
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
    if (result.status===200 && result.data['status']==='success') {
        return true;
    } else {
        return false;
    }
}

export async function UpdateRequest(id,updatePro) {
    store.dispatch(ShowLoader());
    let URL = `${baseUrl}/UpdateProduct/${id}`;
    let result = await axios.post(URL,updatePro);
    store.dispatch(HideLoader());
    if (result.status===200 && result.data['status']==='success') {
        return true;
    } else {
        return false;
    }
}

export async function DetailsRequest(id) {
    let URL = `${baseUrl}/ReadProductByID/${id}`;
    let result = await axios.get(URL);
    if (result.status===200 && result.data['status']==='success') {
        return true;
    } else {
        return false;
    }
}

export async function DemoUsers(){
    let URL = `/allUsers`;
    let result = await axios.get(URL);
    if (result.status===200 && result.data['data']==='success') {
        store.dispatch(setUsers(result.data['data']));
    } else {
        store.dispatch(setUsers([]));
    }
}