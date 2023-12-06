const preferedColorScheme = window.matchMedia('(prefers-color-scheme:dark)').matches ? 'dark' : 'light';


export const ShowThemeColor = () => {
    console.log(preferedColorScheme)
}