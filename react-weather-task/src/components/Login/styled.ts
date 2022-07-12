import styled from 'styled-components'

export const Form = styled.form`
    height: 370px;
    width: 400px;
    background-color: rgba(255, 255, 255, 0.13);
    position: absolute;
    transform: translate(-50%, -50%);
    top: 30%;
    left: 50%;
    border-radius: 10px;
    backdrop-filter: blur(10px);
    border: 2px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
    padding: 5px 35px;
    color: var(--white);
    z-index: 10;
`
export const FormButton = styled.button`
    margin-top: var(--x5);
    width: 100%;
    background-color: var(--white);
    color: #080710;
    padding: var(--x2) 0;
    font-size: 18px;
    font-weight: 600;
    border-radius: var(--x0);
    cursor: pointer;
`
export const FormLabel = styled.label`
    display: block;
    margin-top: 30px;
    font-size: 22px;
    font-weight: 500;
    font-family: Arial, Helvetica, sans-serif;
`
export const FormInput = styled.input`
    display: block;
    height: 50px;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.07);
    border-radius: 3px;
    padding: 0 var(--x1);
    margin-top: 8px;
    font-size: var(--x2);
    font-weight: 300;
    border: none;
    &:focus {
        outline: none;
    }
`
