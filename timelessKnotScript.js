document.addEventListener('DOMContentLoaded', (event) => {
    const totalAnimationTime = 4000;
    const preloader = document.getElementById('preloader')
    const navBar = document.getElementById('navBar')
        setTimeout(() => {
            document.body.classList.add('animate-complete');
    }, totalAnimationTime);
    setTimeout(()=>{
        preloader.style.display = "none"
        navBar.style.display = "flex"
        document.body.style.backgroundColor = "white"
    },8500)
});