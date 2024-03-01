import classes from '../Pages/Gallery.module.scss';

export default function Card({ item }) {

    return (<>
        <li className={classes.card}>
            <article>
                <img src={item.src} />
            </article>
        </li>
    </>);
}