function Titulo() {
    return (
        <div class="titulo">
            Sugestões para você
            <div>Ver tudo</div>
        </div>
    );
}

function Sugestao(props) {
    return (
        <div class="sugestao">
            <div class="usuario">
                <img src={`assets/img/${props.nome}.svg`} />
                <div class="texto">
                    <div class="nome">{props.nome}</div>
                    <div class="razao">{props.status}</div>
                </div>
            </div>

            <div class="seguir">Seguir</div>
        </div>
    );
}

function Sugestoes() {
    const sugestoesLista = [{
                                nome: "bad.vibes.memes",
                                status: "Segue você"
                            },
                            {
                                nome: "chibirdart",
                                status: "Segue você"
                            },
                            {
                                nome: "razoesparaacreditar",
                                status: "Novo no Instagram"
                            },
                            {
                                nome: "adorable_animals",
                                status: "Segue você"
                            },
                            {
                                nome: "smallcutecats",
                                status: "Segue você"
                            }]

    return (
        <div class="sugestoes">
            <Titulo />
            {sugestoesLista.map(item => <Sugestao nome={item.nome} status={item.status} />)}
        </div>
    );
}

export default Sugestoes;