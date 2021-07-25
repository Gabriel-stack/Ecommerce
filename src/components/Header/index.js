import * as S from './styled';

export default function Header(){
    return(
            <S.container>
                <div>logo</div>
                <ul className="navbar">
                    <li><a>PRODUTOS</a></li>
                    <li><a>CARRINHO</a></li>
                    <li><a>CONTA</a></li>
                </ul>   
            </S.container>
    );
}