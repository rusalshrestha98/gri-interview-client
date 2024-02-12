import styled from 'styled-components';
import Task from '../Task/Task';
import { ITask } from '../../types';

interface TaskListProps {
  tasks: ITask[];
  updateTask: (task: ITask) => Promise<void>;
  deleteTask: (id: number) => Promise<void>;
}

const TaskList = ({ tasks, updateTask, deleteTask }: TaskListProps) => {
  return (
    <StyledList data-testid='tasklist'>
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
`;

export default TaskList;
