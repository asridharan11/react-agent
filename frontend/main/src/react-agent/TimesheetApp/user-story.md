# Timesheet Management Web Application User Stories

## Summary

We aim to develop a web application enabling employees to submit their biweekly timesheets. The system will capture daily start and end times, vacation or sick hours, and distinguish between regular and overtime hours. Manager approval is required for payment eligibility, with the hourly rate varying for regular and overtime hours. Standard company details like name and address are mandatory.

## Roles

1. _Employee_: Submits timesheet details.
2. _Manager_: Reviews and approves timesheets.
3. _Admin_: Manages the system, including user accounts and settings.

## User Stories and Use Cases

### User Story 1: Employee submits timesheet

As an employee, I aim to submit my timesheet for payment.

#### Use Case 1.1: Submitting regular hours

- **Success Path:** Employee logs in, enters daily start and end times, and submits the timesheet.
- **Exception Path:** Employee submitting invalid data triggers an error message; the timesheet isn't submitted.

#### Use Case 1.2: Submitting overtime hours

- **Success Path:** Employee logs in, enters daily start and end times, identifies overtime hours, and submits the timesheet.
- **Exception Path:** Submitting overtime hours beyond the company limit results in an error message, preventing submission.

#### Use Case 1.3: Submitting vacation or sick hours

- **Success Path:** Employee logs in, enters vacation or sick hours, and submits the timesheet.
- **Exception Path:** Attempting to submit hours exceeding the available balance prompts an error message; the timesheet isn't submitted.

### User Story 2: Manager approves timesheet

As a manager, I want to review and approve timesheets for employee payment.

#### Use Case 2.1: Approving a timesheet

- **Success Path:** Manager logs in, reviews, and approves a timesheet.
- **Exception Path:** Attempting to approve an already approved timesheet triggers an error message.

#### Use Case 2.2: Rejecting a timesheet

- **Success Path:** Manager logs in, reviews, and rejects a timesheet, providing a rejection reason.
- **Exception Path:** Trying to reject an already approved timesheet results in an error message.

### User Story 3: Admin manages the system

As an admin, I aim to efficiently manage the system.

#### Use Case 3.1: Managing user accounts

- **Success Path:** Admin logs in, adds or removes user accounts, or modifies user roles.
- **Exception Path:** Attempting to remove a non-existent user account prompts an error message.

#### Use Case 3.2: Managing system settings

- **Success Path:** Admin logs in and adjusts system settings (e.g., maximum overtime hours).
- **Exception Path:** Setting a system parameter to an invalid value triggers an error message.
