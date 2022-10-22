const panels = document.querySelectorAll('.panel');
panels.forEach(item => {
    item.addEventListener('click', () => {
        removeActiveclasses()
        item.classList.add('active')
    })
})

function removeActiveclasses() {
    panels.forEach(item => {
        item.classList.remove('active')
    })
}