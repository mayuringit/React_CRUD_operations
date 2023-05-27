import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Read = () => {
    const [apiData, setApiData] = useState([]);

    const getApiData = () => {
        axios.get('https://6471a39c6a9370d5a41a8193.mockapi.io/mayur/react/')
            .then((res) => {
                setApiData(res.data);
            })
    }

    useEffect(() => {
        getApiData();
    }, [])

    const handleDelete = (id) => {
        axios.delete(`https://6471a39c6a9370d5a41a8193.mockapi.io/mayur/react/${id}`).then(() => {
            getApiData();
            setApiData();
        })
    }

    const setToLocaleStore = (id, firstName, lastName) => {
        localStorage.setItem("firstName", firstName);
        localStorage.setItem("lastName", lastName);
        localStorage.setItem("id", id);
    }

    return (
        <>
            <div className="d-flex justify-content-center align-items-center mt-5 ">
                <table striped bordered hover variant="dark" className="bg-light w-50 border border-primary">
                    <thead  >
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {apiData?.map((e) => (
                            <tr key={e.id}>
                                <td>{e.id}</td>
                                <td>{e.firstName}</td>
                                <td>{e.lastName}</td>
                                <td>
                                    <Link to="/Update">
                                        <button
                                            className="btn btn-primary mx-2"
                                            onClick={() => setToLocaleStore(e.id, e.firstName, e.lastName)}
                                        >
                                            Edit
                                        </button>
                                    </Link>
                                    <Link to="/Read">
                                        <button
                                            className="btn btn-danger"
                                            onClick={() => handleDelete(e.id)}
                                        >
                                            Delete
                                        </button>
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>
            <div className="d-flex justify-content-center align-items-center mt-5">
                <Link to="/">
                    <button className="btn btn-danger d-block">New Entry</button>
                </Link>
            </div>

        </>
    )
}

export default Read;
