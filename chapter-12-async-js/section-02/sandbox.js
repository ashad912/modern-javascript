const req = new XMLHttpRequest() //request object builtin js

req.addEventListener('readystatechange' , () => { //req going through different states of requests (4 in total)
    console.log(req, req.readyState)
    //readyStates?
    /*
    https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState
    0	UNSENT	Client has been created. open() not called yet.
    1	OPENED	open() has been called.
    2	HEADERS_RECEIVED	send() has been called, and headers and status are available.
    3	LOADING	Downloading; responseText holds partial data.
    4	DONE	The operation is complete.
    */
    if(req.readyState === 4 && req.status === 200){ //react if fully req completed; have to react on error!
       //https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
        console.log(req.responseText) //req.responseText big JSON string 
    }else if(req.readyState === 4){
        console.log('could not fetch data')
    }
})

req.open('GET', 'https://jsonplaceholder.typicode.com/todos/') //type, endpoint
req.send() //send request