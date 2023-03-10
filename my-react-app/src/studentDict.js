
// add export so this variable is accessible in other files

const cooperimg = document.createElement("img")
cooperimg.src="cooperH.png"

export const juliaimg = document.createElement("img")
juliaimg.src="juliaM.png"

export const leilaimg = document.createElement("img")
leilaimg.src="leilaC.png"

export const studentProf = {
        "Cooper" : { "Name": "Cooper. H", 
                    "Comm": "this classroom's kind of chilly", 
                    "Photo": "cooperimg",},
        "Julia" : { "Name": "Julia M,", 
                    "Comm": "spicy cough", 
                    "Photo": "juliaimg",},
        "Leila" : { "Name": "Leila C.", 
                    "Comm": "in the elevator! ", 
                    "Photo": "leilaimg",}
    }

