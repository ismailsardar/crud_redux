import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { DemoUsers } from '../Api/ApiRequest'

const UserList = () => {
    useEffect(() => {
      (async ()=>{
        await DemoUsers();
      })()
    }, []);

    let userData = useSelector((state)=>(state.users.user));
    console.log(userData);
  return (
    <div>
        <h1>Users</h1>
    </div>
  )
}

export default UserList