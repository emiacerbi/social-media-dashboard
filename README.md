# Frontend Mentor - Social media dashboard with theme switcher solution

This is a solution to the [Social media dashboard with theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/social-media-dashboard-with-theme-switcher-6oY8ozp_H). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Toggle color theme to their preference

### Screenshot

### Links

- Live Site URL: [Link](https://emiacerbi.github.io/social-media-dashboard/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [Sass](https://sass-lang.com/) - For styles


### What I learned

In this project I learned one method to siwtch between light and dark themes. In my case, I changed the reference to the CSS file with the following logic:

```JS
checkBox[0].checked = false // This sets the switch on dark mode by default

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
```

If darkTheme is true, the switch will change the reference of the CSS file to the light version, and then set darkTheme to false. On the contrary, if darkTheme is false, the switch will do the opposite. 

### Useful resources

- [Toggle Switch](https://www.w3schools.com/howto/howto_css_switch.asp) - This article really helped me to design the switch. 

## Author

`Emi Acerbi`

## Acknowledgments

As always, I appreciate all the awesome challenges that [Frontend Mentor]
