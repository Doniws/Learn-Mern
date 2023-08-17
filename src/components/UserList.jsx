import { useEffect, useState } from "react";
import axios from "axios";
import { Link ,useParams } from "react-router-dom";
const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);
  const getUsers = async () => {
    const response = await axios.get("http://localhost:5000/users");
    setUsers(response.data);
    console.log(response.data)
  };

  const deleteUser = async (name) => {
    try {
      await axios.delete(`http://localhost:5000/users/${name}`);
      getUsers();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="columns">
        <div className="column is-half">
            <Link className="button is-success" to="add">Add New</Link>
          <table className="table is-striped is-fullwidth mt-5">
            <thead>
              <tr>
                <th>No</th>
                <th>Name</th>
                <th>email</th>
                <th>gender</th>
                <th>active</th>
                <th>actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, i) => (
                <tr key={user.id}>
                  <td>{i + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.gender}</td>
                  <td>{user.active ? "Active" : "Inactive"}</td>
                  <td>
                    <Link to={`edit/${user.name}`} className="button is-info is-small mr-1">
                        
                            Edit
                    </Link>
                    <button onClick={()=> deleteUser(user.name)} className="button is-danger is-small">
                            Delete
                    </button>
                    </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default UserList;
