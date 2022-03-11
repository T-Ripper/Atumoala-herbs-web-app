import React, {useState} from 'react';
import { sliderItems } from '../data';
import "../Styles/Slider.styles.css";
import styled from 'styled-components'
import { mobile } from '../responsive';


const Arrow = styled.div `
    
    width: 50px;
    height: 50px;
    background-color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
  /* this is to put it in a props then make it go left by 5px */
    left : ${props => props.direction === "left" && "5px"};
    right : ${props => props.direction === "right" && "5px"};
    cursor: pointer;
    opacity: 0.5;
    z-index : 2
        ` ;
        const Contain = styled.div `
            width: 100vw;
            height: 100vh;
             display: flex;
            background-color: wheat;
            position: relative;
            overflow: hidden;
            ${mobile({ display: "none" }) }

        `

        const Wrapper = styled.div `
          height: 100%;
          display: flex;
          transition: all 1.5s ease;
          transform: translateX(${props => props.slideIndex *-100}vw);
           
        `

        const Slide= styled.div `
              width: 100vw;
        height: 100vh;
        display: flex;
        align-items: center;
        /* name the background color in the Slide tab as bg so as to add 
        diferent image instead of repeating */
        background-color: #${props => props.bg};

        `
        const Image = styled.img `
              height: 100%;
             width: 100%;
        `
    

        const Button = styled.button `
         padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
        `



const Slider = () => {

    const [slideIndex, setslideindex] = useState(0);
    const handleClick = (direction) => {
        if (direction === "left") {
          setslideindex(slideIndex > 0 ? slideIndex-1 :2)
        } else {
          setslideindex (slideIndex < 2 ? slideIndex+1 :0)
        }

    }

    return (
        <Contain>
            <Arrow direction= "left" onClick= {() => handleClick ("left")}>
            <i className="  large arrow left icon"></i>
            </Arrow> 
            
            <Wrapper slideIndex= {slideIndex}>
            {sliderItems.map((item) => (
               <Slide bg = {item.bg} key= {item.id}>
                   <div className= "img-container">
                       <Image src={item.img}  />
                   </div>
                   <div className= "info-container">
                       <h1> {item.title} </h1>
                       <p>{item.desc}</p>
                       <Button>Shop Now</Button>
                       
                   </div>
               </Slide>
                    ))}
                </Wrapper>
           
           
            <Arrow direction= "right" onClick= {() => handleClick ("right")}  >
            <i className=" large 
            arrow right icon"></i>
            </Arrow> 
        </Contain>
    )
}

export default Slider;
