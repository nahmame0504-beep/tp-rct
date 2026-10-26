# TP 5 : Gestion de l'état et structuration des composants React

Ce projet a été réalisé dans le cadre du TP 5 pour apprendre la gestion de l'état (state), la communication entre composants et l'utilisation de la Context API dans React.

---

##  Objectifs du TP

- Manipuler des **formulaires contrôlés** (`useState`) et **non-contrôlés** (`useRef`).
- Transmettre des données du composant enfant vers le composant parent (**Lifting State Up**).
- Gérer un état global partagé sans prop-drilling grâce à **React Context API** (`createContext`, `useContext`).

---

##  Structure du projet

```text
tp-react-debutant/
├── src/
│   ├── App.js                      # Composant principal englobant le Provider
│   ├── FormulaireControle.js       # Formulaire contrôlé (useState)
│   ├── FormulaireNonControle.js    # Formulaire non-contrôlé (useRef)
│   ├── FormulaireInscription.js    # Formulaire d'inscription avec state complexe (Exercice 1)
│   ├── TemperatureConvertor.js     # Composant parent du convertisseur (Exercice 2)
│   ├── TemperatureInput.js         # Composant enfant réutilisable pour la température
│   ├── UtilisateurContext.js       # Création du contexte utilisateur (Context API)
│   ├── Profil.js                   # Composant consommant le contexte (Exercice 3)
│   └── index.js                    # Point d'entrée React
├── package.json
└── README.md
```

<img width="1176" height="841" alt="image" src="https://github.com/user-attachments/assets/ba8ffff2-271a-4426-bdaa-8824b748de30" />
<img width="1273" hei<img width="1436" height="385" alt="image" src="https://github.com/user-attachments/assets/144cc0a2-006e-426f-a5e7-ad5c3bd42c50" />
<img width="1436" height="385" alt="image" src="https://github.com/user-attachments/assets/f8b43cc4-d8d2-47ab-a981-1a57c29b1682" />
<img width="799" height="201" alt="image" src="https://github.com/user-attachments/assets/f4e947b9-4285-46ba-a1c4-f669b15f219e" />
<img width="1426" height="509" alt="image" src="https://github.com/user-attachments/assets/1ea06800-b695-4d2b-a275-e2ed6430dde6" />
<img width="1083" height="238" alt="image" src="https://github.com/user-attachments/assets/8d2ddf53-2ee3-4415-a19b-de8d3324d373" />
<img width="762" height="203" alt="image" src="https://github.com/user-attachments/assets/5f3386b8-65fd-4748-b8af-a9f61a183faf" />
