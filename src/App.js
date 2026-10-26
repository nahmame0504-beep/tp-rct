import { useState } from 'react';
import { UtilisateurContext } from './UtilisateurContext';
import FormulaireControle from './FormulaireControle';
import FormulaireNonControle from './FormulaireNonControle';
import FormulaireInscription from './FormulaireInscription';
import TemperatureConvertor from './TemperatureConvertor';
import Profil from './Profil';

function App() {
  const [utilisateur, setUtilisateur] = useState({
    nom: 'Alice',
    connecte: true
  });

  return (
    <UtilisateurContext.Provider value={{ utilisateur, setUtilisateur }}>
      <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
        <h1>TP React : Gestion de l'état et composants</h1>

        <h2>1. Formulaire Contrôlé</h2>
        <FormulaireControle />

        <h2>2. Formulaire Non-Contrôlé</h2>
        <FormulaireNonControle />

        <h2>3. Formulaire d'Inscription (Exercice 1)</h2>
        <FormulaireInscription />

        <h2>4. Convertisseur Celsius / Fahrenheit (Lifting State Up - Exercice 2)</h2>
        <TemperatureConvertor />

        <h2>5. Profil Utilisateur (Context API - Exercice 3)</h2>
        <Profil />
      </div>
    </UtilisateurContext.Provider>
  );
}

export default App;