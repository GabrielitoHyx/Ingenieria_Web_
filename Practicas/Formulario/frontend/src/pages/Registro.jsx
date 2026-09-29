import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Registro() {
  const [formData, setFormData] = useState({
    correo: "",
    password: "",
    rol: "Cliente",
    pregunta: "¿Cuál es tu primer vehículo?",
    respuesta: "",
  });
  const [mensaje, setMensaje] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/api/registro", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      setMensaje(data.message);
      if (response.ok) setTimeout(() => navigate("/"), 2000);
      // eslint-disable-next-line no-unused-vars
    } catch (err) {
      setMensaje("Error al conectar con el servidor.");
    }
  };

  return (
    <div style={{ padding: "40px", textAlign: "center", color: "white" }}>
      <h2>Registro en Sistema Logístico</h2>
      {mensaje && <p style={{ color: "#5bc0de" }}>{mensaje}</p>}
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          maxWidth: "300px",
          margin: "0 auto",
        }}
      >
        <input
          type="email"
          placeholder="Correo"
          required
          onChange={(e) => setFormData({ ...formData, correo: e.target.value })}
        />
        <input
          type="password"
          placeholder="Contraseña"
          required
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
        />
        <select
          onChange={(e) => setFormData({ ...formData, rol: e.target.value })}
        >
          <option value="Cliente">Cliente</option>
          <option value="Chofer">Chofer</option>
        </select>
        <select
          onChange={(e) =>
            setFormData({ ...formData, pregunta: e.target.value })
          }
        >
          <option>¿Cuál es tu primer vehículo?</option>
          <option>¿Ciudad de nacimiento?</option>
        </select>
        <input
          type="text"
          placeholder="Respuesta de seguridad"
          required
          onChange={(e) =>
            setFormData({ ...formData, respuesta: e.target.value })
          }
        />
        <button type="submit">Registrarse</button>
      </form>
      <p>
        <Link to="/" style={{ color: "#5bc0de" }}>
          Volver al Login
        </Link>
      </p>
    </div>
  );
}
