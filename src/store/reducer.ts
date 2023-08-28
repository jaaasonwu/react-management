import handleNum from "./NumStatus"
// To manage data
const defaultState = {
    ...handleNum.state
};

const reducer = (state=defaultState, action: {type: string, value: number}) => {
    console.log(action)
    // triggered by dispatch
    const newState = JSON.parse(JSON.stringify(state));

    switch (action.type) {
        case "increaseBy1":
            handleNum.actions.increaseBy1(newState);
            break;
        case "increaseByOtherValue":
            handleNum.actions.increaseByOtherValue(newState, action);
            break;
        default:
            break;
    }

    return newState;
}
export default reducer;