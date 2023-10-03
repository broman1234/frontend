import React from 'react';
import useRegister from "../actions/useRegister";
import {DropdownButton, Dropdown, Button, Alert} from 'react-bootstrap';

const Register = () => {
    const {
        username,
        password,
        fetchedRoles,
        setUsername,
        setPassword,
        sendRegisterRequest,
        updateSelectedRole,
        getButtonTitle,
        errorMessage
    } = useRegister()

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                {errorMessage &&
                    <Alert key='danger' variant="danger">
                        {errorMessage}
                    </Alert>
                }
                <div className="col-md-4">
                    <h2 className="mb-4">Register</h2>
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
                            title={getButtonTitle()}
                            multiple
                            onSelect={selectedRole => updateSelectedRole(selectedRole)}
                        >
                            {fetchedRoles.map(role => (
                                <Dropdown.Item key={role} eventKey={role}>
                                    {role}
                                </Dropdown.Item>
                            ))}
                        </DropdownButton>
                    </div>
                    <div className="d-grid gap-2">
                        <Button
                            type="submit"
                            className="btn btn-primary"
                            onClick={sendRegisterRequest}
                        >
                            Register
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;