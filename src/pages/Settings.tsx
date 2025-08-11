import { useState } from "react";

export default function Settings() {
  // États du profil
  const [firstName, setFirstName] = useState("Sarah");
  const [lastName, setLastName] = useState("Ngoya");
  const [username, setUsername] = useState("SarahNgoya");
  const [email, setEmail] = useState("sarah@example.com");
  const [bio, setBio] = useState("Web developer passionate about clean code.");
  const [profilePic, setProfilePic] = useState(
    "https://i.pinimg.com/1200x/4c/85/31/4c8531dbc05c77cb7a5893297977ac89.jpg"
  );

  // Upload ou URL de la photo de profil
  const handleProfilePicChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setProfilePic(url);
    }
  };

  const handleSave = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Profile saved!");


    // Ici tu peux envoyer les données au backend
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
      <h1 className="text-3xl font-semibold mb-6 text-gray-800">Settings</h1>

      <form onSubmit={handleSave} className="space-y-8">
        {/* Section Profile améliorée */}
        <section>
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Profile</h2>

          {/* Photo profil */}
          <div className="flex items-center space-x-6 mb-4">
            <img
              src={profilePic}
              alt="Profile"
              className="w-20 h-20 rounded-full object-cover border border-gray-300"
            />
            <label className="cursor-pointer text-yellow-600 hover:underline">
              Change Profile Picture
              <input
                type="file"
                accept="image/*"
                onChange={handleProfilePicChange}
                className="hidden"
              />
            </label>
          </div>

          {/* Prénom et Nom */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <label className="block">
              <span className="text-gray-600">First Name</span>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
                required
              />
            </label>
            <label className="block">
              <span className="text-gray-600">Last Name</span>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
                required
              />
            </label>
          </div>

          {/* Username */}
          <label className="block mb-4">
            <span className="text-gray-600">Username</span>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
              required
            />
          </label>

          {/* Email */}
          <label className="block mb-4">
            <span className="text-gray-600">Email</span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
              required
            />
          </label>

          {/* Bio */}
          <label className="block">
            <span className="text-gray-600">Bio</span>
            <textarea
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              rows={3}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
              placeholder="Tell us a little about yourself"
            />
          </label>
        </section>

        <button
          type="submit"
          className="w-full py-3 bg-orange-600 hover:bg-white text-white hover:text-orange-600 font-semibold rounded-lg transition-colors cursor-pointer"
        >
          Save Profile
        </button>
      </form>
    </div>
  );
}
