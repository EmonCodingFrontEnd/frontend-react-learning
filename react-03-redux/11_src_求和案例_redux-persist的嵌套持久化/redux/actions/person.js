import {ADD_PERSON, ADD_PERSON_HOBBY, MODIFY_AGE} from '../constant'

export const addPerson = (personObj) => ({type: ADD_PERSON, data: personObj})
export const modifyAge = (data) => ({type: MODIFY_AGE, data})
export const addPersonHobby = (data) => ({type: ADD_PERSON_HOBBY, data})