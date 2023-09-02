import './App.css';
import {Routes, Route} from "react-router-dom";
import Login from "./login/components/Login";
import AdminDashboard from "./admin/AdminDashboard";
import Dashboard from "./dashboard/components/Dashboard";
import Register from "./register/components/Register";
import useRoles from "./authentication/useRoles";
import PrivateRoute from "./authentication/PrivateRoute";

function App() {

    const {decodedJwt, user} = useRoles();
    console.log("JWT updated - New JWT:", user.jwt, "New Refresh JWT:", user.refreshJwt, decodedJwt.roles);

    return (
        <Routes>
            <Route path="/login" element={<Login decodedJwt={decodedJwt} user={user}/>}/>
            <Route path="/register" element={<Register/>}/>

            <Route path="/dashboard" element={
                <PrivateRoute decodedJwt={decodedJwt} user={user}>
                    {
                        decodedJwt.roles.find((role) => role === "ROLE_ADMIN") ?
                            <AdminDashboard/> : <Dashboard/>
                    }
                </PrivateRoute>
            }
            />
        </Routes>

    );
}

export default App;
