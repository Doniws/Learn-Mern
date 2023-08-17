import { useState } from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";

const AddUser = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [gender, setGender] = useState("Laki-laki")
    const [active, setActive] = useState(true); // Inisialisasi active sebagai boolean
    const navigate = useNavigate();

    const saveUser = async(e)=> {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/users',{
                name,
                email,
                gender,
                active
            })
            navigate("/")
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className="columns">
            <div className="column is-half">
                <form onSubmit={saveUser}>
                    <div className="field">
                        <label className="label">name</label>
                        <div className="control">
                            <input type="text" 
                            onChange={(e)=> setName(e.target.value)}
                            value={name}
                            className="input" placeholder="nameId"  />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">email</label>
                        <div className="control">
                            <input type="text"
                            onChange={(e)=> setEmail(e.target.value)}
                            value={email}
                            className="input" placeholder="email" />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Gender</label>
                        <div className="control">
                            <div className="select is-fullwidth">
                                <select onChange={(e)=> setGender(e.target.value)}
                            value={gender}>
                                    <option value="laki-laki">laki-laki</option>
                                    <option value="perempuan">perempuan</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">active</label>
                        <div className="control">
                            <div className="select is-fullwidth">
                                <select onChange={(e) => setActive(e.target.value === "true")} // Menggunakan boolean active
                                    value={active}>
                                    <option value={true}>Aktif</option>
                                    <option value={false}>Tidak Aktif</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="field">
                        <div className="control">
                            <button className="button is-success">save</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddUser;
