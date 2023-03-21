import { useContext } from 'react';
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai';
import Layout from '../Layout';
import { LegendScrollContext } from '../store/legendScroll-context';
import styles from './Resources.module.css';

function Resources() {
    const legendScrollCtx = useContext(LegendScrollContext);

    return (
        <Layout>
            <div className={styles.main} onScroll={(e) => legendScrollCtx.onScrollHandler(e)}>
                {legendScrollCtx.showScrollDown && (
                    <AiOutlineArrowDown className={styles.scroll_arrow_down} />
                )}
                {legendScrollCtx.showScrollUp && (
                    <AiOutlineArrowUp className={styles.scroll_arrow_up} />
                )}
                <div className={styles.authors_box}>
                    <h2 className={styles.title}>Authors</h2>
                    <p className={styles.authors}>Jan Łyczakowski and Nicole Yeung</p>
                </div>
                <h2 className={styles.title}>References</h2>
                <div className={styles.copyrights_box}>
                    <div>
                        <p>
                            <span>Hogwarts 3D model created by:</span> AXEL_1_LIBRA
                            (https://cults3d.com/en/3d-model/architecture/castle-hogwarts)
                        </p>
                    </div>
                    <div>
                        <p>
                            <span>Font typeface created by:</span> Robin Springett
                        </p>
                    </div>
                    <div>
                        <p>
                            <span>Overview map inspired by:</span> Harry Potter and the
                            Philosopher&apos;s Stone (1997) J.K Rowling
                        </p>
                    </div>
                    <div>
                        <div>
                            <span>Floor maps (map packages):</span> <br />
                            <p>
                                ‘My Precious’, an ArcGIS Pro symbology style by John Nelson <br />
                                https://esri-styles.maps.arcgis.com/home/item.html?id=0ca1526cfa254f4e9d4b1392b343861d
                            </p>
                            <p>
                                ‘George Washington’, an ArcGIS Pro symbology style by John Nelson{' '}
                                <br />
                                https://esri-styles.maps.arcgis.com/home/item.html?id=191ef05f8bd844c68eee365ada32561b
                            </p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <span>Floor maps (basemap):</span> <br />
                            <p>
                                Hogwarts Blueprint
                                <br />
                                https://www.hp-lexicon.org/place/atlas-wizarding-world/atlas-of-hogwarts/hogwarts-blueprints/
                            </p>
                            <p>
                                Recreation of Hogwarts Blueprints
                                <br />
                                https://www.reddit.com/r/harrypotter/comments/scpvtd/i_recreated_the_hogwarts_map_based_on_the/
                            </p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <span>Floor maps:</span> <br />
                            <p>
                                Hogwarts Castle: Floor by Floor Introduction
                                <br />
                                https://www.hp-lexicon.org/place/atlas-wizarding-world/atlas-of-hogwarts/hogwarts-castle-floor-floor-introduction/
                            </p>
                            <p>
                                Hogwarts Ground Floor Map
                                <br />
                                https://www.deviantart.com/hogwarts-castle/art/Hogwarts-Ground-Floor-47140781
                            </p>
                            <p>
                                Hogwarts Ground Floor Map
                                <br />
                                https://www.deviantart.com/mvm5600/gallery
                            </p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <span>Hogwarts icon:</span>
                            <p>Made by Icons8 (https://icons8.com/icon/105954/hogwarts)</p>
                        </div>
                    </div>
                </div>
                <h2 className={styles.title}>Literature Sources</h2>
                <div className={styles.copyrights_box}>
                    <div>
                        <p>
                            Americans with Disabilities Act (ADA) Standards for Accessible Design.
                            2010. Department of Justice, United States.
                            https://www.ada.gov/law-and-regs/design-standards/2010-stds/ Accessed 26
                            January 2023;
                        </p>
                        <p>
                            Approved Document M: Access to and Use of Buildings, Volume 2: Buildings
                            other than Dwellings. 2021. Department for Levelling Up, Housing and
                            Communities and Ministry of Housing, Communities and Local Government,
                            United Kingdom. https://www.gov.uk
                            /government/publications/access-to-and-Use-of-buildings-approved-document-m.
                            Accessed 28 January 2023;
                        </p>
                        <p>
                            Making Schools Accessible to Children with Disabilities. 2016.
                            Government of India, Samarthyam,and United Nations Children’s Fund.
                            https://www.unicef.org/india/
                            reports/making-schools-accessible-children-disabilities . Accessed 25
                            January 2023.
                        </p>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Resources;
