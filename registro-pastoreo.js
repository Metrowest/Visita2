// tambah data
function insert_value() {

  $("#re").css("visibility", "hidden");
  document.getElementById("loader").style.visibility = "visible";
  $('#mySpinner').addClass('spinner');


  var Dia1 = $("#Dia1").val();
  var Dia2 = $("#Dia2").val();
  var Dia3 = $("#Dia3").val();//////////////////

  var url = script_url + "?callback=ctrlq&Dia1=" + Dia1 + "&Dia2=" + Dia2 + "&Dia3=" + Visita3 + "&action=insert";

  var request = jQuery.ajax({
    crossDomain: true,
    url: url,
    method: "GET",
    dataType: "jsonp"
  });
}

// perbaharui data
function update_value() {
  $("#re").css("visibility", "hidden");
  document.getElementById("loader").style.visibility = "visible";


  var Dia1 = $("#Dia1").val();
  var Dia2 = $("#Dia2").val();
  var Dia3 = $("#Dia3").val();//////////////////

  var url = script_url + "?callback=ctrlq&Dia1=" + Dia1 + "&Dia2=" + Dia2 + "&Dia3=" + Dia3 + "&action=insert";
  var request = jQuery.ajax({
    crossDomain: true,
    url: url,
    method: "GET",
    dataType: "jsonp"
  });
}

//hapus data
function delete_value() {
  $("#re").css("visibility", "hidden");
  document.getElementById("loader").style.visibility = "visible";

  $('#mySpinner').addClass('spinner');

  var Dia1 = $("#Dia1").val();
  var Dia2 = $("#Dia2").val();
  var Dia3 = $("#Dia3").val();//////////////////

  var url = script_url + "?callback=ctrlq&Dia1=" + Dia1 + "&Dia2=" + Dia2 + "&Dia3=" + Dia3 + "&action=insert";

  var request = jQuery.ajax({
    crossDomain: true,
    url: url,
    method: "GET",
    dataType: "jsonp"
  });
}


// print the returned data
function ctrlq(e) {
  $("#re").html(e.result);
  $("#re").css("visibility", "visible");
  read_value('');
}

function read_value(srch) {

  $("#re").css("visibility", "hidden");
  document.getElementById("loader").style.visibility = "visible";
  var url = script_url + "?action=read";

  $.getJSON(url, function (json) {

    // buat tabel yang menampilkan data
    var table = document.createElement("table");
    table.setAttribute("id", "myTable");
    var header = table.createTHead();
    var row = header.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);///////////////////
    row.style.background = "#583420";
    row.style.color = "rgb(255, 255, 255";


    cell1.innerHTML = "<b>Dia 1</b>";
    cell2.innerHTML = "<b>Dia 2</b>";
    cell3.innerHTML = "<b>Dia 3</b>";//////////////////

    //        alert(json.records);
    // masukkan data ke dalam tabel
    if (srch != '') {
      for (var i = 0; i < json.records.length; i++) {

        if (srch == json.records[i].ID) {
          tr = table.insertRow(-1);
          var tabCell = tr.insertCell(-1);
          tabCell.innerHTML = json.records[i].Dia1;
          tabCell = tr.insertCell(-1);
          tabCell.innerHTML = json.records[i].Dia2;
          tabCell = tr.insertCell(-1);
          tabCell.innerHTML = json.records[i].Dia3;////////////////
        }
      }
      $("#re").html("Datos de la Persona");
      $("#re").css("visibility", "visible");
    } else {
      for (var i = 0; i < json.records.length; i++) {

        tr = table.insertRow(-1);
        var tabCell = tr.insertCell(-1);

        tabCell.innerHTML = json.records[i].Dia1;
        tabCell = tr.insertCell(-1);
        tabCell.innerHTML = json.records[i].Dia2;
        tabCell = tr.insertCell(-1);
        tabCell.innerHTML = json.records[i].Dia3;////////////////
      }
    }

    var divContainer = document.getElementById("showData");
    divContainer.innerHTML = "";
    divContainer.appendChild(table);
    document.getElementById("loader").style.visibility = "hidden";
    $("#re").css("visibility", "visible");


    $("#Dia1").val("")
    $("#Dia2").val("")
    $("#Dia3").val("")
    getData2Input();///////////////////
  });
}
//////////// Ketika data dalam tabel diklik
function getData2Input() {
  var table = document.getElementById("myTable");

  if (table) {
    for (var i = 0; i < table.rows.length; i++) {
      table.rows[i].onclick = function () {
        tableText(this);
      }
    }
  }
}

///////////////////Ekstrak data dari Spreadsheet dan tampilkan di kolom.

function tableText(tableRow) {

  var Dia1 = tableRow.childNodes[0].innerHTML;
  var Visita2 = tableRow.childNodes[1].innerHTML;
  var Visita3 = tableRow.childNodes[2].innerHTML;//////////

  $("#Dia1").val(Dia1)
  $("#Visita2").val(Visita2)
  $("#Visita3").val(Visita3)
}


var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-36251023-1']);
_gaq.push(['_setDomainName', 'jqueryscript.net']);
_gaq.push(['_trackPageview']);

var script_url =
  "https://script.google.com/macros/s/AKfycbwJqY-zAf28GgUE1aZN7QEZEZH5fA_-P0cpvRadLBm4p4ViWwrnhpKe2iGhpR-XSePB/exec"; /////////////////

(function () {
  var ga = document.createElement('script');
  ga.type = 'text/javascript';
  ga.async = true;
  ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') +
    '.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(ga, s);
})();

