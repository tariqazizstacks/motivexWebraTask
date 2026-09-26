# Motivex — 3D Automotive Showcase

A modern, interactive 3D automotive showcase built with **React, Vite, Three.js, React Three Fiber and Drei**.

Motivex transforms a traditional car showcase into an interactive web experience where users can explore a 3D vehicle, rotate and zoom around it, change the vehicle color, control the lights, and view important vehicle specifications.

**Live Demo:** https://motivex-3d-showcase.vercel.app/

**GitHub Repository:** https://github.com/tariqazizstacks/motivexWebraTask

---

## About the Project

**Motivex — 3D Automotive Showcase** was developed as a Frontend Web Development internship project for **WebEra Solutions PK**.

The main purpose of the project is to demonstrate how modern React development can be combined with real-time 3D graphics to create an engaging automotive product experience.

Instead of displaying a car as a simple static image, Motivex allows users to interact directly with the 3D vehicle.

Users can:

* Explore the vehicle in 3D
* Rotate the vehicle around 360°
* Zoom in and out
* Change the vehicle body color
* Turn vehicle lights ON/OFF
* View vehicle specifications
* Navigate from a landing page to the interactive showcase
* Experience a responsive component-based interface

---

## Features

### 🚗 Interactive 3D Car

The main feature of Motivex is a real-time 3D vehicle rendered inside a React Three Fiber Canvas.

The vehicle is loaded from a `.glb` 3D model and displayed inside the browser using Three.js.

### 🔄 360° Vehicle Interaction

Users can drag around the 3D scene to inspect the vehicle from different angles.

`OrbitControls` provides interactive:

* Rotation
* Orbiting
* Zooming
* Camera interaction

### 🎨 Car Color Customization

The showcase provides multiple vehicle color options:

* Red
* Blue
* Black
* White
* Green

The selected color is managed using React state and passed between the showcase components.

### 💡 Vehicle Lights Control

Users can interact with the vehicle lighting through a dedicated control.

The interface switches between:

* `Lights ON`
* `Lights OFF`

### 📋 Vehicle Specifications

Motivex includes a specifications section containing vehicle information such as:

* Engine
* Power
* Top Speed
* 0–100 km/h Acceleration
* Torque
* Body Color

The specification area is connected with the selected vehicle color.

### 🧭 Landing Page

The website starts with a dedicated automotive hero experience containing:

* Navigation bar
* Main heading
* Supporting description
* Call-to-action button
* Entry point to the interactive car showcase

### 📱 Responsive Interface

The interface is designed using responsive CSS so that the experience can adapt to different screen sizes and devices.

### ⚛️ Component-Based Architecture

The project is divided into reusable React components rather than keeping the entire application inside one component.

---

# Technology Stack

| Technology        | Purpose                                      |
| ----------------- | -------------------------------------------- |
| React 19          | Frontend UI and component architecture       |
| Vite 8            | Development server and production build tool |
| Three.js          | 3D graphics and rendering                    |
| React Three Fiber | React renderer for Three.js                  |
| @react-three/drei | 3D helpers and controls                      |
| GSAP              | Animation and motion capabilities            |
| React Router DOM  | Client-side routing                          |
| HTML5             | Application structure                        |
| CSS3              | Styling and responsive design                |
| GLB               | 3D vehicle model format                      |
| Git               | Version control                              |
| GitHub            | Source code repository                       |
| Vercel            | Production deployment                        |

The project's `package.json` contains React 19.2.8, Three.js 0.186.1, React Three Fiber 9.8.1, Drei 10.7.9, GSAP 3.15.0 and React Router DOM 7.18.4 among its main dependencies.

---

# Project Structure

```text
motivexWebraTask/
│
├── public/
│   └── car.glb
│
├── src/
│   │
│   ├── components/
│   │   ├── Car.jsx
│   │   ├── CarViewer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   └── Specifications.jsx
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── package.json
├── package-lock.json
├── vite.config.js
├── eslint.config.js
└── README.md
```

---

# Component Structure

## `App.jsx`

`App.jsx` is the main application component.

It is responsible for:

* React Router configuration
* Landing page route
* Showcase route
* Shared Navbar
* Color state management
* Connecting the Specifications and CarViewer components

The application currently uses:

```text
/
```

for the landing page and:

```text
/showcase
```

for the interactive 3D vehicle experience.

---

## `Navbar.jsx`

The Navbar provides the main navigation interface of the website.

It is shared across the application and provides the navigation experience for the Motivex interface.

---

## `Hero.jsx`

The Hero component acts as the landing section of Motivex.

It introduces the automotive showcase and provides the main CTA that takes the user toward the interactive vehicle experience.

---

## `CarViewer.jsx`

`CarViewer.jsx` contains the main 3D viewing environment.

It uses:

```text
Canvas
OrbitControls
Car
ambientLight
directionalLight
```

The component also manages the vehicle customization controls.

Implemented color controls include:

```text
Red
Blue
Black
White
Green
```

and the lighting control switches between:

```text
Lights ON
Lights OFF
```

The selected color and lighting state are passed into the `Car` component.

---

## `Car.jsx`

The `Car` component is responsible for loading and displaying the actual `.glb` vehicle model.

The model is stored in:

```text
public/car.glb
```

and loaded into the Three.js scene.

The component handles the vehicle's 3D representation and applies the selected customization state to the model.

---

## `Specifications.jsx`

The Specifications component presents the vehicle information in a structured interface.

It includes information such as:

```text
Engine
Power
Top Speed
Acceleration
Torque
Body Color
```

The selected body color is received from the parent application state so that the specifications and vehicle customization remain synchronized.

---

# 3D Technology

Motivex uses **Three.js** as the underlying 3D engine.

Because the project is React-based, **React Three Fiber** is used to integrate Three.js scenes with React components.

The project also uses **Drei** for convenient Three.js helpers, especially:

```text
OrbitControls
```

This combination makes it possible to build an interactive 3D vehicle experience while keeping the application inside the React component architecture.

---

# Vehicle Model

The vehicle is provided as a binary GLB asset:

```text
public/car.glb
```

The model is loaded at runtime rather than being converted into HTML or image content.

The production asset is also available through the deployed application:

```text
https://motivex-3d-showcase.vercel.app/car.glb
```

---

# State Management

Motivex currently uses React's built-in state management.

For example, the selected vehicle color is stored in React state:

```jsx
const [color, setColor] = useState("red");
```

The state is then shared between:

```text
Specifications
       ↓
CarViewer
       ↓
Car
```

This allows the UI controls and 3D model to remain synchronized.

The application also maintains the vehicle lighting state inside `CarViewer`.

---

# Routing

Motivex uses `react-router-dom` for client-side navigation.

Current routes:

```text
/              → Hero / Landing Page

/showcase      → Interactive 3D Car Showcase
```

The routing configuration is implemented inside `App.jsx`.

---

# Installation

Clone the repository:

```bash
git clone https://github.com/tariqazizstacks/motivexWebraTask.git
```

Move into the project directory:

```bash
cd motivexWebraTask
```

Install dependencies:

```bash
npm install
```

---

# Run Development Server

Start the Vite development server:

```bash
npm run dev
```

The application will normally be available at:

```text
http://localhost:5173/
```

---

# Production Build

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

The project's package scripts include `dev`, `build`, `lint`, and `preview`.

---

# Code Quality

The project includes Oxlint for code-quality checking.

Run:

```bash
npm run lint
```

This helps identify code-quality and linting issues during development.

---

# Deployment

The project is deployed using **Vercel**.

### Live Website

https://motivex-3d-showcase.vercel.app/

### GitHub Repository

https://github.com/tariqazizstacks/motivexWebraTask

The project can be updated by pushing new changes to the GitHub repository and redeploying the latest version through Vercel.

---

# Development Workflow

The project was developed through the following general workflow:

```text
Project Planning
       ↓
React + Vite Setup
       ↓
Three.js Installation
       ↓
React Three Fiber Setup
       ↓
GLB Vehicle Integration
       ↓
3D Camera & Lighting
       ↓
OrbitControls
       ↓
Color Customization
       ↓
Vehicle Specifications
       ↓
Lights Control
       ↓
Landing Page
       ↓
React Router
       ↓
Responsive Styling
       ↓
Testing
       ↓
GitHub
       ↓
Vercel Deployment
```

---

# Challenges & Solutions

### 1. Integrating a 3D Model

The vehicle model was provided as a `.glb` binary asset rather than a normal source-code file.

**Solution:**
The model was placed inside the `public` directory and loaded at runtime using the 3D loading system.

### 2. Creating Interactive 3D Controls

A static 3D model would not satisfy the interactive showcase requirement.

**Solution:**
`OrbitControls` was integrated through Drei to provide interactive rotation and zoom functionality.

### 3. Connecting React UI With the 3D Model

The color selection needed to affect the actual vehicle rather than only changing a button.

**Solution:**
React state is used to store the selected color and pass it through the component hierarchy to the 3D car.

### 4. Managing the Project as Reusable Components

Keeping all functionality inside one large React component would make the project difficult to maintain.

**Solution:**
The application was separated into components such as:

```text
Navbar
Hero
CarViewer
Car
Specifications
```

### 5. Production Deployment

The application needed to work outside the local development environment.

**Solution:**
The project was built using Vite and deployed to Vercel, with the 3D model stored as a public production asset.

---

# Future Enhancements

Possible future improvements include:

* More detailed vehicle customization
* Wheel/rim customization
* Interior 3D viewing
* Additional vehicle models
* More advanced lighting environments
* Camera presets
* Animation controls
* Vehicle door and wheel animations
* More detailed specification panels
* Enhanced mobile 3D controls
* Dark/light visual themes
* Advanced GSAP-based page transitions
* Multiple automotive showcase categories

---

# Learning Outcomes

Through the Motivex project, the following practical front-end skills were developed and practiced:

* React component development
* React props and state
* React Router
* Three.js fundamentals
* React Three Fiber
* Drei 3D utilities
* GLB model integration
* Interactive 3D controls
* UI-to-3D state synchronization
* Responsive CSS
* Package management with npm
* Vite development and production builds
* Git and GitHub workflow
* Vercel deployment
* Front-end project organization

---

# Project Information

**Project Name:** Motivex — 3D Automotive Showcase

**Developer:** Tariq Aziz

**Role:** Frontend Web Development Intern

**Organization:** WebEra Solutions PK

**Technology:** React + Vite + Three.js

**Project Type:** Interactive 3D Automotive Web Experience

**Repository:**
https://github.com/tariqazizstacks/motivexWebraTask

**Live Website:**
https://motivex-3d-showcase.vercel.app/

---

## License

This project was developed as part of a frontend web development internship project for learning, demonstration and portfolio purposes.
