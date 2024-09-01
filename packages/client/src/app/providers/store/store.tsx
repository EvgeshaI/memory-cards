import { configureStore } from '@reduxjs/toolkit'
import { rootReducer } from '../../../shared/services/reducers'

export const store = configureStore({
  reducer: rootReducer,
})
