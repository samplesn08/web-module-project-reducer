export const ADD_ONE = "ADD_ONE";
export const CLEAR_DISPLAY = "CLEAR_DISPLAY";
export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const MEMORY_PLUS = "MEMORY_PLUS";
export const MEMORY_UPDATE = "MEMORY_UPDATE";
export const MEMORY_CLEAR = "MEMORY_CLEAR";

export const addOne = () => {
    return({type:ADD_ONE});
}

export const clearDisplay = () => {
    return({type:CLEAR_DISPLAY});
}

export const changeOperation = (operator) => {
    return({type: CHANGE_OPERATION, payload: operator});
}

export const applyNumber = (number) => {
    return({type:APPLY_NUMBER, payload:number});
}

export const memoryPlus = (number) => {
    return({type:MEMORY_PLUS, payload:number});
}

export const memoryUpdate = (number) => {
    return({type:MEMORY_UPDATE, payload:number});
}

export const memoryClear = () => {
    return({type:MEMORY_CLEAR});
}