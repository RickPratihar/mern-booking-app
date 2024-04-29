// import styled from '@emotion/styled';
import { useEffect, useState } from "react";
import styled from "styled-components";
import { FaArrowUp } from "react-icons/fa";



const ScrollToTop = () => {

const [isVisible, setIsVisible] = useState(false);

const goToTopBtn = () => {

    window.scrollTo({top: 0, left:0, behavior: "smooth" });
}
const listenToScroll = () => {
    let heightToHidden = 20;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHidden) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);


  return (
    <Wrapper>
    {isVisible && (
      <div className="top-btn" onClick={goToTopBtn}>
        <FaArrowUp className="top-btn--icon" />
      </div>
    )}
  </Wrapper>
  )
}

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  .top-btn {
    font-size: 1.4rem;
    width: 3rem;
    height: 3rem;
    color: #fff;
    background-color: rgb(0, 60, 255);
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.2);
    border-radius: 50%;
    position: fixed;
    bottom: 1rem;
    right: 3rem;
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &--icon {
      animation: gototop 1.2s linear infinite alternate-reverse;
    }

    @keyframes gototop {
      0% {
        transform: translateY(-0.5rem);
      }
      100% {
        transform: translateY(1rem);
      }
    }
  }

  @media  (max-width:600px) {
    .top-btn {
      right: 0;
      left: 75%;
      width: 3rem;
      height: 3rem;
    }
  }
`;

export default ScrollToTop