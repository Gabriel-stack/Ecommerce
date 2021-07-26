import * as S from './styled';
import {useState, useEffect} from 'react';
export default function Header(){
    const [dados, setDados] = useState(localStorage);
    useEffect(()=>{
        setDados(localStorage);
    },[])
    return(
            <S.container>
                <div></div>
                <ul className="navbar">
                    <li><a><i className="material-icons right">shopping_cart</i>{dados.length}</a></li>
                    <li><a>CONTA</a></li>
                </ul>   
            </S.container>
    );
}