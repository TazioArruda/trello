// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import KanbanBoard from './components/KanbanBoard';
import Login from './components/Login';
import Signup from './components/Signup';
import ProtectedRoute from './components/ProtectedRoute';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {/* Todas as rotas dentro de ProtectedRoute serão protegidas */}
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<KanbanBoard />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
