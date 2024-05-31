import React, { useState } from 'react';
import { Data } from './Data';
import { IconContext } from 'react-icons';
import styled from 'styled-components';
import { FiMinus, FiPlus } from 'react-icons/fi';

const AccordionSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    height: 100vh;
    background: white;
`;

const Container = styled.div`
    position: absolute;
    top: 20%;
    box-shadow: 2px 10px 35px 1px rgba(153, 153, 153, 0.3);
`;

const Wrapper = styled.div`
    background: #272727;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    text-align: center;
    cursor: pointer;

    h1{
        padding: 2rem;
        font-size: 2rem;
    }

    span{
        margin-right: 1.5rem;
    }
`;

const Dropdown = styled.div`
    background: #1c1c1c;
    color: #00ffb9;
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #00ffb9;
    border-top: 1px solid #00ffb9;

    p{
        font-size: 2rem;
    }
`;

const Accordion = () => {
    const [clicked, setClicked] = useState(false);

    const toggle = index => {
        if (clicked === index) {
            return setClicked(null);
        }
        setClicked(index);
    }

    return (
        <IconContext.Provider value={{ color: '#00FFB9', size: '25px' }}>
            <AccordionSection>
                <Container>
                    {Data.map((item, index) => {
                        return (
                            <>
                                <Wrapper onClick={() => toggle(index)} key={index}>
                                    <h1>{item.question}</h1>
                                    <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                                </Wrapper>
                                {clicked === index ? (
                                    <Dropdown>
                                        <p>{item.answer}</p>
                                    </Dropdown>
                                ) : null}
                            </>
                        )
                    })}
                </Container>
            </AccordionSection>
        </IconContext.Provider>
    )
}

export default Accordion;