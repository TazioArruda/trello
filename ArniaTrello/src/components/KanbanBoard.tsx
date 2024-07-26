import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import { useHistory } from 'react-router-dom';

const KanbanBoard: React.FC = () => {
  const history = useHistory();

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    history.push('/login');
  };

  return (
    <Container>
      <Typography variant="h4">Kanban Board</Typography>
      <Button variant="contained" color="primary" onClick={handleLogout}>
        Logout
      </Button>
      {/* Adicione aqui o conteúdo da tela Kanban */}
    </Container>
  );
};

export default KanbanBoard;