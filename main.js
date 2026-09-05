const sortie = document.querySelector('#sortie')
const startBtn = document.querySelector('#start')

const steps = [
  { type: 'echauffement', time: 5 },
  { type: 'trottes', time: 0.5 },
  { type: 'marches', time: 1 },
  { type: 'trottes', time: 1 },
  { type: 'marches', time: 1 },
  { type: 'trottes', time: 1.5 },
  { type: 'marches', time: 1.5 },
  { type: 'trottes', time: 2 },
  { type: 'marches', time: 2 },
  { type: 'trottes', time: 1.5 },
  { type: 'marches', time: 2 },
  { type: 'trottes', time: 1 },
  { type: 'etirements', time: 3 }
]

let stepActive = 0

const showStep = () => {
  // 1. Vérification de sécurité : si on a dépassé toutes les étapes, on s'arrête
  if (stepActive >= steps.length) {
    sortie.innerText = 'Séance terminée !'
    return
  }

  // 2. Affichage de l'étape courante
  sortie.innerText = steps[stepActive].type

  // 3. Calcul de la durée en millisecondes (* 60 * 1000)
  const durationMs = steps[stepActive].time * 60 * 10

  // 4. Programmation de la suite
  setTimeout(() => {
    stepActive++
    showStep()
  }, durationMs)
}

startBtn.addEventListener('click', (e) => {
  e.preventDefault()
  showStep()
  startBtn.classList.add('hidden')
})