
function markDown(){
    const inputElement = document.getElementById("text-area")
    const displayArea = document.getElementById("display-area")
    const clearBtn = document.getElementById("clear-btn")
 

    inputElement.addEventListener("input", ()=>{
           displayArea.innerHTML = marked.parse(`${inputElement.value}`)
           hljs.highlightAll(); 
        //    console.log("content of display section"+ displayArea.innerHTML)
        })
   
       // clear Input
        clearBtn.addEventListener("click",()=>{
            displayArea.innerHTML = ""
            console.log(inputElement.value + " my text")
            inputElement.value = ""
            console.log(inputElement.value + " my text")
        })

        // highlight the ext
        marked.setOptions({
            highlight: function(code, lang) {
              return hljs.highlightAuto(code).value;
            }
          });
        
}
markDown()






