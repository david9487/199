
$(document).ready(function(){
    TweenMax.to(".card2",0, {
        x: 480,
        ease: Linear.easeNone
    });
    TweenMax.to(".card3", 0, {
        x: 480,
        ease: Linear.easeNone
    });
    TweenMax.to(".card4", 0, {
        x: 480,
        ease: Linear.easeNone
    });
    TweenMax.to(".card5", 0, {
        x: 480,
        ease: Linear.easeNone
    });
    TweenMax.to(".progress-bar", 0, {
        width:98,
        ease: Linear.easeNone
    });
    $('.card1 .btn-next').click(function(){
        turnNext(1);

    })
    $('.card2 .btn-next').click(function(){
        turnNext(2);
    })
    $('.card2 .btn-front').click(function(){
        turnPrev(2);
    })
    $('.card3 .btn-next').click(function(){
        turnNext(3);
    })
    $('.card3 .btn-front').click(function(){
        turnPrev(3);
    })
    $('.card4 .btn-next').click(function(){
        turnNext(4);
    })
});
function turnNext(n){
    TweenMax.to(".card"+n,0.5, {
        x: -480,
        ease: Linear.easeNone,
        delay:0.4
    });
        TweenMax.to(".card"+(n+1),0.5, {
        x: 0,
        ease: Linear.easeNone,
        delay:0.4

    });
    TweenMax.to(".progress-bar", 0, {
        width:98*(n+1),
        ease: Linear.easeNone
    });
}

// function turnPrev(n){
//     TweenMax.to(".card"+(n-1),0.5, {
//         x: 0,
//         ease: Linear.easeNone
//     });
//     TweenMax.to(".card"+n,0.5, {
//         x: 500,
//         ease: Linear.easeNone
//     });
//     TweenMax.to(".progress-bar", 0, {
//         width:125*(n-1),
//         ease: Linear.easeNone
//     });
// }

$(document).ready(function()
{
    $(".btn-send").click(function(event) {
        save();
        thumbmove();
    });
    $(".btn-time").click(function(event) {
        save2();
        thumbmove();
    });
    $(".btn-app").click(function(event) {
        save3();
        thumbmove();
    });
    $(".btn-independent").click(function(event) {
        save4();
        thumbmove();
    });
})

   




function save(){
    let postURL="https://script.google.com/macros/s/AKfycbzPyO8LM7fopl1ug-ekip67HrmeOS9GWiC99qHbxN9KcNhJ8lIp/exec";
    let param= new Object();
    param.method="write";
    param.userName=$("input[name='userName']").val();
    param.contentTxt=$("textarea[name='contentTxt']").val();
    param.gender=$("input[name='gender']:checked").val();
    param.sheetUrl="https://docs.google.com/spreadsheets/d/1V2_u6Xx0pNh_gKT-n65XhxkF381W0Tcbo-eFoecy7yM/edit?usp=sharing";
    param.sheetTag="基本資料";
    console.log(param);
    $.post(postURL,param, function(data) {
        console.log(data);
        // if(data.result=="success"){
        // alert("成功寫入");
        // read();
        // }else{
        //     alert("失敗");
        // }
    });
}

function save2(){
    let postURL="https://script.google.com/macros/s/AKfycbzPyO8LM7fopl1ug-ekip67HrmeOS9GWiC99qHbxN9KcNhJ8lIp/exec";
    let param= new Object();
    param.method="write2";
    param.time=$("input[name='time']:checked").val();
    param.sheetUrl="https://docs.google.com/spreadsheets/d/1V2_u6Xx0pNh_gKT-n65XhxkF381W0Tcbo-eFoecy7yM/edit?usp=sharing";
    param.sheetTag="使用時間";
    console.log(param);
    $.post(postURL,param, function(data) {
        console.log(data);
        // if(data.result=="success"){
        // alert("成功寫入");
        // read();
        // }else{
        //     alert("失敗");
        // }
    });
}
function save3(){
    let postURL="https://script.google.com/macros/s/AKfycbzPyO8LM7fopl1ug-ekip67HrmeOS9GWiC99qHbxN9KcNhJ8lIp/exec";
    let param= new Object();
    param.method="write3";
    param.app=$("input[name='app']:checked").val();
    param.sheetUrl="https://docs.google.com/spreadsheets/d/1V2_u6Xx0pNh_gKT-n65XhxkF381W0Tcbo-eFoecy7yM/edit?usp=sharing";
    param.sheetTag="App類型";
    console.log(param);
    $.post(postURL,param, function(data) {
        console.log(data);
        // if(data.result=="success"){
        // alert("成功寫入");
        // read();
        // }else{
        //     alert("失敗");
        // }
    });
}
function save4(){
    let postURL="https://script.google.com/macros/s/AKfycbzPyO8LM7fopl1ug-ekip67HrmeOS9GWiC99qHbxN9KcNhJ8lIp/exec";
    let param= new Object();
    param.method="write4";
    param.degree=$("input[name='degree']:checked").val();
    param.sheetUrl="https://docs.google.com/spreadsheets/d/1V2_u6Xx0pNh_gKT-n65XhxkF381W0Tcbo-eFoecy7yM/edit?usp=sharing";
    param.sheetTag="依賴程度";
    console.log(param);
    $.post(postURL,param, function(data) {
        console.log(data);
        // if(data.result=="success"){
        // alert("成功寫入");
        // read();
        // }else{
        //     alert("失敗");
        // }
    });
}
function thumbmove(){
    TweenMax.to('.thumb',0,{delay:0.4,rotation:-45, transformOrigin: "300px 400px",ease: Linear.easeNone});
    TweenMax.to('.thumb',0,{delay:0.9,rotation:0, transformOrigin: "300px 400px",ease: Linear.easeNone});
}