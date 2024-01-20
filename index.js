const characterData = () => {
    let characters = document.getElementById('data')
  
    characters.innerHTML = '';
  
    fetch('http://localhost:3000/characters')
    .then(response => response.json())
  
    .then(data => {
        console.log(data);
        // the code is for creating a li for creatures
        data.forEach(candidate =>{
           let  characterList = document.createElement('li')
            characterList.textContent = candidate.name;
  
            // the code is for displaying the animal's name
            characterList.addEventListener('click', () => {
                console.log(`${candidate.name}: chosen`)
  
                //the code enables displaying the candidate name, image and vote-count
                const characterImage = document.getElementById('image')
                const characterName = document.getElementById('name')
                const characterVotes = document.getElementById('vote-count')
  
                characterImage.src = candidate.image;
                characterName.innerText = candidate.name;
                characterVotes.innerText = candidate.votes;
  
                let currentVote = parseInt(characterVotes.textContent, 10)
  
                let votesForm = document.getElementById('votes-form')
                const votes = document.getElementById('votes')
  
                // the code enables submitting event for the votes
                votesForm.addEventListener('submit', (event) =>{
                    event.preventDefault()// stops reset to default
                    let newVote = parseInt(votes.value, 10)
                    currentVote = currentVote + newVote;
                    characterVotes.textContent = currentVote;
                })
            })
            characters.appendChild(characterList)
  
        })
  
    })
  }
  document.addEventListener('DOMContentLoaded', characterData)