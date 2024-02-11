import { useForm, SubmitHandler } from 'react-hook-form';
import styled from 'styled-components';
import { ITask } from '../types';

interface TaskFormProps {
  createTask: (task: ITask) => Promise<void>;
}

const TaskForm = ({ createTask }: TaskFormProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ITask>();

  const onSubmit: SubmitHandler<ITask> = async (data: ITask) => {
    createTask(data);
    reset();
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <input
        type='text'
        placeholder='Title'
        {...register('title', { required: true })}
      />

      <input
        type='textarea'
        placeholder='Description'
        {...register('description', { required: true })}
      />

      <div>
        <label>Completed:</label>
        <input
          type='checkbox'
          {...register('completed')}
        />
      </div>

      <input type='submit' />

      {errors.title && <ErrorMsgText>The title field is required</ErrorMsgText>}
      {errors.description && <ErrorMsgText>The description field is required</ErrorMsgText>}
    </StyledForm>
  );
};

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 30%;
`;

const ErrorMsgText = styled.p`
  color: red;
`;

export default TaskForm;
