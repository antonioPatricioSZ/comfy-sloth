/* eslint-disable react/prop-types */
import React from 'react'
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs'
import styles from './Stars.module.css'

// eslint-disable-next-line react/prop-types
const Stars = ({ stars, reviews }) => {

  const tempStars = Array.from( {length: 5}, (_, index) => {
    const number = index + 0.5
    return (
      <span key={index}>
        {stars >= index + 1 ? <BsStarFill />  :  stars >= number ? <BsStarHalf />  : <BsStar /> }
      </span>
    )
  } )

  return (

    <div className={styles.div}>
      <div className='stars'>

        {tempStars}

        {/* <span>
          {stars >= 1 ? <BsStarFill />  :  stars >= 0.5 ? <BsStarHalf />  : <BsStar /> }
        </span>

        <span>
          {stars >= 2 ? <BsStarFill />  :  stars >= 1.5 ? <BsStarHalf />  : <BsStar /> }
        </span>

        <span>
          {stars >= 3 ? <BsStarFill />  :  stars >= 2.5 ? <BsStarHalf />  : <BsStar /> }
        </span>

        <span>
          {stars >= 4 ? <BsStarFill />  :  stars >= 3.5 ? <BsStarHalf />  : <BsStar /> }
        </span>

        <span>
          {stars === 5 ? <BsStarFill />  :  stars >= 4.5 ? <BsStarHalf />  : <BsStar /> }
        </span> */}

      </div>
      <p>{stars > 0 ? stars.toFixed(1).replace(".", ",") : "0,0"}</p>
      <p className='reviews'>({reviews} customer reviews)</p>
    </div>
  )
}

// const Wrapper = styled.div`
//   display: flex;
//   align-items: center;
//   span {
//     color: #ffb900;
//     font-size: 1rem;
//     margin-right: 0.25rem;
//   }
//   p {
//     margin-left: 0.5rem;
//     margin-bottom: 0;
//   }
//   margin-bottom: 0.5rem;
// `
export default Stars
