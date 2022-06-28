function money(value){
    result=value.toFixed(2);
    alert(`O valor é de ${result.replace(".",",")} R$.`);
}

money(0.30000000000000004);