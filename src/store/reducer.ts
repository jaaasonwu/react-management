// To manage data
const defaultState = {
    num: 20
};

const reducer = (state=defaultState, action: {type: string, value: number}) => {
    console.log(action)
    // triggered by dispatch
    const newState = JSON.parse(JSON.stringify(state));

    switch (action.type) {
        case "increaseBy1":
            newState.num++;
            break;
        case "increaseByOtherValue":
            newState.num += action.value;
    }

    return newState;
}
export default reducer;