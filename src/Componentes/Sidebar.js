import Sugestoes from "./Sugestoes";

function Usuario(props) {
    return (
        <div class="usuario">
            <img src={`assets/img/${props.usuarioNome}.svg`} />
            <div class="texto">
                <strong>{props.usuarioNome}</strong>
                {props.primeiroNome}
            </div>
        </div>
    );
}

function Links(props) {
    return (
        <div class="links">
            {props.texto}
        </div>
    );
}

function Copyright(props) {
    return (
        <div class="copyright">
            {props.texto}
        </div>
    );
}

function Sidebar() {
    return (
        <div class="sidebar">
            <Usuario usuarioNome="catanacomics" primeiroNome="Catana" />
            <Sugestoes />
            <Links texto="Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma" />
            <Copyright texto="© 2021 INSTAGRAM DO FACEBOOK" />
        </div>
    );
}

export default Sidebar;