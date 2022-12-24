import { useState } from 'react';
import { ListType } from '../../types';
import { GridList } from '../../components/GridList';
import { ContainerTask, InfoContainer } from './styles';
import { v4 as uuidv4 } from 'uuid';


import { NoContentInfo } from '../../components/NoContentInfo';
import { InfoStatusTask } from '../../components/InfoStatusTask';
import { InputNewTask } from '../../components/InputNewTask';
import { Header } from '../../components/Header';

export function HomePage() {
  const [value, setValue] = useState('');
  const [task, setTask] = useState<ListType[]>([]);

  const isComplete = task.filter((item) => item.isComplete === true)

  function handleCreateTask() {
    const newList = [...task];
    newList.push({
      id: uuidv4(),
      title: value,
      isComplete: false,
    })
    setTask(newList);
    setValue('');
  }

  function handleCheckedTaskDone(key: number) {
    const newList = [...task];
    newList[key].isComplete = !task[key].isComplete;
    setTask(newList);
  }

  function handleDeleteItem(key: number) {
    const newList = [...task];
    newList.splice(key, 1);
    setTask(newList);
    console.log(task)
  }

  return (
    <>
      <Header />

      <InputNewTask value={value} setValue={setValue} onClick={handleCreateTask} />

      <InfoContainer>

        <InfoStatusTask 
          totalTarefas={task.length} 
          tarefasConcluidas={task.length > 0 ? `${isComplete.length} de ${task.length}` : 0} 
        />

        <ContainerTask style={{ borderTop: '2px solid #333333' }}>

          {task.length === 0 ?
            (
              <NoContentInfo />
            ) : (
              <>
                {task.map((item, index) => {
                  return (
                    <GridList 
                      key={index} 
                      item={item} 
                      updateItem={() => handleCheckedTaskDone(index)}
                      deleteItem={() => handleDeleteItem(index)}
                    />
                  )
                })}
              </>
            )
          }
          
        </ContainerTask>
      </InfoContainer>
    </>
  )
}
