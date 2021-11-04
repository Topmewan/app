/* Css-переменные
* --theme-default - Уникальное название для дефолта
* --theme-light - для 'light'
* --theme-dark - для 'dark'
* --theme-neutral- для 'neutral'
* */

export const changeCssVariables = (theme) => {
    const root = document.querySelector(':root');

    const cssVariables = ['header', 'bgimg'];

    cssVariables.forEach(item => {
         root.style.setProperty(
             `--theme-default-${item}`,
             `var(--theme-${theme}-${item})`);
    })
}