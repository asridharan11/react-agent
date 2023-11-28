Summary:

We are looking to build a web application for employees to enter their timesheets biweekly. They would submit details on the start time and end time each day, along with details on any vacation or sick hours in that time period. They will also separate out their regular working hours from the overtime hours if they happened to work over time.
This is then submitted to their manager who would have to approve it after which the employee would be eligible to get paid depending on their hourly rate. The hourly rate would vary depending on whether it was regular hours or if it was overtime hours.
We would also need to include any other typically required fields like company name, address etc.

Roles

1. Employee : The individual who will be entering their timesheet details.
2. Manager : The individual who will review and approve the timesheets.
3. Admin : The individual who will manage the system, including user accounts and system settings.

User Stories and Use Cases

User Story 1: Employee submits timesheet
As an employee, I want to submit my timesheet so that I can get paid for my work.

Use Case 1.1: Submitting regular hours
Success Path: Employee logs in, enters start and end times for each day, and submits the timesheet.
Exception Path: Employee tries to submit a timesheet with invalid data (e.g., end time before start time). The system shows an error message and does not submit the timesheet.

Use Case 1.2: Submitting overtime hours
Success Path: Employee logs in, enters start and end times for each day, identifies overtime hours, and submits the timesheet.
Exception Path: Employee tries to submit a timesheet with overtime hours that exceed the company's limit. The system shows an error message and does not submit the timesheet.

Use Case 1.3: Submitting vacation or sick hours
Success Path: Employee logs in, enters vacation or sick hours for each day, and submits the timesheet.
Exception Path: Employee tries to submit a timesheet with vacation or sick hours that exceed their available balance. The system shows an error message and does not submit the timesheet.

User Story 2: Manager approves timesheet
As a manager, I want to review and approve timesheets so that my employees can get paid.

Use Case 2.1: Approving a timesheet
Success Path: Manager logs in, reviews a timesheet, and approves it.
Exception Path: Manager tries to approve a timesheet that has already been approved. The system shows an error message.

Use Case 2.2: Rejecting a timesheet
Success Path: Manager logs in, reviews a timesheet, and rejects it, providing a reason for the rejection.
Exception Path: Manager tries to reject a timesheet that has already been approved. The system shows an error message.

User Story 3: Admin manages the system
As an admin, I want to manage the system so that it runs smoothly.

Use Case 3.1: Managing user accounts
Success Path: Admin logs in, adds or removes user accounts, or changes user roles.
Exception Path: Admin tries to remove a user account that does not exist. The system shows an error message.

Use Case 3.2: Managing system settings
Success Path: Admin logs in and changes system settings (e.g., maximum overtime hours).
Exception Path: Admin tries to set a system setting to an invalid value. The system shows an error message.
