import { useMemo, useState, createContext } from 'react';

export const LegendScrollContext = createContext({
    onScrollHandler: (e) => {},
    showScrollDown: true,
    showScrollUp: false,
    navScrolledTop: true
});

function LegendScrollContextProvider(props) {
    const [navScrolling, isNavScrolling] = useState(true);
    const [navScrolledMax, isNavScrolledMax] = useState(false); // if it's not max it means it's min
    const [navScrolledTop, isNavScrolledTop] = useState(true);
    const { children } = props;

    const onScrollHandler = (e) => {
        console.log(e);
        if (e === undefined) {
            isNavScrolledTop(true);
        } else if (e.target.scrollTop === 0) {
            isNavScrolling(false);
            isNavScrolledMax(false);
            isNavScrolledTop(true);
        } else if (e.target.scrollTop !== 0) {
            if (
                Math.round(e.target.scrollTop) - (e.target.scrollHeight - e.target.offsetHeight) >=
                -1
            ) {
                isNavScrolledMax(true);
                isNavScrolling(true);
                isNavScrolledTop(false);
            } else {
                isNavScrolledMax(false);
                isNavScrolling(true);
                isNavScrolledTop(false);
            }
        }
    };

    const showBothScrolls = !navScrolledTop && navScrolling && !navScrolledMax;
    const showScrollDown =
        showBothScrolls || (navScrolledTop && navScrolling && !navScrolledMax) || navScrolledTop;

    const showScrollUp =
        (showBothScrolls || (!navScrolledTop && navScrolling && navScrolledMax)) && !navScrolledTop;

    const contextValue = useMemo(
        () => ({
            onScrollHandler,
            showScrollDown,
            showScrollUp
        }),
        [navScrolling, navScrolledMax, navScrolledTop]
    );

    return (
        <LegendScrollContext.Provider value={contextValue}>{children}</LegendScrollContext.Provider>
    );
}

export default LegendScrollContextProvider;
