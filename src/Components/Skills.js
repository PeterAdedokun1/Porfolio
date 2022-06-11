import React from 'react'
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import ProgressBar from './ProgressBar';
import {FaHtml5}  from "react-icons/fa";

function Skills() {
    return (
        <SkillsStyled>
            
                <Title title={'My Skills'} span={'my skills'} />
                <InnerLayout>
                    <div className="skills">
                    <ProgressBar 
                        // <FaHtml5/>
                            title={'HTML5'}
                            // width={'99%'}
                            // text={'99%'}
                        />
                        <ProgressBar 
                            title={'CSS3'}
                            // width={'99%'}
                            // text={'99%'}
                    />
                    <ProgressBar 
                            title={'BOOTSTRAP'}
                            // width={'98%'}
                            // text={'98%'}
                    />
                    <ProgressBar 
                            title={'TAILWINDCSS'}
                            // width={'70%'}
                            // text={'70%'}
                        />
                        <ProgressBar 
                            title={'JAVASCRIPT'}
                            // width={'95%'}
                            // text={'95%'}
                        />
                        <ProgressBar 
                            title={'REACTJS'}
                            // width={'90%'}
                            // text={'90%'}
                    />
                    <ProgressBar 
                            title={'MATERIAL UI'}
                            // width={'90%'}
                            // text={'90%'}
                        />
                        <ProgressBar 
                            title={'NEXTJS'}
                            // width={'90%'}
                            // text={'90%'}
                    />
                    <ProgressBar 
                            title={'GIT'}
                            // width={'90%'}
                            // text={'90%'}
                    />
                    <ProgressBar 
                            title={'GITHUB'}
                            // width={'90%'}
                            // text={'90%'}
                        />
                    </div>
                </InnerLayout>
        </SkillsStyled>
    )
}

const SkillsStyled = styled.section`
    .skills{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-row-gap: 2rem;
        grid-column-gap: 3rem;
        @media screen and (max-width: 700px){
            grid-template-columns: repeat(1, 1fr);
        }
    }
`;

export default Skills;
