import { useRecoilState, useRecoilValue } from 'recoil'
import { nanoid } from 'nanoid'

import { tasksState, countTasksState } from '../store/tasks'

export function useTasks() {
  const [tasks, setTasks] = useRecoilState(tasksState)
  const count = useRecoilValue(countTasksState)

  function addTasks(name) {
    if(name.length !== 0)
      setTasks([{ id: nanoid(), name }, ...tasks])
  }

  function deleteTasks(id) {
    let newTasks = tasks.slice()

    newTasks.forEach(function(el, i) {
      if (el.id === id) newTasks.splice(i, 1)
    })

    setTasks(newTasks)
  }

  return {
    tasks,
    count,
    addTasks,
    deleteTasks
  }
}
