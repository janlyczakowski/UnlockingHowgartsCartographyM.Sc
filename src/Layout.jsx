import styles from './Layout.module.css';
import NavigationSidebar from './NavigationSidebar';

function Layout(props) {
    const { children, modelLoaded } = props;
    const navStyles =
        modelLoaded || modelLoaded === undefined
            ? `${styles.navigation_box}`
            : `${styles.navigation_box_inactive}`;

    return (
        <div className={styles.app_layout}>
            <div className={navStyles}>
                <NavigationSidebar />
            </div>
            <div className={styles.content_box}>{children}</div>
        </div>
    );
}

export default Layout;
