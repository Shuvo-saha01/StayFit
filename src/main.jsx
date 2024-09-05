import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from "./components/Home.jsx";
import Layout from "./Layout.jsx";
import BmiReport from "./components/BmiReport.jsx";
import MedTimer from "./components/MedTimer.jsx";
import MentalQuestion from "./components/MentalQuestion.jsx";
import MentalResult from "./components/MentalResult.jsx";
import MeditationClock from "./components/MeditationClock.jsx";
import { store } from "./app/store";
import { Provider } from "react-redux";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='bmi' element={<BmiReport />} />
      <Route path='medTimer' element={<MedTimer />} />
      <Route path='MedTimer/timer' element={<MeditationClock />} />
      <Route path='mental-health' element={<MentalQuestion />} />
      <Route path='mental-health/mentalResult' element={<MentalResult />} />
      
      
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>,
);
