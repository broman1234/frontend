import './App.css';
import {Routes, Route} from "react-router-dom";
import Login from "./login/components/Login";
import AdminDashboard from "./dashboard/components/AdminDashboard";
import Dashboard from "./dashboard/components/Dashboard";
import Register from "./register/components/Register";
import useRoles from "./authentication/useRoles";
import PrivateRoute from "./authentication/PrivateRoute";

function App() {

    const {decodedJwt, user} = useRoles();
    console.log("jwt has been updated in App==========", user.jwt)

    return (
        <Routes>
            <Route path="/login" element={<Login decodedJwt={decodedJwt} user={user}/>}/>
            <Route path="/register" element={<Register/>}/>

            <Route path="/dashboard" element={
                <PrivateRoute>
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
