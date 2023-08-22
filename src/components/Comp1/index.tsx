// 模块化引入
import styles from "./comp1.module.scss"
function Comp1() {
    return (
        <div className={styles.box}>
            <p>This is comp 1</p>
        </div>
    )
}

export default Comp1