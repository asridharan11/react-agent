import React from 'react';
import TimesheetAppPage from './index';

const TimesheetAppPageDemo: React.FC = () => {
  const handleLogin = (username: string, password: string) => {
    console.log(`Username: ${username}, Password: ${password}`);
  };

  return <TimesheetAppPage logo="Logo_Text_Here" onLogin={handleLogin} />;
};

export default TimesheetAppPageDemo;
