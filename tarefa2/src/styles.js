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
        width: 120px;
      
        margin: 25px 0px 0px 0px;
       
        transition: ease-in-out 0.3s;
        &:hover {
            background-color: #12cf77;
        }
    }
    i{
        margin-right: 10px;
    }

    h2{
        font-size: 40px;
        margin-bottom: 30px;
        color: #0fad64;
    }
`;

