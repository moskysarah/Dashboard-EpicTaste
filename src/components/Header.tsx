export default function Header({ title = "Tableau de bord" }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow px-6 py-4 flex items-center justify-between md:left-64">
      <h1 className="text-xl font-semibold text-gray-800">{title}</h1>

      <div className="flex items-center gap-4">
        <button className="relative">
          🔔
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1">3</span>
        </button>

        {/* Profil utilisateur */}
        <div className="flex items-center gap-2">
          <img
            src="/linkdin.png"
            alt="Profil"
            className="w-8 h-8 rounded-full"
          />
          <span className="text-sm text-gray-600">Sarah Ngoya</span>
        </div>

        <button className="px-3 py-1 bg-red-500 text-white rounded text-sm hover:bg-red-600">
          Déconnexion
        </button>
      </div>
    </header>
  )
}
