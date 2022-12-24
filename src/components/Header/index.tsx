import styled from "styled-components";
import TodoLogo from '../../assets/Logo.svg';

export function Header() {
  return (
    <ContainerHeader>
        <img src={TodoLogo} alt="Logo Todo List" />
      </ContainerHeader>
  );
}

export const ContainerHeader = styled.div`
  height: 12rem;
  background-color: var(--gray-700);

  display: flex;
  align-items: center;
  justify-content: center;
`;