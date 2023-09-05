 // Function to initialize the shuffle effect
function initializeShuffleEffect() {
    const shuffleDivs = document.querySelectorAll('.shuffle-link');

    shuffleDivs.forEach((shuffleDiv) => {
        const originalText = shuffleDiv.textContent;
        const letters = originalText.split('');

        let intervalId;

        shuffleDiv.addEventListener('mouseenter', () => {
            let counter = 0;
            const shuffleCount = 2;
            const shuffleInterval = 70;

            intervalId = setInterval(() => {
                const shuffledText = letters
                .map((char, index) => {
                    if (char.match(/[a-zA-Z0-9]/)) {
                        const randomCharacter = getRandomCharacter();
                        const cyclesToRevert = index - Math.floor(counter / shuffleCount);
                        if (counter >= cyclesToRevert * shuffleCount) {
                            return originalText[index];
                        }
                        return randomCharacter;
                    }
                    return char;
                })
                .join('');

                shuffleDiv.textContent = shuffledText;

                counter++;
                if (counter >= (shuffleCount + 1) * letters.length) {
                    clearInterval(intervalId);
                    shuffleDiv.textContent = originalText;
                }
            }, shuffleInterval);
        });

        shuffleDiv.addEventListener('mouseleave', () => {
            clearInterval(intervalId);
            shuffleDiv.textContent = originalText;
        });

        // Add click event listener for mobile devices
        if (/Mobi/i.test(navigator.userAgent)) {
            shuffleDiv.addEventListener('click', () => {
                initializeShuffleEffect(); // Trigger shuffle effect immediately on mobile click
            });
        }
    });
}

// Initialize the shuffle effect on page load
document.addEventListener("DOMContentLoaded", function() {
    initializeShuffleEffect();
});

function getRandomCharacter() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz12345';
    const randomIndex = Math.floor(Math.random() * characters.length);
    return characters[randomIndex];
}

//main function for the body of the page!

document.getElementById("resumeButton").addEventListener("click", function() {
			
    //var resumeFileName = "Resume.pdf";
    
    // Construct the path to the resume file in the 'assets' folder.
    var resumeFilePath = "/resume" ;
    
    // Open the resume file in a new tab or window.
    window.open(resumeFilePath, "_blank");
});

const hamburger = document.querySelectorAll('.hamburger');
const mobileNav = document.querySelector('.hamburger-container');
const clear = document.querySelector('.clear');
const containerSticky = document.querySelector('.sticky-header');
const closeNav = document.querySelectorAll('.hamburger-li');

hamburger[0].addEventListener('click', () => mobileNav.style.display = 'block');
hamburger[1].addEventListener('click', () => mobileNav.style.display = 'block');
clear.addEventListener('click', () => mobileNav.style.display = 'none');
closeNav[0].addEventListener('click', () => mobileNav.style.display = 'none');
closeNav[1].addEventListener('click', () => mobileNav.style.display = 'none');
closeNav[2].addEventListener('click', () => mobileNav.style.display = 'none');

const scrollFunction = () => {
 	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		containerSticky.style.display = "block";
  	} else {
		containerSticky.style.display = "none";
  	}
};

window.onscroll = () => scrollFunction();

