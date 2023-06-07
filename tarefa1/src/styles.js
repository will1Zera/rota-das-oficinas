import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    button{
        background-color: #0fad64;
        border: none;
        color: white;
        font-family: 'Inter', sans-serif;
        cursor: pointer;
        border-radius: 10px;
        font-weight: 500;
        font-size: 16px;
        height: 40px;
        width: 150px;
      
        margin: 10px 0px 10px 0px;
       
        transition: ease-in-out 0.3s;
        &:hover {
            background-color: #12cf77;
        }
    }

    input{
        padding: 0.6rem;
        width: 205px;
        border: 1px solid black;
        border-radius: 10px;
        font-size: 16px;
        outline: none;
        margin: 10px 0px 10px 0px;
    }

    i{
        padding-right: 10px;
    }

    p{
        font-size: 18px;
        margin-top: 30px;
    }

    h2{
        font-size: 28px;
        color: #0fad64;
    }

    h3{
        font-size: 20px;
        color: grey;
        margin-bottom: 20px;
    }
`;

