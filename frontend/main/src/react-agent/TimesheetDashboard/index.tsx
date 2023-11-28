
import React, { useState } from 'react';
import { Input, Button, Alert } from '@react-agent/shadcn-ui'
import Navbar from './Navbar';
import UserLogin from './UserLogin';
import Dashboard from './Dashboard';

export interface TimesheetAppPageProps {
  logo?: string;
  onLogin: (username: string, password: string) => void;
};

const TimesheetAppPage: React.FC<TimesheetAppPageProps> = ({ logo, onLogin }) => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLoginChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name === 'user') {
      setUsername(value);
    } else {
      setPassword(value);
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onLogin(username, password);
  }

  return (
    <div className="flex flex-col h-screen">
      <Navbar logo={logo} />
      <UserLogin onLogin={onLogin} />
      <Dashboard />
      {username && password && (
        <div>
          <Alert>Logged in as: {username}</Alert>
          <Button onClick={handleSubmit}>Logout</Button>
        </div>
      )}
    </div>
  );
};

export default TimesheetAppPage;
