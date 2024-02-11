import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { ITask } from './types';

function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const createTask = async (task: ITask): Promise<void> => {
    try {
      const response = await axios.post('/tasks', task);
      setTasks([...tasks, response.data]);
    } catch (error) {
      console.error('Error creating task:', error);
      throw error;
    }
  };

  const fetchTasks = async (): Promise<void> => {
    try {
      const response = await axios.get<ITask[]>('/tasks');
      setTasks(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const updateTask = async (task: Partial<ITask>): Promise<void> => {
    try {
      await axios.put(`/tasks/${task.id}`, task);
      fetchTasks();
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  const deleteTask = async (id: number): Promise<void> => {
    try {
      await axios.delete(`/tasks/${id}`);
      fetchTasks();
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  return (
    <StyledContainer>
      <h1>Task Manager App</h1>
      <TaskForm createTask={createTask} />
      <TaskList
        tasks={tasks}
        updateTask={updateTask}
        deleteTask={deleteTask}
      />
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default App;
