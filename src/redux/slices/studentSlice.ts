import { createSlice } from "@reduxjs/toolkit";
import { StudentInterface } from "../../utils/interfaces/StudentInterfaces";
import axios from "axios";
import { server } from "../../utils/url";

interface initialStudnetInterface {
    loading: boolean, 
    studentData: StudentInterface[],
    error: boolean,
    errMessage: string
}

const initialState: initialStudnetInterface = {
    loading: false,
    studentData: [],
    error: false, 
    errMessage: ""
}

const studentSlice = createSlice({
    name: "students",
    initialState,
    reducers: {
        setStudentLoading: (state) => {
            state.loading = true
        },
        setStudentData: (state, action) => {
            state.loading = false
            state.error = false
            state.studentData = action.payload.data
        },
        setStudentError: (state, action) => {
            state.loading = false
            state.error = true
            state.errMessage = action.payload
        }
    }
})

interface FetchStudentAction {
    type: string;
    payload?: any;
}

export const fetchStudent = () => async (dispatch: (action: FetchStudentAction) => void) => {
    dispatch(setStudentLoading())
    try {
        const response = await axios.get(`${server}/student`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                "Content-Type": "application/json"
            }
        })
        const studentData: StudentInterface[] = response.data
        dispatch(setStudentData(studentData))
    } catch (error: any) {
        dispatch(setStudentError(error.message))
    }
}

export const {setStudentLoading, setStudentData, setStudentError} = studentSlice.actions
export default studentSlice.reducer
