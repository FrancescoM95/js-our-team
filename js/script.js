console.log('JS OK');

//--------------------------------
//* MILESTONE 0
//--------------------------------

const team = [
    {
        name: "Wayne Barnett",
        role: "Founder & CEO",
        photo: "wayne-barnett-founder-ceo.jpg"
    },
    {
        name: "Angela Caroll",
        role: "Chief Editor",
        photo: "angela-caroll-chief-editor.jpg"
    },
    {
        name: "Walter Gordon",
        role: "Office Manager",
        photo: "walter-gordon-office-manager.jpg"
    },
    {
        name: "Angela Lopez",
        role: "Social Media Manager",
        photo: "angela-lopez-social-media-manager.jpg"
    },
    {
        name: "Scott Estrada",
        role: "Developer",
        photo: "scott-estrada-developer.jpg"
    },
    {
        name: "Barbara Ramos",
        role: "Graphic Designer",
        photo: "barbara-ramos-graphic-designer.jpg"
    }
];

console.log(team);


//--------------------------------
//* MILESTONE 1
//--------------------------------

for (let i = 0; i < team.length; i++) {
    const member = team[i];
    console.log(`Nome: ${member.name}, Ruolo: ${member.role}, Foto: ${member.photo}`);
};


//--------------------------------
//* MILESTONE 2
//--------------------------------

const teamList = document.querySelector("ul");

for (let i = 0; i < team.length; i++) {
    const member = team[i];

    const teamItem = document.createElement("li");
    teamItem.innerHTML = `<u>Name</u>: ${member.name} - <u>Role</u>: ${member.role} - <u>Photo</u>: ${member.photo}`;

    teamList.appendChild(teamItem);
}


//--------------------------------
//* BONUS
//--------------------------------

const row = document.querySelector('.row');

for (let i = 0; i < team.length; i++) {
    const member = team[i];

    const col = document.createElement("div");
    col.classList.add("col");

    const card = document.createElement("div");
    card.classList.add("card");

    const img = document.createElement("img");
    img.src = "img/" + member.photo;
    img.alt = member.name;

    const name = document.createElement("h3");
    name.innerText = `${member.name}`;

    const role = document.createElement("h5");
    role.innerText = `${member.role}`;


    card.appendChild(img);
    card.appendChild(name);
    card.appendChild(role);

    col.appendChild(card);
    row.appendChild(col);
}