/* eslint-disable prettier/prettier */
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Dashboard } from "./pages/Dashboard";
// import { RequireAuth } from "./contexts/Auth/RequireAuth";
import { Register } from "./pages/Register";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/Register" element={<Register />} />
      <Route
        path="/dashboard"
        element={<Dashboard />}
        // element={
        //   <RequireAuth>
        //     <Dashboard />
        //   </RequireAuth>
        // }
      />
    </Routes>
  );
}
