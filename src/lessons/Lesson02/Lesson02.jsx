import "./styles.css";
import LessonCard from "../../components/LessonCard/LessonCard";
import AnimalsCard from "../../components/AnimalsCard/AnimalCard";

function Lesson02() {
  return (
    <div className="lesson02-wrapper">
    <LessonCard/>
    <AnimalsCard/>
  </div>
  );
}

export default Lesson02;