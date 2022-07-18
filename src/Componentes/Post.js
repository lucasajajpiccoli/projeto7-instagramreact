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


function Post(props) {
    const [likeStatus, setLikeStatus] = React.useState("-outline");

    function trocarLikeStatus() {
        setLikeStatus(likeStatus === "-outline" ? "" : "-outline");
    }

    function darLike() {
        setLikeStatus("");
    }

    return (
        <div class="post">
            <Topo nome={props.topoNome} />

            <div class="conteudo" onClick={darLike}>
                <img src={`assets/img/${props.img}.svg`} />
            </div>

            <div class="fundo">
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
                <div class="curtidas">
                    <img src={`assets/img/${props.curtidasNome}.svg`} />
                    <div class="texto">
                        Curtido por <strong>{props.curtidasNome}</strong> e <strong>outras {props.numero} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Post;