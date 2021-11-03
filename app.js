const name1= ["Aarav", "Abhay", "Abhilash", "Aditya","Aarbdh", "Anmol", "Andy", "Anish", "Aakash", "Ashutosh", "Aachman", "Devansh", "Devesh", "Dev", "Ishan", "Anuj", "Jatin", "Jacob", "Ritik", "Manish", "Ramesha"]
const name2 = ["Sharma", "Gupta", "Goyal", "Khadke","Chauhan", "Dixit", "Kumar", "Singh", "Sinha", "Thakur", "Uppadhyay", "Rathi"]


const Random = (max) => Math.floor(Math.random()*max);
const getName1 = () => name1[Random(name1.length)];
const getName2 = () => name2[Random(name2.length)];

const displayName = () =>{
document.getElementById('name').innerText = getName1() + " " +getName2();
}

document.getElementById('button').addEventListener('click',displayName);{
displayName();
}