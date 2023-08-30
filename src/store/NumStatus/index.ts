const actions: { [key: string]: (newState: { num: number }, action: {type: string, value: number}) => void } = {
    increaseBy1: (newState: {num: number}, action: {type: string, value: number}) => {
        if (action.type !== "increaseBy1") {
            throw new Error("Type error!");
        }
        newState.num++;
    },
    increaseByOtherValue: (newState: {num: number}, action: {type: string, value: number}) => {
        newState.num += action.value;
    },
    increase3: (newState: {num: number}, action: {type: string, value: number}) => {
        newState.num += action.value;
    }
}


const handleNum =  {
    state: {
        num: 20
    },
    actions: actions
}

export default handleNum