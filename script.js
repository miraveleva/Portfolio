

const colors = ['whiteOff', 'darkBlue', 'whiteOff', 'darkGreen', 'beige'];

const sections = document.querySelectorAll('section'); // Use querySelectorAll for a cleaner approach

function updateBackgroundColor() {
    let currentSectionIndex = 0; // Default to the first color if no sections are passed
    const scrollFromTop = window.pageYOffset;

    // Find the current section based on scrolling
    for (let i = 0; i < sections.length; i++) {
        // Offset for when the section begins to appear
        const sectionTop = sections[i].offsetTop - window.innerHeight / 2;

        if (scrollFromTop >= sectionTop) {
            currentSectionIndex = i + 1; // Adjusted for the colors array
        }
    }

    // Apply the background color based on the current section
    document.body.className = colors[currentSectionIndex];
}

window.addEventListener('scroll', updateBackgroundColor);


document.addEventListener('DOMContentLoaded', function () {
    var skills = document.querySelectorAll('.skills p');
    var imageDisplay = document.createElement('div');
    imageDisplay.className = 'skill-image-display';
    document.querySelector('.skills').appendChild(imageDisplay); 

    skills.forEach(function(skill) {
        skill.addEventListener('mouseover', function() {
            var imagePath = skill.getAttribute('data-image');
            var posX = skill.getAttribute('data-pos-x');
            var posY = skill.getAttribute('data-pos-y');
            imageDisplay.style.left = posX;
            imageDisplay.style.top = posY;
            imageDisplay.style.backgroundImage = `url(${imagePath})`;
            imageDisplay.style.display = 'block'; // Show the image display
        });
        skill.addEventListener('mouseout', function() {
            imageDisplay.style.display = 'none'; // Hide the image display
        });
    });
});


// Get all the block elements
const blocks = document.querySelectorAll('.block');

// Loop through each block and add event listeners
blocks.forEach(block => {
  // Add mouseover event listener
  block.addEventListener('mouseover', () => {
    block.style.transform = 'scale(2.2)';
    block.style.zIndex = '2';
    block.style.transition = 'transform 0.8s ease';
  });

  // Add mouseout event listener
  block.addEventListener('mouseout', () => {
    block.style.transform = 'scale(1)';
    block.style.zIndex = '1';
    block.style.transition = 'transform 0.3s ease';
  });
});


//text appears letter by letter 
var _str = ['Hello, I am Mirena Veleva, a Media Design student at Fontys University. I am dedicated to honing my design skills, delving into the exciting world of creativity. I strive to cultivate a diverse skill set that seamlessly blends creativity, technical expertise, and attention to detail. Through pushing boundaries and exploring new techniques, I aim to create impactful designs that leave a lasting impression.'],
  _el = document.querySelector('.text_me'),
  _index = 0,
  _inc,
  _showText = false;

function goOut(str) {
  _inc--;
  var astr = _el.textContent.slice(0, _inc);
  var bstr = _el.textContent.slice(_inc);
  _el.innerHTML = astr + '<span style="opacity:0">' + bstr + '</span>';
  if (_inc > 0) {
    setTimeout(arguments.callee, 20, str); 
  } else {
    setTimeout(start, 200);
  }
}

function goIn(str) {
  _inc++;
  _el.innerHTML = str.slice(0, _inc) + '<span style="opacity:0">' + str.slice(_inc) + '</span>';
  if (_inc < str.length) setTimeout(arguments.callee, 40, str); 
}

function start() {
  if (_showText) {
    if (_inc >= _str[_index].length) {
      goOut(_str[_index]);
      return;
    }
    _inc = 0;
    goIn(_str[_index]);
    _index = _index < _str.length - 1 ? _index + 1 : 0;
  }
}

function handleScroll() {
  var elementOffset = _el.offsetTop;
  var scrollPosition = window.pageYOffset + window.innerHeight;
  if (scrollPosition >= elementOffset && !_showText) {
    _showText = true;
    start();
  }
}

window.addEventListener("scroll", handleScroll);



