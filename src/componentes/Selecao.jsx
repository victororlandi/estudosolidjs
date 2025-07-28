export default function Selecao(){
    return(
        <div class="selecao">
            <p>Você selecionou 5 cursos</p>
        </div>
    )
}

/*
Quero implementar uma função para quando clicar em selecionar nos cards dos cursos, apareça uma frase
falando quantos cursos foram selecionados para tentar usar Signals e Effects.

function Contador(){
    const [count,setCount] = createSignal(0);
    createEffect(() => {
        console.log("Você selecionou", count(), "cursos");
    })
    
    return <button onClick={() => setCount(count() + 1)}>Selecionar</button>
}

render(() => <Contador />, document.getElementById('app'));*/