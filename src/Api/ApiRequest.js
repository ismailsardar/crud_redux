import axios from "axios";
import { setProductList } from "../Redux/Slice/ProductSlice";
import { setUsers } from "../Redux/Slice/userSlice";
import store from "../Redux/Store/store";

const baseUrl = 'https://crud.teamrabbil.com/api/v1';
export async function ReadProducts() {
    let URL = `${baseUrl}/ReadProduct`;
    let result = await axios.get(URL);
    if (result.status===200 && result.data['status']==='success') {
        store.dispatch(setProductList(result.data['data']));
    } else {
        store.dispatch(setProductList([]));
    }
}

export async function CreatedProducts(createPro) {
    let URL = `${baseUrl}/CreateProduct`;
    let result = await axios.post(URL,createPro);
    if (result.status===200 && result.data['status']==='success') {
        return true;
    } else {
        return false;
    }
}

export async function DeleteProducts(id) {
    let URL = `${baseUrl}//DeleteProduct/${id}`;
    let result = await axios.post(URL);
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