function loadHeader() {

    const header = `
        <ul>
            <li class="home"><a href="../pna/index.html">Home</a></li>
            <li><a href="components/about.html">About us</a></li>
            <li>Contact us</li>
        </ul>
    `;
    
    document.getElementById('header').innerHTML = header;
   
}
window.onload = loadHeader;