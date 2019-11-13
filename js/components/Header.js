export default function Header() {
    return `
        <h1 class='shadow p-3 mb-5 bg-white rounded nav-logo'>MessageMaker</h1>
        <nav class="nav">
            <ul class="navbar navbar-expand-lg navbar-light bg-light">
                <li class='nav-link nav-list__home '>Home</li>
                <li class='nav-link nav-list__messages'>Messages</li>
                <li class='nav-link nav-list__signup'>Sign Up</li>
                <li class='nav-link nav-list__login'>Login</li>
                <li class='nav-link nav-list__logout'>Logout</li>
            </ul>
        </nav>
    `;
}
