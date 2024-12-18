import { FC } from "react";
import styles from "./footer.module.scss";

const Footer: FC = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.logo}>EdaGO</div>
                    <div className={styles.nav}>
                        <p className={styles.name}>EdaGO</p>
                        <p className={styles.item}>Публичная оферта</p>
                        <p className={styles.item}>Политики конфиденциальности</p>
                        <p className={styles.item}>О нас</p>
                    </div>
                    <div className={styles.contact}>
                        <p>Колл-центр</p>
                        <p className={styles.phone}>+996 707 243 502 Администрация, +996 558 151 102 Отдел жалоб</p>
                        <p className={styles.schedule}>График работы: c 8:00 до 00:00</p>
                    </div>
                </div>
                <div className={styles.info}>
                    <div>© 2024 EdaGO</div>
                    <div>Design and development</div>
                    <div>Aitunuk & Beknazar</div>
                </div>
            </div>
        </footer>
    );
}
 
export default Footer;