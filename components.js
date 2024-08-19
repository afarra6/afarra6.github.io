class MyHeader extends HTMLElement {
    connectedCallback(){
        this.innerHTML =`
    <p class="my_header">
        <a class="header_link" href="index.html">Home</a>
        <a class="header_link" href="about.html">About</a>
        <a class="header_link" href="works.html">Works</a>
        <a class="header_link" href="contact.html">Contact</a>
    </p>

    `
    }
}


customElements.define("my-header", MyHeader)
