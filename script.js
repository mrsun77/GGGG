// script.js
let storyIndex = 0;

const stories = [
  {
    text: "Time flies like an arrow! I can't believe our journey has started one year ago already. DATS CRAZY!!",
    image: "images/1.png",
    choices: [{ text: "Continue", nextIndex: 1 }],
  },
  {
    text: "Our first 21st celebration!!! you looked gorgeous that day (tho you always do)",
    image: "images/2.png",
    choices: [
      {
        text: "It was a magical time!! (lots of catss and tasty food!!)",
        nextIndex: 2,
      },
    ],
  },
  {
    text: "From that moment (even before that) my world shines brigther and my hearts started to feel warmer",
    image: "images/3.jpeg",
    choices: [
      { text: "With you in my life everything is better", nextIndex: 3 },
    ],
  },
  {
    text: "We built memories together, we had some adventures and I loved every single moment with you.",
    image: "images/4.jpeg",
    choices: [
      {
        text: "Those memories are my treasure (Hoping we can make even more)",
        nextIndex: 4,
      },
    ],
  },
  {
    text: "The experiences we had, happy and sad, have taught me so many things. To be honest sometimes I feel scared... I'm scared that I cannot give you the happiness you deserve and that I'm not good enough for you. But I want to let you know that I love you more than you believe, even if sometimes I struggle to show it. So, I hope you allow me to continue growing and learning with you. I Love you forever ",
    image: "images/5.png",
    choices: [
      { text: "Our journey continues....", nextIndex: null },
      { text: "Show hearts", nextIndex: 4 },
    ],
  },
];

const storyTextElement = document.getElementById("story-text");
const storyImageElement = document.getElementById("story-image");
const choice1Element = document.getElementById("choice1");
const heartContainer = document.getElementById("heart-container");

// Function to start the story or move to the next part
function startStory(index) {
  const currentStory = stories[index];

  // Check if the story exists
  if (!currentStory) {
    console.error("Invalid story index:", index);
    return;
  }

  // Update the text and image
  storyTextElement.innerText = currentStory.text;
  storyImageElement.src = currentStory.image;

  // Fade-in effect for image
  storyImageElement.style.opacity = "0";
  setTimeout(() => {
    storyImageElement.style.opacity = "1";
  }, 100);

  // Handle the choices
  if (currentStory.choices[0].nextIndex === null) {
    // Final screen with no more choices
    choice1Element.innerText = currentStory.choices[0].text;
    choice1Element.onclick = () => showEndingMessage();
  } else {
    choice1Element.innerText = currentStory.choices[0].text;
    choice1Element.onclick = () =>
      makeChoice(currentStory.choices[0].nextIndex);
  }
}

// Function to handle the next choice and continue the story
// function makeChoice(nextIndex) {
//   if (nextIndex === null) {
//     showEndingMessage();
//   } else {
//     startStory(nextIndex);
//   }
// }

function makeChoice(nextIndex) {
  if (nextIndex === null) {
    showEndingMessage();
  } else {
    // If choice3 is clicked, show hearts
    if (nextIndex === 4) {
      // Assuming 4 is the index for the last choice
      showHearts();
    }
    startStory(nextIndex);
  }
}

// Function to create hearts
function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  document.getElementById("heart-container").appendChild(heart);

  // Randomize heart position
  const leftPosition = Math.random() * 100; // Position between 0% to 100%
  heart.style.left = `${leftPosition}%`;

  // Trigger animation
  requestAnimationFrame(() => {
    heart.style.opacity = 1; // Make heart visible
  });

  // Remove heart after animation
  setTimeout(() => {
    heart.remove();
  }, 2000); // Adjust timing based on animation duration
}

// Function to show hearts
function showHearts() {
  const heartInterval = setInterval(() => {
    createHeart();
  }, 300); // Adjust frequency of heart creation

  // Stop creating hearts after a certain time (e.g., 5 seconds)
  setTimeout(() => {
    clearInterval(heartInterval);
  }, 5000);
}

// Final ending message
function showEndingMessage() {
  storyTextElement.innerText =
    "Happy Anniversary my love. I'm happy to be able to celebrate this special day with you and only you";
  //   storyImageElement.style.opacity = "0"; // Hide the image
  choice1Element.style.display = "none"; // Hide the button
}

// Start the story when the page loads
startStory(storyIndex);
