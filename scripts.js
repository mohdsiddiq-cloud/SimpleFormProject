let datalist = [];

function addData() {
    const fullName = document.getElementById("fullname").value;
    const lastName = document.getElementById("lastname").value;
    const gender = document.getElementById("gender").value;
    const age = document.getElementById("age").value;
    const specialization = document.getElementById("specialization").value;
    const experience = document.getElementById("experience").value;
    const achievements = document.getElementById("achievements").value;

    datalist.push({
        fullName,
        lastName,
        gender,
        age,
        specialization,
        experience,
        achievements
    });
    render();
}
function render() {
    const fSpecialization = document.getElementById("fSpecialization").value;
    const fExperience = parseInt(document.getElementById("fExperience").value);

    const fProfessionals = datalist.filter(it => {
        if (fSpecialization && it.specialization !== fSpecialization) {
            return false;
        }
        if (fExperience && parseInt(it.experience) < fExperience) {
            return false;
        }
        return true;
    });

    const tableStructure = document.querySelector("#table tbody");
    tableStructure.innerHTML = "";

    fProfessionals.forEach(data => {
        const rowData = document.createElement("tr");
        rowData.innerHTML = `
            <td>${data.fullName}</td>
            <td>${data.lastName}</td>
            <td>${data.gender}</td>
            <td>${data.age}</td>
            <td>${data.specialization}</td>
            <td>${data.experience}</td>
            <td>${data.achievements}</td>
        `;
        tableStructure.appendChild(rowData);
    });
}

document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();
    addData();
    document.getElementById("registrationForm").reset();
});
