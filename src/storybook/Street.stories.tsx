import { Canvas } from "@react-three/fiber";
import { Model } from '../models/StreetScene.tsx'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { useEffect, useRef } from "react";
import * as THREE from 'three'
import { CameraControls, Html } from "@react-three/drei";
import { MenuItemText } from "../components/styles.ts";

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

const MenuItem = ({ children, ...props }: { children: React.ReactNode } & React.ComponentProps<typeof Html>) => {
  return (
    <Html
      {...props}
      occlude
      transform
      style={{ borderRadius: '10px', padding: '8px', background: 'transparent' }}
    >
      {children}
    </Html>
  )
}

const Component = () => {

  return (
    <Canvas
      style={{ width: '100vw', height: '100vh' }}
      camera={{ position: [0, 0, 20] }}
      shadows='basic'
    >
      {/* <fog attach="fog" args={['black', 5, 30]} /> */}
      <color attach="background" args={['black']} />
      <Scene />
      <CameraControls />
      <group>
        {Array.from({ length: 5 }).map((_, i) => (
          <MenuItem
            position={[-2, 7 - i, -5]}
            key={i}
          >
            <MenuItemText>Menu Item {i + 1}</MenuItemText>
          </MenuItem>
        ))}
      </group>
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
