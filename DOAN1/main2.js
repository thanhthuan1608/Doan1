let search__input = document.querySelectorAll('.search-form__input');
let search__label = document.querySelectorAll('.search-form__label');

for (let i = 0; i < search__input.length; i++) {
    search__input[i].onclick = function(){
        search__label[i].style.color = '#007bff';
    }
    search__input[i].onblur = function(){
        search__label[i].style.color = '';
    }
}
// 
let nganh = document.getElementById('nganh')
let mssv = document.getElementById('mssv')
let cccd = document.getElementById('cccd')
let btn = document.querySelector('.search-form__btn')
let popup = document.getElementById('popup');
let closePopup = document.getElementById('close-popup');

btn.onclick = function(event){
    event.preventDefault();
    btn.blur();
    let arrnganh = ['CNTT','KHMT','KTPM'];
    popup.style.display = 'none';


    console.log(nganh.value)
    let search = data.filter(element =>{
        if (mssv.value.trim() === '' && cccd.value.trim() === ''){
            return arrnganh[nganh.value] === element.nganh

        }
        else if (cccd.value.trim() === '') {
            nganh.value = ''
            return mssv.value === element.mssv
        }
        else if (mssv.value.trim() === '') {
            nganh.value = ''
            return cccd.value === element.cccd
        }
        else{
            nganh.value = ''
            return mssv.value === element.mssv && cccd.value === element.cccd

        }


    })
    if (search.length === 0) {
        popup.style.display = 'flex';  // Hiển thị popup
    } else {
        popup.style.display = 'none';  // Ẩn popup nếu có kết quả
    }
    

    addRowsToTable(search)
 
}
closePopup.onclick = function() {
    popup.style.display = 'none';
}

// Đóng popup khi nhấn ngoài popup content
window.onclick = function(event) {
    if (event.target == popup) {
        popup.style.display = 'none';
    }
}








