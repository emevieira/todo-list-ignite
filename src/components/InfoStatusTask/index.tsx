import styled from "styled-components";

interface Props {
  totalTarefas: number;
  tarefasConcluidas: number | string;
}

export function InfoStatusTask({ totalTarefas, tarefasConcluidas}: Props) {
  return (
    <ContainerStyled>
      <div>
        <strong style={{ color: '#4EA8DE' }}>Tarefas criadas</strong>
        <span>{totalTarefas}</span>
      </div>
      <div>
        <strong style={{ color: '#8284FA' }}>Concluídas</strong>
        <span>{tarefasConcluidas}</span>
        {/* <span>{task.length > 0 ? `${isComplete.length} de ${task.length}` : 0}</span> */}
      </div>
    </ContainerStyled>
  );
}

export const ContainerStyled = styled.div`
  width: 40rem;
  height: 3rem;
  margin-top: 3rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    gap: 0.5rem;

    span {
      background-color: var(--gray-400);
      padding: 0.2rem 0.5rem;
      border-radius: 50%;
      text-align: center;
    }
  }
`;