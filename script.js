// ---------------------------
// 1) DATA (your list, structured)
// ---------------------------

const REAL = {
  insult: [
    { nicknames: ["Sloppy Steve"], targets: ["Steve Bannon"] },
    { nicknames: ["AOC of Tennessee"], targets: ["Aftyn Behn"] },
    { nicknames: ["Crooked Joe","Joe Hiden","Sleepy Joe","Slow Joe"], targets: ["Joe Biden"] },
    { nicknames: ["Mini Mike"], targets: ["Michael Bloomberg"] },
    { nicknames: ["Dick"], targets: ["Richard *"] }, // special rule
    { nicknames: ["Low Energy Jeb"], targets: ["Jeb Bush"] },
    { nicknames: ["Alfred E. Neuman"], targets: ["Pete Buttigieg"] },
    { nicknames: ["Coo-coo Chow"], targets: ["Elaine Chao"] },
    { nicknames: ["Low IQ","War Hawk"], targets: ["Liz Cheney"] },
    { nicknames: ["Sloppy"], targets: ["Chris Christie"] },
    { nicknames: ["Crazy","Crooked"], targets: ["Hillary Clinton"] },

    { nicknames: ["Leakin’","Lyin’","Shady","Slimeball","Slippery"], targets: ["James Comey"] },
    { nicknames: ["Little Bob"], targets: ["Bob Corker"] },
    { nicknames: ["Lyin’ Ted"], targets: ["Ted Cruz","Theodore Cruz"] },
    { nicknames: ["Ditzy DeVos"], targets: ["Betsy DeVos"] },
    { nicknames: ["Rob DeSanctimonious","Ron DeSanctus","Meatball Ron","Tiny D Ron"], targets: ["Ron DeSantis"] },
    { nicknames: ["Sneaky Dianne"], targets: ["Dianne Feinstein"] },
    { nicknames: ["Jeff Flakey"], targets: ["Jeff Flake"] },
    { nicknames: ["Al Frankenstein"], targets: ["Al Franken"] },
    { nicknames: ["Birdbrain"], targets: ["Nikki Haley"] },
    { nicknames: ["Comrade Kamala","Crazy Kamala","Jamala","Laughin’ Kamala","Lyin Kamala","Kamabla"], targets: ["Kamala Harris"] },
    { nicknames: ["My Little Communist","Little Communist","Mamdani the Commie"], targets: ["Zohran Mamdani"] },
    { nicknames: ["Broken Old Crow"], targets: ["Mitch McConnell"] },
    { nicknames: ["Evan McMuffin"], targets: ["Evan McMullin"] },
    { nicknames: ["Weird Stephen"], targets: ["Stephen Miller"] },
    { nicknames: ["Wacky Omarosa"], targets: ["Omarosa Manigault Newman","Omarosa Manigault","Omarosa"] },
    { nicknames: ["Governor Newscum","Slimey Newscum"], targets: ["Gavin Newsom","Gavin Newsome"] },
    { nicknames: ["Stupid AOC"], targets: ["Alexandria Ocasio-Cortez","AOC"] },
    { nicknames: ["Big Fat Slob"], targets: ["JB Pritzker","J.B. Pritzker"] },
    { nicknames: ["Nervous Nancy","Crazy Nancy"], targets: ["Nancy Pelosi"] },
    { nicknames: ["Little Mike"], targets: ["Mike Pence"] },
    { nicknames: ["Little Marco"], targets: ["Marco Rubio"] },
    { nicknames: ["Crazy Bernie"], targets: ["Bernie Sanders"] },
    { nicknames: ["Little Ben"], targets: ["Ben Sasse"] },
    { nicknames: ["Little Adam","Adam Shit","Pencil Neck","Shifty","Watermelon Head"], targets: ["Adam Schiff"] },
    { nicknames: ["Cryin’ Chuck","Fake Tears Chuck","Great Palestinian Senator"], targets: ["Chuck Schumer"] },
    { nicknames: ["Deranged Jack"], targets: ["Jack Smith"] },
    { nicknames: ["Marjorie Traitor Brown"], targets: ["Marjorie Taylor Greene"] },
    { nicknames: ["Tampon Tim"], targets: ["Tim Walz"] },
    { nicknames: ["Pocahontas"], targets: ["Elizabeth Warren"] },
    { nicknames: ["Low IQ Maxine"], targets: ["Maxine Waters"] },
    { nicknames: ["Governor Trudeau"], targets: ["Justin Trudeau"] },
    { nicknames: ["President Carney"], targets: ["Mark Carney"] },
    { nicknames: ["Little Peter"], targets: ["Peter Baker"] },
    { nicknames: ["Crazy Mika","Dumb as a Rock Mika","Low IQ Mika"], targets: ["Mika Brzezinski","Mike Brzezinski"] },
    { nicknames: ["Kooky Tucker"], targets: ["Tucker Carlson"] },
    { nicknames: ["Allison Cooper"], targets: ["Anderson Cooper"] },
    { nicknames: ["Fredo"], targets: ["Chris Cuomo"] },
    { nicknames: ["Maggot Hagerman"], targets: ["Maggie Haberman"] },
    { nicknames: ["Crazy Megyn"], targets: ["Megyn Kelly"] },
    { nicknames: ["Marble Mouth Myers"], targets: ["Seth Meyers"] },
    { nicknames: ["Washed Up Psycho Bette Midler"], targets: ["Bette Midler"] },
    { nicknames: ["Sloppy Michael Moore"], targets: ["Michael Moore"] },
    { nicknames: ["Morning Psycho","Psycho Joe"], targets: ["Joe Scarborough"] },
    { nicknames: ["Lil George","George Slopadopolus"], targets: ["George Stephanopoulos","George Stephenopoulos"] },
    { nicknames: ["Fake Tapper"], targets: ["Jake Tapper"] },
    { nicknames: ["Sleepy Eyes"], targets: ["Chuck Todd"] },
    { nicknames: ["Little Katy"], targets: ["Katy Tur"] },
    { nicknames: ["Lyin Brian"], targets: ["Brian Williams"] },
    { nicknames: ["Little Jeff"], targets: ["Jeff Zucker"] },
    { nicknames: ["Jeff Bozo"], targets: ["Jeff Bezos"] },
    { nicknames: ["Time Apple"], targets: ["Tim Cook"] },
    { nicknames: ["Horseface"], targets: ["Stormy Daniels"] },

    // ---- NEW ADDITIONS ----
    { nicknames: ["Fat Pig","Disgusting Animal","Slob","Face Like a Dog"], targets: ["Rosie O'Donnell","Rosie O Donnell"] },
    { nicknames: ["Pathetic Train Wreck","No Talent","Dead Man Walking"], targets: ["Stephen Colbert"] },
    { nicknames: ["Bum","Talentless","Horrible"], targets: ["Jimmy Kimmel"] },
    { nicknames: ["Face of a Dog"], targets: ["Gail Collins"] },
    { nicknames: ["Piggy"], targets: ["Catherine Lucey"] },
    { nicknames: ["51st State"], targets: ["Canada"] },
    { nicknames: ["Iceland"], targets: ["Greenland"] },
    { nicknames: ["Greenland"], targets: ["Iceland"] }
  ],

  compliment: [
    { nicknames: ["Beautiful"], targets: ["Hillary Clinton"] },
    { nicknames: ["Texas Ted","Beautiful Ted"], targets: ["Ted Cruz"] },

    // Trump self-compliments
    { nicknames: ["Very Stable Genius","Greatest President Ever","The Peace President",
                  "Very Good Brain","Acting President of Venezuela","The Fertilization President",
                  "The Father of IVF","Honest Don","The Tariff King","Daddy"], 
     targets: ["Donald Trump","Donald J Trump","Trump"] }
  ]
};
    { nicknames: ["Mini Mike"], targets: ["Michael Bloomberg"] },
    { nicknames: ["Dick"], targets: ["Richard *"] }, // special rule
    { nicknames: ["Low Energy Jeb"], targets: ["Jeb Bush"] },
    { nicknames: ["Alfred E. Neuman"], targets: ["Pete Buttigieg"] },
    { nicknames: ["Coo-coo Chow"], targets: ["Elaine Chao"] },
    { nicknames: ["Low IQ","War Hawk"], targets: ["Liz Cheney"] },
    { nicknames: ["Sloppy"], targets: ["Chris Christie"] },
    { nicknames: ["Crazy Hillary","Crooked Hillary","Heartless Hillary"], targets: ["Hillary Clinton"] },
    { nicknames: ["Leakin’","Lyin’","Shady","Slimeball","Slippery"], targets: ["James Comey"] },
    { nicknames: ["Little Bob"], targets: ["Bob Corker"] },
    { nicknames: ["Lyin’ Ted"], targets: ["Ted Cruz","Theodore Cruz"] },
    { nicknames: ["Ditzy DeVos"], targets: ["Betsy DeVos"] },
    { nicknames: ["Rob DeSanctimonious","Ron DeSanctus","Meatball Ron","Tiny D Ron"], targets: ["Ron DeSantis"] },
    { nicknames: ["Sneaky Dianne"], targets: ["Dianne Feinstein"] },
    { nicknames: ["Jeff Flakey"], targets: ["Jeff Flake"] },
    { nicknames: ["Al Frankenstein"], targets: ["Al Franken"] },
    { nicknames: ["Birdbrain"], targets: ["Nikki Haley"] },
    { nicknames: ["Comrade Kamala","Crazy Kamala","Jamala","Laughin’ Kamala","Lyin Kamala","Kamabla"], targets: ["Kamala Harris"] },
    { nicknames: ["My Little Communist","Little Communist","Mamdani the Commie"], targets: ["Zohran Mamdani"] },
    { nicknames: ["Broken Old Crow"], targets: ["Mitch McConnell"] },
    { nicknames: ["Evan McMuffin"], targets: ["Evan McMullin"] },
    { nicknames: ["Weird Stephen"], targets: ["Stephen Miller"] },
    { nicknames: ["Wacky Omarosa"], targets: ["Omarosa Manigault Newman","Omarosa Manigault","Omarosa"] },
    { nicknames: ["Governor Newscum","Slimey Newscum"], targets: ["Gavin Newsom","Gavin Newsome"] },
    { nicknames: ["Stupid AOC"], targets: ["Alexandria Ocasio-Cortez","AOC"] },
    { nicknames: ["Big Fat Slob"], targets: ["JB Pritzker","J.B. Pritzker"] },
    { nicknames: ["Nervous Nancy","Crazy Nancy","Sick Puppy"], targets: ["Nancy Pelosi"] },
    { nicknames: ["Little Mike"], targets: ["Mike Pence"] },
    { nicknames: ["Little Marco"], targets: ["Marco Rubio"] },
    { nicknames: ["Crazy Bernie","Braindead Bernie"], targets: ["Bernie Sanders"] },
    { nicknames: ["Little Ben"], targets: ["Ben Sasse"] },
    { nicknames: ["Little Adam","Adam Shit","Pencil Neck","Shifty","Watermelon Head"], targets: ["Adam Schiff"] },
    { nicknames: ["Cryin’ Chuck","Fake Tears Chuck","Great Palestinian Senator"], targets: ["Chuck Schumer"] },
    { nicknames: ["Deranged Jack"], targets: ["Jack Smith"] },
    { nicknames: ["Marjorie Traitor Brown","Marjorie Traitor Greene"], targets: ["Marjorie Taylor Greene","MTG"] },
    { nicknames: ["Tampon Tim"], targets: ["Tim Walz"] },
    { nicknames: ["Pocahontas"], targets: ["Elizabeth Warren"] },
    { nicknames: ["Low IQ Maxine"], targets: ["Maxine Waters"] },
    { nicknames: ["Governor Trudeau"], targets: ["Justin Trudeau"] },
    { nicknames: ["President Carney"], targets: ["Mark Carney"] },
    { nicknames: ["Little Peter"], targets: ["Peter Baker"] },
    { nicknames: ["Crazy Mika","Dumb as a Rock Mika","Low IQ Mika"], targets: ["Mika Brzezinski"] },
    { nicknames: ["Kooky Tucker"], targets: ["Tucker Carlson"] },
    { nicknames: ["Allison Cooper"], targets: ["Anderson Cooper"] },
    { nicknames: ["Fredo"], targets: ["Chris Cuomo"] },
    { nicknames: ["Maggot Hagerman"], targets: ["Maggie Haberman"] },
    { nicknames: ["Crazy Megyn"], targets: ["Megyn Kelly"] },
    { nicknames: ["Marble Mouth Myers"], targets: ["Seth Meyers"] },
    { nicknames: ["Washed Up Psycho Bette Midler"], targets: ["Bette Midler"] },
    { nicknames: ["Sloppy Michael Moore"], targets: ["Michael Moore"] },
    { nicknames: ["Morning Psycho","Psycho Joe"], targets: ["Joe Scarborough"] },
    { nicknames: ["Lil George","George Slopadopolus"], targets: ["George Stephanopoulos","George Stephenopoulos"] },
    { nicknames: ["Fake Tapper"], targets: ["Jake Tapper"] },
    { nicknames: ["Sleepy Eyes"], targets: ["Chuck Todd"] },
    { nicknames: ["Little Katy"], targets: ["Katy Tur"] },
    { nicknames: ["Lyin Brian"], targets: ["Brian Williams"] },
    { nicknames: ["Little Jeff"], targets: ["Jeff Zucker"] },
    { nicknames: ["Jeff Bozo"], targets: ["Jeff Bezos"] },
    { nicknames: ["Time Apple"], targets: ["Tim Cook"] },
    { nicknames: ["Horseface"], targets: ["Stormy Daniels"] },
    { nicknames: ["Fat Pig","Disgusting Animal","Slob","Face Like a Dog"], targets: ["Rosie O'Donnell","Rosie O Donnell"] },
    { nicknames: ["Pathetic Train Wreck","No Talent","Dead Man Walking"], targets: ["Stephen Colbert"] },
    { nicknames: ["Bum","Talentless","Horrible"], targets: ["Jimmy Kimmel"] },
    { nicknames: ["Face of a Dog"], targets: ["Gail Collins"] },
    { nicknames: ["Piggy"], targets: ["Catherine Lucey"] },
    { nicknames: ["51st State"], targets: ["Canada"] },
    { nicknames: ["Iceland"], targets: ["Greenland"] },
    { nicknames: ["Greenland"], targets: ["Iceland"] },
    { nicknames: ["Gulf of America"], targets: ["Gulf of Mexico"] },
    { nicknames: ["The Failing New York Times"], targets: ["New York Times","NYT"] },
    { nicknames: ["Moonface George Conway"], targets: ["George Conway"] }
  ],
  compliment: [
    { nicknames: ["Beautiful"], targets: ["Hillary Clinton"] },
    { nicknames: ["Texas Ted","Beautiful Ted"], targets: ["Ted Cruz"] },
    { nicknames: ["N.A."], targets:  ["Donald Trump","Donald J Trump","Trump"] }
  ]
};

// Synthetic adjective pools
// NOTE: removes ableist slur from your list.
const SYN = {
  insult: [
    "Sloppy","Crooked","Sleepy","Slow","Mini","Fat","Piggy","Low Energy","Low IQ",
    "Crazy","Leakin’","Lyin’","Shady","Slimeball","Slimey","Slippery","Little",
    "Meatball","Sneaky","Flakey","Comrade","Laughin’","Birdbrain","Broken Old Crow",
    "Weird","Weirdo","Wacky","Stupid","Big Fat Slob","Nervous","Pencil Neck","Shifty",
    "Watermelon Head","Fake Tears","Fake","Deranged","Tampon","Goofy","Dumb as a Rock",
    "Marble Mouth","No Talent","Washed Up","Washed Up Psycho","Psycho","Sleepy Eyes",
    "Horseface","Low Ratings","Radical Left Terrorist","Failing","Doesn’t Have the Cards","Ditzy",
    "Pathetic Train Wreck","Bum","Horrible","Loser","Total Loser","Talentless","Pig","Fat Pig",
    "Fat Ugly Face","Slob","Animal","Degenerate","Crude","Rude","Very Unattractive Person","Obnoxious",
    "Ungrateful"
    
  ],
  compliment: [
    "Beautiful","Incredible","Fantastic","Great","Strong","Brilliant","Powerful","Very Good Brain",
    "Tremendous","Very Smart","Wonderful","Talented","Very Nice","Classy","Stable Genius",
  ]
};


// ---------------------------
// 2) BUILD LOOKUP INDEX
// ---------------------------

function norm(s) {
  return (s || "")
    .toLowerCase()
    .replace(/[’']/g, "'")
    .replace(/[^a-z0-9\s'-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function splitName(full) {
  const clean = norm(full);
  const parts = clean.split(" ").filter(Boolean);
  return {
    clean,
    first: parts[0] || "",
    last: parts.length > 1 ? parts[parts.length - 1] : ""
  };
}

// index[mode][key] => array of nicknames
const index = { insult: {}, compliment: {} };

function addToIndex(mode, key, nicknames) {
  if (!key) return;
  if (!index[mode][key]) index[mode][key] = [];
  for (const n of nicknames) {
    if (!index[mode][key].includes(n)) index[mode][key].push(n);
  }
}

function buildIndex() {
  for (const mode of ["insult","compliment"]) {
    for (const entry of REAL[mode]) {
      for (const t of entry.targets) {
        const target = norm(t.replace(/\*/g, ""));
        // full target
        addToIndex(mode, target, entry.nicknames);

        // also allow first + last keying when target is a normal name
        const parts = target.split(" ").filter(Boolean);
        if (parts.length >= 2) {
          addToIndex(mode, parts[0], entry.nicknames);
          addToIndex(mode, parts[parts.length - 1], entry.nicknames);
        } else if (parts.length === 1) {
          addToIndex(mode, parts[0], entry.nicknames);
        }
      }
    }
  }
}

buildIndex();

// ---------------------------
// 3) CORE RULES
// ---------------------------

function randomPick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Rule 3a/3b/3c: letter match pools then fallback
function syntheticNickname(firstName, mode) {
  const first = (firstName || "").trim();
  const letter = first.slice(0, 1).toLowerCase();

  // filter blacklist
  const pool = SYN[mode].filter(a => !SYN_BLACKLIST.has(a));

  const letterMatches = pool.filter(a => a.trim().slice(0,1).toLowerCase() === letter);

  const adj = letterMatches.length > 0 ? randomPick(letterMatches) : randomPick(pool);

  // keep it “Trump-ish”: adjective + first name
  const titleFirst = first ? first[0].toUpperCase() + first.slice(1) : "You";
  return `${adj} ${titleFirst}`;
}

// Rules 1/2: if exists, choose random if multiple else single
function realNicknameLookup(inputName, mode) {
  const { clean, first, last } = splitName(inputName);

  // Special: anyone named Richard => "Dick" in insult mode
  if (mode === "insult" && (first === "richard" || clean === "richard")) {
    const dick = index.insult["richard"]; // will include "Dick"
    if (dick && dick.length) return randomPick(dick);
    return "Dick Richard"; // unlikely, but safe fallback
  }

  // Try exact full, then first, then last
  const candidates =
    index[mode][clean] ||
    (first && index[mode][first]) ||
    (last && index[mode][last]);

  if (candidates && candidates.length) {
    return candidates.length === 1 ? candidates[0] : randomPick(candidates);
  }

  return null;
}

function generateNickname(inputName, mode) {
  const { first } = splitName(inputName);
  const real = realNicknameLookup(inputName, mode);
  if (real) return real;
  return syntheticNickname(first || inputName || "You", mode);
}

// ---------------------------
// 4) UI WIRES
// ---------------------------

const elName = document.getElementById("fullName");
const elGenerate = document.getElementById("generateBtn");
const elLoading = document.getElementById("loading");
const elResult = document.getElementById("result");
const elNickname = document.getElementById("nickname");
const elCopy = document.getElementById("copyBtn");
const elShare = document.getElementById("shareBtn");
document.getElementById("year").textContent = new Date().getFullYear();

function getMode() {
  return document.querySelector('input[name="mode"]:checked')?.value || "insult";
}

function setLoading(on) {
  if (on) {
    elResult.classList.add("hidden");
    elLoading.classList.remove("hidden");
  } else {
    elLoading.classList.add("hidden");
  }
}

function setResult(text) {
  elNickname.textContent = text;
  elResult.classList.remove("hidden");
}

elGenerate.addEventListener("click", () => {
  const name = elName.value.trim();
  if (!name) {
    alert("Enter a name.");
    elName.focus();
    return;
  }

  setLoading(true);

  // show your animation for a beat
  window.setTimeout(() => {
    const mode = getMode();
    const nick = generateNickname(name, mode);
    setLoading(false);
    setResult(nick);
  }, 900);
});

// Enter key triggers generate
elName.addEventListener("keydown", (e) => {
  if (e.key === "Enter") elGenerate.click();
});

elCopy.addEventListener("click", async () => {
  const text = elNickname.textContent || "";
  try {
    await navigator.clipboard.writeText(text);
    elCopy.textContent = "Copied!";
    setTimeout(() => (elCopy.textContent = "Copy"), 900);
  } catch {
    alert(text);
  }
});

elShare.addEventListener("click", async () => {
  const text = elNickname.textContent || "";
  const shareText = `My Trump Nickname is: ${text}`;

  if (navigator.share) {
    try {
      await navigator.share({ text: shareText });
    } catch { /* user cancelled */ }
  } else {
    // fallback: copy share text
    try {
      await navigator.clipboard.writeText(shareText);
      elShare.textContent = "Copied!";
      setTimeout(() => (elShare.textContent = "Share"), 2500);
    } catch {
      alert(shareText);
    }
  }
});//
//  script.js
//  
//
//  Created by Josh Molot on 2026-01-18.
//

