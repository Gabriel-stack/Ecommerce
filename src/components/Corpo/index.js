import * as S from './styled';
import api from '../../services/api';
import React, {useState, useEffect} from 'react';
import Header from '../Header';
export default function Corpo(){
    const [dados, setDados] = useState([]);
    useEffect(() =>{
        api.get('').then(
            response =>{
                setDados(response.data);
            }
        )
    },[])
    const handleCart = (index)=>{
        const pd = JSON.stringify(dados[index]);
        localStorage.setItem(`produto-${index}`, pd);
    }
    return(
        <S.container>
            <h1>SMARTHPHONES COM MELHORES PREÇOS</h1>
            <div className="products">
            {dados.map((prod, index) =>(
                <div className="products-shop" key={prod.id}>
                    <img src={prod.image} alt="" width="180" height="350"/>
                    <p>{prod.description}</p>
                    <span>RS {prod.price}, 00</span>
                    <S.button onClick={() =>handleCart([index])}>Adicionar ao carrinho </S.button>
                </div>
            ))}   
            </div>
        </S.container>
    );
}