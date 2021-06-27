export const CHANGE = 'CHANGE';
export const change = (data) => {
    return {
        type: CHANGE
        , data
    }
}

export const NEXT_STEP = 'NEXT_STEP';
export const next_step = (data) => {
    return {
        type : NEXT_STEP
    }
}

export const BEFORE_STEP = 'BEFORE_STEP';
export const before_step = (data) => {
    return {
        type : BEFORE_STEP
    }
}

export const CHANGE_STEP = 'CHANGE_STEP';
export const change_step = (data) => {
    return {
        type : CHANGE_STEP
        , data
    }
}