
import React, { useState } from 'react';
import { Button, Input, Typography, Alert } from '@react-agent/shadcn-ui'
import TimesheetForm from './TimesheetForm';

export interface DashboardProps {};

const Dashboard: React.FC<DashboardProps> = () => {
    const [message, setMessage] = useState<string | null>(null);

    const handleFormSubmit = () => {
        setMessage('Timesheet has been successfully submitted.');
    };

    return (
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
            {message && <Alert variant="success">{message}</Alert>}
            <Typography variant="h1" className="text-3xl">
                Timesheet Dashboard
            </Typography>
            <TimesheetForm onSubmit={handleFormSubmit} />
        </div>
    );
};

export default Dashboard;
