import styled from "styled-components";

export const Container = styled.div`
    background: linear-gradient(91deg, #000000 0%, #202020 50%, #000000 100%);
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
`;
export const Divlist = styled.div`
    background: #9e9e9e47;
    padding: 10px 20px;
    border-radius: 10px;
    ul{
        padding: 0;
        gap: 10px;
    }
`;
export const H1 = styled.h1`
    color: #ff9800;
`;
export const Input = styled.input`
    background: #2E7D32;
    color: #fff;
    border-radius: 5px;
    border: none;
    padding: 5px 10px;
    width: 60%;
    height: 20px;
    outline: none;
    transition: 0.3s;
    &:focus{
        box-shadow: 2px 2px 0px 0px #1d1b17;
    }
`;
export const Button = styled.button`
    background: #9C27B0;
    cursor: pointer;
    color:#fff;
    border-radius: 5px;
    border: none;
    padding: 5px 10px;
    margin-left: 10px;
    height: 30px;
    transition: 0.3s;
    &:hover{
        background: #ab47bc;
        color: #000;
        box-shadow: 2px 2px 0px 0px #1d1b17;
    }
    &:active{
        opacity: 0.2;
    }
`;
export const ListItem = styled.div`
    cursor: pointer;
    width: 90%;
    color: #E65100;
    padding: 5px 10px;
    border-radius: 5px;
    margin-bottom: 10px;
    background: #1d1b17;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: 0.3s;
    &:hover{
        background:  #9C27B0;
        color: #000;
        box-shadow: 2px 2px 0px 0px #1d1b17;
    }
    li{
        list-style: none;
    }
`;
