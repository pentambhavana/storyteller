const story = {
    start: {
        text: "You find yourself in a mysterious forest. The path ahead forks into two. Do you go left or right?",
        choices: [
            { text: "Go left", next: "leftPath" },
            { text: "Go right", next: "rightPath" }
        ]
    },
    leftPath: {
        text: "You encounter a river. There's a rickety bridge. Do you cross it or head back?",
        choices: [
            { text: "Cross the bridge", next: "bridge" },
            { text: "Head back", next: "start" }
        ]
    },
    rightPath: {
        text: "You stumble upon a cave. It's dark inside. Do you enter or keep walking?",
        choices: [
            { text: "Enter the cave", next: "cave" },
            { text: "Keep walking", next: "walk" }
        ]
    },
    bridge: {
        text: "The bridge collapses halfway! You fall into the river. Game over.",
        choices: [
            { text: "Restart", next: "start" }
        ]
    },
    cave: {
        text: "Inside the cave, you find a treasure chest! You win!",
        choices: [
            { text: "Restart", next: "start" }
        ]
    },
    walk: {
        text: "You keep walking and find nothing of interest. Game over.",
        choices: [
            { text: "Restart", next: "start" }
        ]
    }
};

const storyTextElement = document.getElementById("story-text");
const choicesElement = document.getElementById("choices");

function displayStory(part) {
    const currentPart = story[part];
    storyTextElement.innerText = currentPart.text;

    // Clear previous choices
    choicesElement.innerHTML = "";

    // Add new choices
    currentPart.choices.forEach(choice => {
        const button = document.createElement("button");
        button.innerText = choice.text;
        button.className = "choice-button";
        button.onclick = () => displayStory(choice.next);
        choicesElement.appendChild(button);
    });
}

// Start the story
displayStory("start");

function displayStory(part) {
    const currentPart = story[part];
    
    // Fade out current content
    storyTextElement.classList.remove("show");
    
    setTimeout(() => {
        storyTextElement.innerText = currentPart.text;
        choicesElement.innerHTML = "";

        currentPart.choices.forEach(choice => {
            const button = document.createElement("button");
            button.innerText = choice.text;
            button.className = "choice-button";
            button.onclick = () => displayStory(choice.next);
            choicesElement.appendChild(button);
        });
        
        // Fade in new content
        storyTextElement.classList.add("show");
    }, 500);
}

// Start the story with fade-in
setTimeout(() => {
    displayStory("start");
}, 500);

const backgroundMusic = document.getElementById('background-music');
const buttonSound = document.getElementById('button-sound');

button.onclick = () => {
    buttonSound.play();
    displayStory(choice.next);
};
