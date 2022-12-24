import styled from "styled-components"
import { RiDeleteBin6Line } from 'react-icons/ri';
import { ListType } from "../../types";
import { useState } from "react";

type Props = {
  item: ListType
  updateItem: any;
  deleteItem: any
}

export function GridList({ item, updateItem, deleteItem }: Props) {
  const [checked, setChecked] = useState(item.isComplete);

  return (
    <GridTask>
      <input type="checkbox" checked={checked} onChange={(e) => setChecked(e.target.checked)} onClick={updateItem}/>
      <span style={{textDecoration: checked ? 'line-through' : 'initial'}}>{item.title}</span>
      <button onClick={deleteItem}>
        <RiDeleteBin6Line />
      </button>
    </GridTask>
  )
}

export const GridTask = styled.div`
  height: 3.5rem;
  background-color: var(--gray-500);
  margin: 0.5rem 0;
  padding: 0 0.5rem;
  color: var(--gray-100);

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;

  span {
    font-size: 1rem;
  }

  button {
    cursor: pointer;
    background: transparent;
    border: 0;
    color: var(--gray-300);
    font-size: 1rem;
    :hover {
      color: var(--gray-200)
    }
  }
`;