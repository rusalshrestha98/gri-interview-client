import { useState } from 'react';
import { Card } from '@mui/material';
import styled from 'styled-components';
import { ITask } from '../../types';

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
    <StyledCard data-testid='listitem'>
      <div>
        <label htmlFor='title'>Title: </label>
        <input
          id='title'
          data-testid='title-input'
          type='text'
          value={updatedTitle}
          onChange={(e) => setUpdatedTitle(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor='description'>Description: </label>
        <input
          id='description'
          data-testid='description-input'
          type='text'
          value={updatedDescription}
          onChange={(e) => setUpdatedDescription(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor='completed'>Completed:</label>
        <input
          id='completed'
          data-testid='completed-checkbox'
          type='checkbox'
          checked={updatedCompleted}
          onChange={(e) => setUpdatedCompleted(e.target.checked)}
        />
      </div>

      <button
        onClick={() => handleUpdateTask()}
        data-testid='update-task-btn'
      >
        Update
      </button>
      <button
        onClick={() => deleteTask(task.id)}
        data-testid='delete-task-btn'
      >
        Delete
      </button>
    </StyledCard>
  );
};

const StyledCard = styled(Card)`
  width: 20rem;
  margin: 1rem;
  border: 0.25rem solid black;
`;

export default Task;
