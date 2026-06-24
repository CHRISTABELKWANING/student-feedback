const Form = document.getElementById("feedbackForm");

Form.addEventListener("submit", function(event){})
{
    event.preventDefault();
}

const name = document.getElementById("name").value;
console.log(name);

const name = document.getElementById("instructor_name").value;
console.log(instructor_name);

const name = document.getElementById("course").value;
console.log(course);

const name = document.getElementById("reason").value;
console.log(reason);

if (name === ""){
    alert("please enter name");
    return;
}

fetch("/feedback", {
    method: "POST",
    headers: {
        "content-Type": "application/json"
    },
    body: JSON.stringify({
        name,
        instructor,
        course,
        please 
    })
});
    


