const Header = ({ title, links }) => {
  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold underline">
            {title}
        </h1>
        <nav className="mt-1">
            <ul className="flex space-x-4">
                {links.map((link, index) => (
                    <li key={index}>
                        <a href={link.url} className="hover:underline">
                            {link.name}
                        </a>
                    </li>
                ))}
            </ul> 
        </nav>
    </header>
  )
}

export default Header