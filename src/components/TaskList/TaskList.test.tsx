import { render, screen } from '@testing-library/react';
import TaskList from './TaskList';

const tasks = [
  { id: 1, title: 'Task 1', description: 'Description 1', completed: false },
  { id: 2, title: 'Task 2', description: 'Description 2', completed: false },
  { id: 3, title: 'Task 3', description: 'Description 3', completed: false },
];

describe('TaskList component', () => {
  it('renders three tasks', () => {
    render(
      <TaskList
        tasks={tasks}
        updateTask={jest.fn()}
        deleteTask={jest.fn()}
      />
    );

    const taskList = screen.getAllByTestId('listitem');

    expect(taskList.length).toEqual(3);
  });
});
