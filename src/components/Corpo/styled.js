import styled from 'styled-components';

export const container = styled.section`
    font-family: monospace;
    margin-top: 39px;
    width: 80%;
    height:400px;
    margin: 39px auto auto auto;
    .products{
        display: flex;
        flex-wrap: wrap;
        flex-grow: 1
    }
    .products-shop{
        margin-top: 39px;
        margin-right: 40px;
        text-align: center;
        width: 214px;
        background: #FFFFFF;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        
        p{
            font-weight: 900;

        }
        span{
            margin: 7px 0;
            font-size: 15pt;
            font-weight: bold;
            color : red;
        }
    }
`;

export const button = styled.button`
    width: 80%;
    background: #E14c33;
    color: white;
    font-weight: bold;
    border: none;
    padding: 5px 5px 5px 5px;
    border-radius: 2px;
    justify-self: flex-end;
    cursor: pointer;
`;