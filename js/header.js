function loadHeader() {

    const homeHeader = document.getElementById('homeHeader');
    const aboutHeader = document.getElementById('aboutHeader');

    
    const currentPage = window.location.pathname.split('/').pop();
    let header = '';
    
    // document.getElementById('header').innerHTML = header;
    if(currentPage === 'index.html'){
        header = `
            <ul>
                <li class="home"><a href="index.html">Home</a></li>
                <li><a href="components/about.html">About us</a></li>
                <li>Contact us</li>
            </ul>
        `;
        homeHeader.innerHTML = header;
    }else if(currentPage === 'about.html'){
        header = `
            <ul>
                <li class="home"><a href="../index.html">Home</a></li>
                <li><a href="components/about.html">About us</a></li>
                <li>Contact us</li>
            </ul>
        `;
        aboutHeader.innerHTML = header;
    }
}

window.onload = loadHeader;