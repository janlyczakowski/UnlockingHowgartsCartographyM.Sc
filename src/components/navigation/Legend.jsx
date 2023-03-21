import { useEffect, useState } from 'react';

import styles from './Legend.module.css';

function LegendItem(props) {
    const { legendContent } = props;
    const states = [];
    legendContent.forEach((element) => {
        states.push({
            name: element.name,
            isDescriptionOpen: element.descriptionOpen
        });
    });
    const [descriptionOpen, isDescriptionOpen] = useState(states);

    const onClickArrowHandler = (event) => {
        const updatedState = [];
        descriptionOpen.forEach((element) => {
            if (event.target.id === element.name) {
                updatedState.push({
                    name: element.name,
                    isDescriptionOpen: !element.isDescriptionOpen
                });
            } else {
                updatedState.push({
                    name: element.name,
                    isDescriptionOpen: element.isDescriptionOpen
                });
            }
        });
        isDescriptionOpen(updatedState);
    };
    const toggleDescription = (name) => {
        let descriptionVisible = false;
        if (descriptionOpen !== null) {
            descriptionOpen.forEach((element) => {
                if (element.name === name) {
                    descriptionVisible = element.isDescriptionOpen;
                }
            });
        }
        return descriptionVisible;
    };

    const showArrow = (description) => {
        return description.length > 0;
    };
    useEffect(() => {
        // workaround (check the lenght of legendContent with description Open to avoid rerender[it works only because we have differnt ])
        // numbers of accessible items and inaccessible items per floor

        if (
            legendContent !== null &&
            descriptionOpen !== null &&
            legendContent.length !== descriptionOpen.length
        ) {
            const descriptionStates = [];
            legendContent.forEach((element) => {
                descriptionStates.push({
                    name: element.name,
                    isDescriptionOpen: element.descriptionOpen
                });
            });
            isDescriptionOpen(descriptionStates);
        }
    }, [legendContent]);

    const content = legendContent.map((element) => {
        return (
            <div className={styles.legend_item_wrapper} key={element.name}>
                <div className={styles.legend_item} key={element.name}>
                    <img
                        src={element.icon}
                        className={styles.legend_icon}
                        id={styles[element.name]}
                        alt={element.iconAlt}
                    />
                    <div className={styles.legend_element}>
                        <p className={styles.item_title}>{element.name}</p>

                        {showArrow(element.description) && toggleDescription(element.name) && (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="black"
                                className={styles.description_arrow}
                                alt="Open description"
                                onClick={onClickArrowHandler}
                                id={element.name}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4.5 15.75l7.5-7.5 7.5 7.5"
                                    className={styles.description_arrow_path}
                                    onClick={onClickArrowHandler}
                                    id={element.name}
                                />
                            </svg>
                        )}

                        {showArrow(element.description) && !toggleDescription(element.name) && (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="black"
                                className={styles.description_arrow}
                                alt="Close description"
                                onClick={onClickArrowHandler}
                                id={element.name}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                    className={styles.description_arrow_path}
                                    onClick={onClickArrowHandler}
                                    id={element.name}
                                />
                            </svg>
                        )}
                    </div>
                </div>
                {toggleDescription(element.name) && element.description !== '' && (
                    <div className={styles.description}>
                        {element.description.map((text) => {
                            return <p className={styles.description_content}>{text}</p>;
                        })}
                    </div>
                )}
            </div>
        );
    });

    return <div>{content}</div>;
}

export default LegendItem;
