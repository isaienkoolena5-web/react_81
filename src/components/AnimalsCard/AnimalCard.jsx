// В папке components создать компонент AnimalCard. В карточке должны отображаться:
//  имя животного, вид животного, картинка животного. 
//  Карточку нужно отобразить на экране

// import "./styles.css";

// function AnimalCard() {
//     return (
//         <div className = "animal-card">
//             <h3>{AnimalInfo.name_animals}</h3>
//             <p>{AnimalInfo.species_animal}</p> 
//             <img src={AnimalInfo.img_src} />
//         </div>
//     )

// }

// export default AnimalCard;

import "./styles.css";

function AnimalsCard() {
  return (
    <div className="animal-card-wrapper">
      <h3>Alex</h3>
      <div>Lion</div>
      <img src="https://img.freepik.com/free-vector/cute-lion-cartoon-character_1308-133566.jpg?semt=ais_hybrid&w=740&q=80"/>
    </div>
  );
}
export default AnimalsCard;