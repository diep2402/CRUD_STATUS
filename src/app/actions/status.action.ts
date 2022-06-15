import { createAction, props, ActionType } from "@ngrx/store"
import { User } from '../model/index.model'
import { Status } from "../model/index.model"
import * as constants from "../constants"

export const getStatusRequest = createAction(constants.GET_STATUS_REQUEST)

export const getStatusSuccess = createAction(constants.GET_STATUS_SUCCESS, props<{ payload: Status[] }>())

export const getStatusFailure = createAction(constants.GET_STATUS_FAIL, props<{ error: String }>())

export const addStatusRequest = createAction(constants.ADD_STATUS_REQUEST, props<{ payload: Status }>())

export const addStatusSuccess = createAction(constants.ADD_STATUS_SUCCESS)

export const addStatusFailure = createAction(constants.ADD_STATUS_FAIL, props<{ error: String }>())

