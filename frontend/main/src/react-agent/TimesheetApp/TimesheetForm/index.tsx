
import React, { useState } from 'react';
import { Typography, Button, Input, Select, Alert } from '@react-agent/shadcn-ui';

export interface TimesheetFormProps {};

export interface FormState {
  name: string,
  department: string,
  email: string
};

export type OptionsType = { value: string, label: string };

const TimesheetForm = (props: TimesheetFormProps) => {

  const [formState, setFormState] = useState<FormState>({
    name: '',
    department: '',
    email: '',
  });
  
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>, field : string) => {
    setFormState({ ...formState, [field]: event.target.value });
  };

  const handleSubmit = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    console.log(formState);
  };

  // Ideally, these options would come from an API,
  const departmentOptions: OptionsType[] = [
    {value: 'marketing', label: 'Marketing'},
    {value: 'development', label: 'Development'},
    {value: 'finance', label: 'Finance'},
    {value: 'hr', label: 'HR'}
  ];

  const { name, department, email } = formState;
  const isFormValid = name && department && email;
  
  return (
    <div className="flex-1 w-0 flex flex-col md:ml-64">
      <div className="h-16 flex items-center justify-between px-6">
        <Typography variant="h5">Timesheet Submission</Typography>
        <Button variant="outline" onClick={handleSubmit} disabled={!isFormValid}>Submit</Button>
      </div>
      <div className="flex-1 overflow-y-auto p-6">
        <Input name="name" placeholder="Enter name" value={name} onChange={(e) => handleInputChange(e, 'name')} />
        <Select name="department" options={departmentOptions} value={department} onChange={(e) => handleInputChange(e, 'department')}/>
        <Input name="email" placeholder="Enter email" value={email} onChange={(e) => handleInputChange(e, 'email')} />
        <Alert>
          <Typography variant="h6">Please ensure the details are correct.</Typography>
        </Alert>
      </div>
      <div className="w-full h-20 px-6 py-6 border-t flex items-center justify-end gap-3">
        <Button onClick={handleSubmit} disabled={!isFormValid}>Next</Button>
      </div>
    </div>
  );
};

export default TimesheetForm;
