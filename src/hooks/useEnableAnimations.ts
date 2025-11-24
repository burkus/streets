import { useEffect } from "react"
import * as THREE from 'three'

export default function useEnableAnimations(actions: Record<string, THREE.AnimationAction | undefined>) {
  useEffect(() => {
    Object.values(actions).forEach((action) => {
      if (action) {
        action.enabled = true
        action.reset()
        action.setLoop(THREE.LoopRepeat, Infinity)
        action.play()
      }
    })
  }, [actions])
}