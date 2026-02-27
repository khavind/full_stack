Handling Forms Using Controlled Components in React

📌 Aim

To create and handle forms in a frontend application using controlled components in React.

🛠️ Software Requirements

Node.js

React

VS Code (or any code editor)

Web Browser (Chrome recommended)

📖 Theory

Controlled components are React components in which form data is handled by the component’s state.

In controlled components:

Form elements such as <input>, <textarea>, and <select> are controlled by React state.

The value of the input field is bound to a state variable.

Changes in the input field are handled using event handlers (e.g., onChange).

This provides complete control over user input.

🧪 Procedure

Create a React application.

Create a form component.

Use useState hook to store input values.

Handle input change events using onChange.

Submit the form using an event handler (onSubmit).

🔹 Introduction to Forms in React

Forms are an essential part of any web application. They allow users to input data such as names, emails, passwords, feedback, and more. In React, form handling is slightly different from traditional HTML because React uses a component-based architecture and manages UI using state.

🔹 Controlled Components

A controlled component is a form element whose value is controlled by React state.

In traditional HTML:

Form elements maintain their own internal state.

Data is usually accessed using DOM manipulation.

In React controlled components:

Form data is stored inside the component’s state using the useState hook.

The value attribute of the input field is bound to a state variable.

The onChange event updates the state whenever the user types.

The React state becomes the "single source of truth".

This approach gives full control over:

Input validation

Dynamic form updates

Conditional rendering

Real-time feedback

🔹 Working Principle of Controlled Components

A state variable is created using useState().

The input field’s value is assigned to that state.

An onChange event handler updates the state.

When the state changes, React re-renders the component.

The UI always reflects the latest state value.

This ensures synchronization between:

User Interface (UI)

Component State

🔹 Example Flow

When a user types in a text field:

User types a character.

onChange event triggers.

Event handler updates the state.

React re-renders the component.

Updated state is displayed in the input field.

🔹 useState Hook in Form Handling

The useState hook is used to:

Store input values

Update input values

Manage multiple form fields

Reset form after submission

Example:

const [name, setName] = useState("");

Here:

name stores the current value.

setName() updates the value.

🔹 Handling Multiple Inputs

When handling multiple inputs, we use:

A single state object

The name attribute of inputs

Dynamic key updates using computed properties

## OUTPUT: 

<img width="969" height="892" alt="image" src="https://github.com/user-attachments/assets/dee84775-135e-4d29-ac4c-47f041981ae1" />
<img width="815" height="874" alt="image" src="https://github.com/user-attachments/assets/085fdf51-ac7a-467e-848a-71d47d82689b" />
<img width="734" height="883" alt="image" src="https://github.com/user-attachments/assets/8e95cab6-d32b-4770-b673-668fb1bb7f95" />


