import Header from './components/Header';
import Home from './components/Home';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css'; // Import precompiled Bootstrap css
import '@fortawesome/fontawesome-free/css/all.css';

pageBuild();

function pageBuild() {
    renderHeader();
    renderHome();
}

function renderHeader() {
    const header = document.querySelector('.header');
    header.innerHTML = Header();
}

function renderHome() {
    let home = document.querySelector('.nav-list__home');
    home.addEventListener('click', () => {
        let main = document.querySelector('.main');
        main.innerHTML = Home();
    });

}