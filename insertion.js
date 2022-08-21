async function insertion() {
    console.log('in insertion');
    const ele = document.querySelectorAll(".bar");
    ele[0].style.background = 'green';
    for(let i=1;i<ele.length;i++){
let j= i-1;
let key = ele[i].style.height;
ele[i].style.background = 'blue';
await waitfor(delay);
while(j >=0 && (parseInt(ele[i].style.height) > parseInt(key))){
    ele[j].style.background = 'blue';
    ele[j+1].style.background = ele[j].style.height;
    j--;

await waitfor(delay);
for(let k=i; k>=0;k--){
    ele[k].style.background = 'green';
}
    }
    ele[j+1].style.background = key;
    ele[i].style.background = 'green';

}
}

const inSortbtn = document.querySelector(".insertionSort");
inSortbtn.addEventListener('click', async function() {
    disableNewArray();
    disableSizeSlider();
    disableSortingBtn();
    await insertion();
    enableNewArray();
    enableSizeSlider();
    enableSortingBtn();
});





