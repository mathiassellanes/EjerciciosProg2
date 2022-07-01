import React, { useEffect, useState } from "react";
import axios from "axios";
import Modal from "@mui/material/Modal";
import "./home.css";

function Home() {
  const [user, setUser] = useState([]);
  const [open, setOpen] = useState(false);
  const [name, setName] = useState([]);
  const [password, setPassword] = useState([]);
  const [id, setId] = useState(Number);
  const [message, setMessage] = useState("");
  const [modalIsPut, setModalIsPut] = useState(false);

  const post = () => {
    axios
      .post(
        "http://10.1.1.72:8080/users",
        {
          name: name,
          password: password,
        },
        {
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
            Accept: "*/*",
            "Access-Control-Allow-Origin": "*",
          },
        }
      )
      .then((response) => {
        setMessage(response.data);
        get();
      });
  };

  const put = () => {
    axios
      .put(
        `http://10.1.1.72:8080/users/${id}`,
        {
          name,
          password,
        },
        {
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
            Accept: "*/*",
            "Access-Control-Allow-Origin": "*",
          },
        }
      )
      .then((response) => {
        setMessage(response.data);
        get();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const axiosRemove = (id) => {
    axios
      .delete(`http://10.1.1.72:8080/users/${id}`, {
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
          Accept: "*/*",
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((response) => {
        setMessage(response.data);
        get();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const get = () => {
    axios
      .get("http://10.1.1.72:8080/users", {
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
          Accept: "*/*",
        },
      })
      .then((response) => {
        setUser(response.data);
      });
  };

  useEffect(() => {
    get();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1>User List</h1>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Password</th>
                <th>Methods</th>
              </tr>
            </thead>
            <tbody>
              {user.map(({ id, name, password }) => (
                <>
                  <tr key={id}>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{password}</td>
                    <td>
                      <button
                        className="home_button"
                        onClick={() => {
                          setOpen(true);
                          setId(id);
                          setModalIsPut(true);
                        }}
                      >
                        Edit
                      </button>
                      <button
                        className="home_button"
                        onClick={async () => {
                          await axiosRemove(id);
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </div>
        <button
          className="home_button_add"
          onClick={() => {
            setModalIsPut(false);
            setOpen(true);
          }}
        >
          Add +
        </button>
        {modalIsPut ? (
          <Modal
            open={open}
            onClose={() => setOpen(false)}
            className="modal-presentation"
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <div className="modal">
              <div className="modal-header">
                <span id="modal-modal-title">Edit User</span>
              </div>
              <div className="modal-body">
                <span>Name:</span>
                <input
                  type="text"
                  onChange={(event) => setName(event.target.value)}
                />
                <span>Password:</span>
                <input
                  type="text"
                  onChange={(event) => setPassword(event.target.value)}
                />
                <button
                  onClick={async () => {
                    await put();
                    setOpen(false);
                    setModalIsPut(false);
                    get();
                  }}
                >
                  Update
                </button>
              </div>
            </div>
          </Modal>
        ) : (
          <Modal
            open={open}
            onClose={() => setOpen(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <div className="modal">
              <div className="modal-header">
                <h2 id="modal-modal-title">Add User</h2>
              </div>
              <div className="modal-body">
                <span>Name:</span>
                <input
                  type="text"
                  onChange={(event) => setName(event.target.value)}
                />
                <span>Password:</span>
                <input
                  type="text"
                  onChange={(event) => setPassword(event.target.value)}
                />
                <button
                  onClick={async () => {
                    await post();
                    setOpen(false);
                    setModalIsPut(false);
                  }}
                >
                  Add
                </button>
              </div>
            </div>
          </Modal>
        )}
      </div>
    </div>
  );
}

export default Home;
