import { render, screen } from '@testing-library/react';
import Task from './Task';

const task = {
  id: 1,
  title: 'MyFirstTask',
  description: 'This is my first task',
  completed: false,
};

describe('Task component', () => {
  it('renders details for each task', () => {
    render(
      <Task
        task={task}
        updateTask={jest.fn()}
        deleteTask={jest.fn()}
      />
    );

    expect(screen.getByTestId('title-input')).toBeInTheDocument();
    expect(screen.getByTestId('description-input')).toBeInTheDocument();
    expect(screen.getByTestId('completed-checkbox')).toBeInTheDocument();
    expect(screen.getByTestId('completed-checkbox')).not.toBeChecked();
    expect(screen.getByTestId('update-task-btn')).toBeInTheDocument();
    expect(screen.getByTestId('delete-task-btn')).toBeInTheDocument();
  });
});
