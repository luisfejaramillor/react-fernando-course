import PropTypes from 'prop-types'
import { useLayoutEffect, useRef, useState } from 'react'

export const Quote = ({_id='', quote='', author=''}) => {
  const [boxSize, setBoxSize] = useState({width: 0, height: 0})
  const pRef = useRef()
  useLayoutEffect(() => {
    const {height, width } = pRef.current.getBoundingClientRect()
    setBoxSize({height, width})
  }, [quote])

  return (
    <>
      <blockquote key={_id} className="blockquote text-end" style={{display:'flex'}} >
          <p ref={pRef} className="mb-1" > {quote} </p>
          <footer className="blockquote-footer"> {author} </footer>
      </blockquote>
    </>
  )
}


Quote.propTypes = {
    _id: PropTypes.string,
    quote: PropTypes.string,
    author: PropTypes.string,
}
