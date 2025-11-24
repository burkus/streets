import { Canvas } from "@react-three/fiber";
import { Model } from '../models/StreetScene.tsx'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { useEffect, useRef } from "react";
import * as THREE from 'three'
import { CameraControls } from "@react-three/drei";
import { List, MenuItemText } from "../components/styles.ts";

const isLight = (obj: any): obj is THREE.Light => obj.isLight

const Scene = () => {
  const group = useRef<THREE.Mesh | null>(null)
  useEffect(() => {
    if (group.current) {
      group.current.traverse(obj => {
        if (isLight(obj)) {
          obj.intensity *= 0.0005
        }
      })
    }
  }, [group])

  return (
    <mesh
      ref={group}
    >
      <Model />
    </mesh>
  )
}

const Component = () => {
  return (
    <Canvas
      style={{ width: '100vw', height: '100vh' }}
      camera={{ position: [0, 0, 5] }}
      shadows='basic'
    >
      <color attach="background" args={['black']} />
      <Scene />
      <CameraControls />
      {/* <Html occlude transform position={[-2, 5, -5]}>
        <List>
          {Array.from({ length: 5 }).map((_, i) => (
            <MenuItemText>Menu Item {i + 1}</MenuItemText>
          ))}
        </List>
      </Html> */}
    </Canvas>
  )
}

const meta = {
  component: Component,
  parameters: {
    layout: 'fullscreen'
  }
} satisfies Meta<typeof Component>

type Story = StoryObj<typeof meta>

export default meta

export const Default: Story = {

}
