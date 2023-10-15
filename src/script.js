function openNav() {
    let width = screen.width;
    if (width < 800) {
        document.getElementById("mySidenav").style.width = "50%";
    }
    else {
        document.getElementById("mySidenav").style.width = "20%";
    }
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

document.addEventListener("scroll", function () {
    // Check if the navigation bar is open
    if (document.getElementById("mySidenav").style.width != "0") {
        // If it is, close it
        closeNav();
    }
});

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        console.log('In loop')
        if (entry.isIntersecting) {
            entry.target.classList.add('card-animation');
        }
    });
});

/* ---- particles.js config ---- */
document.addEventListener('DOMContentLoaded', function () {
    allCards = document.querySelectorAll('.card')
    console.log(allCards);
    console.log((allCards.length));
    allCards.forEach(card => {
        observer.observe(card);
    });

    document.getElementById("cards").onmousemove = e => {
        for (const card of document.getElementsByClassName("card")) {
            const rect = card.getBoundingClientRect(),
                x = e.clientX - rect.left,
                y = e.clientY - rect.top;

            card.style.setProperty("--mouse-x", `${x}px`);
            card.style.setProperty("--mouse-y", `${y}px`);
        };
    }

    particlesJS("particles-js", {

        "particles": {
            "number": {
                "value": 70,
                "density": {
                    "enable": true,
                    "value_area": 800
                }


            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 2,
                    "color": "#fff"
                },
                "polygon": {
                    "nb_sides": 7
                },
                "image": {
                    "src": "img/github.svg",
                    "width": 100,
                    "height": 100
                }
            },
            "opacity": {
                "value": 1,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 3,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 20,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 250,
                "color": "fff",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 1,
                "direction": "none",
                "random": true,
                "straight": false,
                "out_mode": "out",
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }

            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "grab"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"

                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 140,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 300,
                    "size": 70,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 500,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    });
}, false);