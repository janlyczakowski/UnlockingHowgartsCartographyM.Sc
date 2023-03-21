import { Outlet } from 'react-router-dom';
import { Suspense, React } from 'react';
import { useProgress } from '@react-three/drei';
import Hogwarts3D from './routes/Hogwarts3D';
import Layout from './Layout';
import styles from './App.module.css';

function App() {
    const { loaded } = useProgress();

    const modelLoaded = loaded === 3;

    return (
        <Suspense
            fallback={
                <div className={styles.wrapper}>
                    <p className={styles.loading_text}>Please wait, magic is happening...</p>
                </div>
            }
        >
            <Layout modelLoaded={modelLoaded}>
                <Hogwarts3D />
            </Layout>
            <div id="detail">
                <Outlet />
            </div>
        </Suspense>
    );
}

export default App;
