
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import jwt_decode from "jwt-decode";
import { useHistory } from 'react-router-dom';


const Comments = (props) => {
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
    const getNotes = async () => {
        const response = await axiosJWT.get('http://localhost:5000/createnote', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        setNotes(response.data);
    }


    /* View Note */

    const [editValues, setEditValues] = useState({
        id: props.id,
        title: props.title,
        note: props.note,
        
    });


 /*    const handleChangeValues = (value)=>{
        setEditValues(prevValues=>({
                ...prevValues,
                [value.target.id]: value.target.value,
            })
        )
    } */


  

 /*    const handleClickOpen = () => {
        props.setOpen(true);
    }; */

    const handleClose = () => {
        props.setOpen(false);
    };



    return (
       
        <div className="container mt-5">
           
           <dialog open={props.open} onClose={handleClose}>
           <h1>Signed in as  : {name}</h1>                    

                <dialogTitle>View Other Comments</dialogTitle>

                <dialogContent>
                <h1>{props.title}  // Backend not Created </h1>
                <p>{props.note} // Backend not Created  </p>
                </dialogContent>

                <div className="field mt-100">
                    <label className="label">Add a Comment</label>
                        <div className="controls">
                                <textarea class="textarea" placeholder="Add a Comment" rows="10"></textarea>
                        </div>
                </div>
                <dialogActions>
                    <button class="button is-danger is-light" onClick={handleClose}>Close </button>
                    <button class="button is-success is-light">Add Comment</button>
                </dialogActions>
                </dialog>
        </div>
        
    )
}

export default Comments;
