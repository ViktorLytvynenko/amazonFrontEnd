import {FC} from "react";
import Header from "../../components/Header/Header";
import styles from "./home.module.scss"

const Home: FC<any> = () => {
    return (
        <div>
            <Header/>
            <div className={styles.container}>
                Home page
            </div>
        </div>
    )
}

export default Home;