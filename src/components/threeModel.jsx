import * as THREE from 'three'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber';
import texture1 from "../assets/texture.jpg"
import { Stars } from '@react-three/drei';
import mars from "../assets/mars.jpg"
import sun from "../assets/sun.jpg"
import smoke from "../assets/smoke.jpg"
const Sphere = () => {
   let texture =  new THREE.TextureLoader().load(mars)
   let texture2 =  new THREE.TextureLoader().load(texture1)
   let texture3 = new THREE.TextureLoader().load(sun)
   let texture4 =  new THREE.TextureLoader().load(smoke)

   texture.wrapS = THREE.RepeatWrapping
   texture.wrapT = THREE.RepeatWrapping

   
  
    const sphereRotate = useRef()

    useFrame(()=>{
        sphereRotate.current.rotation.y += 0.001
    })
   
    return(
        <>
        <ambientLight intensity={0.13} />
        <Stars radius={250} depth={50} count={2000} factor={7} saturation={28}/>
        <pointLight color={"orange"} position={[-3,0,2]} intensity={15}/>

        <mesh ref={sphereRotate} >
            
            <sphereGeometry args={[2, 60, 60]} />
            <meshStandardMaterial map={texture} side={THREE.DoubleSide} bumpMap={texture2} bumpScale={7}/> 
               
           
        </mesh>
        <mesh position={[-25,1.5,2]}>
        <pointLight color={"red"} position={[-6,0,2]} intensity={15}/>
        <sphereGeometry args={[4, 60, 60]} />
            <meshStandardMaterial side={THREE.DoubleSide} metalness={8} color={"orange"}  bumpMap={texture2} bumpScale={7}/>
        </mesh>
        </>
    )
}

export default Sphere