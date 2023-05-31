
let randomNumbers =[]

for ( i = 1; i < 5 +1; i++) {
    
    let numeri = parseInt(Math.floor((Math.random() * 100)))

    randomNumbers.push(numeri)
    
    

    
}

console.log(randomNumbers)



    




document.getElementById('numbers').
innerHTML = randomNumbers

second = 3



setTimeout(function () {
    document.getElementById('numbers').innerHTML = ''
    document.getElementById('question').innerHTML = 'inserisci i numeri precendi'

    
    

   
},5000)



setTimeout(function() {

    let numbersProm = []
    
    for ( i = 0; i < 5; i++) {
    let answer = parseInt(prompt('inserisci il numero visto precedentemente'))

    numbersProm.push(answer)
                    
    }
    if (numbersProm.includes(randomNumbers[4])) {

        console.log('hai indovinato almeno un numero')
        
    }else{
        console.log('non hai indovinato nulla')
    
    }
       
    
},6000)



