var cont = 0, con1 = 0, t = 0;
var imagens = new Array();
var idimg = new Array();
var idDiv = new Array();
function carregarUmaImagem(div1, div2, file) {
    var reader = new FileReader();

    reader.onloadend = (
        function (f) {
            return function () {
                var img1 = document.createElement("img");
                var img2 = document.createElement("img");
                var a = document.createElement("a");
                var a1 = document.createElement("a");
                var di = document.createElement("div");
                img1.src = reader.result;
                img2.src = reader.result;
                img2.addEventListener("mouseout", function () {
                    img2.src = reader.result;
                });
                img2.addEventListener("mouseover", function () {
                    img2.src = "../css/x.png";
                });
                a1.appendChild(img1);
                a1.setAttribute("data-fancybox", "images");
                a1.setAttribute("href", reader.result)
                a1.setAttribute("id","a1"+cont);
                a.appendChild(img2);
                a.setAttribute("id", "a" + cont);
                di.appendChild(a);
                div1.appendChild(a1);
                div2.appendChild(di);
                di.style.float = "left";
                idimg.push("image1" + cont);
                idDiv.push("di" + cont);
                di.setAttribute("id", "di" + cont);
                img2.setAttribute("id", "image1" + cont);
                var idImg = "image1" + cont;
                var iDiv = "di" + cont;
                var idA = "a" + cont;
                $(di).click(function (e) {
                    a.removeChild(img2);
                    di.removeChild(a);
                    div2.removeChild(di);
                    a1.removeChild(img1);
                    div1.removeChild(a1);
                    index = imagens.indexOf(cont);
                    imagens.splice(index, 1);
                    a1.removeAttribute("data-fancybox");
                    cont=cont-1;
                    con1=con1-1;

                });
                $('#di' + cont).addClass('alinhar');
                a.setAttribute("class", "trocadeImg");
                a.setAttribute("href", "#");
                img1.setAttribute("class", "imgPeq");
                img2.setAttribute("class", "imgPeq");
                cont = cont + 1;
                img1.setAttribute("id", "image1" + cont);
                img2.setAttribute("id", "image2" + cont);

            }
        })(file);

    reader.readAsDataURL(file);
}
function img(div1, file) {


}
function carregarImagens() {
    var files = document.getElementsByTagName('input')[0].files;
    con1 = imagens.length;
    for (i = 0; i < files.length; i++) {
        if (files[i]) {
            imagens.push(files[i]);
        } else {

        }

    }
    var input = $("#adicionar");
    removerUm();
    limpar_input(input);
    var div1 = document.getElementById("modal-box-conteudo");
    var div2 = document.getElementById("modal-box-conteudo2");
    for (i = con1; i < imagens.length; i++) {
        if (imagens[i]) {
            carregarUmaImagem(div1, div2, imagens[i]);
        } else {

        }

    }


}
function limpar_input(input) {
    input.replaceWith(input.val('').clone(true));
}
function visualizar() {
    $('#Modal1').fadeIn(100);
    $('.fechar,#Modal1').click(function (event) {
        if (event.target !== this) {
            return;
        }
        $('#Modal1').fadeOut(100);
    })
    t = 0;
}
function remover() {
    $('#Modal2').fadeIn(100);
    $('.fechar,#Modal2').click(function (event) {
        if (event.target !== this) {
            return;
        }
        $('#Modal2').fadeOut(100);
    })
    t = 1;
    removerUm()
}
function removerUm() { }

function removertudo() {
    for (i = 0; i <= cont; i++) {
        var index = imagens.indexOf(i);
        imagens.splice(index, 1);
    }
    $("#modal-box-conteudo2").find("div").remove();
    $("#modal-box-conteudo").find("img").remove();
    for($i=0; $i<cont; $i++){
        var n1="a1"+$i;
        var n2=document.getElementById(n1);
        n2.removeAttribute("data-fancybox");
    }
    cont = 0;
    con1 = 0;

}