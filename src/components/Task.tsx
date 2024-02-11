import { useState } from 'react';
import { Card } from '@mui/material';
import styled from 'styled-components';
import { ITask } from '../types';

interface TaskProps {
  task: ITask;
  updateTask: (task: ITask) => Promise<void>;
  deleteTask: (id: number) => Promise<void>;
}

const Task = ({ task, updateTask, deleteTask }: TaskProps) => {
  const [updatedTitle, setUpdatedTitle] = useState<string>(task.title);
  const [updatedDescription, setUpdatedDescription] = useState<string>(task.description);
  const [updatedCompleted, setUpdatedCompleted] = useState<boolean>(task.completed);

  const handleUpdateTask = () => {
    updateTask({
      id: task.id,
      title: updatedTitle,
      description: updatedDescription,
      completed: updatedCompleted,
    });
  };

  return (
    <StyledCard>
      <input
        type='text'
        value={updatedTitle}
        onChange={(e) => setUpdatedTitle(e.target.value)}
      />
      <input
        type='text'
        value={updatedDescription}
        onChange={(e) => setUpdatedDescription(e.target.value)}
      />
      <div>
        <label>Completed:</label>
        <input
          type='checkbox'
          checked={updatedCompleted}
          onChange={(e) => setUpdatedCompleted(e.target.checked)}
        />
      </div>

      <button onClick={() => handleUpdateTask()}>Update</button>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </StyledCard>
  );
};

const StyledCard = styled(Card)`
  background-color: green;
`;

export default Task;
