import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Update = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [id, setId] = useState(0);
    const navigate = useNavigate()
    const handleUpdate = (e) => {
        e.preventDefault();
        axios
            .put(`https://6471a39c6a9370d5a41a8193.mockapi.io/mayur/react/${id}`, {
                firstName: firstName,
                lastName: lastName
            })
            .then(() => {
                navigate("/Read")
            });
    };

    useEffect(() => {
        const storedFirstName = localStorage.getItem("firstName");
        const storedLastName = localStorage.getItem("lastName");
        const storedId = parseInt(localStorage.getItem("id")); // Parse the ID as an integer
        setFirstName(storedFirstName);
        setLastName(storedLastName);
        setId(storedId);
    }, []);

    return (
        <div className="d-flex justify-content-center" >
            <form className="w-25 border border-primary p-3 bg-light">
                <div className="form-group">
                    <label for="formBasicFirstName">First Name</label>
                    <input type="text" className="form-control" id="formBasicFirstName" name="formBasicFirstName" onChange={(e) => setFirstName(e.target.value)} value={firstName} />
                </div>
                <div className="form-group">
                    <label for="formBasicLastName">Last Name</label>
                    <input type="text" className="form-control" id="formBasicLastName" name="formBasicLastName" onChange={(e) => setLastName(e.target.value)} value={lastName} />
                </div>
                <div className="form-group form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" for="exampleCheck1">Check me out</label>
                </div>

                <button variant="primary" type="submit" onClick={handleUpdate}>
                    Update
                </button>
            </form>
        </div>
    );
};

export default Update;