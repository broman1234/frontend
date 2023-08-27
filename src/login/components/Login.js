import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import useLogin from "../actions/useLogin";

const Login = () => {
    const {
        username,
        password,
        fetchedRoles,
        setUsername,
        setPassword,
        selectedRoles,
        setSelectedRoles,
        sendLoginRequest
    } = useLogin()

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-4">
                    <h2 className="mb-4">Login</h2>
                    <form>
                        <div className="form-group mb-3">
                            <label htmlFor="username">Username</label>
                            <input
                                type="text"
                                className="form-control"
                                id="username"
                                value={username}
                                onChange={event => setUsername(event.target.value)}
                            />
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                value={password}
                                onChange={event => setPassword(event.target.value)}
                            />
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="roles">Roles</label>
                            <select
                                multiple
                                className="form-control"
                                id="roles"
                                value={selectedRoles}
                                onChange={event => setSelectedRoles(Array.from(event.target.selectedOptions, option => option.value))}
                            >
                                {fetchedRoles.map(role => (
                                    <option key={role.id} value={role.id}>
                                        {role.roleName}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="d-grid gap-2">
                            <button
                                type="submit"
                                className="btn btn-primary"
                                onClick={sendLoginRequest}
                            >
                                Login
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;

