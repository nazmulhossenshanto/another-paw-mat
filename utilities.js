const loadSpinner = (show) => {
    const spinner = document.getElementById('loader');
    if(show){
        spinner.classList.remove('hidden')
    }
    else{
        spinner.classList.add('hidden')
    }
}