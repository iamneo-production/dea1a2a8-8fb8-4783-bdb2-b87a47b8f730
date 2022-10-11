import React from 'react';


function AdminDashboard(props) {

    const handleLogout = () => {
        props.history.push('/Signin');
    }

    return (
        <div>
            <div className='row'>
                <div className='col-sm-2'>
                    <div className='card shadow-lg p-3 mb-5 bg-white rounded border border-info'>
                        <a href='course' style={{ "text-decoration": "none" }}>Course</a><br /><br />
                        <a href='' style={{ "text-decoration": "none" }}>Instituition</a><br /><br />
                        <a href='' style={{ "text-decoration": "none" }}>Student</a><br /><br />
                        <a href='Signin' style={{ "text-decoration": "none" }}>Logout</a><br /><br />
                    </div>

                </div>
                <div className='col-sm-10 h-100'>
                    <div className='card shadow-lg p-3 mb-5 bg-white rounded border border-info'>
                        Welcome Admin!<br /><br />
                    </div>
                </div>
            </div>

        </div>
    );
}

export default AdminDashboard;