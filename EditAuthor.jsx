import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams, useHistory } from "react-router-dom";

const EditAuthor = () => {
    let history = useHistory();

    const {id} = useParams();

    const [name, setName] = useState("");
    const [error, setError] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors/' + id)
            .then(res => {
                setName(res.data.name);
            })
            .catch(err => console.log(err))
    }, [])

    const editForm = (e) => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/authors/edit/' + id, {
            name
        })
            .then(res => {
                history.push('/api/authors')
            })
            .catch(err => {
            console.log('ERROR: ', err.response.data.error.errors)
            const errorResponse = (err.response.data.error.errors)
            const errArr = []
            for (const key of Object.keys(errorResponse)) {
                errArr.push(errorResponse[key].message)
            }
            setError(errArr)
        })
    }

    return (
        <form onSubmit = {editForm}>
            <div>
                <Link to = {"/api/authors/"}>Home</Link>
            </div>
            <h4>
                Edit This Author:
            </h4>
            <p>
                <label>
                    Name:
                </label>
                <input type = "text" onChange = {(e) => setName(e.target.value)} value = {name}/>
            </p>
            <p>
                { error.map((err, index) => <h3 className = "text-uppercase font-weight-bold text-danger" key = { index }> { err }</h3>) }
            </p>
            <p>
                <button>Cancel</button>
                {"      "}
                <button type = "submit">Submit</button>
            </p>
        </form>
    )
}

export default EditAuthor