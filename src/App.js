import './App.css';
import {Routes, Route} from "react-router-dom";
import Login from "./login/components/Login";
import useRoles from "./authentication/useRoles";
import AdminDashboard from "./admin/AdminDashboard";
import Dashboard from "./dashboard/Dashboard";
import Register from "./register/components/Register";

function App() {

    const {roles} = useRoles();

    return (
        <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>

            <Route path="/dashboard" element={
                roles.find((role) => role === "ROLE_ADMIN") ?
                <AdminDashboard/> : <Dashboard />
            }/>
        </Routes>

    );
}

export default App;
