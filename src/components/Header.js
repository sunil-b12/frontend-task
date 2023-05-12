import React from 'react'
import { Link } from 'react-scroll';
import { animateScroll as scroll } from 'react-scroll';


const Header = (props) => {

  function handleClick() {
    scroll.scrollToTop({
      duration: 500,
      delay: 100,
      smooth: true
    });
  }
  return (
    <div className='header'>
      {props.title.map((item) => (
        <h4 key={item.id} className=''>
          <Link to={item.service_order} smooth={true} onClick={handleClick}>{item.title}</Link>
        </h4>
      ))}
    </div>
  )
}

export default Header