import React from 'react'
import styled from 'styled-components';
import FacebookIcon from '@material-ui/icons/Facebook';
import GithubIcon from '@material-ui/icons/GitHub';
// import YoutubeIcon from '@material-ui/icons/YouTube';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LinkedIcon from "@material-ui/icons/LinkedIn"
import Email from "@material-ui/icons/Email"
import Particle from '../Components/Particle';

function HomePage() {
    return (
        <HomePageStyled>
            <div className="particle-con">
                <Particle />
            </div>
            <div className="typography">
                <h1>Hi, I'm <span>Adedokun Peter</span></h1>
                <p>
                    I am an outstanding Frontend Developer with extensive knowledge of Javascript and browser API as well as significant experience with popular frameworks and libraries like React and Redux. Skilled in designing, developing and testing multiple web-based applications incorporating a range of technologies .
                </p>
                <div className="icons">
                    <a href="mailto: adedokunpeter11@gmail.com" className="icon i-facebook">
                        <Email />
                    </a>
                    <a href="https://github.com/PeterAdedokun1" className="icon i-github">
                        <GithubIcon />
                    </a>
                    <a href="https://linkedin.com/in/peter-adedokun-111966231" className="icon i-youtube">
                      <LinkedIcon/>
                    </a>
                </div>
            </div>
        </HomePageStyled>
    )
}

const HomePageStyled = styled.header`
    width: 100%;
    height: 100vh;
    position: relative;
   
    .typography{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        width: 80%;

        .icons{
            display: flex;
            justify-content: center;
            margin-top: 1rem;
            .icon{
                border: 2px solid var(--border-color);
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                transition: all .4s ease-in-out;
                cursor: pointer;
                &:hover{
                    border: 2px solid var(--primary-color);
                    color: var(--primary-color);
                }
                &:not(:last-child){
                    margin-right: 1rem;
                }
                svg{
                    margin: .5rem;
                }
            }

            .i-youtube{
                &:hover{
                    border: 2px solid red;
                    color: red;
                }
            }
            .i-github{
                &:hover{
                    border: 2px solid #5F4687;
                    color: #5F4687;
                }
            }
        }
    }
`;

export default HomePage;
