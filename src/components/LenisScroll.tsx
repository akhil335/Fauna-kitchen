// components/LenisScroll.tsx
import ReactLenis from 'lenis/react'
import { useMemo } from 'react'

const LenisScroll = () => {

  const options = useMemo(() => ({ anchors: {  offset: -120, } }), [])

  return <ReactLenis root options={options} />
}

export default LenisScroll