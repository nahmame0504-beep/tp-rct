import { useState } from 'react';

function FormulaireInscription() {
  const [form, setForm] = useState({ nom: '', email: '', motDePasse: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Inscription validée pour ${form.nom} (${form.email})`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="nom"
        value={form.nom}
        onChange={handleChange}
        placeholder="Nom"
      />
      <input
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <input
        type="password"
        name="motDePasse"
        value={form.motDePasse}
        onChange={handleChange}
        placeholder="Mot de passe"
      />
      <button type="submit">S'inscrire</button>
    </form>
  );
}

export default FormulaireInscription;