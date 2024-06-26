const students = [
    {nom: "Mbacke",prenom: "Fatima", note: 12, age :19},
    {nom: "Mbacke",prenom: "Moustapha", note: 20, age :22},
    {nom: "Mbacke",prenom: "Cheikhouna", note: 18, age :16},
    {nom: "Mbacke",prenom: "Elhadji", note: 16, age :23},
    {nom: "Mbacke",prenom: "Mariama", note: 14, age :25},
    {nom: "Mbacke",prenom: "Mountakha", note: 6, age :24},
    {nom: "Mbacke",prenom: "Khadija", note: 17, age :18},
    {nom: "Mbacke",prenom: "Zeynab", note: 8, age :17},
    {nom: "Mbacke",prenom: "Maimouna", note: 15, age :12},
    {nom: "Mbacke",prenom: "Saliou", note: 19, age :15},
];
const NbreEtudiantsPage = 5;
let PageCurrent = 1;

function Moyenne(){
    let Total= 0;
    for ( const student of students) {
        Total += student.note;
    }
    return Total / students.length;
}

// // utliser la boucle for pour afficher
// for (let i = 0; i < EtudiantAffiche.length; i++) {
//     const student = EtudiantAffiche[i];
//     const tr = document.createElement('tr');
//     tr.innerHTML = `<td>${student.nom}</td><td>${student.prenom}</td><td>${student.note}</td><td>${student.age}</td> `;
//     tbody.appendChild(tr);
// }




// fontions pour afficher les etudiants
function AfficheEtudiant(EtudiantAffiche){
    const tbody = document.getElementById('Tbody');
    tbody.innerHTML= '';

// une autre utilisation de map
EtudiantAffiche.map(student => {
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${student.nom}</td><td>${student.prenom}</td><td>${student.note}</td><td>${student.age}</td>`
    tbody.appendChild(tr);
});
}

// paginations
function pagination (EtudiantPagination){
    const pagination =document.getElementById('pagination');
    pagination.innerHTML='';

    const pageCount = EtudiantPagination.length / NbreEtudiantsPage;

    //parcourir le nombre de page (=2) et mettre les liens de switch entre les paginations
    for (let i = 1; i <= pageCount; i++) {
        const pageItem = document.createElement('a'); // creer le lien
        pageItem.href= "a"; // lui mettre le href a #
        pageItem.className = "page-link"; // lui ajouter un classe.
        pageItem.innerText = i; // mnt changer le contenu pour le mettre à i c-a-d qu'il va correspondre au nombre d'itération
        pageItem.onclick = function(event){ //afficher la page correspondant au click du lien
            event.preventDefault();
            PageCurrent = i;
            filtre()
        };  
        const pageLi = document.createElement('li');
        pageLi.className = "page-item";
        pageLi.appendChild(pageItem);
        pagination.appendChild(pageLi)
    }
}
 function filtre (){
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const EtudiantFiltres = students.filter(student =>
        student.nom.toLowerCase().includes(searchInput) || student.prenom.toLowerCase().includes(searchInput)
    );

    const startIndex = (PageCurrent - 1) * NbreEtudiantsPage;
    const EtudiantAffiche = EtudiantFiltres.slice(startIndex, startIndex + NbreEtudiantsPage);

    AfficheEtudiant(EtudiantAffiche);
    pagination(EtudiantFiltres);
    document.getElementById('MoyGen').innerText = Moyenne();
 }

 document.getElementById('searchInput').addEventListener('input', () =>{
    PageCurrent= 1
    filtre();
 });

 window.onload = filtre;

//  afficher le modal 
let buttonAjout = document.getElementById('bouttonAjout')
let modal = document.getElementById('modal')
console.log(buttonAjout);

// evenment pour afficher le modal a partir du button ajouter
buttonAjout.addEventListener('click', () =>{
    modal.style.display="block";

    // fonction autre evenments pour fermer le modal à partir du button former
    document.getElementById('closeModal').addEventListener('click', () => {
        modal.style.display="none"
    });
});

// fonctions somme des notes 
function SommeNote () {
    let totalNote = 0
    for (const chaqueNote of students){
        totalNote += chaqueNote.note
    }
    return totalNote
}
console.log(SommeNote());

let resultCard1 = document.getElementById('card1')
resultCard1.innerText = SommeNote();


// fonctions somme des ages
function SommeAge () {
    let totalAge = 0
    for(const chaqueAge of students){
        totalAge += chaqueAge.age
    }
    return totalAge

}console.log(SommeAge());
let resultCard2 = document.getElementById('card2')
resultCard2.innerText = "La somme des ages est égal à " +SommeAge()

// fonctions nombre de notes
function compterNotes () {
    return students.length;
}
const NbreNote = compterNotes(students)
let resultCard3 = document.getElementById('card3')
resultCard3.innerText = "le nombre de note est égal à " +compterNotes(students);

// fonctions nombre d'ages
function compterAge (){
    return students.length;
}
const NbreAge= compterAge(students)
    let resultCard4 = document.getElementById('card4')
    resultCard4.innerText="Le nombre de ages est égale à" + compterAge(students)