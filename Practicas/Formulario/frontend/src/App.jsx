import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Verifica que estas rutas coincidan con dónde tienes guardados Login, Dashboard y Choferes
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Choferes from "./pages/Choferes"; // Import para iti baro a component
import Usuarios from "./pages/Usuarios"; // Import para iti baro a component
import Registro from "./pages/Registro"; // Import de la nueva vista de Registro
import Recuperar from "./pages/Recuperar"; // Import de la nueva vista de Recuperar
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Router>
      <Routes>
        {/* Rutas públicas (Cualquiera puede verlas) */}
        <Route path="/" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/recuperar" element={<Recuperar />} />

        {/* Ruta protegida para Dashboard */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        {/* Ruta protegida para Choferes */}
        <Route
          path="/choferes"
          element={
            <ProtectedRoute>
              <Choferes />
            </ProtectedRoute>
          }
        />

        {/* Ruta protegida para Usuarios */}
        <Route
          path="/usuarios"
          element={
            <ProtectedRoute>
              <Usuarios />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
