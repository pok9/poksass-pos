import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  alert: null
}

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    // dispatch(
    //  setAlert({type: "success", message: "The product has already deleted."}) 
    // )
    setAlert(state, action) {
      state.alert = action.payload
    },
    // dispatch(clearAlert())
    clearAlert(state) {
      state.alert = null;
    },
  }
})

export default uiSlice.reducer
export const { setAlert, clearAlert } = uiSlice.actions