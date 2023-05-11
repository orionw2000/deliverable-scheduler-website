const projectForm = document.querySelector("#create-project-form");
const getForm = document.querySelector("#get-project-form");

window.onload = async function(){alert("hi")}


getForm.onsubmit = async function(evt) {
  evt.preventDefault();
  alert("success");
  const id = document.querySelector("#project-id").value;
  console.log(id);
  var url = 'http://localhost:63342/UnitProject/example_frontend/viewProject.html?_ijt=cr9j6b98f8ifr6385csl5rp9nr&_ij_reload=RELOAD_ON_SAVE';
  url = url + id;
  window.location.href = url;
}


projectForm.onsubmit = async function(evt) {
  evt.preventDefault();
  alert("success")
  const name = document.querySelector("#project-name").value;
  const password = document.querySelector("#project-password").value;
  const deliverableName = document.querySelector("#deliverable-name").value;
  const deliverableDueDate = document.querySelector("#deliverable-due-date").value;
  const projectObj = {
    "name": name,
    "password": password,
    "deliverableName": deliverableName,
    "deliverableDueDate": deliverableDueDate
  }
  axios.post("https://zt68vvrmj9.execute-api.us-west-1.amazonaws.com/first-deployment/projects", projectObj).then((res) => {
    console.log(res);
    const id = res.data.project.id;
    window.location.href = "https://zt68vvrmj9.execute-api.us-west-1.amazonaws.com/first-deployment/projects/" + id;
  })
}
