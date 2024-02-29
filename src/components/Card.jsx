import classes from '../Pages/MyPortfolio.module.scss';

export default function Card({ item }) {

    return (<>
        <li className={classes.card}>
            <article>
                <img src={item.src} />
            </article>
        </li>
    </>);
}