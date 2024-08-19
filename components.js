class MyHeader extends HTMLElement {
    connectedCallback(){
        this.innerHTML =`
    <div class="header_flex">
        <a class="header_link" href="index.html">Home</a>
        <a class="header_link" href="about.html">About</a>
        <a class="header_link" href="works.html">Works</a>
        <a class="header_link" href="contact.html">Contact</a>
    </p>

    `
    }
}

class HamMenu extends HTMLElement {
    connectedCallback(){
        this.innerHTML =`
<div class="off-screen-menu">
      <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="works.html">Works</a></li>
        <li><a href="contact.html">Contact</a></li>
      </ul>
    </div>

    <nav>
      <div class="ham-menu">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>

    `
    }
}


customElements.define("my-header", MyHeader)
customElements.define("ham-menu", HamMenu)
