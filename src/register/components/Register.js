import React from 'react';
import useRegister from "../actions/useRegister";
import {DropdownButton, Dropdown} from'react-bootstrap';

const Register = () => {
    const {
        username,
        password,
        fetchedRoles,
        setUsername,
        setPassword,
        selectedRoles,
        setSelectedRoles,
        sendRegisterRequest
    } = useRegister()

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-4">
                    <h2 className="mb-4">Register</h2>
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
                            <DropdownButton
                                id="roles"
                                title="Select Roles"
                                multiple
                                onSelect={selectedValues => setSelectedRoles(selectedValues)}
                            >
                                {fetchedRoles.map(role => (
                                    <Dropdown.Item key={role.id} eventKey={role.id}>
                                        {role.roleName}
                                    </Dropdown.Item>
                                ))}
                            </DropdownButton>
                        </div>
                        <div className="d-grid gap-2">
                            <button
                                type="submit"
                                className="btn btn-primary"
                                onClick={sendRegisterRequest}
                            >
                                Register
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register;