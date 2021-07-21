//////////////////////CALCULADORAS DE RENDIMIENTOS//////////////////////////////
/////////////////////////////BITCOIN///////////////////////////////////////////
document.getElementById('calculadorabtc').addEventListener('submit', function(e) {
    e.preventDefault();
    // Esconder los resultados
    document.getElementById('resultadoBTC').style.display = 'none';
    // Mostrar loader
    document.getElementById('loadingBTC').style.display = 'block';
    // Setear el timer
    setTimeout(calculoinversionBTC, 500);
  });  
  function calculoinversionBTC() {
    
    const cantidadbtc = document.getElementById('cantidadbtc');
    const numerocantidadbtc = parseFloat(cantidadbtc.value);

    const plazobtc = document.getElementById('plazobtc');
    const numeroplazobtc = parseInt(plazobtc.value);

    const capitalmasinteresesbtc = numerocantidadbtc + (numerocantidadbtc * numeroplazobtc * 0.02);

    if (cantidadbtc.value != "" && plazobtc.value != "") {
        document.getElementById('retornobtc').value = capitalmasinteresesbtc;
        document.getElementById('resultadoBTC').style.display = 'block';
        document.getElementById('loadingBTC').style.display = 'none';
    } else {
      showErrorBTC('Complete los campos correspondientes');
    }
  }
  ////Mostrar error////
  function showErrorBTC(error) {
    // Esconder resultados
    document.getElementById('resultadoBTC').style.display = 'none';
    // Esconder el loader
    document.getElementById('loadingBTC').style.display = 'none';
    // Crear un div
    const errorDivBTC = document.createElement('div');
    // Tomar los elemntos
    const cardBTC = document.getElementById('cardBTC');
    const hBTC = document.getElementById('hBTC');
    // Crear una clase
    errorDivBTC.className = 'alert alert-danger';
    // Crear texto para agregar al div
    errorDivBTC.appendChild(document.createTextNode(error));
    // Insertamos el error sobre el heading
    cardBTC.insertBefore(errorDivBTC, hBTC);
    // Limpiamos el error despues de 3 segundos
    setTimeout(clearErrorBTC, 3000);
  } 
  /////Clear error/////
  function clearErrorBTC() {
    document.querySelector('.alert').remove();
  }
  
////////////////////ETHEREUM/////////////////////
document.getElementById('calculadoraeth').addEventListener('submit', function(e) {
  e.preventDefault();
  document.getElementById('resultadoETH').style.display = 'none';
  document.getElementById('loadingETH').style.display = 'block';
  setTimeout(calculoinversionETH, 500);
});
function calculoinversionETH() {
  
  const cantidadeth = document.getElementById('cantidadeth');
  const numerocantidadeth = parseFloat(cantidadeth.value);

  const plazoeth = document.getElementById('plazoeth');
  const numeroplazoeth = parseInt(plazoeth.value);

  const capitalmasintereseseth = numerocantidadeth + (numerocantidadeth * numeroplazoeth * 0.03);

  if (cantidadeth.value != "" && plazoeth.value != "") {
      document.getElementById('retornoeth').value = capitalmasintereseseth;
      document.getElementById('resultadoETH').style.display = 'block';
      document.getElementById('loadingETH').style.display = 'none';
  } else {
    showErrorETH('Complete los campos correspondientes');
  }
}
  function showErrorETH(error) {
    document.getElementById('resultadoETH').style.display = 'none';
    document.getElementById('loadingETH').style.display = 'none';
    const errorDivETH = document.createElement('div');
    const cardETH = document.getElementById('cardETH');
    const hETH = document.getElementById('hETH');
    errorDivETH.className = 'alert alert-danger';
    errorDivETH.appendChild(document.createTextNode(error));
    cardETH.insertBefore(errorDivETH, hETH);
    setTimeout(clearErrorETH, 3000);
  }
  function clearErrorETH() {
    document.querySelector('.alert').remove();
  }

////////////////////////CARDANO/////////////////////
document.getElementById('calculadoraada').addEventListener('submit', function(e) {
  e.preventDefault();
  document.getElementById('resultadoADA').style.display = 'none';
  document.getElementById('loadingADA').style.display = 'block';
  setTimeout(calculoinversionADA, 500);
});
function calculoinversionADA() {
  
  const cantidadada = document.getElementById('cantidadada');
  const numerocantidadada = parseFloat(cantidadada.value);

  const plazoada = document.getElementById('plazoada');
  const numeroplazoada = parseInt(plazoada.value);

  const capitalmasinteresesada = numerocantidadada + (numerocantidadada * numeroplazoada * 0.04);

  if (cantidadada.value != "" && plazoada.value != "") {
      document.getElementById('retornoada').value = capitalmasinteresesada;
      document.getElementById('resultadoADA').style.display = 'block';
      document.getElementById('loadingADA').style.display = 'none';
  } else {
    showErrorADA('Complete los campos correspondientes');
  }
};
  function showErrorADA(error) {
    document.getElementById('resultadoADA').style.display = 'none';
    document.getElementById('loadingADA').style.display = 'none';
    const errorDivADA = document.createElement('div');
    const cardADA = document.getElementById('cardADA');
    const hADA = document.getElementById('hADA');
    errorDivADA.className = 'alert alert-danger';
    errorDivADA.appendChild(document.createTextNode(error));
    cardADA.insertBefore(errorDivADA, hADA);
    setTimeout(clearErrorADA, 3000);
  };
  function clearErrorADA() {
    document.querySelector('.alert').remove();
  };
////////////////////////////////////////////////////////////////////////////////////
///////////////////FORMULARIO DE INSCRIPCIÓN - NUEVOCLIENTE//////////////////////////
/////////////////////////////Con jQuery y POST AJAX//////////////////////////////////
let clientes = [];
const URLPOST = "https://jsonplaceholder.typicode.com/posts"

$('#forminscrip-fc').submit(function(e) {
  e.preventDefault();
  
  let nombrecliente = $('#nombrecliente').val();
  let apellidocliente = $('#apellidocliente').val();
  let emailcliente = $('#emailcliente').val() 
  let cryptocliente = $('#cryptocliente').val();
  let cantidadcliente = $('#cantidadcliente').val();
  let plazocliente = $('#plazocliente').val();

  const datosnuevocliente = {
    Nombre: nombrecliente,
    Apellido: apellidocliente,
    Email: emailcliente,
    Cryptomoneda: cryptocliente,
    Cantidad: cantidadcliente,
    Plazo: plazocliente,
};

clientes.push(datosnuevocliente);

  $.ajax({
      method: "POST",
      url: URLPOST,
      data: datosnuevocliente,
      success: function(data){
      
      console.log(data.Nombre+" "+data.Apellido+" se ha inscripto correctamente");
      
      Swal.fire(
        '¡Formulario enviado!',
        'En breve nos comunicaremos con usted',
        'success',
      )

      $('#forminscrip-fc')[0].reset(); 

      },
      error: () => {
      Swal.fire(
        'Error de conexión',
        'Intente de nuevo más tarde',
        'warning'
      )
      }
    })
  }
);
///////////////////////////////////////////////////////////////
///////////////////Animaciones jQuery///////////////////////////
//Scrollspy
$('body').scrollspy({target: '#menu-navegacion'});
//Scroll suavizado de la navbar y a los botones "Conocé más" e "Inscribite"
$('#menu-navegacion a, #conocemas, #botoninscribite').click(function(event){

  if(this.hash != ""){
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate({
      scrollTop: $(hash).offset().top
      }, 1500, function(){
      window.location.hash = hash;
      });
    }
});
////////////////////////////////////////////////////////////
//////////////////////AJAX API//////////////////////////////
/////////////////PRECIO BITCOIN AJAX////////////////////////
const BTCAPI = 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd';

    $("#btnBTC").click(() => { 
            $.ajax({
              url: BTCAPI,
              type: 'GET',
              dataType: 'json',
              success: (data) => {
                  Swal.fire({
                    title: 'Precio actual:',
                    text: data.bitcoin.usd + ' USD/BTC',
                    imageUrl: 'https://img.icons8.com/color/96/000000/bitcoin--v1.png',
                    footer: '<a href="https://www.coingecko.com/en/coins/bitcoin">Click aquí para más información</a>'
                })
              },
              error: () => {
                  Swal.fire(
                    'Error de conexión',
                    'Intente de nuevo más tarde',
                    'warning'
                  )
              }
            })
          });    
/////////////////PRECIO ETHEREUM AJAX////////////////////////
const ETHAPI = 'https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd';

    $("#btnETH").click(() => { 
            $.ajax({
              url: ETHAPI,
              type: 'GET',
              dataType: 'json',
              success: (data) => {
                  Swal.fire({
                    title: 'Precio actual:',
                    text: data.ethereum.usd + ' USD/ETH',
                    imageUrl: 'https://img.icons8.com/fluent/96/000000/ethereum.png',
                    footer: '<a href="https://www.coingecko.com/en/coins/ethereum">Click aquí para más información</a>'
                })
              },
              error: () => {
                  Swal.fire(
                    'Error de conexión',
                    'Intente de nuevo más tarde',
                    'warning'
                  )
              }
            })
          });
/////////////////PRECIO CARDANO AJAX////////////////////////
const ADAAPI = 'https://api.coingecko.com/api/v3/simple/price?ids=cardano&vs_currencies=usd';

          $("#btnADA").click(() => { 
                  $.ajax({
                    url: ADAAPI,
                    type: 'GET',
                    dataType: 'json',
                    success: (data) => {
                        Swal.fire({
                          title: 'Precio actual:',
                          text: data.cardano.usd + ' USD/ADA',
                          imageUrl: 'https://img.icons8.com/fluent/96/000000/cardano.png',
                          footer: '<a href="https://www.coingecko.com/en/coins/cardano">Click aquí para más información</a>'
                      })
                    },
                    error: () => {
                        Swal.fire(
                          'Error de conexión',
                          'Intente de nuevo más tarde',
                          'warning'
                        )
                    }
                  })
                });
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////NEWSLETTER CON ALMACENAMIENTO EN LOCAL STORAGE//////////////////////////////////////
let newslettersuscrip = [];
//Usuario se suscribre por primera vez
$('#newsletter').submit(function(e) {
      e.preventDefault();
  
      let nombrenewsletter = $('#nombrenewsletter').val();
      let emailnewsletter = $('#emailnewsletter').val();

      const nuevosuscriptor = {
          Nombre: nombrenewsletter,
          Email: emailnewsletter,
      }

      newslettersuscrip.push(nuevosuscriptor);

      window.localStorage.setItem("suscriptor",JSON.stringify(nuevosuscriptor)); 
          
      $('#newsletter')[0].reset();

      const objetosuscriptor = JSON.parse(localStorage.getItem("suscriptor"));

      $("#newsletter").addClass("animate__animated animate__zoomOut");

      setTimeout(functionnewsletter, 500);
      function functionnewsletter () {
        $("#newsletter").hide();
        $("#newsletterdiv").append(`<p class='animate__animated animate__zoomIn mt-4'>&#128513 ¡Gracias! Recibirás todas las novedades a <b>${objetosuscriptor.Email}</b></p>`)
      }
    }
);
//Si el usuario ya se había suscripto, aparece otro mensaje
const objetosuscriptor = JSON.parse(localStorage.getItem("suscriptor"));

if(localStorage.length > 0){
    $("#newsletter").addClass("animate__animated animate__zoomOut");
    setTimeout(functionnewsletter, 500);

    function functionnewsletter () {
      $("#newsletter").hide();
      $("#newsletterdiv").append(`<div class='mt-4 animate__animated animate__zoomIn' id='nuevonewsletterdiv'><p>&#128513 Ya estás suscripto, recibirás las novedades en <b>${objetosuscriptor.Email}</b></p><button class='btn btn-outline-warning btn-sm text-center center mb-1' id='nuevonewsletterbtn'>Click aquí para suscribir nuevo usuario</button></div>`)
//Btn para suscribir otro email, si el usuario es diferente al suscripto
      $("#nuevonewsletterbtn").click(function(e){
        e.preventDefault();
        localStorage.clear();
        $("#nuevonewsletterdiv").addClass("animate__animated animate__zoomOut");
        setTimeout(functionnuevonewsletter, 500);
        
        function functionnuevonewsletter (){
          $("#nuevonewsletterdiv").hide();
          $("#newsletter").removeClass("animate__animated animate__zoomOut").addClass("animate__animated animate__zoomIn");
          $("#newsletter").show();
        }
      }
    ) 
  }
};