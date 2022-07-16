
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import jwt_decode from "jwt-decode";
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import FormDialog from "./Comments";


const Dashboard = (props) => {
    const [name, setName] = useState('');
    const [token, setToken] = useState('');
    const [expire, setExpire] = useState('');
    const [notes, setNotes] = useState([]);
    const history = useHistory();

    useEffect(() => {
        refreshToken();
        getNotes();
    }, []);

    const refreshToken = async () => {
        try {
            const response = await axios.get('http://localhost:5000/token');
            setToken(response.data.accessToken);
            const decoded = jwt_decode(response.data.accessToken);
            setName(decoded.name);
            setExpire(decoded.exp);
        } catch (error) {
            if (error.response) {
                history.push("/");
            }
        }
    }

    const axiosJWT = axios.create();

    axiosJWT.interceptors.request.use(async (config) => {
        const currentDate = new Date();
        if (expire * 1000 < currentDate.getTime()) {
            const response = await axios.get('http://localhost:5000/token');
            config.headers.Authorization = `Bearer ${response.data.accessToken}`;
            setToken(response.data.accessToken);
            const decoded = jwt_decode(response.data.accessToken);
            setName(decoded.name);
            setExpire(decoded.exp);
        }
        return config;
    }, (error) => {
        return Promise.reject(error);
    });

    const getNotes = async () => {
        const response = await axiosJWT.get('http://localhost:5000/createnote', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        setNotes(response.data);
    }


    const [open, setOpen] = React.useState(false);

    const cardOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false);
    };



    return (
       


        <div className="container mt-5">
            <h1>Signed in as  : {name}</h1>
            <FormDialog open={open} setOpen={setOpen} id={props.id} title={props.title} note={props.note} /> 
            <Link to ='createnote'><button class="button is-success" style={{position:'absolute',right: 5 }} >Create New Note</button>{' '}</Link>
            <div></div>
            <table className="table is-striped is-fullwidth">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title of the Note</th>
                        <th>Note</th>
                        <th>Comments</th>
                    </tr>
                </thead>
                <tbody>
                    {notes.map((user, index) => (
                        <tr key={user.id}>
                            <td>{index + 1}</td>
                            <td>{user.title}</td>
                            <td>{user.note}</td>
                            <td> 
                            <button class="button is-small is-warning is-rounded" onClick={cardOpen}>Add Comment</button>
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
        
    )
}

export default Dashboard;
