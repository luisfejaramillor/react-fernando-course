import { useEffect } from "react"

export const Messages = () => {

    useEffect(() => {
    const handleMouseMove = ()=> {
        console.log('holii')
    }
      window.addEventListener('mousemove', handleMouseMove)
    
      return () => {
        console.log('Unmounted')
        window.removeEventListener('mousemove', handleMouseMove)
      }
    }, [])
    
  return (
    <>
        <h3>Usuario ya existe</h3>
    </>
  )
}
