import { cloneElement, useState, type FC, type JSX } from 'react'
import { useSpring, a } from '@react-spring/three'

const InteractiveMesh: FC<JSX.IntrinsicElements['mesh']> = ({ children }) => {
    const [hovered, setHovered] = useState(false)
    const { scale } = useSpring({
        scale: hovered ? 1.2 : 1,         // hover target scale
        config: {
            tension: 200,                  // higher = snappier
            friction: 18,                  // higher = more damped
            mass: 1,
        },
    })


    const handlePointerEnter = () => {
        setHovered(true)
    }

    const handlePointerExit = () => {
        setHovered(false)
    }

    return (
        <a.mesh
            scale={scale}
            onPointerEnter={handlePointerEnter}
            onPointerLeave={handlePointerExit}
        >
            {children}
        </a.mesh>
    )
}

export default InteractiveMesh