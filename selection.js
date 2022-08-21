async function selection() {
    console.log('in selection');
    const ele = document.querySelectorAll(".bar");
    for(let i=0;i<ele.length;i++){
        console.log('in iloop');
        let min_index = i;
        ele[i].style.background = 'blue';
        for(let j= i+1;j<ele.length;j++){
            ele[j].style.background = 'red';
            await waitfor(delay);
            if(parseInt(ele[j].style.height) < parseInt(ele[min_index].style.height)){
                if(min_index != i){
                    ele[min_index].style.background = 'cyan';
                }
                min_index = j;
            }else{
                ele[j].style.background = 'cyan';
            }
        }
        await waitfor(delay);
        swap(ele[min_index],ele[i]);
        ele[min_index].style.background = 'cyan';
        ele[i].style.background = 'green';
    }
}





const selectionSortbtn = document.querySelector(".selectionSort");
selectionSortbtn.addEventListener('click', async function(){
    disableSortingBtn();
    disableSizeSlider();
    disableNewArray();
    await selection();
    enableSortingBtn();
    enableSizeSlider();
    enableNewArray();
});