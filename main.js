function calculateIMT () {
    var weight = document.getElementById('weight').value
    var height = document.getElementById('height').value
    console.log("вес:" , weight)

    let imt = weight / (height ** 2)

    var imtText = imt.toFixed(2)

    if (imt<16) {
       imtText += "Выраженный дифицыт массы тела"
    } else if (imt >= 16 && imt < 18.5) { 
       imtText += "Недостаточная (дефицит) масса тела"

    } else if (imt >=18.5 && imt < 25){
      imtText +=  "Норма"
    } else if (imt >=25 && imt <30) {
        imtText += "Избыточная масса тела (предожирение)"
    } else {
        imtText += "Ожирение 1 степени"
    }
    console.log("ИМТ:", imtText)
    //console.log("имт:" , imt)
    document.getElementById("result").innerHTML = imtText
}