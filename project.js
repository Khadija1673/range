const minRange = document.getElementById("min-range");
const maxRange = document.getElementById("max-range");
const priceSlider = document.querySelector(".priceSlider");

function update(){
    let min = parseInt(minRange.min);
    let max = parseInt(maxRange.max);
    let value = max - min ;
    let minValue = parseInt(minRange.value);
    let maxValue = parseInt(maxRange.value);
    const leftPercent = ((minValue - min)/value) * 100;
    const rightPercent = ((maxValue - min)/value) * 100;
    priceSlider.style.left = `${leftPercent}%`;
    priceSlider.style.right = `${100 - rightPercent}%`;
}

document.getElementById("min-input").addEventListener("blur", function(){
    let slider = document.getElementById("min-range");
    let value =  parseInt(this.value)
    if(parseInt(slider.min) <= value && parseInt(slider.max) >= value){
        slider.value = value;
        this.classList.remove("is-invalid");
        update();
    }
    else{
        alert("minimum range value is not correct")
    }
})
document.getElementById("max-input").addEventListener("blur", function(){
    let slider = document.getElementById("max-range");
    let value =  parseInt(this.value);
    let m = document.getElementById("min-input").value;
    if(m != 0){
        if (m < value){
      if(parseInt(slider.min) <= value && parseInt(slider.max) >= value){
        slider.value = value;
        update();
      }
}
    else{
            alert("minimum range value is not correct")
    }
}
    else{
        alert("give minimum price firstly")
    } 
})
 
  update();

minRange.addEventListener("input", update); 
maxRange.addEventListener("input", update);
