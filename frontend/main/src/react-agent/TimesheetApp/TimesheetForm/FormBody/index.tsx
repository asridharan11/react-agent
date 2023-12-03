
import React, { useState } from 'react';
import { Box, Input, Select, Checkbox, Button, Alert, Typography } from '@react-agent/shadcn-ui';

// Define the types of the form state
interface FormState {
  name: string;
  email: string;
  department: string;
  acceptTerms: boolean;
}

const FormBody = () => {
  // Initialize form state
  const [formState, setFormState] = useState<FormState>({
    name: "",
    email: "",
    department: "",
    acceptTerms: false
  });

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.acceptTerms) {
      alert("You must accept the terms and conditions");
    } else {
      console.log(formState);
    }
  };

  // Handle form field changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  // Handle checkbox changes
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({
      ...formState,
      acceptTerms: e.target.checked
    });
  };

  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <Typography variant="h1">New Employee Form</Typography>
        <Input name="name" placeholder="Name" value={formState.name} onChange={handleInputChange} />
        <Input name="email" type="email" placeholder="Email" value={formState.email} onChange={handleInputChange} />
        <Select name="department" value={formState.department} onChange={handleInputChange}>
          <option value="">None</option>
          <option value="marketing">Marketing</option>
          <option value="development">Development</option>
          <option value="finance">Finance</option>
          <option value="hr">HR</option>
        </Select>
        <Checkbox name="terms" checked={formState.acceptTerms} onChange={handleCheckboxChange} />
        <label htmlFor="terms" className="text-xs">I accept the terms and conditions</label>
        <Button variant="outline">Submit</Button>
      </form>
      <Alert variant="destructive">
        {/* This is where any form submission alerts would go */}
      </Alert>
    </Box>
  );
};

export default FormBody;
