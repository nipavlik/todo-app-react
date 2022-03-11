import {
  atom,
  selector
} from 'recoil'

export const tasksState = atom({
  key: 'tasksState',
  default: []
})

export const countTasksState = selector({
  key: 'countTasksState',
  get: ({ get }) => {
    const tasks = get(tasksState)

    return tasks.length
  },
});