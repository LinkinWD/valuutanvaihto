
const usa = document.querySelector('#USA')
const aud = document.querySelector('#AUD')
const sek = document.querySelector('#SEK')
const gbp = document.querySelector('#GBP')
const btnSek = document.querySelector('#sek')
const btnAud = document.querySelector('#aud')
const btnUsd = document.querySelector('#usd')
const btnGbp = document.querySelector('#gbp')
const syote = document.querySelector('#vaihdettava')
const tulos = document.querySelector('#vaihtoTulos')

let kurssit = []
let valittu
let kerroin  
let tulokset
let valmisLasku
let maa 


$(document).ready(function() {
  axios.get(' https://api.exchangeratesapi.io/latest').then(function (res) {
      console.log(res.data)
      let vastaus = res.data.rates
      console.log(vastaus)
      let tulokset = Object.entries(vastaus);
      console.log(tulokset)
      
      for(let saadut of tulokset){
        const lisaa = kurssit.push(saadut)
        
      }
      gbp.innerText = kurssit[29][1]
      sek.innerText = kurssit[9][1]
      usa.innerText = kurssit[26][1]
      aud.innerText = kurssit[7][1]
     
  }).catch(function (error) {
      console.error(error);
  })



btnAud.addEventListener('click', () => {
      valittu = kurssit[7][1]
      maa = kurssit[7][0]
      console.log(valittu)
      console.log(maa)
    return valittu, maa
  })
btnUsd.addEventListener('click', () => {
    valittu = kurssit[26][1]
    maa = kurssit[26][0]
    console.log(valittu)
  return valittu, maa
})
btnSek.addEventListener('click', () => {
  valittu = kurssit[9][1]
  maa = kurssit[9][0]
  console.log(valittu)
return valittu, maa
})
btnGbp.addEventListener('click', () => {
  valittu = kurssit[29][1]
  maa = kurssit[29][0]
  console.log(valittu)
return valittu, maa
})

  
$('input').keypress(function(e) {
  if (e.which == 13) {
    
    e.preventDefault();
    let summa=$('input').val();
    console.log(summa)
    if(isNaN(valittu)) {
      alert('Et ole vielä valinnut, miksi valuutaksi haluat eurosi vaihtaa!')
      return false
    }
    valmisLasku = summa * valittu
    let saatuTulos = valmisLasku.toFixed(2)
    anime({
      targets: tulos,
      innerText: [0, saatuTulos + " " + maa],    round: 1,
      easing: 'easeInOutExpo'
    });
    $('input').val('')
  }
});
})
  /* anime({
    targets: '#vaitotulos',
    value: [0, 1000],    round: 1,
    easing: 'easeInOutExpo'
  });
 */


  /* https://v6.exchangerate-api.com/v6/204dbf8d6253ed46c8c4c8a0/latest/EUR */