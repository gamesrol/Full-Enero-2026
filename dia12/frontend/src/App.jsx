import { useEffect, useState } from "react"

function App() {
  const [persons, setPersons] = useState("")

  useEffect(() => {
    fetch("http://localhost:3000/persons")
      .then((response) => response.json())
      .then((data) => setPersons(data))
      .catch((error) => console.error("Error al obtener el mensaje:", error))
  }, [])

  function handleSubmit(e) {
    e.preventDefault()
    const formData = new FormData(e.target)
    const name = formData.get("name")
    const surname = formData.get("surname")

    fetch("http://localhost:3000/persons", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, surname }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Respuesta del servidor:", data)
        setPersons(data)
      })
      .catch((error) => console.error("Error al enviar el mensaje:", error))
  }

  return (
    <>
      <h1>Mensaje desde express</h1>
      <ul>
        {persons && persons.map((person) => (
          <li key={person.id}>{person.name} {person.surname}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Nombre" />
        <input type="text" name="surname" placeholder="Apellido" />
        <button type="submit">Enviar</button>
      </form>
    </>
  )
}

export default App
