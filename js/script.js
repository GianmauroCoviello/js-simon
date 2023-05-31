
let randomNumbers =[]
// let numeri = randomNumbers.length

for ( i = 1; i < 5 +1; i++) {
    
    let numeri = parseInt(Math.floor((Math.random() * 100)))

    randomNumbers.push(numeri)
   
    
    

    
}
console.log(randomNumbers)


document.getElementById('numbers').innerHTML = randomNumbers

second = 3



setTimeout(function () {
    document.getElementById('numbers').innerHTML = ''
    document.getElementById('question').innerHTML = 'inserisci i numeri precedenti'

    
    

   
},5000)



setTimeout(function() {

    let numbersProm = []
    
    for ( i = 0; i < 5; i++) {
        let answer = parseInt(prompt('inserisci il numero visto precedentemente'))
        numbersProm.push(answer)
                    
    }

    let guessedNumber = []
    let score = 0
    for (let i = 0; i < randomNumbers.length; i++) {
        if (numbersProm.includes(randomNumbers[i])) {
            guessNumber.push(randomNumbers[i])
            score++

            document.getElementById('result').innerHTML = `hai indovinato ${score}, i numeri corretti sono ${guessedNumber}  `
    
            
        
        } else{
            document.getElementById('result').innerHTML = 'non ne hai indovinato nemmeno uno'
        }
        
        
    }
    
},6000)



