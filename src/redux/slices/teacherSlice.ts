import { Action, createSlice } from "@reduxjs/toolkit";
import { teacherData } from "../../data/teacherData";
import { TeacherInterface } from "../../utils/interfaces/TeacherInterfaces";
import { server } from "../../utils/url";
import axios from "axios";

interface initialTeacherInterface {
    loading: boolean,
    teacherData: TeacherInterface[],
    error: boolean,
    errMessage: string
}

const initialState: initialTeacherInterface = {
    loading: false,
    teacherData: [],
    error: false,
    errMessage: ""
}

const teacherSlice = createSlice({
    name: "teachers",
    initialState,
    reducers: {
        setTeacherLoading: (state) => {
            state.loading = true,
            state.error = false
        },
        setTeacherData: (state, action) => {
            state.loading = false
            state.error = false
            state.teacherData = action.payload
            state.errMessage = ""
        },
        setTeacherError: (state, action) => {
            state.loading = false,
            state.error = true,
            state.errMessage = action.payload
        }
    }
})
export const {setTeacherLoading, setTeacherData, setTeacherError} = teacherSlice.actions

interface fetchTeacherAction {
    type: string,
    payload?: any
}

export const fetchTeacher = () => async (dispatch: (action: fetchTeacherAction) => void) => {
    dispatch(setTeacherLoading())
    try {
        const response = await axios.get(`${server}/teacher`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("accessToken")}`
            }
        })

        dispatch(setTeacherData(response.data.data))
    } catch (error: any) {
        console.log(error)
        dispatch(setTeacherError(error.message))
    }
}

export default teacherSlice.reducer