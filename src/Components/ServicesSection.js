import React from 'react';
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import ServiceCard from '../Components/ServiceCard';
import design from '../img/design.svg';
import intelligence from '../img/intelligence.svg';
import gamedev from '../img/game-dev.svg';

function ServicesSection() {
    return (
        <InnerLayout>
            <ServicesSectionStyled>
                <Title title={'Services'} span={'services'} />
                <div className="services">
                    <ServiceCard 
                        image={design} 
                        title={'Responsive Web Design'} 
                        paragraph={"I am confident in my ability to produce high-quality work for my clients.If you need a web designer, please contact me.I would be happy to discuss your project with you. "}
                    />
                    {/* <div className="mid-card">
                        <ServiceCard 
                            image={intelligence} 
                            title={'Artificial Intelligence'} 
                            paragraph={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod.'}
                        />
                    </div> */}
                    <ServiceCard 
                        image={design} 
                        title={'Web Development'} 
                        paragraph={'As a web developer, I can provide a wide range of services for my clients.I can design and build website. If you need a web developer, please contact me.'}
                    />
                     {/* <ServiceCard 
                        image={gamedev} 
                        title={'Game Development'} 
                        paragraph={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod.'}
                    /> */}
                </div>
                
            </ServicesSectionStyled>
        </InnerLayout>
    )
}

const ServicesSectionStyled = styled.section`
    .services{
        margin-top: 5rem;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1.5rem;
        @media screen and (max-width:1000px){
            flex-direction: column;
        }
        @media screen and (max-width:950px){
            grid-template-columns: repeat(2, 1fr);
        }
        @media screen and (max-width:650px){
            grid-template-columns: repeat(1, 1fr);
        }
       
    }
`;

export default ServicesSection;
