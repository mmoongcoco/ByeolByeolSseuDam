/* marketBasket.html */

let $optionModal = $("#shop_cart_change_layer");
let $modalOpenBtn = $("a._modal_open_btn");
let $modalXBtn = $("._modal_close_btn");

let $selectBox = $(".dropdown-toggle");
let $dropdownMenu = $(".dropdown-menu");


$modalOpenBtn.on('click', function(){
    console.log("ff")
});

$modalXBtn.on('click', function(){
    console.log("dd");
    optionModalClose();
});

$selectBox.on('click', function(){
    console.log("들어옴")
});


/* 옵션 변경 모달 열기 */
function optionModalOpen(){
    $optionModal.toggle();
}

function optionModalClose(){
    $optionModal.css('display', 'none');
}

/* 옵션 선택박스 열기 */
function selectboxOpen(){
    $dropdownMenu.toggle();
}












