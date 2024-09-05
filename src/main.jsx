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
import Info from "./components/Info.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Info />} />
      <Route path='home' element={<Home />} />
      <Route path='home/bmi' element={<BmiReport />} />
      <Route path='home/medTimer' element={<MedTimer />} />
      <Route path='home/medTimer/timer' element={<MeditationClock />} />
      <Route path='home/mental-health' element={<MentalQuestion />} />
      <Route path='home/mental-health/mentalResult' element={<MentalResult />} />
      
      
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>,
);
