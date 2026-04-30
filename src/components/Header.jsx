import piyushimage from "../assets/piyush-img.jpeg"

function Header() {
  return (
    <div className="flex flex-col items-center gap-3 pt-7 pb-6">
      
      {/* Profile Pic */}
      <img
        src={piyushimage}
        alt="Profile"
        className="w-50 h-50 rounded-full border-4 border-white shadow-lg"
      />

      {/* Name */}
      <h1 className="text-white text-6xl font-bold py-5">
        @ flux_07
      </h1>

      {/* Bio */}
      <p className="text-white/70 text-4xl text-center">
        Competitive Programmer | Building cool stuff 
      </p>

    </div>
  )
}

export default Header