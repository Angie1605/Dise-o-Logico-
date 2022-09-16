function validar(){
    var Jurado1=document.getElementById("Jurado1").value
    var Jurado2=document.getElementById("Jurado2").value
    var Jurado3=document.getElementById("Jurado3").value
    if ((Jurado1=="Verde" && Jurado2=="Verde") || (Jurado2=="Verde" && Jurado3=="Verde") || (Jurado3=="Verde" && Jurado1=="Verde" ) || (Jurado1=="Verde"  && Jurado2=="Verde" && Jurado3=="Verde")  ){
        Swal.fire("Fue seleccionado")
       
    }
    else{
        Swal.fire("No Fue seleccionado")
        
    }
}