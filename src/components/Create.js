import React, { useState } from "react";
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";

const Create = () => {
    const history = useNavigate();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("https://6471a39c6a9370d5a41a8193.mockapi.io/mayur/react/", {
            firstName: firstName,
            lastName: lastName
        }).then(() => {
            history("/Read");
        })
        setFirstName("");
        setLastName('');

    }
    return (
        <div className="d-flex justify-content-center" >
            <form className="w-25 border border-primary p-3 bg-light">
                <div className="form-group">
                    <label for="formBasicFirstName">First Name</label>
                    <input type="text" className="form-control border border-dark" id="formBasicFirstName" name="formBasicFirstName" onChange={(e) => setFirstName(e.target.value)} value={firstName} />
                </div>
                <div className="form-group">
                    <label for="formBasicLastName">Last Name</label>
                    <input type="text" className="form-control border border-dark" id="formBasicLastName" name="formBasicLastName" onChange={(e) => setLastName(e.target.value)} value={lastName} />
                </div>
                <div className="form-group form-check">
                    <input type="checkbox" className="form-check-input border border-dark" id="exampleCheck1" />
                    <label className="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <Link to='/Read'>
                    <button className="border border-dark w-25" variant="primary" type="submit" onClick={handleSubmit}>
                        Submit
                    </button>
                </Link>
            </form>
        </div>
    )
}
export default Create;