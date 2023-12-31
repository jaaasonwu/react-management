import handleNum from "./index.ts"
// To manage data
const defaultState = {
    ...handleNum.state
};

const reducer = (state=defaultState, action: {type: string, value: number}) => {
    console.log("Type", action.type)
    // triggered by dispatch
    console.log("actions    ",handleNum.actions[action.type])
    const newState = JSON.parse(JSON.stringify(state));

    // switch (action.type) {
    //     case handleNum.increaseBy1:
    //         handleNum.actions[handleNum.increaseBy1](newState, action);
    //         break;
    //     case handleNum.increaseByOtherValue:
    //         handleNum.actions[handleNum.increaseByOtherValue](newState, action);
    //         break;
    //     default:
    //         break;
    // }

    // Use action.type to compare with every element in actionNames
    // Avoid modifying this file every time an action is added
    for (const key in handleNum.actions) {
        if (action.type === key) {
            handleNum.actions[action.type](newState, action);
            break;
        }
    }

    return newState;
}
export default reducer;