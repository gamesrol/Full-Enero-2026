const Section = ({ title, content }) => {
  return (
    <section className="p-4 border border-gray-300 rounded-lg mb-4">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-700">{content}</p>
    </section>
  )
}

export default Section