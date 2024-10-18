function loadHeader() {

    homeHeader = document.getElementById('homeHeader').innerHTML;
    aboutHeader = document.getElementById('aboutHeader').innerHTML;

    
    const home = 'index.html'
    let header = ``;
    
    // document.getElementById('header').innerHTML = header;
    if(homeHeader === 'homeHeader'){
        header = `
            <ul>
                <li class="home"><a href="index.html">Home</a></li>
                <li><a href="components/about.html">About us</a></li>
                <li>Contact us</li>
            </ul>
        `;
        homeHeader.innerHTML = header;
    }else if(aboutHeader === 'aboutHeader'){
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