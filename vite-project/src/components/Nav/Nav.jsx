import React from 'react'
import styles from "./Nav.module.css";
import profile_pic from "../../assets/images/image-jeremy.png";

function Nav({ timeMode, setTimeMode }) {

    function isActive(value) {
        if (timeMode == value)
            return ` ${styles.active}`;
        return "";
    }
    return (
        <div className={styles.nav_container}>
            <div className={styles.nav_container__profile}>
                <img src={profile_pic} alt="" />
                <div className={styles.nav_container__text}>
                    <span className={styles.nav_container__report_for}>Report for</span>
                    <span className={styles.nav_container__name}>Jeremy Robson</span>
                </div>
            </div>
            <nav>
                <button
                    className={styles.nav_container__btn + isActive("daily")}
                    onClick={()=>{setTimeMode("daily")}}
                >Daily</button>
                <button
                    className={styles.nav_container__btn + isActive("weekly")}
                    onClick={()=>{setTimeMode("weekly")}}
                >Weekly</button>
                <button
                    className={styles.nav_container__btn + isActive("monthly")}
                    onClick={()=>{setTimeMode("monthly")}}
                >Monthly</button>
            </nav>
        </div>
    )
}

export default Nav