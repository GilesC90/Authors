import axios from "axios";
import React, { useEffect, useState } from "react";
import { Route, Link, useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import '../App.css';



export default () => {
    const [authors, setAuthors] = useState([]);
    // cosnt [loading, setLoading] = useState(false)
    const [counter, setCounter] = useState(0);

    let history = useHistory();


    useEffect(() => {
        // setLoading(true);
        axios.get("http://localhost:8000/api/authors")
            .then(res => {
                setAuthors(res.data)
                console.log(res.data)
            })
            .catch(err => console.log("ERROR: ", err))
            // .finally(() => setLoading(false))
    }, [counter])

    const deleteAuthor = (id) => {
        axios.delete("http://localhost:8000/api/authors/delete/" + id)
        .then(res => {
            console.log(res.data)
            let tempCounter = counter + 1;
            setCounter(tempCounter)
            history.push('/api/authors')
            
        })
        .catch(err => console.log(err))
    }

    return (
        <div className="App">
        <div>
            <Link to = {"/api/authors/new"}>Add An Author</Link>
        </div>
            <h4>
                We Have Quotes By:
            </h4>
            <table className = "table table-sm">
                <thead className = "thead-dark">
                    <tr>
                        <td>
                            Author
                        </td>
                        <td>
                            Actions Available
                        </td>
                    </tr>
                </thead>
                {authors.map((author, index) => {
                    return(
                    <tbody  key = { author._id }>
                        <tr>
                            <td>
                                { author.name }
                            </td>
                            <td>
                                <Link to = { "/api/authors/edit/" + author._id }><button>Edit</button></Link>
                                {"       "}
                                <button onClick = {() => deleteAuthor(author._id)}>Delete</button>
                            </td>
                        </tr>
                    </tbody>
                )})}
            </table>
        </div>
    )
}