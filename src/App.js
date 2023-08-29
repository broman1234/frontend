import './App.css';
import {Routes, Route} from "react-router-dom";
import Login from "./login/components/Login";
import AdminDashboard from "./admin/AdminDashboard";
import Dashboard from "./dashboard/Dashboard";
import Register from "./register/components/Register";
import useRoles from "./authentication/useRoles";
import PrivateRoute from "./authentication/PrivateRoute";

function App() {

    const {decodedJwt} = useRoles();
    console.log("decodedJwt: ", decodedJwt);

    return (
        <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>

            <Route path="/dashboard" element={
                <PrivateRoute decodedJwt={decodedJwt}>
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
