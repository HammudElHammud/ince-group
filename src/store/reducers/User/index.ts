import {Dispatch} from 'redux'

export enum UserActionEnum {
    RETRIEVE_USER_INFO = 'USER/RETRIEVE_USER_INFO',
    UPDATE_USER = 'USER/UPDATE_USER',
}


interface IInitialState {
    date: any
    email: string
    firstName: string
    lastName: string
    image: string
}
interface IRetrieveUser {
    type: UserActionEnum.RETRIEVE_USER_INFO
    payload: IInitialState
}

interface IUpdateUser {
    type: UserActionEnum.UPDATE_USER
    payload: IInitialState
}


type IAction = IRetrieveUser | IUpdateUser

const initialState: {} = {}

export default function reducer(state = initialState, action: IAction) {
    switch (action.type) {
        case UserActionEnum.RETRIEVE_USER_INFO:
            return {
                ...state,
                ...action.payload,
            }
        case UserActionEnum.UPDATE_USER:
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state
    }
}


const retrieveUserFromBackend = async () => { // here this is demo when we have backend then the data will come from there
        return {
        firstName: 'Hammud',
        image: 'https://www.pngarts.com/files/10/Default-Profile-Picture-PNG-Image-Transparent-Background.png',
        lastName: 'Elhammud',
        email: 'hammudelhammud94@gmail.com',
        date:  '2023-08-25',
        id: '602fcae651b00d54ec4222bc',
    }
}
export const retrieveUserInfo =
    () => async (dispatch: Dispatch<{ type: string; payload: any }>) => {
        try {
            return dispatch({
                type: UserActionEnum.RETRIEVE_USER_INFO,
                payload: await retrieveUserFromBackend(),
            })
        } catch (e) {
            // need to handle error
        }
    }
// this will for update after

export const updateUserInfoForHelper =
    (values: IInitialState) => async (dispatch: Dispatch<{ type: string; payload: any }>) => {
        try {
            dispatch({
                type: UserActionEnum.UPDATE_USER,
                payload: values,
            })
        } catch (e) {
            // need to handle
        }
    }
