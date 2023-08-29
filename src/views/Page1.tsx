import {useSelector, useDispatch} from "react-redux";
import {Button, Space} from "antd";
// import store from "@/store/NumStatus/reducer.ts";
import store from "@/store";

type RootState = ReturnType<typeof store.getState>
const View = () => {

    // Use useSelector hook to get data from redux
    const {num} = useSelector((state: RootState) => ({
        num: state.reducer.num
    }));

    // Use useDispatch to modify data. The parameter is handled by reducer.
    const dispatch = useDispatch();
    const increase = (value: number=1) => {
        if (value === 1) {
            dispatch({type: "increaseBy1", value: 1})
            return;
        }
        // type is required, value can be customized
        dispatch({type: "increaseByOtherValue", value: value});

    }

    return (
        <div className={"page1"}>
            <p>This is Page1 component</p>
            <p>{num}</p>
            <Space direction={"vertical"} size={"middle"} style={{display: "flex"}}>
                <Button type="primary" onClick={() => {increase(1);}} name={"test"}>Increase</Button>
                <Button onClick={() => {increase(2);}}>Increase by 2</Button>
            </Space>
        </div>
    )
}

export default View;