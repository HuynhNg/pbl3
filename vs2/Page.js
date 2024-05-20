function MyForm(){
    document.getElementById("Form").style.display= "flex";
}
function Mydetail() {
    const detail = document.querySelector('.detail');
    detail.style.display = "flex";
}
document.addEventListener('click', function(event) {
    const detailContainer = document.getElementById('detail_container');
    const detail = document.getElementById('detail');
    if (!detailContainer.contains(event.target) && !event.target.closest('button')) {
        detail.classList.add('hidden');
    }
});