function checktotal(){
    // let number = document.getElementById('number').value;
    let number = prompt("Enter a number: ");
    let total = 0;

    while(number != -1){
        
            number = prompt("Enter a number: ");
            alert(number);
            
            total += number;
          
           
    }
        
    // document.getElementById('result').innerHTML = "Kết quả là: " + total
}