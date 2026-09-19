$(document).ready(function() {
    setTimeout(function() {
        $('#splashScreen').fadeOut(400, function() {
            $(this).remove();
        });
    }, 2000);

    $('.main-header-tab[data-target]').on('click', function() {
        $('.main-header-tab').removeClass('active');
        $(this).addClass('active');

        const target = $(this).data('target');
        $('.main-section-content').removeClass('active');
        $('#' + target).addClass('active');
    });
});

function polygon(points, cls) { cls = cls || "shape-facet"; return `<polygon points="${points}" class="${cls}"></polygon>`; }
function line(x1,y1,x2,y2,cls) { cls = cls || "shape-facet"; return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" class="${cls}"></line>`; }

function roundSVG(){return `<circle cx="50" cy="40" r="28" class="shape-outline"></circle><polygon points="50,14 68,21 77,40 68,59 50,66 32,59 23,40 32,21" class="shape-facet"></polygon>${line(23,40,77,40)}${line(32,21,68,59)}${line(68,21,32,59)}${line(50,14,50,66)}<polygon points="50,22 62,27 68,40 62,53 50,58 38,53 32,40 38,27" class="shape-facet-light"></polygon>`;}
function ovalSVG(){return `<ellipse cx="50" cy="40" rx="20" ry="29" class="shape-outline"></ellipse><ellipse cx="50" cy="40" rx="13" ry="22" class="shape-facet"></ellipse>${line(50,11,50,69)}${line(30,40,70,40)}${line(37,19,63,61)}${line(63,19,37,61)}`;}
function pearSVG(){return `<path d="M50 10 C44 20 31 28 29 42 C27 57 37 68 50 70 C63 68 73 57 71 42 C69 28 56 20 50 10Z" class="shape-outline"></path><path d="M50 22 C45 29 37 34 36 44 C35 54 42 61 50 63 C58 61 65 54 64 44 C63 34 55 29 50 22Z" class="shape-facet"></path>${line(50,10,50,70)}${line(29,42,71,42)}${line(38,29,62,58)}${line(62,29,38,58)}`;}
function cushionSVG(){return `<path d="M29 14 Q50 7 71 14 Q80 23 80 40 Q80 57 71 66 Q50 73 29 66 Q20 57 20 40 Q20 23 29 14Z" class="shape-outline"></path><path d="M32 22 Q50 16 68 22 Q74 29 74 40 Q74 51 68 58 Q50 64 32 58 Q26 51 26 40 Q26 29 32 22Z" class="shape-facet"></path>${line(20,40,80,40)}${line(50,8,50,72)}${line(29,14,71,66)}${line(71,14,29,66)}`;}
function cushion2SVG(){return `<path d="M31 13 L69 13 Q79 22 79 40 Q79 58 69 67 L31 67 Q21 58 21 40 Q21 22 31 13Z" class="shape-outline"></path><polygon points="32,22 50,17 68,22 73,40 68,58 50,63 32,58 27,40" class="shape-facet"></polygon>${line(21,40,79,40)}${line(50,13,50,67)}${line(31,13,68,58)}${line(69,13,32,58)}`;}
function emeraldSVG(){return `<polygon points="34,10 66,10 76,20 76,60 66,70 34,70 24,60 24,20" class="shape-outline"></polygon><polygon points="38,19 62,19 68,25 68,55 62,61 38,61 32,55 32,25" class="shape-facet"></polygon><polygon points="43,27 57,27 62,32 62,48 57,53 43,53 38,48 38,32" class="shape-facet-light"></polygon>${line(24,20,76,60)}${line(76,20,24,60)}`;}
function radiantSVG(){return `<polygon points="32,10 68,10 78,20 78,60 68,70 32,70 22,60 22,20" class="shape-outline"></polygon><polygon points="36,20 64,20 69,25 69,55 64,60 36,60 31,55 31,25" class="shape-facet"></polygon>${line(22,20,78,60)}${line(78,20,22,60)}${line(50,10,50,70)}`;}
function princessSVG(){return `<rect x="20" y="10" width="60" height="60" class="shape-outline"></rect><rect x="28" y="18" width="44" height="44" class="shape-facet"></rect><rect x="36" y="26" width="28" height="28" class="shape-facet-light"></rect>${line(20,10,80,70)}${line(80,10,20,70)}`;}
function asscherSVG(){return `<polygon points="33,9 67,9 81,23 81,57 67,71 33,71 19,57 19,23" class="shape-outline"></polygon><polygon points="38,17 62,17 73,28 73,52 62,63 38,63 27,52 27,28" class="shape-facet"></polygon><polygon points="43,25 57,25 65,33 65,47 57,55 43,55 35,47 35,33" class="shape-facet-light"></polygon>${line(19,23,81,57)}${line(81,23,19,57)}`;}
function squareSVG(){return `<rect x="22" y="12" width="56" height="56" class="shape-outline"></rect><rect x="30" y="20" width="40" height="40" class="shape-facet"></rect><rect x="39" y="29" width="22" height="22" class="shape-facet-light"></rect>${line(22,12,78,68)}${line(78,12,22,68)}`;}
function marquiseSVG(){return `<path d="M15 40 Q30 10 50 9 Q70 10 85 40 Q70 70 50 71 Q30 70 15 40Z" class="shape-outline"></path><path d="M26 40 Q37 20 50 19 Q63 20 74 40 Q63 60 50 61 Q37 60 26 40Z" class="shape-facet"></path>${line(15,40,85,40)}${line(50,9,50,71)}${line(26,40,50,9)}${line(74,40,50,71)}`;}
function heartSVG(){return `<path d="M50 69 L24 42 C15 32 19 17 30 14 C39 11 46 16 50 23 C54 16 61 11 70 14 C81 17 85 32 76 42 Z" class="shape-outline"></path><path d="M50 58 L31 39 C25 32 28 22 35 21 C42 20 47 25 50 31 C53 25 58 20 65 21 C72 22 75 32 69 39 Z" class="shape-facet"></path>${line(50,23,50,69)}${line(24,42,69,39)}${line(76,42,31,39)}`;}
function trilliantSVG(){return `<path d="M50 10 L82 62 Q50 72 18 62Z" class="shape-outline"></path><polygon points="50,23 68,57 32,57" class="shape-facet"></polygon>${line(50,10,50,72)}${line(18,62,68,57)}${line(82,62,32,57)}`;}
function euroSVG(){return `<circle cx="50" cy="40" r="28" class="shape-outline"></circle><polygon points="50,15 70,22 77,40 70,58 50,65 30,58 23,40 30,22" class="shape-facet"></polygon><polygon points="50,24 62,28 68,40 62,52 50,56 38,52 32,40 38,28" class="shape-facet-light"></polygon>${line(50,15,50,65)}${line(23,40,77,40)}`;}
function oldMinerSVG(){return `<path d="M32 12 Q50 7 68 12 Q76 22 76 40 Q76 58 68 68 Q50 73 32 68 Q24 58 24 40 Q24 22 32 12Z" class="shape-outline"></path><polygon points="36,22 50,18 64,22 68,40 64,58 50,62 36,58 32,40" class="shape-facet"></polygon>${line(24,40,76,40)}${line(50,8,50,72)}${line(32,12,68,68)}${line(68,12,32,68)}`;}
function brioletteSVG(){return `<path d="M50 9 C40 17 30 29 30 44 C30 59 39 68 50 71 C61 68 70 59 70 44 C70 29 60 17 50 9Z" class="shape-outline"></path><path d="M50 18 L39 44 L50 61 L61 44Z" class="shape-facet"></path>${line(50,9,50,71)}${line(30,44,70,44)}${line(39,44,50,18)}${line(61,44,50,61)}`;}
function roseSVG(){return `<circle cx="50" cy="42" r="27" class="shape-outline"></circle><polygon points="50,15 64,30 77,42 64,55 50,69 36,55 23,42 36,30" class="shape-facet"></polygon><polygon points="50,23 61,34 69,42 61,50 50,61 39,50 31,42 39,34" class="shape-facet-light"></polygon>${line(50,15,50,69)}${line(23,42,77,42)}`;}
function lozengeSVG(){return `<polygon points="50,9 82,40 50,71 18,40" class="shape-outline"></polygon><polygon points="50,20 70,40 50,60 30,40" class="shape-facet"></polygon><polygon points="50,29 61,40 50,51 39,40" class="shape-facet-light"></polygon>${line(50,9,50,71)}${line(18,40,82,40)}`;}
function baguetteSVG(){return `<rect x="16" y="24" width="68" height="32" rx="3" class="shape-outline"></rect><rect x="23" y="30" width="54" height="20" class="shape-facet"></rect><rect x="31" y="35" width="38" height="10" class="shape-facet-light"></rect>${line(16,24,84,56)}${line(84,24,16,56)}`;}
function tapbagSVG(){return `<polygon points="30,15 70,15 78,24 78,56 70,65 30,65 22,56 22,24" class="shape-outline"></polygon><polygon points="35,23 65,23 70,29 70,51 65,57 35,57 30,51 30,29" class="shape-facet"></polygon>${line(22,24,78,56)}${line(78,24,22,56)}`;}
function halfmoonSVG(){return `<path d="M25 20 Q50 8 75 20 L75 60 Q50 72 25 60Z" class="shape-outline"></path><path d="M34 25 Q50 17 66 25 L66 55 Q50 63 34 55Z" class="shape-facet"></path>${line(25,20,75,20)}${line(25,60,75,60)}${line(50,8,50,72)}`;}
function flandersSVG(){return `<polygon points="35,10 65,10 80,25 80,55 65,70 35,70 20,55 20,25" class="shape-outline"></polygon><polygon points="39,20 61,20 70,29 70,51 61,60 39,60 30,51 30,29" class="shape-facet"></polygon>${line(20,25,80,55)}${line(80,25,20,55)}${line(50,10,50,70)}`;}
function trapezoidSVG(){return `<polygon points="30,12 70,12 82,68 18,68" class="shape-outline"></polygon><polygon points="35,22 65,22 72,58 28,58" class="shape-facet"></polygon>${line(30,12,65,22)}${line(70,12,35,22)}${line(18,68,35,22)}${line(82,68,65,22)}`;}
function bulletsSVG(){return `<path d="M22 20 L50 12 L78 20 L66 60 L50 70 L34 60Z" class="shape-outline"></path><polygon points="32,25 50,19 68,25 60,52 50,60 40,52" class="shape-facet"></polygon>${line(22,20,66,60)}${line(78,20,34,60)}${line(50,12,50,70)}`;}
function kiteSVG(){return `<polygon points="50,9 76,34 59,69 41,69 24,34" class="shape-outline"></polygon><polygon points="50,20 65,35 56,58 44,58 35,35" class="shape-facet"></polygon>${line(50,9,50,69)}${line(24,34,76,34)}`;}
function shieldSVG(){return `<path d="M28 13 L72 13 L78 30 L72 54 L50 70 L28 54 L22 30Z" class="shape-outline"></path><path d="M33 21 L67 21 L70 31 L65 48 L50 60 L35 48 L30 31Z" class="shape-facet"></path>${line(50,13,50,70)}${line(22,30,78,30)}`;}
function starSVG(){return `<polygon points="50,8 57,30 80,30 62,44 69,67 50,53 31,67 38,44 20,30 43,30" class="shape-outline"></polygon><polygon points="50,19 54,34 69,34 57,43 61,57 50,48 39,57 43,43 31,34 46,34" class="shape-facet"></polygon>`;}
function pentagonSVG(){return `<polygon points="50,10 78,31 67,68 33,68 22,31" class="shape-outline"></polygon><polygon points="50,22 66,34 60,55 40,55 34,34" class="shape-facet"></polygon>${line(50,10,50,68)}${line(22,31,67,68)}${line(78,31,33,68)}`;}
function hexagonalSVG(){return `<polygon points="32,11 68,11 80,40 68,69 32,69 20,40" class="shape-outline"></polygon><polygon points="38,21 62,21 70,40 62,59 38,59 30,40" class="shape-facet"></polygon><polygon points="44,29 56,29 61,40 56,51 44,51 39,40" class="shape-facet-light"></polygon>${line(20,40,80,40)}${line(32,11,68,69)}${line(68,11,32,69)}`;}
function octagonalSVG(){return `<polygon points="35,10 65,10 80,25 80,55 65,70 35,70 20,55 20,25" class="shape-outline"></polygon><polygon points="39,19 61,19 71,29 71,51 61,61 39,61 29,51 29,29" class="shape-facet"></polygon><polygon points="44,28 56,28 62,34 62,46 56,52 44,52 38,46 38,34" class="shape-facet-light"></polygon>${line(20,25,80,55)}${line(80,25,20,55)}${line(50,10,50,70)}`;}
function portugueseSVG(){return `<circle cx="50" cy="40" r="28" class="shape-outline"></circle><polygon points="50,13 69,22 77,40 69,58 50,67 31,58 23,40 31,22" class="shape-facet"></polygon><polygon points="50,21 62,27 68,40 62,53 50,59 38,53 32,40 38,27" class="shape-facet-light"></polygon><polygon points="50,29 57,33 61,40 57,47 50,51 43,47 39,40 43,33" class="shape-facet"></polygon>`;}
function movalSVG(){return `<path d="M30 13 Q50 7 70 13 Q80 25 76 44 Q72 62 50 70 Q28 62 24 44 Q20 25 30 13Z" class="shape-outline"></path><path d="M36 23 Q50 18 64 23 Q70 31 67 43 Q64 54 50 60 Q36 54 33 43 Q30 31 36 23Z" class="shape-facet"></path>${line(50,8,50,70)}${line(24,44,76,44)}${line(30,13,70,70)}${line(70,13,30,70)}`;}
function otherSVG(){return `<polygon points="50,10 72,20 82,40 72,60 50,70 28,60 18,40 28,20" class="shape-outline"></polygon><polygon points="50,21 64,27 70,40 64,53 50,59 36,53 30,40 36,27" class="shape-facet"></polygon><polygon points="50,30 57,34 60,40 57,46 50,50 43,46 40,40 43,34" class="shape-facet-light"></polygon>${line(50,10,50,70)}${line(18,40,82,40)}`;}

function createShapeSVG(type) {
  let content = "";
  switch(type) {
    case "round": content = roundSVG(); break;
    case "oval": content = ovalSVG(); break;
    case "pear": content = pearSVG(); break;
    case "cushion": content = cushionSVG(); break;
    case "cushion2": content = cushion2SVG(); break;
    case "emerald": content = emeraldSVG(); break;
    case "radiant": content = radiantSVG(); break;
    case "princess": content = princessSVG(); break;
    case "asscher": content = asscherSVG(); break;
    case "square": content = squareSVG(); break;
    case "marquise": content = marquiseSVG(); break;
    case "heart": content = heartSVG(); break;
    case "trilliant": content = trilliantSVG(); break;
    case "euro": content = euroSVG(); break;
    case "oldminer": content = oldMinerSVG(); break;
    case "briolette": content = brioletteSVG(); break;
    case "rose": content = roseSVG(); break;
    case "lozenge": content = lozengeSVG(); break;
    case "baguette": content = baguetteSVG(); break;
    case "tapbag": content = tapbagSVG(); break;
    case "halfmoon": content = halfmoonSVG(); break;
    case "flanders": content = flandersSVG(); break;
    case "trapezoid": content = trapezoidSVG(); break;
    case "bullets": content = bulletsSVG(); break;
    case "kite": content = kiteSVG(); break;
    case "shield": content = shieldSVG(); break;
    case "star": content = starSVG(); break;
    case "pentagon": content = pentagonSVG(); break;
    case "hexagonal": content = hexagonalSVG(); break;
    case "octagonal": content = octagonalSVG(); break;
    case "portuguese": content = portugueseSVG(); break;
    case "moval": content = movalSVG(); break;
    default: content = otherSVG();
  }
  return `<svg class="shape-icon" viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">${content}</svg>`;
}

const diamondShapes = [
  {name:"Round",type:"round"}, {name:"Oval",type:"oval"}, {name:"Pear",type:"pear"},
  {name:"Cushion Modified",type:"cushion"}, {name:"Cushion Brilliant",type:"cushion2"},
  {name:"Emerald",type:"emerald"}, {name:"Radiant",type:"radiant"}, {name:"Princess",type:"princess"},
  {name:"Asscher",type:"asscher"}, {name:"Square",type:"square"}, {name:"Marquise",type:"marquise"},
  {name:"Heart",type:"heart"}, {name:"Trilliant",type:"trilliant"}, {name:"Euro Cut",type:"euro"},
  {name:"Old Miner",type:"oldminer"}, {name:"Briolette",type:"briolette"}, {name:"Rose Cut",type:"rose"},
  {name:"Lozenge",type:"lozenge"}, {name:"Baguette",type:"baguette"}, {name:"Tap Bag",type:"tapbag"},
  {name:"Half Moon",type:"halfmoon"}, {name:"Flanders",type:"flanders"}, {name:"Trapezoid",type:"trapezoid"},
  {name:"Bullets",type:"bullets"}, {name:"Kite",type:"kite"}, {name:"Shield",type:"shield"},
  {name:"Star",type:"star"}, {name:"Pentagon",type:"pentagon"}, {name:"Hexagonal",type:"hexagonal"},
  {name:"Octagonal",type:"octagonal"}, {name:"Portuguese",type:"portuguese"}, {name:"Moval Cut",type:"moval"},
  {name:"Other",type:"other"}
];

const caratRanges = [["0.30","0.39"],["0.40","0.49"],["0.50","0.69"],["0.70","0.89"],["0.90","0.99"],["1.00","1.49"],["1.50","1.99"],["2.00","2.99"],["3.00","3.99"],["4.00","4.99"],["5.00","5.99"],["6.00","7.99"],["8.00","9.99"],["10.00","10+"]];
const pointRanges = [["30","39"],["40","49"],["50","69"],["70","89"],["90","99"],["100","149"],["150","199"],["200","299"],["300","399"],["400","499"],["500","599"],["600","799"],["800","999"],["1000","1499"],["1500","1999"],["2000","2999"],["3000","3999"],["4000","4999"],["5000","5999"],["6000","7999"],["8000","9999"],["10000","10000+"]];
const mmRanges = [["1.50","1.99"],["2.00","2.49"],["2.50","2.99"],["3.00","3.49"],["3.50","3.99"],["4.00","4.49"],["4.50","4.99"],["5.00","5.49"],["5.50","5.99"],["6.00","6.49"],["6.50","6.99"],["7.00","7.49"],["7.50","7.99"],["8.00","8.49"],["8.50","8.99"],["9.00","9.49"],["9.50","9.99"],["10.00","10.49"],["10.50","10.99"],["11.00","11.99"],["12.00","12.99"],["13.00","13.99"],["14.00","14.99"],["15.00","15.99"],["16.00","16.99"],["17.00","17.99"],["18.00","19.99"],["20.00","24.99"]];
const clarityOptions = ["FL","IF","VVS1","VVS2","VS1","VS2","SI1","SI2","I1","I2","I3"];
const standardColors = ["D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const fancyColors = [
  { name:"Yellow", color:"#d6a900" }, { name:"Orange", color:"#e57b19" }, { name:"Pink", color:"#e89bb0" },
  { name:"Blue", color:"#4776bd" }, { name:"Green", color:"#48a85a" }, { name:"Brown", color:"#9b7548" },
  { name:"Red", color:"#c83232" }, { name:"White", color:"#f4f4f4" }, { name:"Violet", color:"#7357c9" },
  { name:"Purple", color:"#8d4bb5" }, { name:"Gray", color:"#707070" }, { name:"Olive", color:"#7d8434" },
  { name:"Black", color:"#222222" }, { name:"Other", color:"gradient" }
];

let uniqueIdCounter = 1;

function initDiamondBlock(block) {
  const shapeGrid = block.querySelector(".shapeGrid");
  diamondShapes.forEach(function(shape) {
    const button = document.createElement("div");
    button.className = "shape-button";
    button.dataset.shape = shape.type;
    button.innerHTML = createShapeSVG(shape.type) + `<div class="shape-name">${shape.name}</div>`;
    button.addEventListener("click", function() {
      const wasSelected = button.classList.contains("selected");
      shapeGrid.querySelectorAll(".shape-button").forEach(function(item) { item.classList.remove("selected"); });
      if (!wasSelected) button.classList.add("selected");
      updateAllSelectDiamondSummary();
    });
    shapeGrid.appendChild(button);
  });

  function createRange(containerClass, ranges, minClass, maxClass) {
    const container = block.querySelector("." + containerClass);
    const minInput = block.querySelector("." + minClass);
    const maxInput = block.querySelector("." + maxClass);
    ranges.forEach(function(range) {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "range-button";
      button.textContent = range[0] + " - " + range[1];
      button.addEventListener("click", function() {
        const wasSelected = button.classList.contains("selected");
        container.querySelectorAll(".range-button").forEach(function(item) { item.classList.remove("selected"); });
        if (wasSelected) { minInput.value = ""; maxInput.value = ""; minInput.style.opacity = "1"; maxInput.style.opacity = "1"; updateGlobalInterlock(block); updateAllSelectDiamondSummary(); return; }
        
        minInput.value = range[0];
        minInput.style.opacity = "1";
        maxInput.value = range[1];
        maxInput.style.opacity = "1";
        updateGlobalInterlock(block);
        updateAllSelectDiamondSummary();
      });
      container.appendChild(button);
    });
  }
  createRange("caratRanges", caratRanges, "caratMin", "caratMax");
  createRange("pointRanges", pointRanges, "pointMin", "pointMax");
  createRange("mmRanges", mmRanges, "mmMin", "mmMax");

  const modeButtons = block.querySelectorAll(".measurement-mode-button");
  const panels = {
    carat: block.querySelector(".caratPanel"),
    mm: block.querySelector(".mmPanel"),
    point: block.querySelector(".pointPanel")
  };

  modeButtons.forEach(function(button) {
    button.addEventListener("click", function() {
      const targetMode = button.dataset.mode;
      
      modeButtons.forEach(function(item) { item.classList.remove("selected"); });
      Object.values(panels).forEach(function(panel) { panel.classList.remove("active"); });
      
      button.classList.add("selected");
      panels[targetMode].classList.add("active");
      
      syncActiveDataToMode(block, targetMode);
      updateGlobalInterlock(block);
      updateAllSelectDiamondSummary();
    });
  });

  const clarityGrid = block.querySelector(".clarityGrid");
  clarityOptions.forEach(function(value) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "clarity-button";
    button.textContent = value;
    button.addEventListener("click", function() {
      const wasSelected = button.classList.contains("selected");
      clarityGrid.querySelectorAll(".clarity-button").forEach(function(item) { item.classList.remove("selected"); });
      if (!wasSelected) button.classList.add("selected");
      updateAllSelectDiamondSummary();
    });
    clarityGrid.appendChild(button);
  });

  const colorTypeButtons = block.querySelectorAll(".color-type-button");
  const colorPanels = { standard: block.querySelector(".standardColorPanel"), fancy: block.querySelector(".fancyColorPanel") };
  colorTypeButtons.forEach(function(button) {
    button.addEventListener("click", function() {
      const type = button.dataset.colorType;
      const wasSelected = button.classList.contains("selected");
      colorTypeButtons.forEach(function(otherButton) {
        if (otherButton !== button) {
          otherButton.classList.remove("selected");
          colorPanels[otherButton.dataset.colorType].classList.remove("active");
        }
      });
      if (wasSelected) { button.classList.remove("selected"); colorPanels[type].classList.remove("active"); updateAllSelectDiamondSummary(); return; }
      button.classList.add("selected");
      colorPanels[type].classList.add("active");
      updateAllSelectDiamondSummary();
    });
  });

  const standardColorGrid = block.querySelector(".standardColorGrid");
  const fancyColorGrid = block.querySelector(".fancyColorGrid");
  standardColors.forEach(function(color) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "standard-color-button";
    button.textContent = color;
    button.addEventListener("click", function() {
      const wasSelected = button.classList.contains("selected");
      fancyColorGrid.querySelectorAll(".fancy-color-button").forEach(function(item) { item.classList.remove("selected"); });
      standardColorGrid.querySelectorAll(".standard-color-button").forEach(function(item) { item.classList.remove("selected"); });
      if (!wasSelected) button.classList.add("selected");
      updateAllSelectDiamondSummary();
    });
    standardColorGrid.appendChild(button);
  });

  fancyColors.forEach(function(item,index) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "fancy-color-button";
    const gradientId = "fancyGradient_" + block.dataset.id + "_" + index;
    const fill = item.color === "gradient" ? `url(#${gradientId})` : item.color;
    button.innerHTML = `<svg class="fancy-gem" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="${gradientId}" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#4b72d6"/><stop offset="50%" stop-color="#9b5ac7"/><stop offset="100%" stop-color="#e04b72"/></linearGradient></defs><path d="M30 5 L49 16 L55 36 L30 55 L5 36 L11 16 Z" fill="${fill}" stroke="#777" stroke-width="1"></path><path d="M30 5 L30 55 M11 16 L49 16 M5 36 L55 36 M30 5 L5 36 M30 5 L55 36" fill="none" stroke="rgba(255,255,255,.65)" stroke-width="1"></path></svg><span class="fancy-color-name">${item.name}</span>`;
    button.addEventListener("click", function() {
      const wasSelected = button.classList.contains("selected");
      standardColorGrid.querySelectorAll(".standard-color-button").forEach(function(item) { item.classList.remove("selected"); });
      fancyColorGrid.querySelectorAll(".fancy-color-button").forEach(function(other) { other.classList.remove("selected"); });
      if (!wasSelected) button.classList.add("selected");
      updateAllSelectDiamondSummary();
    });
    fancyColorGrid.appendChild(button);
  });

  block.querySelectorAll(".measurement-input").forEach(input => {
    input.addEventListener("input", function() {
      this.style.opacity = "1";
      updateGlobalInterlock(block);
      updateAllSelectDiamondSummary();
    });
  });

  updateGlobalInterlock(block);
}

function syncActiveDataToMode(block, targetMode) {
  const modes = ['carat', 'mm', 'point'];
  let activeMin = "", activeMax = "";

  for (let m of modes) {
    let min = block.querySelector("." + m + "Min").value;
    let max = block.querySelector("." + m + "Max").value;
    if (min || max) {
      activeMin = min;
      activeMax = max;
      break;
    }
  }

  modes.forEach(m => {
    let minInput = block.querySelector("." + m + "Min");
    let maxInput = block.querySelector("." + m + "Max");
    if (m === targetMode && (activeMin || activeMax)) {
      minInput.value = activeMin;
      minInput.style.opacity = "0.4";
      maxInput.value = activeMax;
      maxInput.style.opacity = "0.4";
    } else if (!activeMin && !activeMax) {
      minInput.value = "";
      minInput.style.opacity = "1";
      maxInput.value = "";
      maxInput.style.opacity = "1";
    }
  });
}

function updateGlobalInterlock(block) {
  const caratMin = block.querySelector(".caratMin").value;
  const caratMax = block.querySelector(".caratMax").value;
  const mmMin = block.querySelector(".mmMin").value;
  const mmMax = block.querySelector(".mmMax").value;
  const pointMin = block.querySelector(".pointMin").value;
  const pointMax = block.querySelector(".pointMax").value;

  const hasCarat = caratMin || caratMax;
  const hasMm = mmMin || mmMax;
  const hasPoint = pointMin || pointMax;

  const modes = ['carat', 'mm', 'point'];
  modes.forEach(m => {
    let minIn = block.querySelector("." + m + "Min");
    let maxIn = block.querySelector("." + m + "Max");
    
    let activePanel = block.querySelector("." + m + "Panel");
    let isCurrentActive = activePanel.classList.contains("active");

    if (isCurrentActive) {
      minIn.disabled = false;
      maxIn.disabled = false;
      if(!minIn.value) minIn.style.opacity = "1";
      if(!maxIn.value) maxIn.style.opacity = "1";
    } else {
      if (hasCarat || hasMm || hasPoint) {
        let filledMin = hasCarat ? caratMin : (hasMm ? mmMin : pointMin);
        let filledMax = hasCarat ? caratMax : (hasMm ? mmMax : pointMax);
        minIn.value = filledMin;
        maxIn.value = filledMax;
        minIn.style.opacity = "0.4";
        maxIn.style.opacity = "0.4";
      } else {
        minIn.value = "";
        maxIn.value = "";
        minIn.style.opacity = "1";
        maxIn.style.opacity = "1";
      }
      minIn.disabled = true;
      maxIn.disabled = true;
    }
  });
}

function switchDiamondTab(id) {
  document.querySelectorAll(".diamond-tab").forEach(t => t.classList.remove("active"));
  document.querySelectorAll(".diamond-block-content").forEach(c => c.classList.remove("active"));

  const tab = document.querySelector(`.diamond-tab[data-id="${id}"]`);
  const block = document.querySelector(`.diamond-block-content[data-id="${id}"]`);
  if(tab) tab.classList.add("active");
  if(block) block.classList.add("active");
}

function refreshTabNumbers() {
  const tabs = document.querySelectorAll(".diamond-tab");
  tabs.forEach((tab, index) => {
    const num = index + 1;
    tab.dataset.id = num;
    const removeBtnHtml = tabs.length > 1 ? `<span class="tab-remove-x" title="Remove">&times;</span>` : "";
    tab.innerHTML = `Diamond List ${num} ${removeBtnHtml}`;

    const block = document.querySelector(`.diamond-block-content[data-index-ref="${tab.dataset.internalKey || tab.dataset.id}"]`) || document.querySelectorAll(".diamond-block-content")[index];
    if(block) block.dataset.id = num;
  });

  document.querySelectorAll(".tab-remove-x").forEach(x => {
    x.onclick = function(e) {
      e.stopPropagation();
      const tab = x.closest(".diamond-tab");
      const id = tab.dataset.id;
      if(confirm("Are you sure you want to delete Diamond List " + id + "?")) {
        removeDiamondBlock(id);
      }
    };
  });
}

function addNewDiamondBlock(savedPiecesValue) {
  uniqueIdCounter++;
  const tabsBar = document.getElementById("diamondTabsBar");
  const addBtn = document.getElementById("addDiamondTabBtn");

  const tab = document.createElement("button");
  tab.type = "button";
  tab.className = "diamond-tab";
  tab.dataset.internalKey = uniqueIdCounter;
  
  tab.addEventListener("click", function(e) {
    if(!e.target.classList.contains("tab-remove-x")) {
      switchDiamondTab(tab.dataset.id);
    }
  });
  tabsBar.insertBefore(tab, addBtn);

  const wrapper = document.getElementById("diamondBlocksWrapper");
  const firstBlock = wrapper.querySelector(".diamond-block-content");
  const newBlock = firstBlock.cloneNode(true);
  newBlock.dataset.indexRef = uniqueIdCounter;
  newBlock.classList.remove("active");

  newBlock.querySelectorAll("input, select").forEach(el => {
    if(el.type === "checkbox") el.checked = false;
    else if(el.classList.contains("pieces-summary-input")) el.value = savedPiecesValue !== undefined ? savedPiecesValue : "1";
    else el.value = "";
  });
  newBlock.querySelectorAll(".selected").forEach(el => el.classList.remove("selected"));
  
  const stdColorBtn = newBlock.querySelector('[data-color-type="standard"]');
  if(stdColorBtn) stdColorBtn.classList.add("selected");
  const stdPanel = newBlock.querySelector(".standardColorPanel");
  if(stdPanel) stdPanel.classList.add("active");

  const caratModeBtn = newBlock.querySelector('[data-mode="carat"]');
  if(caratModeBtn) caratModeBtn.classList.add("selected");
  const caratPanel = newBlock.querySelector(".caratPanel");
  if(caratPanel) caratPanel.classList.add("active");

  newBlock.querySelectorAll(".shapeGrid, .caratRanges, .pointRanges, .mmRanges, .clarityGrid, .standardColorGrid, .fancyColorGrid").forEach(el => el.innerHTML = "");

  wrapper.appendChild(newBlock);
  initDiamondBlock(newBlock);
  
  refreshTabNumbers();
  const newlyCreatedTab = document.querySelector(`.diamond-tab[data-internal-key="${uniqueIdCounter}"]`);
  if(newlyCreatedTab) switchDiamondTab(newlyCreatedTab.dataset.id);

  updateAllSelectDiamondSummary();
}

function removeDiamondBlock(id) {
  const tabs = document.querySelectorAll(".diamond-tab");
  if(tabs.length <= 1) {
    alert("At least one diamond list must remain.");
    return;
  }

  const tab = document.querySelector(`.diamond-tab[data-id="${id}"]`);
  const block = document.querySelectorAll(".diamond-block-content")[id - 1];
  
  if(tab) tab.remove();
  if(block) block.remove();

  refreshTabNumbers();
  
  const firstTab = document.querySelector(".diamond-tab");
  if(firstTab) {
    switchDiamondTab(firstTab.dataset.id);
  }
  updateAllSelectDiamondSummary();
}

document.getElementById("addDiamondTabBtn").addEventListener("click", function() { addNewDiamondBlock("1"); });

document.querySelector('.diamond-tab[data-id="1"]').addEventListener("click", function(e) {
  if(!e.target.classList.contains("tab-remove-x")) {
    switchDiamondTab(1);
  }
});

function updateAllSelectDiamondSummary() {
  const cardsWrapper = document.getElementById("allSelectCardsWrapper");
  const blocks = document.querySelectorAll(".diamond-block-content");
  if(blocks.length === 0) return;

  let existingPiecesValues = [];
  cardsWrapper.querySelectorAll(".pieces-summary-input").forEach(inp => {
    existingPiecesValues.push(inp.value);
  });

  cardsWrapper.innerHTML = "";

  blocks.forEach((block, idx) => {
    let details = [];

    const shape = block.querySelector(".shape-button.selected");
    if(shape) details.push("Shape: " + shape.querySelector(".shape-name").textContent);

    const activeModeBtn = block.querySelector(".measurement-mode-button.selected");
    if(activeModeBtn) {
      const mode = activeModeBtn.dataset.mode;
      let minVal = "", maxVal = "", unit = "";
      if(mode === "carat") {
        minVal = block.querySelector(".caratMin")?.value;
        maxVal = block.querySelector(".caratMax")?.value;
        unit = "ct";
      } else if(mode === "mm") {
        minVal = block.querySelector(".mmMin")?.value;
        maxVal = block.querySelector(".mmMax")?.value;
        unit = "mm";
      } else if(mode === "point") {
        minVal = block.querySelector(".pointMin")?.value;
        maxVal = block.querySelector(".pointMax")?.value;
        unit = "pt";
      }

      if(minVal || maxVal) {
        details.push(`${mode.toUpperCase()}: ${minVal || '0'} - ${maxVal || '0'} ${unit}`);
      }
    }

    const clarity = block.querySelector(".clarity-button.selected");
    if(clarity) details.push("Clarity: " + clarity.textContent);

    const color = block.querySelector(".standard-color-button.selected, .fancy-color-button.selected");
    if(color) {
      const colorName = color.textContent || color.querySelector(".fancy-color-name")?.textContent;
      details.push("Color: " + colorName);
    }

    let defaultPieces = existingPiecesValues[idx] !== undefined ? existingPiecesValues[idx] : "1";

    const card = document.createElement("div");
    card.className = "single-diamond-summary-box";
    card.innerHTML = `
      <div class="single-diamond-summary-text"><strong>Diamond List ${idx + 1}:</strong> ${details.length > 0 ? details.join(" | ") : "Diamond List " + (idx + 1) + " (Ready)"}</div>
      <div class="single-diamond-pieces-badge">
        <span>Pieces:</span>
        <input type="number" class="pieces-summary-input" min="1" value="${defaultPieces}">
      </div>
    `;
    cardsWrapper.appendChild(card);
  });
}

initDiamondBlock(document.querySelector(".diamond-block-content"));
updateAllSelectDiamondSummary();

// Platform Select & Handlers for Diamond Section
const platformSelect = document.getElementById("platformSelect");
const platformSection = document.getElementById("platformSection");

platformSelect.addEventListener("change", function() {
    if(this.value !== "") platformSection.classList.remove("error-highlight");
});

// Platform Select & Handlers for Jewelry Section
const platformSelectJewelry = document.getElementById("platformSelectJewelry");
const platformSectionJewelry = document.getElementById("platformSectionJewelry");

platformSelectJewelry.addEventListener("change", function() {
    if(this.value !== "") platformSectionJewelry.classList.remove("error-highlight");
});

// Platform Select & Handlers for Imitation Section
const platformSelectImitation = document.getElementById("platformSelectImitation");
const platformSectionImitation = document.getElementById("platformSectionImitation");

platformSelectImitation.addEventListener("change", function() {
    if(this.value !== "") platformSectionImitation.classList.remove("error-highlight");
});

(function(){
  const SAVE_KEY = "lyxen_diamond_section_v6"; 
  const confirmBtn = document.querySelector('[data-save-section="1"]');
  const removeBtn = document.querySelector('[data-remove-section="1"]');

  if(confirmBtn){
    confirmBtn.addEventListener("click", function(){
      if(!platformSelect.value || platformSelect.value === "") {
        platformSection.classList.add("error-highlight");
        platformSelect.focus();
        return;
      } else {
        platformSection.classList.remove("error-highlight");
      }

      const platform = platformSelect.value;
      const MY_WHATSAPP_NUMBER = "+917016498275"; 

      let messageSummary = "--- Lyxen Diamond Order ---\n";
      const blocks = document.querySelectorAll(".diamond-block-content");
      const piecesInputs = document.querySelectorAll(".pieces-summary-input");

      blocks.forEach((block, idx) => {
        let bDetails = [];
        const shape = block.querySelector(".shape-button.selected");
        if(shape) bDetails.push("Shape: " + shape.querySelector(".shape-name").textContent);

        const activeModeBtn = block.querySelector(".measurement-mode-button.selected");
        if(activeModeBtn) {
          const mode = activeModeBtn.dataset.mode;
          let min = block.querySelector("." + mode + "Min")?.value;
          let max = block.querySelector("." + mode + "Max")?.value;
          if(min || max) bDetails.push(`${mode.toUpperCase()}: ${min} - ${max}`);
        }

        const clarity = block.querySelector(".clarity-button.selected");
        if(clarity) bDetails.push("Clarity: " + clarity.textContent);

        const color = block.querySelector(".standard-color-button.selected, .fancy-color-button.selected");
        if(color) {
          bDetails.push("Color: " + (color.textContent || color.querySelector(".fancy-color-name")?.textContent));
        }

        let pcs = piecesInputs[idx] ? piecesInputs[idx].value : "1";
        messageSummary += `\n[List ${idx + 1}] ${bDetails.join(" | ")} | Pieces: ${pcs}`;
      });

       if(platform === "whatsapp") {
            window.open(`https://wa.me/+917016498275?text=${encodeURIComponent(messageSummary)}`, '_blank');
       
        } else if(platform === "email") {
            window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=lyxen.brahmvandan@gmail.com&su=Imitation+Jewelry&body=${encodeURIComponent(messageSummary)}`, '_blank');
        
        }

      confirmBtn.classList.add("saved");
      confirmBtn.textContent = "Confirmed";
      setTimeout(function(){ confirmBtn.classList.remove("saved"); confirmBtn.textContent = "Confirm"; }, 1200);
    });
  }

  if(removeBtn){
    removeBtn.addEventListener("click", function(){
      localStorage.removeItem(SAVE_KEY);
      platformSelect.value = ""; 
      document.querySelectorAll(".diamond-block-content").forEach((b, i) => { if(i > 0) b.remove(); });
      document.querySelectorAll(".diamond-tab").forEach((t, i) => { if(i > 0) t.remove(); });
      document.querySelectorAll("input,select,textarea").forEach(el => { 
          if(el.type === "checkbox") el.checked = false;
          else if(el.classList.contains("pieces-summary-input")) el.value = "1";
          else if(el.tagName === "SELECT") el.selectedIndex = 0;
          else el.value = ""; 
      });
      document.querySelectorAll(".selected").forEach(el => el.classList.remove("selected"));
      platformSection.classList.remove("error-highlight");
      
      document.querySelectorAll(".color-type-button[data-color-type='standard']").forEach(btn => btn.classList.add("selected"));
      document.querySelectorAll(".standardColorPanel").forEach(panel => panel.classList.add("active"));
      
      document.querySelectorAll(".measurement-mode-button[data-mode='carat']").forEach(btn => btn.classList.add("selected"));
      document.querySelectorAll(".caratPanel").forEach(panel => panel.classList.add("active"));

      document.querySelectorAll(".diamond-block-content").forEach(b => updateGlobalInterlock(b));

      refreshTabNumbers();
      switchDiamondTab(1);
      updateAllSelectDiamondSummary();
      removeBtn.textContent = "Removed";
      setTimeout(function(){ removeBtn.textContent = "Remove"; }, 1200);
    });
  }
})();

// Handler for Diamond Jewelry Confirm & Remove buttons
const confirmJewelryBtn = document.querySelector('[data-save-section="jewelry"]');
const removeJewelryBtn = document.querySelector('[data-remove-section="jewelry"]');

if(confirmJewelryBtn) {
    confirmJewelryBtn.addEventListener("click", function(){
        if(!platformSelectJewelry.value || platformSelectJewelry.value === "") {
            platformSectionJewelry.classList.add("error-highlight");
            platformSelectJewelry.focus();
            return;
        }
        platformSectionJewelry.classList.remove("error-highlight");
        
        const platform = platformSelectJewelry.value;
        const titleVal = document.getElementById("jewelryTitleInput").value;
        const messageVal = document.getElementById("jewelryMessageInput").value;
        
        let messageSummary = "--- Lyxen Diamond Jewelry Order ---\n";
        if(titleVal) messageSummary += `Title: ${titleVal}\n`;
        if(messageVal) messageSummary += `Message: ${messageVal}`;

          if(platform === "whatsapp") {
            window.open(`https://wa.me/+917016498275?text=${encodeURIComponent(messageSummary)}`, '_blank');
       
        } else if(platform === "email") {
            window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=lyxen.brahmvandan@gmail.com&su=Imitation+Jewelry&body=${encodeURIComponent(messageSummary)}`, '_blank');
        
        }
        
        confirmJewelryBtn.classList.add("saved");
        confirmJewelryBtn.textContent = "Confirmed";
        setTimeout(function(){ confirmJewelryBtn.classList.remove("saved"); confirmJewelryBtn.textContent = "Confirm"; }, 1200);
    });
}

if(removeJewelryBtn) {
    removeJewelryBtn.addEventListener("click", function(){
        platformSelectJewelry.value = "";
        document.getElementById("jewelryTitleInput").value = "";
        document.getElementById("jewelryMessageInput").value = "";
        platformSectionJewelry.classList.remove("error-highlight");
        removeJewelryBtn.textContent = "Removed";
        setTimeout(function(){ removeJewelryBtn.textContent = "Remove"; }, 1200);
    });
}

// Handler for Imitation Jewelry Confirm & Remove buttons
const confirmImitationBtn = document.querySelector('[data-save-section="imitation"]');
const removeImitationBtn = document.querySelector('[data-remove-section="imitation"]');

if(confirmImitationBtn) {
    confirmImitationBtn.addEventListener("click", function(){
        if(!platformSelectImitation.value || platformSelectImitation.value === "") {
            platformSectionImitation.classList.add("error-highlight");
            platformSelectImitation.focus();
            return;
        }
        platformSectionImitation.classList.remove("error-highlight");
        
        const platform = platformSelectImitation.value;
        const titleVal = document.getElementById("imitationTitleInput").value;
        const messageVal = document.getElementById("imitationMessageInput").value;
        
        let messageSummary = "--- Lyxen Imitation Jewelry Order ---\n";
        if(titleVal) messageSummary += `Title: ${titleVal}\n`;
        if(messageVal) messageSummary += `Message: ${messageVal}`;

        if(platform === "whatsapp") {
            window.open(`https://wa.me/+917016498275?text=${encodeURIComponent(messageSummary)}`, '_blank');
       
        } else if(platform === "email") {
            window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=lyxen.brahmvandan@gmail.com&su=Imitation+Jewelry&body=${encodeURIComponent(messageSummary)}`, '_blank');
        
        }
        
        confirmImitationBtn.classList.add("saved");
        confirmImitationBtn.textContent = "Confirmed";
        setTimeout(function(){ confirmImitationBtn.classList.remove("saved"); confirmImitationBtn.textContent = "Confirm"; }, 1200);
    });
}

if(removeImitationBtn) {
    removeImitationBtn.addEventListener("click", function(){
        platformSelectImitation.value = "";
        document.getElementById("imitationTitleInput").value = "";
        document.getElementById("imitationMessageInput").value = "";
        platformSectionImitation.classList.remove("error-highlight");
        removeImitationBtn.textContent = "Removed";
        setTimeout(function(){ removeImitationBtn.textContent = "Remove"; }, 1200);
    });
}

window.addEventListener("DOMContentLoaded", function() {
  localStorage.removeItem("lyxen_diamond_section_v6");

  const defaultColorBtn = document.querySelector('[data-color-type="standard"]');
  if(defaultColorBtn) defaultColorBtn.classList.add("selected");

  const defaultCaratBtn = document.querySelector('[data-mode="carat"]');
  if(defaultCaratBtn) defaultCaratBtn.classList.add("selected");
  const defaultCaratPanel = document.querySelector('.caratPanel');
  if(defaultCaratPanel) defaultCaratPanel.classList.add("active");

  platformSelect.value = ""; 
  platformSelectJewelry.value = "";
  platformSelectImitation.value = "";

  document.getElementById("jewelryTitleInput").value = "";
  document.getElementById("jewelryMessageInput").value = "";
  document.getElementById("imitationTitleInput").value = "";
  document.getElementById("imitationMessageInput").value = "";

  updateAllSelectDiamondSummary();
});