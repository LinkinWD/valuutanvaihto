const btn = document.querySelectorAll('button')
const usa = document.querySelector('#USA')
const aud = document.querySelector('#AUD')
const rub = document.querySelector('#RUB')
const sek = document.querySelector('#SEK')
const gbp = document.querySelector('#GBP')

let kurssit = []
let valittu
  
  axios.get('https://v6.exchangerate-api.com/v6/204dbf8d6253ed46c8c4c8a0/latest/EUR').then(function (res) {
      console.log(res.data);      let vastaus = res.data.conversion_rates
      
      let kurssit = Object.entries(vastaus);
      console.log(kurssit)
      console.log(`Punta: ${kurssit[17][1]}`)
      gbp.innerText = kurssit[17][1]
      sek.innerText = kurssit[43][1]
      usa.innerText = kurssit[49][1]
      aud.innerText = kurssit[3][1]
      rub.innerText = kurssit[41][1]
  }).then(btn.forEach( e => {
    e.addEventListener('click', event => {
      console.log(event.target.dataSet.id)
    })
    
    
  })
  .catch(function (error) {
      console.error(error);
  }))
  



  anime({
    targets: '#vaitotulos',
    value: [0, 1000],    round: 1,
    easing: 'easeInOutExpo'
  });

  function lisääKertoimet() {
      gbp.innerText = kurssit[17][1]
      sek.innerText = kurssit[43][1]
      usa.innerText = kurssit[49][1]
      aud.innerText = kurssit[3][1]
      rub.innerText = kurssit[41][1]
      
  }