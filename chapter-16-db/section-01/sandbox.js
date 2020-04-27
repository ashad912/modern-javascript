const list = document.querySelector('ul')
const form = document.querySelector('form')



const addRecipe = (recipe, id) => {
    let time = recipe.created_at.toDate()
    let html = `
        <li data-id=${id}>
            <div>${recipe.title}</div>
            <div>${time}</div>
            <button class="btn btn-danger btn-sm my-2">delete</button>
        </li>  
    `
    list.innerHTML += html;
}

//get docs

db.collection('recipes').get().then((snapshot) => {
    //snapshot is a picture of how this collection looks at that moment in time and it contains different info on it
    
    snapshot.docs.forEach(doc => addRecipe(doc.data(), doc.id))

}).catch((e) => {
    console.log(e)
})

//add docs

form.addEventListener('submit', async (e) => {
    e.preventDefault()
    console.log(e.target.children[1].children[0].value)
    const now = new Date()
    const recipe = {
        title: form.recipe.value, //e.target.children[1].children[0].value
        created_at: firebase.firestore.Timestamp.fromDate(now)
    } 
    try{
        await db.collection('recipes').add(recipe)
        console.log('recipes added')
    }catch(e){
        console.log(e)
    }
    
})

//delete docs

list.addEventListener('click', async (e) => {
    if(e.target.classList.contains('btn')){
        const id = e.target.parentElement.getAttribute('data-id')
        console.log(id)
        try{
            await db.collection('recipes').doc(id).delete()
            console.log('recipes deleted')
        }catch(e){
            console.log(e)
        }    
    }
})
