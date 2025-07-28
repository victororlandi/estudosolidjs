export default function Curso(props){
    return (
        <div class="bg-white p-4 text-center"
            classList={{"rounded-md": props.rounded, "shadow-md": !props.flat}}
        >
            {props.children}
            <button class="btn">Selecionar</button>
        </div>
    )}