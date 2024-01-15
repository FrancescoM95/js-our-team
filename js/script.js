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
    teamItem.innerText = `Nome: ${member.name} - Ruolo: ${member.role} - Foto: ${member.photo}`;

    teamList.appendChild(teamItem);
}