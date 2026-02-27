

---

# 📝 Handling Forms Using Controlled Components (React)

A React-based form application demonstrating the implementation of **Controlled Components** using the `useState` hook, along with a modern and interactive UI design.

---

## 🎯 Aim

To create and handle forms in a frontend application using **Controlled Components in React**, ensuring full control over user input through state management.

---

## 🛠️ Software Requirements

* Node.js
* React
* Visual Studio Code (VS Code)
* Web Browser (Chrome recommended)

---

## 📖 Theory

In React, a **Controlled Component** is a form element whose value is controlled by the component’s state.

Instead of allowing the DOM to manage form data, React maintains control using the `useState` hook. The state acts as the **single source of truth** for form inputs.

### How Controlled Components Work:

* Each input field is connected to a state variable.
* The `value` attribute of the input is bound to the state.
* The `onChange` event updates the state whenever the user modifies input.
* On form submission, the collected state values are processed.

This approach ensures:

* Synchronized UI and data
* Easier validation
* Predictable behavior
* Better debugging and maintainability

---

## 🚀 Features Implemented

The form includes the following input elements:

* ✅ First Name (Text Input)
* ✅ Last Name (Text Input)
* ✅ Date of Birth (Date Picker)
* ✅ Gender (Radio Buttons)
* ✅ Skills (Checkboxes)
* ✅ Address (Textarea)
* ✅ State (Dropdown Menu)
* ✅ Submit Button
* ✅ Cancel Button
* ✅ Alert displaying all entered details

---

## 🎨 UI Highlights

The project also focuses on modern UI/UX design:

* 🎨 Animated Gradient Background
* 💎 Glassmorphism Card Effect
* ✨ Hover Animations
* 🌟 Input Glow Effects
* 🔄 Smooth Transitions
* 📐 Professional Responsive Layout

---

## 📌 Key Concepts Used

* React Functional Components
* `useState` Hook
* Controlled Components
* Event Handling (`onChange`, `onSubmit`)
* Conditional Rendering
* CSS Animations
* Flexbox Layout

---

## 📊 Result

The application successfully:

* Captures user input using controlled components.
* Maintains all form data inside React state.
* Displays the submitted details via an alert message.
* Provides a visually appealing and interactive user interface.

---

## 📂 Project Structure

```
project-folder/
│
├── src/
│   ├── App.js
│   ├── App.css
│   └── index.js
│
├── public/
├── package.json
└── README.md
```

---

## 📸 Screenshots

### 🔹 Form Interface

<img width="969" height="892" alt="Screenshot 2026-02-27 142914" src="https://github.com/user-attachments/assets/b72c9b0d-f840-4d22-812c-329cb1f7679e" />


---

### 🔹 Filled Form Example
<img width="815" height="874" alt="Screenshot 2026-02-27 143205" src="https://github.com/user-attachments/assets/23d3dc54-6184-4b6d-b3a7-4bbb751fb2f6" />


---

### 🔹 Submission Output

<img width="734" height="883" alt="Screenshot 2026-02-27 143226" src="https://github.com/user-attachments/assets/fbc2af23-bc93-4a1d-8e20-cc61838ffebf" />

---

## 🏁 Conclusion

This project demonstrates effective form handling in React using controlled components. It highlights how managing form inputs through state ensures better control, improved validation, and a predictable data flow, while also implementing modern UI design techniques for enhanced user experience.
