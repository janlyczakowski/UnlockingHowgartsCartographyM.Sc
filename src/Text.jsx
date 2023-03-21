import { useNavigate } from 'react-router-dom';
import { extend } from '@react-three/fiber';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
import hpFont from './resources/fonts/Dumbledor_1.json';

extend({ TextGeometry });

function Text(props) {
    const { content, position, rotation, size, name, setVisibility, boxPosition, boxSize } = props;
    const font = new FontLoader().parse(hpFont);
    const navigate = useNavigate();

    const onMouseOverHandler = (event) => {
        event.stopPropagation();
        event.object.parent.children.forEach((element) => {
            if (
                element.type === 'Mesh' &&
                `${event.object.name}_invisible_box`.includes(element.name)
            ) {
                element.scale.set(1.1, 1.1, 1.1);
                // #8a6006
                // #9e7d51
                element.material.color.set('#b99e75');
            }
        });

        setVisibility((prev) => !prev);
    };

    const onMouseOutHandler = (event) => {
        event.stopPropagation();
        event.object.parent.children.forEach((element) => {
            if (
                element.type === 'Mesh' &&
                `${event.object.name}_invisible_box`.includes(element.name)
            ) {
                element.scale.set(1, 1, 1);
                // '#eeba30'
                element.material.color.set('#cdc6b4');
            }
        });

        setVisibility((prev) => !prev);
    };

    const onClickHandler = (event) => {
        event.stopPropagation();
        if (event.object.name === 'The Great Hall_invisible_box') {
            navigate('/groundFloor');
        } else if (event.object.name === 'Defence Against the Dark Arts_invisible_box') {
            navigate('/firstFloor');
        } else if (event.object.name === 'Library_invisible_box') {
            navigate('/fourthFloor');
        }
    };

    const invisibleBoxName = `${name}_invisible_box`;
    return (
        <>
            {/* Add transparent box to interact with instead of label, for the better UX */}
            <mesh
                position={boxPosition}
                rotation={rotation}
                onPointerEnter={(e) => onMouseOverHandler(e)}
                onPointerLeave={(e) => onMouseOutHandler(e)}
                onClick={(e) => onClickHandler(e)}
                name={invisibleBoxName}
            >
                <boxBufferGeometry args={boxSize} />
                <meshStandardMaterial
                    opacity={0}
                    transparent
                    thickness={0}
                    transmission={0}
                    depthTest
                />
            </mesh>

            <mesh position={position} rotation={rotation} name={name}>
                <textGeometry
                    args={[
                        content,
                        {
                            font,
                            size,
                            height: 0.5
                        }
                    ]}
                />
                <meshLambertMaterial attach="material" color="#cdc6b4" roughness={0} />
            </mesh>
        </>
    );
}

export default Text;
