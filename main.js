const Form = document.getElementById("feedbackForm");

Form.addEventListener("submit", function(event){})
{
    event.preventDefault();
}

const name = document.getElementById("name").value;
const instructor = document.getElementById("instructorName").value;
const course = document.getElementById("course").value;
const feedback = document.getElementById("feedback").value;

console.log(name);
console.log(instructor);
console.log(course);
console.log(feedback);

if (name === ""){
    alert("please enter name");
    return;
}

if (instructor === ""){
    alert("please enter instructor");
    return;
}

if (course === ""){
    alert("please enter course");
    return;
}

if (feedback === ""){
    alert("please enter your feedback");
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
        feedback
    })
});

then(response => response.json())
.then(data => {
    alert(data.message);
})
.catch(error => {
    console.error(error);
})
    


