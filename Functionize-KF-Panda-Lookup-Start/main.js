// Kung Fu Panda Character Look Up

// Event Listener
document.getElementById("search").addEventListener("click", searchClicked);

// Event Function
function searchClicked() {
  // Get Input Value (what character to look for?)
  let name = document.getElementById("input-name").value;
  name = name.toLowerCase();

  // Test Input Variable and update the page
  if (name === "po" || name === "dragon warrior") {
    // Update page to Po
    setChar(`Po`, "Buddy, I am the Dragon Warrior.");
  } else if (name === "tigress" || name === "master tigress") {
    // Update page to Tigress
    setChar(`Tigress`, "That was pretty hardcore!");
  } else if (name === "mantis" || name === "master mantis") {
    // Update page to Mantis
    setChar(`Mantis`, "Fear the bug!");
  } else if (name === "monkey" || name === "master monkey") {
    // Update page to Monkey
    setChar(`Monkey`, "We should hang out.");
  } else if (name === "crane" || name === "master crane") {
    // Update page to Crane
    setChar(
      `Crane`,
      "You can chain my body, but you will never chain my warrior spirit!"
    );
  } else if (name === "viper" || name === "master viper") {
    // Update page to Viper
    setChar(`Viper`, "I don't need to bite to fight!");
  } else if (name === "shifu" || name === "master shifu") {
    // Update page to Master Shifu
    setChar(`Shifu`, "There is now a Level Zero.");
  } else if (name === "ping" || name === "mr. ping") {
    // Update page to Mr. Ping
    setChar(`Mr-Ping`, "We are noodle folk, broth runs through our veins!");
  } else {
    // Update page to Question Mark
    setChar(`?????`, "Character Not Found");
  }
}

function setChar(charName, quote) {
  document.getElementById("character-name").innerHTML = charName;
  document.getElementById("main-img").src = `img/${charName}.png`;
  document.getElementById("quote").innerHTML = quote;
  if (
    charName === `Tigress` ||
    charName === `Mantis` ||
    charName === `Viper` ||
    charName === `Monkey` ||
    charName === `Shifu` ||
    charName === `Crane`
  ) {
    document.getElementById("character-name").innerHTML = `Master ` + charName;
  }
  if (charName == `Mr-Ping`) {
    document.getElementById("character-name").innerHTML = `Mr. Ping`;
  }
  if (charName == `?????`) {
    document.getElementById("main-img").src = `img/question-mark.png`;
  }
}
