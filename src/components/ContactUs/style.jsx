import { styled } from "styled-components"

export const ContactMessage = styled.div`
    width: 50%;
    gap: 20px;
    display: flex;
    flex-direction: column;
    align-items: start;
`

export const ContactTitle = styled.h3`
    display: block;
    font-weight: 700;
    font-size: 3em;
    letter-spacing: 3px;
    text-transform: capitalize;
    margin-bottom: 30px;
    margin-top: 20px;

    @media (max-width: 768px) {
        font-size: 4em;
        margin-bottom: 20px;
    }
    @media (max-width: 375px) {
        font-size: 3em;
        margin-bottom: 10px;
    }
`

export const ContactInp = styled.input`
    width: 100%;
    outline: none;
    border-radius: 5px;
    border: 3px solid #fc4747;
    font-weight: 500;
    font-size: 2em;
    color: #ffffff;
    padding: 20px 10px;
    margin-bottom: 25px;
    background-color: #10141e;
    &::placeholder {
        color: #eeeeee;
    }
`

export const ContactTextMessage = styled.textarea`
    max-width: 100%;
    width: 100%;
    min-height: 300px;
    outline: none;
    resize: none;
    border-radius: 5px;
    border: 3px solid #fc4747;
    font-weight: 500;
    font-size: 2em;
    color: #ffffff;
    padding: 30px 10px;
    margin-bottom: 10px;
    background-color: #10141e;
    &::placeholder {
        color: #eeeeee;
    }
`

export const Submit = styled.input`
    border: none;
    border-radius: 5px;
    padding: 10px 40px;
    cursor: pointer;
    font-size: 2.5em;
    font-weight: 400;
    color: #ffffff;
    background-color: #5a698f;
    text-transform: capitalize;
    box-shadow: 5px 15px 10px rgba(0, 0, 0, 0.4);
    transition: 0.5s;
    &:hover {
        background-color: #fc4747;
    }
`