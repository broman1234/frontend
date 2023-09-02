import React from 'react';
import useDashboard from "../actions/useDashboard";

const AdminDashboard = () => {
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
                Admin Dashboard
            </div>
        </>
    );
};

export default AdminDashboard;