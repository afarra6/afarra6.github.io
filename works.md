---
layout: default
title: Works
datatable: true
navigation: true
logo: true
class: page-template
subclass: 'post page'
---

<header class="site-header outer">
    <div class="inner">
        <nav class="site-nav">
    <div class="site-nav-left">
        
            
                <a class="site-nav-logo" href="http://localhost:4000">Drew Farrar</a>
            
        
        
            <ul class="nav" role="menu">
    <!-- <li class="nav-home" role="menuitem"><a href="">Home</a></li> -->
    <li class="nav-about" role="menuitem"><a href="./about.html">About</a></li>
    <li class="nav-getting-started" role="menuitem"><a href="./works.html">Works</a></li>
    <li class="nav-try-ghost" role="menuitem"><a href="./contact.html">Contact</a></li>
</ul>
        
    </div>
    <div class="site-nav-right">
        <div class="social-links">
            
            
        </div>
        
    </div>
</nav>

    </div>
</header>

<head>
<link rel="stylesheet" href="assets/css/tables.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/tablesort/5.1.0/tablesort.min.js"></script>
</head>
<div class="table-container">

<button style="border:none" onclick="displayTableNew(0);"><u>Chamber</u></button> | <button style="border:none" onclick="displayTableNew(1);"><u>Solo/Duo</u></button> | <button style="border:none" onclick="displayTableNew(2);"><u>Large Ensemble</u></button> | <button style="border:none" onclick="displayTableNew(3);"><u>Installations</u></button> | <button style="border:none" onclick="displayTableNew(4);"><u>With Electronics</u></button>



<table id="chamber" style="display:block, overflow:hidden">
  {% for row in site.data.chamber %}
    {% if forloop.first %}
    <tr data-sort-method="none">
      {% for pair in row %}
        <th>{{ pair[0] }}</th>
      {% endfor %}
    </tr>
    {% endif %}

    {% tablerow pair in row %}
      {{ pair[1] }}
    {% endtablerow %}
  {% endfor %}
</table>


<table id="solo" style="display:none">
  {% for row in site.data.solo %}
    {% if forloop.first %}
    <tr data-sort-method="none">
      {% for pair in row %}
        <th>{{ pair[0] }}</th>
      {% endfor %}
    </tr>
    {% endif %}

    {% tablerow pair in row %}
      {{ pair[1] }}
    {% endtablerow %}
  {% endfor %}
</table>



<table id="large" style="display:none">
  {% for row in site.data.large %}
    {% if forloop.first %}
    <tr data-sort-method="none">
      {% for pair in row %}
        <th>{{ pair[0] }}</th>
      {% endfor %}
    </tr>
    {% endif %}

    {% tablerow pair in row %}
      {{ pair[1] }}
    {% endtablerow %}
  {% endfor %}
</table>


<table id="install" style="display:none">
  {% for row in site.data.install %}
    {% if forloop.first %}
    <tr data-sort-method="none">
      {% for pair in row %}
        <th>{{ pair[0] }}</th>
      {% endfor %}
    </tr>
    {% endif %}

    {% tablerow pair in row %}
      {{ pair[1] }}
    {% endtablerow %}
  {% endfor %}
</table>

<table id="elec" style="display:none">
  {% for row in site.data.elec %}
    {% if forloop.first %}
    <tr data-sort-method="none">
      {% for pair in row %}
        <th>{{ pair[0] }}</th>
      {% endfor %}
    </tr>
    {% endif %}

    {% tablerow pair in row %}
      {{ pair[1] }}
    {% endtablerow %}
  {% endfor %}
</table>

</div>

<script>
function displayTableNew(tableIndex) {
    var arrLength = ["chamber", "solo", "large", "install", "elec"].length;
    var x = document.getElementById(["chamber", "solo", "large", "install", "elec"][tableIndex]);
    
    if(x.style.display === "block"){return}
    for(var i = 0; i < arrLength; i++){
    
    


    if(i === tableIndex){
    if (x.style.display != "block") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
} else {
    document.getElementById(["chamber", "solo", "large", "install", "elec"][i]).style.display = "none";
}

    } 
     
  
    
}
  
</script>

<!-- <script src='tablesort.number.js'></script> -->
<script>
    new Tablesort(document.getElementById('chamber'));
    new Tablesort(document.getElementById('solo'));
    new Tablesort(document.getElementById('large'));
    new Tablesort(document.getElementById('elec'));
    new Tablesort(document.getElementById('install'));
</script>