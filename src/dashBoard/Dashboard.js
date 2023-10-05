import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopNavBar from "./navBarSection/TopNavBar";
import MainContent from "./mainContentSection/MainContent";

const Dashboard = () => {

    return (
        <div className="dashboard">
            <TopNavBar />
            <MainContent />
        </div>
);
};

export default Dashboard;