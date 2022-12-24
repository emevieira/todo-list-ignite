import styled from "styled-components";
import { IoMdAddCircleOutline } from 'react-icons/io';

interface Props {
  value: string;
  setValue(value: string): void;
  onClick(): void;
}

export function InputNewTask({value, setValue, onClick}: Props) {
  return (
    <InputTask>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={onClick}>
        Criar <IoMdAddCircleOutline size={15} />
      </button>
    </InputTask>
  );
}

export const InputTask = styled.div`
  margin-top: -1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  input {
    width: 36rem;
    height: 2.5rem;
    border: 0;
    border-radius: 5px;
    outline: none;
    font-size: 1rem;
    padding: 0 0.75rem;
    background-color: var(--gray-500);
    color: var(--gray-300);
  }

  button {
    height: 2.5rem;
    padding: 0 0.5rem;
    border: 0;
    border-radius: 5px;
    background-color: var(--blue);
    color: var(--gray-100);
    transition: all 0.2s;
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3px;

    :hover {
      background-color: var(--blue-dark);
    }
  }
`;