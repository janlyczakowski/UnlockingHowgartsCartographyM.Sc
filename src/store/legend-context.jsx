import { useMemo, useState, createContext } from 'react';

export const LegendContext = createContext({
    featuresAccessible: 'inaccessible',
    isFeaturesAccessible: (state) => {}
});

function LegendContextProvider(props) {
    const [featuresAccessibleGroundFloor, isFeaturesAccessibleGroundFloor] =
        useState('inaccessible');
    const [featuresAccessibleFirstFloor, isFeaturesAccessibleFirstFloor] = useState('inaccessible');
    const [featuresAccessibleFourthFloor, isFeaturesAccessibleFourthFloor] =
        useState('inaccessible');
    const { children } = props;

    const contextValue = useMemo(
        () => ({
            featuresAccessibleGroundFloor,
            featuresAccessibleFirstFloor,
            featuresAccessibleFourthFloor,
            isFeaturesAccessibleGroundFloor,
            isFeaturesAccessibleFirstFloor,
            isFeaturesAccessibleFourthFloor
        }),
        [featuresAccessibleGroundFloor, featuresAccessibleFirstFloor, featuresAccessibleFourthFloor]
    );

    return <LegendContext.Provider value={contextValue}>{children}</LegendContext.Provider>;
}

export default LegendContextProvider;
