const emoji = [
    "๐ Grinning Face",
    "๐ Grinning Face with Big Eyes",
    "๐ Grinning Face with Smiling Eyes",
    "๐ Beaming Face with Smiling Eyes",
    "๐ Grinning Squinting Face",
    "๐ Grinning Face with Sweat",
    "๐คฃ Rolling on the Floor Laughing",
    "๐ Face with Tears of Joy",
    "๐ Slightly Smiling Face",
    "๐ Upside-Down Face",
    "๐ Winking Face",
    "๐ Smiling Face with Smiling Eyes",
    "๐ Smiling Face with Halo",
    "๐ฅฐ Smiling Face with Hearts",
    "๐ Smiling Face with Heart-Eyes",
    "๐คฉ Star-Struck",
    "๐ Face Blowing a Kiss",
    "๐ Kissing Face",
    "๐ Kissing Face with Closed Eyes",
    "๐ Kissing Face with Smiling Eyes",
    "๐ Face Savoring Food",
    "๐ Face with Tongue",
    "๐ Winking Face with Tongue",
    "๐คช Zany Face",
    "๐ Squinting Face with Tongue",
    "๐ค Money-Mouth Face",
    "๐ค Hugging Face",
    "๐คญ Face with Hand Over Mouth",
    "๐คซ Shushing Face",
    "๐ค Thinking Face",
    "๐ค Zipper-Mouth Face",
    "๐คจ Face with Raised Eyebrow",
    "๐ Neutral Face",
    "๐ Expressionless Face",
    "๐ถ Face Without Mouth",
    "๐ Smirking Face ",
    "๐ Unamused Face",
    "๐ Face with Rolling Eyes",
    "๐ฌ Grimacing Face ",
    "๐คฅ Lying Face ",
    "๐ Relieved Face ",
    "๐ Pensive Face",
    "๐ช Sleepy Face",
    "๐คค Drooling Face",
    "๐ด Sleeping Face",
    "๐ท Face with Medical Mask",
    "๐ค Face with Thermometer",
    "๐ค Face with Head-Bandage",
    "๐คข Nauseated Face",
    "๐คฎ Face Vomiting",
    "๐คง Sneezing Face",
    "๐ฅต Hot Face",
    "๐ฅถ Cold Face",
    "๐ฅด Woozy Face",
    "๐ต Dizzy Face",
    "๐คฏ Exploding Head",
    "๐ค  Cowboy Hat Face",
    "๐ฅณ Partying Face",
    "๐ Smiling Face with Sunglasses",
    "๐ค Nerd Face",
    "๐ง Face with Monocle",
    "๐ Confused Face",
    "๐ Worried Face",
    "๐ Slightly Frowning Face",
    "โน๏ธ Frowning Face",
    "๐ฎ Face with Open Mouth",
    "๐ฏ Hushed Face",
    "๐ฒ Astonished Face",
    "๐ณ Flushed Face",
    "๐ฅบ Pleading Face",
    "๐ฆ Frowning Face with Open Mouth",
    "๐ง Anguished Face",
  ];
  
  for (let i = 0; i < emoji.length; i++) {
    const grid = document.getElementById("grid");
  
    let icon = document.createElement("div");
    let cell = document.createElement("div");
    let title = document.createElement("h4");
    cell.classList.add("contain");
    icon.classList.add("icon");
    title.classList.add("text");
    title.innerText = emoji[i].slice(3, emoji[i].length);
  
    icon.innerHTML = emoji[i].slice(0, 2);
    cell.appendChild(icon);
    cell.appendChild(title);
  
    grid.appendChild(cell);
  }
  
  function getemo() {
    const box = document.getElementById("box");
    var number = Math.floor(Math.random() * 72);
    let fact = emoji[number];
    box.innerHTML = ` <h2>${fact}</h2><br>
  `;
  }
  
  