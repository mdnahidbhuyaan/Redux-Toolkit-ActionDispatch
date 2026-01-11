import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './future/counterSlice'

export const store = configureStore({
  reducer: {
    counter:counterSlice
  },

})
export default store