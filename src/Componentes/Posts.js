import Post from "./Post";

function criarPost(objeto) {
    const topoNome = objeto.topoNome;
    const img = objeto.img;
    const curtidasNome = objeto.curtidasNome;
    const numero = objeto.numero;

    return (
        <Post topoNome={topoNome} img={img} curtidasNome={curtidasNome} numero={numero} />
    );
}

function Posts() {
    const PostsLista = [{
                            topoNome: "meowed",
                            img: "gato-telefone",
                            curtidasNome: "respondeai",
                            numero: "101.523"
                        },
                        {   
                            topoNome: "barked",
                            img: "dog",
                            curtidasNome: "adorable_animals",
                            numero: "99.159"
                        }];

    return (
        <div class="posts">
            {PostsLista.map(criarPost)}
        </div>
    );
}

export default Posts;