import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

const ListUsers = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        console.log(">> useEffect");
        axios.get('http://localhost:8080/api/users')
            .then(response => response.data)
            .then(userObjects => {
                console.log(userObjects);
                setUsers(userObjects)
            })
    }, [])

    const updateUser=()=>{
      



    }

    const deleteUser=()=>{
        console.log("==> delete user");
    }

    let renderUsers = () => {
        console.log(">>>>");
        return users.map((user, idx) => {
            return <tr key={idx}>
                <td><Link to={`/list/${user.id}`}>{user.id}</Link> </td>
                <td>{user.userName} </td>
                <td>{user.password} </td>
                <td>{user.emailAddress}</td>
                <td><button onClick={e=>{updateUser(user.id)}} className="btn btn-primary">Update</button></td>
                <td><button onClick={e=>{deleteUser(user.id)}} className="btn btn-danger">Delete</button></td>
            </tr>
        })
    }
    return (
        <div>
          

            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>User Name</th>
                        <th>Password</th>
                        <th>Email Address</th>
                        <th>Option1</th>
                        <th>Option2</th>
                    </tr>

                </thead>

                <tbody>
                    {renderUsers()}
                </tbody>

            </table>





        </div>
    );


};

export default ListUsers;