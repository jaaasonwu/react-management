export default {
    state: {
        num: 20
    },
    actions: {
        increaseBy1(newState: {num: number}) {
            newState.num++;
        },
        increaseByOtherValue(newState: {num: number}, action: {type: string, value: number}) {
            newState.num += action.value;
        }
    }
}