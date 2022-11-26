const formatearDinero=valor=>{
    const formatter=new Intl.NumberFormat('en-US',{
        style:"currency",
        currency:"USD"
    });
    return formatter.format(valor)
}

const calcularTotal = (cantidad,meses)=>{
    let total;
    if(cantidad < 5000){
        total=cantidad * 1.5
    }else if(cantidad >=5000 && cantidad < 10000){
        total=cantidad * 1.4
    }else if(cantidad >=10000 < 15000){
        total=cantidad * 1.3
    }else{
        total=cantidad * 1.2
    }
    //Plazo
    if(meses ===6){
        total *=1.1
    }else if(meses===12){
        total*=1.2
    }else{
        total*=1.3
    }
    return total;
}
const calcularPagoMensual=(total,meses)=>{
    const totalPagar=total / meses;
    return totalPagar
}

export {
    formatearDinero,
    calcularTotal,
    calcularPagoMensual
}