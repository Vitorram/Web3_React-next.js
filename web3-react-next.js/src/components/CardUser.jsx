'use client';

import { FaTrashAlt, FaEdit } from "react-icons/fa";
import { useState } from "react";

export default function CardUser({ id, avatar, name, email, users, setUsers }) {

  const [modal, setModal] = useState(false);

  const [nameUser, setNameUser] = useState(name);
  const [emailUser, setEmailUser] = useState(email);
  const [passUser, setPassUser] = useState("");
  const [avatarUser, setAvatarUser] = useState(avatar);

  // DELETE USER
  const handleDelete = async () => {
    try {
      const response = await fetch(`http://localhost:3333/user/${id}`, {
        method: "DELETE",
      });

      const data = await response.json();

      console.log(data);

      if (response.ok) {
        alert("Usuário deletado com sucesso!");

        const filteredUsers = users.filter(
          (user) => user.id !== id
        );

        setUsers(filteredUsers);

      } else {
        alert("Erro ao deletar usuário!");
      }

    } catch (error) {
      console.log(error);
      alert("Erro na requisição!");
    }
  };

  // UPDATE USER
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:3333/user/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: nameUser,
          email: emailUser,
          avatar: avatarUser,
          ...(passUser && { pass: passUser }),
        }),
      });

      const data = await response.json();

      console.log(data);

      if (response.ok) {

        alert("Usuário atualizado com sucesso!");

        const updatedUsers = users.map((user) => {
          if (user.id === id) {
            return {
              ...user,
              name: nameUser,
              email: emailUser,
              avatar: avatarUser,
            };
          }

          return user;
        });

        setUsers(updatedUsers);

        setModal(false);

      } else {
        alert("Erro ao atualizar usuário!");
      }

    } catch (error) {
      console.log(error);
      alert("Erro na requisição!");
    }
  };

  return (
    <>
      <div style={styles.container}>

        <img
          src={avatar}
          alt={name}
          style={styles.image}
        />

        <div style={styles.actions}>
          <FaEdit
            style={styles.icons}
            onClick={() => setModal(true)}
          />

          <FaTrashAlt
            style={styles.icons}
            onClick={handleDelete}
          />
        </div>

        <div>
          <h2 style={styles.name}>{name}</h2>
          <p style={styles.email}>{email}</p>
        </div>

      </div>

      {modal && (
        <div style={styles.modal}>
          <div style={styles.content}>

            <h2 style={styles.title}>
              Editar Usuário
            </h2>

            <form
              style={styles.form}
              onSubmit={handleSubmit}
            >

              <div style={styles.field}>
                <label>Nome</label>

                <input
                  type="text"
                  value={nameUser}
                  onChange={(e) => setNameUser(e.target.value)}
                  style={styles.input}
                  required
                />
              </div>

              <div style={styles.field}>
                <label>Email</label>

                <input
                  type="email"
                  value={emailUser}
                  onChange={(e) => setEmailUser(e.target.value)}
                  style={styles.input}
                  required
                />
              </div>

              <div style={styles.field}>
                <label>Senha</label>

                <input
                  type="password"
                  placeholder="Deixe vazio para não alterar"
                  value={passUser}
                  onChange={(e) => setPassUser(e.target.value)}
                  style={styles.input}
                />
              </div>

              <div style={styles.field}>
                <label>Avatar</label>

                <input
                  type="text"
                  value={avatarUser}
                  onChange={(e) => setAvatarUser(e.target.value)}
                  style={styles.input}
                />
              </div>

              <div style={styles.actionsButtons}>

                <button
                  type="submit"
                  style={styles.saveBtn}
                >
                  Salvar
                </button>

                <button
                  type="button"
                  style={styles.cancelBtn}
                  onClick={() => setModal(false)}
                >
                  Cancelar
                </button>

              </div>

            </form>
          </div>
        </div>
      )}
    </>
  );
}

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    gap: 20,
    padding: 20,
    border: "1px solid #ccc",
    borderRadius: 10,
    position: "relative",
    backgroundColor: "#fff",
    boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
  },

  image: {
    width: 80,
    height: 80,
    borderRadius: "50%",
    objectFit: "cover",
    border: "2px solid #ddd",
  },

  name: {
    fontSize: 18,
    fontWeight: 600,
    marginBottom: 2,
  },

  email: {
    fontSize: 14,
    color: "#666",
  },

  actions: {
    position: "absolute",
    top: 10,
    right: 10,
    display: "flex",
    gap: 10,
  },

  icons: {
    cursor: "pointer",
    color: "#555",
    width: 22,
    height: 22,
  },

  modal: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
  },

  content: {
    backgroundColor: "#fff",
    padding: 25,
    borderRadius: 12,
    width: 360,
    boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
  },

  title: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
  },

  form: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },

  field: {
    display: "flex",
    flexDirection: "column",
    gap: 4,
  },

  input: {
    padding: 10,
    borderRadius: 8,
    border: "1px solid #ccc",
    fontSize: 14,
    outline: "none",
  },

  actionsButtons: {
    display: "flex",
    gap: 10,
    marginTop: 15,
  },

  saveBtn: {
    flex: 1,
    padding: 10,
    backgroundColor: "#3b82f6",
    color: "#fff",
    border: "none",
    borderRadius: 8,
    cursor: "pointer",
  },

  cancelBtn: {
    flex: 1,
    padding: 10,
    backgroundColor: "#e5e7eb",
    color: "#333",
    border: "none",
    borderRadius: 8,
    cursor: "pointer",
  },
};