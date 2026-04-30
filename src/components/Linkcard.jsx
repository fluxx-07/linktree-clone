function LinkCard(properties) {

  return (
    <a 
      href={properties.url}
      target="_blank"
      rel="noopener noreferrer"
      // noopener cuts connection between both tabs and noreferer hides the info that user has come from tab1... 
      className="w-full bg-white text-purple-700 rounded-4xl py-6 px-8 text-2xl flex items-center justify-center gap-3
        text-center font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200"
      >
      
      <img src={properties.icon} alt="icon" className="w-10 h-10"/>
      
      <span className="tracking-wide">{properties.title}</span>
        
    </a>
  )
}

export default LinkCard