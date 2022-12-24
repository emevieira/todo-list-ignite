import styled from "styled-components"
import ClipBoard from '../../assets/Clipboard.png';

export function NoContentInfo() {
  return (
    <NoContent>
      <img src={ClipBoard} alt="ClipBoard" />
      <strong>Você ainda não tem tarefas cadastradas</strong>
      <span>Crie tarefas e organize seus itens a fazer</span>
    </NoContent>
  )
}

export const NoContent = styled.div`
  height: 12rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    strong {
      color: var(--gray-300);
      margin-top: 1rem;
    }

    span {
      color: var(--gray-300);
      margin-top: 0.3rem;
    }
`;