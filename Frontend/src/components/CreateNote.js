import React, { useState } from 'react'
import axios from "axios";
import { useHistory } from "react-router-dom";

const CreateNote = () => {
    const [title, setTitle] = useState('');
    const [note, setNote] = useState('');
    const [msg, setMsg] = useState('');
    const history = useHistory();

    const CreateNote = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/createnote', {
                title: title,
                note: note,
                
            });
            history.push("/dashboard");
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    }

    return (
        <section className="hero has-background-grey-light is-fullheight is-fullwidth">
            <div className="hero-body">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-4-desktop">
                            <form onSubmit={CreateNote} className="box">
                                <p className="has-text-centered">{msg}</p>


                                <div className="field mt-5"> 
                                    <label className="label">Title</label>
                                    <div className="controls">
                                        <input type="text" className="input" placeholder="Title"
                                            value={title} onChange={(e) => setTitle(e.target.value)} />
                                    </div>
                                </div>


                                <div className="field mt-100">
                                    <label className="label">Note</label>
                                    <div className="controls">
                                        <textarea class="textarea" placeholder="Write a Note" rows="10" 
                                        value={note} onChange={(e) => setNote(e.target.value)}></textarea>
                                    </div>
                                </div>
                               
                                
                                <div className="field mt-5">
                                    <button className="button is-success is-fullwidth">Create Note</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CreateNote;
