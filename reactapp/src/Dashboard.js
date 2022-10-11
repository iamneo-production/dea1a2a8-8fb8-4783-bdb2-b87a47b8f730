import React from 'react';

function Dashboard(props) {

  const handleLogout = () => {    
    props.history.push('/Signin');
  }

  return (
    <div>
      Welcome User!<br /><br />
      <input type="button" onClick={handleLogout} value="Logout" />
    </div>
  );
}

export default Dashboard;