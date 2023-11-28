
import React, { useState } from 'react';
import { Input, Button } from '@react-agent/shadcn-ui'

export interface UserLoginProps {
  onLogin: (username: string, password: string) => void;
};

const UserLogin: React.FC<UserLoginProps> = ({ onLogin }) => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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
    <div className="flex flex-col items-center justify-center h-screen">
      <form onSubmit={handleSubmit} className="flex flex-col w-1/3">
        <Input 
            className="w-full mb-2 h-8" 
            type="text" 
            name="user" 
            placeholder="Username"
            value={username}
            onChange={handleInputChange}
        />
        <Input 
            className="w-full mb-2 h-8" 
            type="password" 
            name="password" 
            placeholder="Password" 
            value={password} 
            onChange={handleInputChange}
        />
        <Button type="submit" className="mt-4 h-8 w-full">
            Login
        </Button>
      </form>
    </div>
 );
};

export default UserLogin;
