---
layout: category
title: Works
datatable: true
---




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