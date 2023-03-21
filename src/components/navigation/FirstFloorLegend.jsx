import { useContext } from 'react';

import styles from './FloorsLegend.module.css';
import Legend from './Legend';
import { LegendContext } from '../../store/legend-context';
import stairsIcon from '../../resources/svg/first floor/inaccessible/Stairs.svg';
import inaccessibleTableIcon from '../../resources/svg/first floor/inaccessible/Table.svg';
import inaccessibleSeatsIcon from '../../resources/svg/first floor/inaccessible/Seats.svg';

import accessibleTableIcon from '../../resources/svg/first floor/accessible/Table.svg';
import accessibleSeatsIcon from '../../resources/svg/first floor/accessible/Seats2.svg';
import rampIcon from '../../resources/svg/first floor/accessible/Ramp.svg';
import elevatorIcon from '../../resources/svg/first floor/accessible/Elevator.svg';

import pdfFile from '../../resources/pdf/FeatureDescription.pdf';

function FirstFloorLegend(props) {
    const { onScrollHandler } = props;
    const legendCtx = useContext(LegendContext);

    const onChangenHandler = (event) => {
        legendCtx.isFeaturesAccessibleFirstFloor(event.target.value);
    };

    const accessibleLegend = [
        {
            icon: elevatorIcon,
            iconAlt: 'Elevator icon',
            name: 'Elevator',
            description: [
                'More than 1370 mm deep x 915 mm wide;',
                'More than 1.49 sq.m. of clear floor area.'
            ],
            descriptionOpen: false
        },
        {
            icon: rampIcon,
            iconAlt: 'Ramp icon',
            name: 'Ramp',
            description: [
                'Locations of ramp are identifiable with signage;',
                'Ramp gradient is less than 1:12;',
                'Width of ramp is more than 1200 mm, with edge protection on both sides;',
                'Anti-slip or matte-finished surface.'
            ],
            descriptionOpen: false
        },
        {
            icon: accessibleSeatsIcon,
            iconAlt: 'Accessible seats icon',
            name: 'Seats',
            description: [
                'Dispersed accessible seats to allow various location choices and view angles;',
                'Adequate, accessible route from, to, and between seatings;',
                'Adequate, clear floor area at the seating.'
            ],
            descriptionOpen: false
        },
        {
            icon: accessibleTableIcon,
            iconAlt: 'Accessible table icon',
            name: 'Table',
            description: [
                'Height-adjustable to suit a variety of wheelchair types;',
                'Adequate knee clearance space between the floor and the underside of the accessible surface.'
            ],
            descriptionOpen: false
        }
    ];
    const inAccessibleLegend = [
        {
            icon: stairsIcon,
            iconAlt: 'Stairs icon',
            name: 'Stairs',
            description: '',
            descriptionOpen: false
        },
        {
            icon: inaccessibleSeatsIcon,
            iconAlt: 'Inaccessible seats icon',
            name: 'Seats',
            description: '',
            descriptionOpen: false
        },
        {
            icon: inaccessibleTableIcon,
            iconAlt: 'Inaccessible table icon',
            name: 'Table',
            description: '',
            descriptionOpen: false
        }
    ];
    return (
        <div className={styles.wrapper} onScroll={(e) => onScrollHandler(e)}>
            <p className={styles.title}>Classroom</p>
            <div className={styles.legend}>
                <p className={styles.description}>
                    The Defence Against the Dark Arts classroom is a representative example of how
                    classrooms can be transformed in our case study
                </p>
                <div className={styles.buttons}>
                    <div className={styles.button}>
                        <div className={styles.input_wrapper}>
                            <label htmlFor="input_inaccesible" className={styles.btn_name}>
                                Inaccessbile
                            </label>
                            <input
                                id="input_inaccesible"
                                type="radio"
                                value="inaccessible"
                                name="input_inaccesible"
                                onChange={onChangenHandler}
                                checked={legendCtx.featuresAccessibleFirstFloor === 'inaccessible'}
                            />
                            <div className={styles.cross} />
                        </div>
                    </div>
                    <div className={styles.button}>
                        <div className={styles.input_wrapper}>
                            <label htmlFor="input_accesible" className={styles.btn_name}>
                                Accessbile
                            </label>
                            <input
                                id="input_accesible"
                                type="radio"
                                value="accessible"
                                name="input_accesible"
                                onChange={onChangenHandler}
                                checked={legendCtx.featuresAccessibleFirstFloor === 'accessible'}
                            />
                            <div className={styles.cross} />
                        </div>
                    </div>
                </div>
                <div className={styles.legend_content}>
                    <Legend
                        legendContent={
                            legendCtx.featuresAccessibleFirstFloor === 'accessible'
                                ? accessibleLegend
                                : inAccessibleLegend
                        }
                    />
                </div>
            </div>
            <p className={styles.link_description}>
                For more details on the specific criteria on accessibility design, please refer to
                the supplementary document linked{' '}
                <span className={styles.link_span}>
                    <a className={styles.link} href={pdfFile} download>
                        here
                    </a>
                </span>
            </p>
        </div>
    );
}

export default FirstFloorLegend;
