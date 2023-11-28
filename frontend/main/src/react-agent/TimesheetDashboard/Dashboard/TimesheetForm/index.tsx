
import React, { useState } from 'react';
import { Input, Button } from '@react-agent/shadcn-ui';

interface TimesheetFormProps {
  onSubmit: (data: { startTime: string; endTime: string; hoursType: string; }) => void;
}

const TimesheetForm: React.FC<TimesheetFormProps> = ({ onSubmit }) => {
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [hoursType, setHoursType] = useState("");

  const handleSubmit = () => {
    onSubmit({ startTime, endTime, hoursType });
  };

  return (
    <div className="flex flex-col w-full">
      <Input
        type="time"
        value={startTime}
        placeholder="Start Time"
        onChange={(e) => setStartTime(e.target.value)}
        className="w-full mb-2 h-8"
      />
      <Input
        type="time"
        value={endTime}
        placeholder="End Time"
        onChange={(e) => setEndTime(e.target.value)}
        className="w-full mb-2 h-8"
      />
      <select
        value={hoursType}
        onChange={(e) => setHoursType(e.target.value)}
        className="w-full mb-2 h-8"
      >
        <option value="">Select Hours Type</option>
        <option value="Regular">Regular</option>
        <option value="Overtime">Overtime</option>
      </select>
      <Button onClick={handleSubmit} className="mt-4 h-8 w-full">
        Submit
      </Button>
    </div>
  );
};

export default TimesheetForm;
