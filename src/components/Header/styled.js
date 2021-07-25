import styled from 'styled-components';

export const container = styled.header`
    display: flex;
    height: 150px;
    width: 100%;
    background-image: url('https://shopfacil.vteximg.com.br/arquivos/ids/77463971/banner_topo_eletronicos.jpg?');
    background-color: blue;
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
        margin-right: 10px;
        padding: 5px 5px;
        color: black;
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
