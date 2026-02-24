import Calculator from "../calculator/Calculator"
import Section from "../section/Section"
import { v4 as uuidv4 } from 'uuid';

const fruits = [
  {id: uuidv4(), name: "Apple", color: "Red" },
  {id: uuidv4(), name: "Banana", color: "Yellow" },
  {id: uuidv4(), name: "Grapes", color: "Purple" },
  {id: uuidv4(), name: "Orange", color: "Orange" },
  {id: uuidv4(), name: "Lemon", color: "Yellow" }
]

const Main = () => {
  return (
    <main className="p-4 min-h-[calc(100vh-124px)] overflow-y-auto flex flex-col items-center">
        <Section title="Additional Section" content="This is an additional section to demonstrate the use of the Section component. You can add any content here, such as text, images, or other components." />
        <Calculator />
        {fruits.map((fruit) => (
          <Section key={fruit.id} title={fruit.name} content={`The color of ${fruit.name} is ${fruit.color}.`} />
        ))}
    </main>
  )
}

export default Main