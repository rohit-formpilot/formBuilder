import { CardProps } from "../../types/CardPropsType";
import styles from './Card.module.css';

export default function Card({ id, userId, title, body }: CardProps) {
    return (
        <article className={styles.card}>
            <div className={styles.cardTitle}>{title}</div>
            <div className={styles.cardBody}>{body}</div>
            <div className={styles.cardFooter}>
                Card ID: {id} | User ID: {userId}
            </div>
        </article>
    );
}
