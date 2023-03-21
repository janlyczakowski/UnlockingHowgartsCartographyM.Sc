import React, { useEffect, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { GiCastle } from 'react-icons/gi';
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai';

import GroundFloorLegend from './components/navigation/GroundFloorLegend';
import FirstFloorLegend from './components/navigation/FirstFloorLegend';
import FourthFloorLegend from './components/navigation/FourthFloorLegend';
import styles from './NavigationSidebar.module.css';
import { LegendScrollContext } from './store/legendScroll-context';

function NavigationSidebar() {
    const location = useLocation();
    const legendScrollCtx = useContext(LegendScrollContext);

    let floorSidebarStyle = false;
    if (
        location.pathname === '/groundFloor' ||
        location.pathname === '/firstFloor' ||
        location.pathname === '/fourthFloor'
    ) {
        floorSidebarStyle = true;
    } else {
        floorSidebarStyle = false;
    }
    const homepage = (
        <>
            <li className={styles.active}>
                <Link to="/">Home page</Link>
            </li>
            <li>
                <Link to="/overviewMap">Area overview</Link>
            </li>
            <li>
                <Link to="/groundFloor">Enter the castle</Link>
            </li>
            <li>
                <Link to="/resources">Resources</Link>
            </li>
        </>
    );

    const overviewMap = (
        <>
            <li>
                <Link to="/">Home page</Link>
            </li>
            <li className={styles.active}>
                <Link to="/overviewMap">Area overview</Link>
            </li>
        </>
    );

    const groundFloor = (
        <>
            <li>
                <Link to="/">
                    <GiCastle />
                </Link>
            </li>
            <li className={styles.active}>
                <Link to="/groundFloor">0</Link>
            </li>
            <li>
                <Link to="/firstFloor">1</Link>
            </li>
            <li>
                <Link to="/fourthFloor">4</Link>
            </li>
        </>
    );

    const firstFloor = (
        <>
            <li>
                <Link to="/">
                    <GiCastle />
                </Link>
            </li>
            <li>
                <Link to="/groundFloor">0</Link>
            </li>
            <li className={styles.active}>
                <Link to="/firstFloor">1</Link>
            </li>
            <li>
                <Link to="/fourthFloor">4</Link>
            </li>
        </>
    );

    const fourthFloor = (
        <>
            <li>
                <Link to="/">
                    <GiCastle />
                </Link>
            </li>
            <li>
                <Link to="/groundFloor">0</Link>
            </li>
            <li>
                <Link to="/firstFloor">1</Link>
            </li>
            <li className={styles.active}>
                <Link to="/fourthFloor">4</Link>
            </li>
        </>
    );

    const resources = (
        <>
            <li>
                <Link to="/">Home page</Link>
            </li>
            <li className={styles.active}>
                <Link to="/resources">Resources</Link>
            </li>
        </>
    );

    useEffect(() => {
        legendScrollCtx.onScrollHandler();
    }, []);

    return (
        <div className={styles.box_wrapper}>
            <div className={styles.logo}>
                <h2 className={styles.title}>
                    Unlocking Hogwarts: <br />A Case Study on School Accessibility
                </h2>
            </div>
            <div className={floorSidebarStyle ? `${styles.floor_wrapper}` : `${styles.wrapper}`}>
                <nav
                    className={
                        floorSidebarStyle ? `${styles.floor_navigation}` : `${styles.navigation}`
                    }
                >
                    <ul
                        className={
                            floorSidebarStyle
                                ? `${styles.floor_navigation_list}`
                                : `${styles.navigation_list}`
                        }
                    >
                        {location.pathname === '/' && homepage}
                        {location.pathname === '/overviewMap' && overviewMap}
                        {location.pathname === '/groundFloor' && groundFloor}
                        {location.pathname === '/firstFloor' && firstFloor}
                        {location.pathname === '/fourthFloor' && fourthFloor}
                        {location.pathname === '/resources' && resources}
                    </ul>
                </nav>
                {(location.pathname === '/groundFloor' ||
                    location.pathname === '/firstFloor' ||
                    location.pathname === '/fourthFloor') && (
                    <div className={styles.legend}>
                        {legendScrollCtx.showScrollDown && (
                            <AiOutlineArrowDown className={styles.scroll_arrow_down} />
                        )}
                        {legendScrollCtx.showScrollUp && (
                            <AiOutlineArrowUp className={styles.scroll_arrow_up} />
                        )}
                        {location.pathname === '/groundFloor' && (
                            <GroundFloorLegend onScrollHandler={legendScrollCtx.onScrollHandler} />
                        )}
                        {location.pathname === '/firstFloor' && (
                            <FirstFloorLegend onScrollHandler={legendScrollCtx.onScrollHandler} />
                        )}
                        {location.pathname === '/fourthFloor' && (
                            <FourthFloorLegend onScrollHandler={legendScrollCtx.onScrollHandler} />
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}

export default NavigationSidebar;
