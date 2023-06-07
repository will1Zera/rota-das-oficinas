import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
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
      
        margin: 10px 0px 10px 0px;
       
        transition: ease-in-out 0.3s;
        &:hover {
            background-color: #12cf77;
        }
    }

    input{
        padding: 0.6rem;
        width: 110px;
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
        margin: 30px 0px 20px 0px;
    }

    h3{
        font-size: 20px;
        color: grey;
        margin-bottom: 20px;
    }
`;

export const Products = styled.div`
    input{
        margin-right: 15px;
    }

    h3{
        margin-bottom: 0px;
    }

    button{
        margin-right: 15px;
    }
`;

export const Clients = styled.div`
    input{
        margin-right: 20px;
    }

    h3{
        margin-top: 20px;
        margin-bottom: 0px;
    }

    label{
        font-weight: bold;
        color: grey;
    }

    ul{
        li{
            list-style: none;
            color: grey;
            font-size: 17px;
            margin-top: 10px;
        }
    }
`;

export const Checkbox = styled.input`
    cursor: pointer;
    width: 15px;
    height: 15px;
    position: relative;
    left: -30px;
`;
