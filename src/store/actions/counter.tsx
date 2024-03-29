import * as types from "../action-types"

export interface Add{
    type:typeof types.ADD
}

export interface Subtract{
    type:typeof types.SUBTRACT
}

export type Action = Add | Subtract

export default {
    add(): Add {
        return {type: types.ADD}
    },
    subtract(): Subtract {
        return {type: types.SUBTRACT}
    },

    addAsync():any{
        return function (dispatch:any, getState:any) {
            setTimeout(() => {
                dispatch({type:types.ADD})
            }, 1000);
        }
    }
}