let darkTheme = true

// Select the button
const slider = document.querySelector('.slider')

// Select the stylesheet <link>
const theme = document.querySelector("#theme-link");


// Set default input to unchecked
let checkBox = document.getElementsByTagName('input')

checkBox[0].checked = false

const toggleTheme = () => {
    if (darkTheme) {
        theme.href = "css-light/main.css";
        darkTheme = false
    } else if (!darkTheme) {
        theme.href = "css/main.css";
        darkTheme = true
    }
}

slider.addEventListener("click", toggleTheme)
