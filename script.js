// =====================================================
// SPECIAL DATE
// =====================================================

const startDate = new Date("2025-08-25T00:00:00");


// =====================================================
// ELEMENTS
// =====================================================

const intro = document.getElementById("intro");
const experience = document.getElementById("experience");

const openBtn = document.getElementById("openBtn");
const replayBtn = document.getElementById("replayBtn");

const counter = document.getElementById("counter");

const tree = document.getElementById("heartTree");

const burst = document.getElementById("burst");

const petalsContainer =
  document.getElementById("petals");


// Hide experience initially

experience.style.display = "none";


// =====================================================
// OPEN SURPRISE
// =====================================================

openBtn.addEventListener("click", function () {

  createBurst();

  openBtn.disabled = true;

  intro.classList.add("opened");

  setTimeout(() => {

    intro.style.display = "none";

    experience.style.display = "flex";

    createTree();

    startPetals();

  }, 900);

});


// =====================================================
// REPLAY
// =====================================================

replayBtn.addEventListener("click", () => {

  window.scrollTo({
    top: 0,
    behavior: "instant"
  });

  location.reload();

});


// =====================================================
// LOVE COUNTER
// =====================================================

function updateCounter() {

  let diff =
    Date.now() -
    startDate.getTime();


  if (diff < 0) {

    counter.textContent =
      "Our story is just about to begin ❤️";

    return;

  }


  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;


  const days =
    Math.floor(diff / day);

  diff %= day;


  const hours =
    Math.floor(diff / hour);

  diff %= hour;


  const minutes =
    Math.floor(diff / minute);

  const seconds =
    Math.floor(
      (diff % minute) / second
    );


  counter.textContent =
    `${days} days · ` +
    `${String(hours).padStart(2, "0")} hours · ` +
    `${String(minutes).padStart(2, "0")} minutes · ` +
    `${String(seconds).padStart(2, "0")} seconds`;

}


updateCounter();

setInterval(updateCounter, 1000);


// =====================================================
// HEART TREE
// =====================================================

function createTree() {

  tree.innerHTML = "";


  const colors = [

    "#c91d38",
    "#d92545",
    "#e53b57",
    "#ed6077",
    "#f27d91",
    "#b91635",
    "#ff9bad"

  ];


  const count = 300;


  for (let i = 0; i < count; i++) {

    const t =
      Math.random() *
      Math.PI *
      2;


    // Heart equation

    const heartX =
      16 *
      Math.pow(
        Math.sin(t),
        3
      );


    const heartY =
      13 * Math.cos(t)
      - 5 * Math.cos(2 * t)
      - 2 * Math.cos(3 * t)
      - Math.cos(4 * t);


    // Fill inside heart

    const scale =
      Math.sqrt(Math.random());


    const x =
      heartX * scale;


    const y =
      heartY * scale;


    const leaf =
      document.createElement("span");


    leaf.className =
      "heart-leaf";


    leaf.textContent =
      Math.random() > .15
        ? "♥"
        : "❤";


    leaf.style.setProperty(
      "--c",
      colors[
        Math.floor(
          Math.random() *
          colors.length
        )
      ]
    );


    leaf.style.setProperty(
      "--s",
      `${7 + Math.random() * 13}px`
    );


    leaf.style.setProperty(
      "--r",
      `${-45 + Math.random() * 90}deg`
    );


    leaf.style.setProperty(
      "--d",
      `${.4 + i * .009 + Math.random() * .5}s`
    );


    leaf.style.left =
      `${50 + x * 1.15}%`;


    leaf.style.top =
      `${47 - y * 1.12}%`;


    tree.appendChild(leaf);

  }

}


// =====================================================
// FALLING HEARTS
// =====================================================

const petalColors = [

  "#c91d38",
  "#e42e4b",
  "#ef5b71",
  "#ff879c",
  "#b51635"

];


function makePetal() {

  const p =
    document.createElement("span");


  p.className =
    "petal";


  p.textContent =
    Math.random() > .2
      ? "♥"
      : "❤";


  p.style.left =
    `${Math.random() * 100}vw`;


  p.style.setProperty(
    "--c",
    petalColors[
      Math.floor(
        Math.random() *
        petalColors.length
      )
    ]
  );


  p.style.setProperty(
    "--s",
    `${8 + Math.random() * 12}px`
  );


  p.style.setProperty(
    "--x",
    `${(Math.random() - .5) * 240}px`
  );


  p.style.setProperty(
    "--t",
    `${6 + Math.random() * 6}s`
  );


  petalsContainer.appendChild(p);


  setTimeout(() => {

    p.remove();

  }, 13000);

}


function startPetals() {

  // Initial hearts

  for (let i = 0; i < 12; i++) {

    setTimeout(
      makePetal,
      i * 250
    );

  }


  // Continuous hearts

  setInterval(
    makePetal,
    450
  );

}


// =====================================================
// HEART BURST
// =====================================================

function createBurst() {

  const symbols = [
    "♥",
    "❤",
    "♡"
  ];


  for (let i = 0; i < 35; i++) {

    const heart =
      document.createElement("span");


    heart.textContent =
      symbols[
        Math.floor(
          Math.random() *
          symbols.length
        )
      ];


    heart.style.position =
      "fixed";


    heart.style.left =
      "50%";


    heart.style.top =
      "50%";


    heart.style.zIndex =
      "200";


    heart.style.pointerEvents =
      "none";


    heart.style.color =
      petalColors[
        Math.floor(
          Math.random() *
          petalColors.length
        )
      ];


    heart.style.fontSize =
      `${10 + Math.random() * 18}px`;


    heart.style.transition =
      "1s cubic-bezier(.2,.8,.2,1)";


    heart.style.transform =
      "translate(-50%, -50%)";


    burst.appendChild(heart);


    const angle =
      Math.random() *
      Math.PI *
      2;


    const distance =
      100 +
      Math.random() * 350;


    const x =
      Math.cos(angle) *
      distance;


    const y =
      Math.sin(angle) *
      distance;


    requestAnimationFrame(() => {

      heart.style.opacity = "0";

      heart.style.transform =
        `translate(
          calc(-50% + ${x}px),
          calc(-50% + ${y}px)
        )
        rotate(${Math.random() * 360}deg)
        scale(.4)`;

    });


    setTimeout(() => {

      heart.remove();

    }, 1100);

  }

}