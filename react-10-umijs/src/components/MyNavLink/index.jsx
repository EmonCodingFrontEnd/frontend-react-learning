import {NavLink} from "umi";
import styles from './index.css'

function MyNavLink(props) {
    return (
        <NavLink
            className={({isActive}) =>
                `list-group-item ${isActive ? styles.flyin : ''}`
            }
            {...props}
        />
    );
}

export default MyNavLink;