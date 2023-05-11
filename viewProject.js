document.querySelector("#get-project-form");
var x = 5;
window.onload = async function(evt) {
  evt.preventDefault();
  console.log("Getting Project Data...");
  const a = window.location.href
  var startingUrl = "https://zt68vvrmj9.execute-api.us-west-1.amazonaws.com/first-deployment/projects/";
  
  axios.get("https://zt68vvrmj9.execute-api.us-west-1.amazonaws.com/first-deployment/projects/asdasdasd").then((res) => {
    console.log(res.data);
    x = res.data.project;
    populateProjects(x);
  })
}


function populateProjects(projectData){
    console.log(projectData);
    
    
    
    console.log(projectData);
    let dataObject = projectData;
    let name = dataObject.name;
    let id = dataObject.id;
    console.log(dataObject);
    console.log(dataObject);
    let deliverables = dataObject.deliverables;
    console.log(deliverables);
    const tableBody = document.getElementById("tableBody");
    
      deliverables.forEach(map => {
        const row = document.createElement("tr");
        const nameCell = document.createElement("td");
        const dueDateCell = document.createElement("td");
        const completedCell = document.createElement("td");
        const completionDateCell = document.createElement("td");
        const nameText = document.createTextNode(map.name);
        const dueDateText = document.createTextNode(map.dueDate);
        const completedText = document.createTextNode(map.completed);
        const completionDateText = document.createTextNode(map.completionDate);
        nameCell.appendChild(nameText);
        dueDateCell.appendChild(dueDateText);
        completedCell.appendChild(completedText);
        completionDateCell.appendChild(completionDateText);
        row.appendChild(nameCell);
        row.appendChild(dueDateCell);
        row.appendChild(completedCell);
        row.appendChild(completionDateCell);
        
        const updateButton = document.createElement('button');
        const removeButton = document.createElement('button');
        updateButton.innerText = 'Update';
        updateButton.id = 'update-button-' + map.name;
        removeButton.innerText = 'Remove';
        removeButton.id = 'remove-button-' + map.name;
        row.appendChild(updateButton);
        row.appendChild(removeButton);
        
        tableBody.appendChild(row);
    
    });
    
}