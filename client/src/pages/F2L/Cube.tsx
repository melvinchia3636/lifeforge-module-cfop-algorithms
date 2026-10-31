import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'

const RED = 0xef4444

const ORANGE = 0xf97316

const YELLOW = 0xfacc15

const GREEN = 0x22c55e

const BLUE = 0x0ea5e9

const WHITE = 0xffffff

const GRAY = 0x404040

const SIZE = 72

type Sticker = 'r' | 'o' | 'y' | 'g' | 'b' | 'w' | '-'

type Row = [Sticker, Sticker, Sticker]

type Face = [Row, Row, Row]

type Side = [Face, Face, Face]

const COLORS: Record<Sticker, number> = {
  r: RED,
  o: ORANGE,
  y: YELLOW,
  g: GREEN,
  b: BLUE,
  w: WHITE,
  '-': GRAY
}

let renderer: THREE.WebGLRenderer | null = null

const cache = new Map<string, string>()

function getRenderer(): THREE.WebGLRenderer {
  if (renderer === null) {
    renderer = new THREE.WebGLRenderer({ preserveDrawingBuffer: true })
    renderer.setClearColor(0xffffff, 0)
    renderer.setSize(SIZE, SIZE)
    renderer.setPixelRatio(window.devicePixelRatio)
  }

  return renderer
}

function renderPattern(pattern: string): string {
  const cached = cache.get(pattern)

  if (cached !== undefined) {
    return cached
  }

  const side: Side = pattern.split(' ').map(
    face =>
      [
        [face[0], face[1], face[2]],
        [face[3], face[4], face[5]],
        [face[6], face[7], face[8]]
      ] as Face
  ) as Side

  const scene = new THREE.Scene()

  const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 1000)

  camera.position.z = 5

  const cubeSize = 0.6

  const edgeThickness = 0.04

  const borderColor = 0x000000

  const rubiksCube = new THREE.Group()

  function createMaterials(x: number, y: number, z: number): THREE.Material[] {
    const materials = [
      new THREE.MeshBasicMaterial({ color: GRAY }),
      new THREE.MeshBasicMaterial({ color: GRAY }),
      new THREE.MeshBasicMaterial({ color: GRAY }),
      new THREE.MeshBasicMaterial({ color: GRAY }),
      new THREE.MeshBasicMaterial({ color: GRAY }),
      new THREE.MeshBasicMaterial({ color: GRAY })
    ]

    for (const i of [0, 1, 2] as const) {
      for (const j of [0, 1, 2] as const) {
        if (x === 2 - i && y === 2 && z === j) {
          materials[2] = new THREE.MeshBasicMaterial({
            color: COLORS[side[2][i][j]]
          })
        }
      }
    }

    for (const i of [0, 1, 2] as const) {
      for (const j of [0, 1, 2] as const) {
        if (x === j && y === 2 - i && z === 2) {
          materials[4] = new THREE.MeshBasicMaterial({
            color: COLORS[side[1][i][j]]
          })
        }
      }
    }

    for (const i of [0, 1, 2] as const) {
      for (const j of [0, 1, 2] as const) {
        if (x === 0 && y === 2 - i && z === j) {
          materials[1] = new THREE.MeshBasicMaterial({
            color: COLORS[side[0][i][j]]
          })
        }
      }
    }

    return materials
  }

  for (let x = 0; x < 3; x++) {
    for (let y = 0; y < 3; y++) {
      for (let z = 0; z < 3; z++) {
        const geometry = new THREE.BoxGeometry(cubeSize, cubeSize, cubeSize)

        const materials = createMaterials(x, y, z)

        const cube = new THREE.Mesh(geometry, materials)

        const borderGeometry = new THREE.BoxGeometry(
          cubeSize + edgeThickness * 2,
          cubeSize + edgeThickness * 2,
          cubeSize + edgeThickness * 2
        )

        const borderMaterial = new THREE.MeshBasicMaterial({
          color: borderColor,
          side: THREE.BackSide
        })

        const border = new THREE.Mesh(borderGeometry, borderMaterial)

        const edgeMaterial = new THREE.MeshBasicMaterial({
          color: borderColor
        })

        cube.position.set(
          (x - 1) * (cubeSize + edgeThickness * 2),
          (y - 1) * (cubeSize + edgeThickness * 2),
          (z - 1) * (cubeSize + edgeThickness * 2)
        )
        border.position.copy(cube.position)

        rubiksCube.add(cube)
        rubiksCube.add(border)

        if (x === 0 && z === 2) {
          const edgeGeometry = new THREE.BoxGeometry(
            edgeThickness,
            cubeSize + edgeThickness,
            edgeThickness
          )

          const edge = new THREE.Mesh(edgeGeometry, edgeMaterial)

          edge.position.set(-cubeSize / 2, 0, cubeSize / 2)
          edge.position.add(cube.position)
          rubiksCube.add(edge)
        }

        if (y === 2 && z === 2) {
          const edgeGeometry = new THREE.BoxGeometry(
            cubeSize + edgeThickness,
            edgeThickness,
            edgeThickness
          )

          const edge = new THREE.Mesh(edgeGeometry, edgeMaterial)

          edge.position.set(0, cubeSize / 2, cubeSize / 2)
          edge.position.add(cube.position)
          rubiksCube.add(edge)
        }

        if (y === 2 && x === 0) {
          const edgeGeometry = new THREE.BoxGeometry(
            edgeThickness,
            edgeThickness,
            cubeSize + edgeThickness
          )

          const edge = new THREE.Mesh(edgeGeometry, edgeMaterial)

          edge.position.set(-cubeSize / 2, cubeSize / 2, 0)
          edge.position.add(cube.position)
          rubiksCube.add(edge)
        }
      }
    }
  }

  rubiksCube.rotation.x = Math.PI / 5
  rubiksCube.rotation.y = Math.PI / 4

  scene.add(rubiksCube)

  const threeRenderer = getRenderer()

  threeRenderer.render(scene, camera)

  const url = threeRenderer.domElement.toDataURL('image/png')

  cache.set(pattern, url)

  const geometries = new Set<THREE.BufferGeometry>()

  const materials = new Set<THREE.Material>()

  rubiksCube.traverse(object => {
    if (object instanceof THREE.Mesh) {
      geometries.add(object.geometry)

      const objectMaterials = Array.isArray(object.material)
        ? object.material
        : [object.material]

      for (const material of objectMaterials) {
        materials.add(material)
      }
    }
  })

  for (const geometry of geometries) {
    geometry.dispose()
  }

  for (const material of materials) {
    material.dispose()
  }

  scene.remove(rubiksCube)

  return url
}

function Cube({ pattern }: { pattern: string }) {
  const ref = useRef<HTMLImageElement>(null)
  const [src, setSrc] = useState<string | null>(null)

  useEffect(() => {
    const element = ref.current

    if (element === null) return

    const cached = cache.get(pattern)

    if (cached !== undefined) {
      setSrc(cached)

      return
    }

    if (typeof IntersectionObserver === 'undefined') {
      setSrc(renderPattern(pattern))

      return
    }

    const observer = new IntersectionObserver(
      entries => {
        if (entries.some(entry => entry.isIntersecting)) {
          observer.disconnect()
          setSrc(renderPattern(pattern))
        }
      },
      { rootMargin: '300px' }
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [pattern])

  return (
    <img ref={ref} alt="" height={SIZE} src={src ?? undefined} width={SIZE} />
  )
}

export default Cube
