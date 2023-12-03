
import React from "react";
import Navbar from "./Navbar";
import TimesheetForm from "./TimesheetForm";

// Define the Typescript type for the NavBar and TimesheetForm components
// This allows us to take in props in a strongly typed manner
export interface NavbarProps {
  logoUrl: string;
  menuItems: Array<{
    label: string;
    link: string;
  }>;
};

export interface TimesheetFormProps {};

const TimesheetSubmission: React.FC<NavbarProps & TimesheetFormProps> = ({ logoUrl, menuItems }) => {
  return (
    <div className="flex flex-col md:flex-row">
      <Navbar logoUrl={logoUrl} menuItems={menuItems} />
      <TimesheetForm />
    </div>
  );
};

export default TimesheetSubmission;
