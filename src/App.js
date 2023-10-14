import './App.css';
import {Routes, Route} from "react-router-dom";
import Login from "./login/components/Login";
import AdminDashboard from "./adminDashboard/components/AdminDashboard";
import Dashboard from "./dashBoard/Dashboard";
import Register from "./register/components/Register";
import PrivateRoute from "./authentication/PrivateRoute";
import {useContext, useEffect} from "react";
import {UserContext} from "./authentication/userProvider";
import login from "./login/components/Login";

function App() {
    const {decodedJwt, jwt} = useContext(UserContext);
    console.log("jwt has been updated in App==========", jwt, decodedJwt.roles)
    useEffect(() => {
        document.body.style.backgroundColor = '#494D5F'; // 你想要的背景颜色
    }, []);

    return (
        <Routes>
            <Route path="/login" element={<Login/>}/>
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
