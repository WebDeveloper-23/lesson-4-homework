let burger = document.querySelector('.burger')

burger.addEventListener('click', () => {
    burger.classList.toggle('active')
    if (burger.classList.contains('active')) {
        document.querySelector('.ul').classList.add('active')
    } else {
        document.querySelector('.ul').classList.remove('active')
    }
})

let category = [
    'საშინელება',
    'კომედია',
    'დრამა',
    'მელოდრამა',
    'ზღაპრული',
    'ფენტეზი',
    'ფანტასტიკა',
    'თრილერი',
    'კრიმინალური',
    'დოკუმენტური',
    'მოკლემეტრაჟიანი',
    'საომარი',
    'ანიმაციური',
    'ისტორიული',
    'მძაფრსიუჟეტიანი'
]

let categoriesInner = document.querySelector('.categories-inner')

for (let index = 0; index < category.length; index++) {
    const element = category[index];
    let categoryLink = document.createElement('a')
    categoryLink.classList.add('categoryLink')
    categoryLink.innerHTML += element
    categoriesInner.appendChild(categoryLink)
}

const categoryLink = document.querySelector('.category')
categoryLink.addEventListener('click', () => {
    document.querySelector('.categories').classList.toggle('active')
    if(document.querySelector('.categories').classList.contains('active')){
        document.querySelector('.ul').classList.remove('active')
    }
})  

