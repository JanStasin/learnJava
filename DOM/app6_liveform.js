const form = document.querySelector('#live-form')
console.log(form)

const ccNum = document.querySelector('#cc');
const consent = document.querySelector('#consent');
const stuff = document.querySelector('#stuff');


// live tracking of inputs:
const formData = {};

// //// CRUDE VERSION
// ccNum.addEventListener('input', (e) => {
//     formData['cc'] = e.target.value
// })

// consent.addEventListener('input', (e) => {
//     formData['consent'] = e.target.checked
// })

// stuff.addEventListener('input', (e) => {
//     formData['stuff'] = e.target.value
// })

//// FANCY VERSION:

for(let form_input of [ccNum,consent,stuff]) {
    form_input.addEventListener('input', (e)=>{
        //console.log(e.target.name)
        //console.log(form_input.type)
        if (form_input.type === 'checkbox') {
            formData[e.target.name] = e.target.checked
        } else {
        formData[e.target.name] = e.target.value
        }
    })
}