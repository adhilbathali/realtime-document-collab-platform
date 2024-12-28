import React from 'react';

const Dashboard = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    return (
        <div className="container mt-5">
            <div className="jumbotron bg-light p-5">
                <h1 className="display-4">Welcome to Dashboard, {user.username}!</h1>
                <p className="lead">
                   This is your dashboard, where you can see all the documents you are working on
                </p>
            </div>
        </div>
    );
};

export default Dashboard;