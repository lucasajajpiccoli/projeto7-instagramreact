import React from 'react';

function Topo(props) {
    return (
        <div class="topo">
            <div class="usuario">
                <img src={`assets/img/${props.nome}.svg`} />
                {props.nome}
            </div>
            <div class="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
        </div>
    );
}

function Conteudo(props) {
    return (
        <div class="conteudo">
            <img src={`assets/img/${props.img}.svg`} />
        </div>
    );
}

function Acoes() {
    const [likeStatus, setLikeStatus] = React.useState("-outline");

    function trocarLikeStatus() {
        setLikeStatus(likeStatus === "-outline" ? "" : "-outline");
    }

    return (
        <div class="acoes">
            <div>
                <ion-icon name={`heart${likeStatus}`} onClick={trocarLikeStatus}></ion-icon>
                <ion-icon name="chatbubble-outline"></ion-icon>
                <ion-icon name="paper-plane-outline"></ion-icon>
            </div>
            <div>
                <ion-icon name="bookmark-outline"></ion-icon>
            </div>
        </div>
    );
}

function Curtidas(props) {
    return (
        <div class="curtidas">
            <img src={`assets/img/${props.nome}.svg`} />
            <div class="texto">
                Curtido por <strong>{props.nome}</strong> e <strong>outras {props.numero} pessoas</strong>
            </div>
        </div>
    );
}

function Fundo(props) {
    return (
        <div class="fundo">
            <Acoes />
            <Curtidas nome={props.nome} numero={props.numero} />
        </div>
    );
}

function Post(props) {
    return (
        <div class="post">
            <Topo nome={props.topoNome} />
            <Conteudo img={props.img} />
            <Fundo nome={props.curtidasNome} numero={props.numero} />
        </div>
    );
}

export default Post;