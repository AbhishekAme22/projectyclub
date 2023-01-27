

const form = document.querySelector('#contact');


form.addEventListener('submit',(e)=>{      // added event listener on form submission
    e.preventDefault(); //it stops page to refresh on form submission
    db.collection('details_pc').add({ // this will add data to our database
        name:form.name.value,
        number:form.pnum.value,
        
        date:form.d.value,
        time:form.t.value,
        course:form.course.value,
        



    })

    console.log("ok")

})

