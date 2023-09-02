import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import useDashboard from "../actions/useDashboard";

const Dashboard = () => {
    const {logOut} = useDashboard();

    return (
        <>
            <div className="float-right">
                <button
                    className="btn btn-danger"
                    onClick={logOut}
                >
                    Log Out
                </button>
            </div>
            <div>
                Dashboard
            </div>
        </>
);
};

export default Dashboard;