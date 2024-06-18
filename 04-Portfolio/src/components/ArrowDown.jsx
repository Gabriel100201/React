import '../styles/scroll-arrow.css'
import { useParallax } from 'react-scroll-parallax';

export const ArrowDown = () => {
  const parallax = useParallax({ speed: 0 });
  return (
    <div ref={parallax.ref} className="left-1/2">
      <div className="mouse">
        <div className="wheel"></div>
      </div>
      <div>
        <span className="m_scroll_arrows unu"></span>
        <span className="m_scroll_arrows doi"></span>
        <span className="m_scroll_arrows trei"></span>
      </div>
    </div>
  )
}