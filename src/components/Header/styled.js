import styled from 'styled-components';

export const container = styled.header`
    display: flex;
    height: 40px;
    width: 100%;
    background: #2C3E50;
    div{
        flex-shrink: 3;   
        flex-grow: 2;   
    }
    ul{
        flex-grow: 1;
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
        font-size: 14pt;
    }
    ul li{
        font-weight: 900;
        margin-right: 100px;
        padding: 5px 5px;
        color: white;
        font-size: 1rem;
        list-style: none;
    }
    ul li a{
        cursor: pointer;
    }
    ul li:hover{
        font-size: 1.3rem;
    }
`;
