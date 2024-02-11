import styled from 'styled-components';
import Task from './Task';
import { ITask } from '../types';

interface TaskListProps {
  tasks: ITask[];
  updateTask: (task: ITask) => Promise<void>;
  deleteTask: (id: number) => Promise<void>;
}

const TaskList = ({ tasks, updateTask, deleteTask }: TaskListProps) => {
  return (
    <StyledList>
      <h2>List of All Tasks</h2>
      {tasks.map((task) => (
        <li key={task.id}>
          <Task
            task={task}
            updateTask={updateTask}
            deleteTask={deleteTask}
          />
        </li>
      ))}
    </StyledList>
  );
};

const StyledList = styled.ul`
  list-style-type: none;
  padding: 0;

  h2 {
    display: flex;
    justify-content: center;
  }
`;

export default TaskList;
