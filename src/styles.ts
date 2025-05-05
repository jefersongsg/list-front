import styled from "styled-components";
import { BsCartCheck } from "react-icons/bs";
import { MdRemoveShoppingCart } from "react-icons/md";

export const Container = styled.div`
    background: linear-gradient(90deg, #000000 0%, #202020 50%, #000000 100%);
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
        p{
            color: #fff;
            text-align: center;
            font-size: 20px;
            font-weight: bold;
            letter-spacing: 1px;
        }
    }
`;
export const H1 = styled.h1`
    color: #ff9800;
    text-align: center;
`;
export const Input = styled.input`

    font-family: cursive;
    color: #fff;
    font-size: 16px;
    background: #2E7D32;
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
    &::placeholder{
        color: #4c4c4c;
    }
`;
export const Button = styled.button`
    font-family: cursive;
    font-size: 16px;
    background: #9C27B0;
    cursor: pointer;
    color:#fff;
    border-radius: 5px;
    border: none;
    padding: 5px 10px;
    margin-left: 10px;
    height: 31px;
    width: 25%;
    &:hover{
        opacity: 0.7;
        color: #000;
        box-shadow: 2px 2px 0px 0px #1d1b17;
    }
    &:active{
        opacity: 0.5
    }
`;
export const ListItem = styled.div<{isFinished: boolean}>`
    width: 88%;
    color: #fff;
    padding: 5px 10px;
    border-radius: 5px;
    margin-bottom: 10px;
    background: ${props => props.isFinished ? '#2E7D32' : ' #1d1b17'};
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: 0.3s;
    li{
        list-style: none;
    }
`;
export const Check = styled(BsCartCheck)`
    cursor: pointer;
    color: #fff;
    &:hover{
        color: #ff9800;
    }
`;
export const Trash = styled(MdRemoveShoppingCart)`
    cursor: pointer;
    color: #fff;
    &:hover{
        color: #9f1e1e;
    }
`;
