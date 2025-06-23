import banner from './assets/aotelefone.jpg';
import Curso from './componentes/Curso';
import Menu from './componentes/Menu';

function App() {
  return (
    <div class="container m-auto">

        <Menu class="menu">
            <h1>Blabla Speak</h1>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Cursos</a></li>
                <li><a href="#">Países</a></li>
                <li><a href="#">Professores</a></li>
                <li><a href="#">Sobre</a></li>
            </ul>
        </Menu>


        <img class="rounded-md" src={banner} alt="banner" width="auto" height="200px" />

        <div class="grid grid-cols-4 gap-10 my-4">
            <Curso rounded={true} flat={false}>
                <h2>Inglês</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse cum vero non id est
                    soluta culpa earum minima commodi consequatur omnis laborum dolorum, corrupti cumque 
                    mollitia dolor tenetur officiis consequuntur.
                </p>
                <button class="btn">Selecionar</button>
            </Curso>
            <Curso rounded={false} flat={true}>
                <h2>Francês</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse cum vero non id est
                    soluta culpa earum minima commodi consequatur omnis laborum dolorum, corrupti cumque 
                    mollitia dolor tenetur officiis consequuntur.
                </p>
                <button class="btn">Selecionar</button>
            </Curso>
            <Curso rounded={true} flat={false}>
                <h2>Italiano</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse cum vero non id est
                    soluta culpa earum minima commodi consequatur omnis laborum dolorum, corrupti cumque 
                    mollitia dolor tenetur officiis consequuntur.
                </p>
                <button class="btn">Selecionar</button>
            </Curso>
            <Curso rounded={false} flat={true}>
                <h2>Espanhol</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse cum vero non id est
                    soluta culpa earum minima commodi consequatur omnis laborum dolorum, corrupti cumque 
                    mollitia dolor tenetur officiis consequuntur.
                </p>
                <button class="btn">Selecionar</button>
            </Curso>
            <Curso rounded={true} flat={false}>
                <h2>Japonês</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse cum vero non id est
                    soluta culpa earum minima commodi consequatur omnis laborum dolorum, corrupti cumque 
                    mollitia dolor tenetur officiis consequuntur.
                </p>
                <button class="btn">Selecionar</button>
            </Curso>
            <Curso rounded={false} flat={true}>
                <h2>Português</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse cum vero non id est
                    soluta culpa earum minima commodi consequatur omnis laborum dolorum, corrupti cumque 
                    mollitia dolor tenetur officiis consequuntur.
                </p>
                <button class="btn">Selecionar</button>
            </Curso>
            <Curso rounded={true} flat={false}>
                <h2>Alemão</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse cum vero non id est
                    soluta culpa earum minima commodi consequatur omnis laborum dolorum, corrupti cumque 
                    mollitia dolor tenetur officiis consequuntur.
                </p>
                <button class="btn">Selecionar</button>
            </Curso>
            <Curso rounded={false} flat={true}>
                <h2>Mandarim</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse cum vero non id est
                    soluta culpa earum minima commodi consequatur omnis laborum dolorum, corrupti cumque 
                    mollitia dolor tenetur officiis consequuntur.
                </p>
                <button class="btn">Selecionar</button>
            </Curso>
        </div>
    </div>
  );
}

export default App;
