let inpt = document.getElementById(`main_searched_item`)
let cur_str = "";
let cur_arr = [];

inpt.addEventListener(`keyup`, (e) => {
    if(e.keyCode === 13){
        displayData(cur_arr)
        cur_str = ""
        cur_arr = []
    }

    else if(e.keyCode === 32){
        let str = "";
        for(let i = 0; i < cur_str.length; i++){
            str += cur_str[i]
        }
        cur_str = "";
        // console.log(cur_arr)
        if(cur_arr.length == 0){
            let data = JSON.parse(localStorage.getItem(`all_items`))
            for(let i = 0; i < data.length; i++){
                let arr_str = data[i].name.split(" ")
                
                for(let j = 0; j < arr_str.length; j++){
                    if(str == arr_str[j]){
                        cur_arr.push(data[i])
                        break
                    }
                }
            }
        }

        else{
            let arr = [];
            for(let i = 0; i < cur_arr.length; i++){
                arr.push(cur_arr[i])
            }
            cur_arr = []
            for(let i = 0; i < arr.length; i++){
                let new_arr_str = arr[i].name.split(" ")
                for(let j = 0; j < new_arr_str.length; j++){
                    if(str == new_arr_str[j]){
                        cur_arr.push(arr[i])
                    }
                }
            }
        }
    }
    
    else if((e.keyCode == 16) || (e.keyCode == 20) || (e.keyCode == 8)){
       
    }

    else{
        cur_str += e.key;
    }
})



const displayData = (data) => {
    console.log(data)
    let main_container = document.getElementById(`main_container`)
    main_container.style.display = "none"

    let popup_container = document.getElementById(`popup_container`)
    popup_container.style.display = "flex"

    let popup_left = document.getElementById(`popup_left`)
    let h1_div = document.createElement(`div`)
    h1_div.id = "popup_result"
    let h1 = document.createElement(`h1`)
    h1.textContent = `${data.length} RESULTS`

    let clr_srch = document.createElement(`button`)
    clr_srch.innerHTML = "Clear Search"

    h1_div.append(h1, clr_srch)

    popup_left.append(h1_div)

    clr_srch.addEventListener(`click`, () => {
        document.getElementById(`main_container`).style.display = "flex"
        document.getElementById(`popup_container`).style.display = "none"
        document.getElementById(`searched_food`).textContent = ""
        document.getElementById(`main_searched_item`).value = ""
        document.getElementById(`popup_result`).textContent = ""
    })
    

    let searched_food = document.getElementById(`searched_food`)
    searched_food.style.display = "grid"
    searched_food.style.gridTemplateColumns = "repeat(3, 1fr)"
    searched_food.style.gridGap = "20px"

    data.forEach((item) => {
        let div = document.createElement(`div`)

        let img = document.createElement(`img`)
        img.src = item.image
    
        let h3 = document.createElement(`p`)
        h3.innerHTML = `<b>${item.name}<b>`
        h3.style.fontSize = "18px"
    
        let p1 = document.createElement(`p`)
        p1.innerHTML = `<b>${item.price}</b>`
    
        let p2 = document.createElement(`p`)
        p2.textContent = item.description
        p2.style.fontSize = "15px"
        p2.style.color = "gray"

        div.append(img, h3, p1, p2)
        searched_food.append(div)

    })
}