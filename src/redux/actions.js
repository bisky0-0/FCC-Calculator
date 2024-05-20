export const NUMBER = 'NUMBER';
export const CALC = 'CALC';
export const DELETEALL = 'DELETEALL';
export const DELETE = 'DELETE'
export const EQUAL = 'EQUAL'

export function numAction(num) {
    return {
        type: NUMBER,
        num: num
    }
}

export function calcAction(expression) {
    return {
        type: CALC,
        expression: expression
    }
}

export function deleteAllAction() {
    return {
        type: DELETEALL
    }
}

export function deleteAction() {
    return {
        type: DELETE
    }
}

export function equalAction(calculations) {
    console.log(calculations)
    return {
        type: EQUAL,
        calculations: calculations
    }
}


export const UPDATE_RESULT = 'UPDATE_RESULT';

export function updateResultAction(result) {
    return {
        type: UPDATE_RESULT,
        result: result
    };
}

