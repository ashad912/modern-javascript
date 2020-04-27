const list = document.querySelector('ul')
const form = document.querySelector('form')
const button = document.querySelector('body div button')



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

const deleteRecipe = (id) => {
    const recipes = document.querySelectorAll('li')
    recipes.forEach((recipe) => {
        if(recipe.getAttribute('data-id') === id){
            console.log(recipe)
            recipe.remove()
        }
    })
}

//get docs
//onSnapshot fires, when collection changed! all cases through code or directly (like stream in Mongo)
const unsub = db.collection('recipes').onSnapshot(snapshot => {
    snapshot.docChanges().forEach((change)=> { //support changes!
        const doc = change.doc
        console.log(change)
        if(change.type === 'added'){
            addRecipe(doc.data(), doc.id)
            console.log('halo')
        }else if (change.type === 'removed'){
            deleteRecipe(doc.id)
        }
    })
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

button.addEventListener('click', () => {
    unsub() //stop onSnapshot listener
})
