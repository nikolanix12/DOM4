/**
 * Created by Ucenik on 18.5.2017..
 */
var brojevi = [];
function Unesi()
{
    var broj=document.getElementById("prvi").value;
    brojevi.push(broj);
}
function Najveci()
{
    document.getElementById("upis").innerHTML += Math.max.apply(null,brojevi);
}


function Provjera()
{
    var ime1 = document.getElementById("ime").value;
    var godine = document.getElementById("god").value;
    if (ime1.length>10)
    {
        document.getElementById("upis2").innerHTML+="Ime je veće od 10 znakova. ";
    }
    if (godine>17 && godine<100)
    {
        document.getElementById("upis2").innerHTML+="Godine su u rasponu od 18 do 99. ";
    }

}

function myFunction()
{
    var txt = "";
    if (document.getElementById("id1").validity.rangeOverflow)
    {
        txt = "Value too large";
    }
    else if (document.getElementById("id1").value="")
    {
        txt = "Field is blank";
    }
    else
    {
        txt = "Input OK";
    }

    document.getElementById("demo").innerHTML = txt;
}