import React, { useState } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'

const AuthorForm = () => {
    const [name, setName] = useState('');
    const [counter, setCounter] = useState(0);
    const [error, setError] = useState([]);

    let history = useHistory();

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/authors/new', {
            name
        })
        .then(res => {
            console.log("Response: ", res)
            let tempCounter = counter + 1;
            setCounter(tempCounter)
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
        <form onSubmit = {onSubmitHandler}>
            <div>
                <Link to = {"/api/authors/"}>Home</Link>
            </div>
            <h4>
                Add A New Author:
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
            <Link to = {"/api/authors/"}><button>Cancel</button></Link>
                {"      "}
                <button type = "submit">Submit</button>
            </p>
        </form>
    )
}

export default AuthorForm