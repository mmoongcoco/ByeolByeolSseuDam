/* marketDetail.html */

/* 장바구니 모달 열고 닫기 변수 선언 */
let $basketModal = $("#shop_detail_add_cart_alarm");

/* 상품 드롭메뉴 열고 닫기 변수 선언 */
let $dropdownMenu = $(".form-select-wrap .dropdown-menu");
let check = -1;

/* 아이템 추가 변수 선언 */
let $dropdownItem = $(".dropdown-item a.blocked");
let $itemBox = $(".goods_payment .order_quantity_area");
let index = 0;

/* 상품 개수 조절 변수 선언 */
let $totalItemCount = $(".body_font_color_70.itemCount");
let $totalCount = $totalItemCount.text().split('개')[0].split('(')[1];
let $totalPrice = $(".total_price");


/* 장바구니 모달 열기 */
function basketModalOpen(){
    $basketModal.css('display', 'block');
}

/* 장바구니 모달 닫기 */
function basketModalClose(){
    $basketModal.css('display', 'none');
}


/* 상품 드롭 메뉴 열고 닫기 */
function dropdownMenu(){
    console.log("들어옴");
    if(check < 0){
        $dropdownMenu.css('display', 'block');
        $("#Layer_1").css('transform', 'rotate(180deg)');
    }else {
        $dropdownMenu.css('display', 'none');
        $("#Layer_1").css('transform', 'rotate(0deg)');
    }
    check *= -1;
}

/* 상품 추가 */
function addItem(){
    index++;
    let text = "";
    text += `<div class="area_tit holder" style="margin-top: 25px;">`;
    text += `<span class="option_title inline-blocked" style="margin-bottom: 7px">` + $dropdownItem.children().eq(0).text() + `</span>`;
    text += `</div>`;
    text += `<div class="area_count holder">`;
    text += `<div class="option_btn_wrap" style="top:0;">`;
    text += `<div class="option_btn_tools" style="float: none;">`;
    text += `<a href="javascript: minusItemCount(` + index +`);">`;
    text += `<i class="btl bt-minus" aria-hidden="true"></i>`;
    text += `<span class="sr-only">minus</span>`;
    text += `</a>`;
    text += `<input type="text" title="number" value="1" class="form-control _order_count_mobile ` + index + `">`;
    text += `<a href="javascript: plusItemCount(` + index +`);">`;
    text += `<i class="btl bt-plus" aria-hidden="true"></i>`;
    text += `<span class="sr-only">plus</span>`;
    text += `</a>`;
    text += `</div>`;
    text += `<div class="area_price absolute absolute_right absolute_middle">`;
    text += `<span class="item_price ` + index + `">` + $dropdownItem.children().eq(1).text() +`</span>`;
    text += `</div>`;
    text += `</div>`;
    text += `</div>`;
    $itemBox.append(text);
    $dropdownMenu.css('display', 'none');
    totalItemCount();
}

/* 상품 개수 빼기 */
function minusItemCount(index){
    let identifier = ".form-control._order_count_mobile." + index;
    let $itemCount = $(identifier);
    if($itemCount.val() == 1){
        alert("1개 미만은 주문할 수 없습니다.");
        return;
    }else {
        $itemCount.val(parseInt($itemCount.val()) - 1);
        totalItemCount();
    }
}

/* 상품 개수 추가 */
function plusItemCount(index){
    let identifier = ".form-control._order_count_mobile." + index;
    let $itemCount = $(identifier);
    $itemCount.val(parseInt($itemCount.val()) + 1);
    totalItemCount();
}

/* 상품 개수 변경 이벤트 */

$(".goods_payment").on('change', '.form-control._order_count_mobile', function(){
    totalItemCount();
});

$(".form-control._order_count_mobile").on('change', function(){
    totalItemCount();
});

/* 총 상품 개수 */
function totalItemCount(){
    let text = "";
    let total = 0;
    text += "총 상품금액(";
    for(var i = index; i >= 0; i--) {
        let identifier = ".form-control._order_count_mobile." + i;
        let $itemCount = $(identifier);
        total += parseInt($itemCount.val());
    }
    text += total;
    text += "개)";
    $totalItemCount.html(text);
    totalPrice();
}

/* 총 상품 금액 */
function totalPrice(){
    let text = "";
    let total = 0;
    for(var i = index; i >= 0; i--) {
        let itemIdentifier = ".item_price." + i;
        let $itemPrice = $(itemIdentifier).text().split('원')[0].replace(',', '');
        let countIdentifier = ".form-control._order_count_mobile." + i;
        let $itemCount = $(countIdentifier);
        total += (parseInt($itemCount.val()) * parseInt($itemPrice));
    }
    text += total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    text += "원";
    $totalPrice.html(text);
}

