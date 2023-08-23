// Adding platform images
// Adding background image

const list = document.getElementById("list")
list.style.display = 'none'


let image = new Image()
image.src = './img/Platform_Street.png'

let square = new Image()
square.src = './img/Platform_Square.png'

let platformJump = new Image()
platformJump.src = './img/PlatformJump.png'

let genie = new Image()
genie.src = './img/genie.png'

let genieThanks = new Image()
genieThanks.src = './img/genieThanks.png'

let genieDialogue = new Image()
genieDialogue.src = './img/genieDialogue.png'

let background = new Image()
background.src = './img/bg.png'

let StandRight = new Image()
StandRight.src = './img/StandRight.png'

let yes =  new Image()
yes.src = './img/YesButton.png'

let no =  new Image()
no.src = './img/NoButton.png'

// storing the HTML canvas element in a "constant" called canvas

const canvas = document.querySelector('canvas')

const scoreASB = document.querySelector('#scoreASB')
const scoreBD = document.querySelector('#scoreBD')
const scoreS = document.querySelector('#scoreS')
const scoreAN = document.querySelector('#scoreAN')
const scoreML = document.querySelector('#scoreML')

const c = canvas.getContext('2d')

const scoreBoard = document.querySelector('#list')

// toggle button function to show and hide score

const dBox = document.querySelector('#dBox')

const togglebtn = document.querySelector('#togglebtn')

togglebtn.addEventListener('click' , () => {
    if(list.style.display === 'none') {
        list.style.display = 'block' ;
        togglebtn.innerHTML = 'Hide Score';
    } else{
        list.style.display = 'none'
        togglebtn.innerHTML = 'Show Score';
    }
})

// press f to show/hide dialoge



// Text Box
let text = document.getElementById("text")
var box = document.querySelector('.dBox')
var textBox = document.querySelector('.text')

text.innerHTML = "Hey little fella! I heard that you were struggling with picking your major... I'm here to help :) keep walking!"



/*var container = document.querySelector(".text");



var speeds ={
pause: 500, //Higher number = longer delay
   slow: 120,
   normal: 90,
   fast: 40,
   superFast: 10
}

// Add dialogue text here!!!

var textLines =[
    {string: "Hey!", speed: speeds.normal},
    {string: "Whats Up", speed: speeds.fast}
]


var characters = [];

// Adds space between words

textLines.forEach((line, index) => {
   
    if (index < textLines.length - 1) {
      line.string += " "; //Add a space between lines
   }

   // Split each letter and display it as a span

   line.string.split("").forEach((character) => {
      
      var span = document.createElement("span");
      span.textContent = character;
      container.appendChild(span);
      
      characters.push({
         span: span,
         isSpace: character === " " && !line.pause,
         
         // Speed of text being shown
         delayAfter: line.speed,
         
         // Add classes to spans
         classes: line.classes || []

      });
   });
});

function revealOneCharacter(list) {
   
   // Take the first character in the word and select it  
   var next = list.splice(0, 1)[0];

   // Add a class revealed to spans so CSS can be applied to it and change opacity
   next.span.classList.add("revealed");
   next.classes.forEach((c) => {
      next.span.classList.add(c);
   });
   var delay = next.isSpace && !next.pause ? 0 : next.delayAfter;

   if (list.length > 0) {
      setTimeout(function () {
         revealOneCharacter(list);
      }, delay);
   }
}

//Kick it off
setTimeout(() => {
   revealOneCharacter(characters);   
}, 600)*/




// canvas properties

canvas.width = 1440
canvas.height = 576

//gravity speed

const Gravity = 1 

// Player Creation

class Player {
    constructor() {
        this.speed = 10
        this.position = {
            x: 100,
            y: 100
        }
        this.velocity = {
            x: 0,
            y: 0
        }
        this.width = 66
        this.height = 150

        this.image = StandRight
        this.frames = 0

    }

    draw() {
        c.drawImage(
            this.image,
            215 * this.frames,
            0,
            215,
            430,
            this.position.x,
            this.position.y,
            this.width,
            this.height)
        /*c.fillStyle = 'red'
        c.fillRect(this.position.x, this.position.y, this.width, this.height)*/
    }

    update() {
        this.frames++
        if (this.frames > 28) this.frames = 0
        this.draw()

        this.position.x += this.velocity.x
        this.position.y += this.velocity.y


        // Keep falling and adding Gravity until it's at the bottom of the screen

        if (this.position.y + this.height + this.velocity.y <= canvas.height)
            this.velocity.y += Gravity

    }

}

// platform class
// x and y is where the platform is placed

class Platform {
    constructor({ x, y, image }) {
        this.position = {
            x,
            y
        }

        this.image = image
        this.width = image.width
        this.height = image.height

    }
    
    

    // Replaced the rectangles with an image

    draw() {
        c.drawImage(this.image, this.position.x, this.position.y)
    }
}

class Platform_Square {
    constructor({ x, y, image: square, image: platformJump }) {
        this.position = {
            x,
            y
        }

        this.image = square
        this.width = square.width
        this.height = square.height

        this.image = platformJump
        this.width = platformJump.width
        this.height = platformJump.height

    }
    
    

    // Replaced the rectangles with an image

    draw() {
        c.drawImage(this.image, this.position.x, this.position.y)
    }
}

class buttonRed {
    constructor({x, y, image}) {
        this.position = {
            x,
            y
        }
        this.image = no
        this.width = no.width
        this.height = no.height

    }
    
    

    // Replaced the rectangles with an image

    draw() {
        c.drawImage(this.image, this.position.x, this.position.y)
    }
}

class buttonBlue {
    constructor({x, y, image}) {
        this.position = {
            x,
            y
        }
        this.image = yes
        this.width = yes.width
        this.height = yes.height

    }
    
    

    // Replaced the rectangles with an image

    draw() {
        c.drawImage(this.image, this.position.x, this.position.y)
    }
}

// Class for the genie

class npc {
    constructor({ x, y, image: genie }) {
        this.position = {
            x,
            y
        }

        this.image = genie
        this.width = genie.width
        this.height = genie.height
    }
    
    

    // Replaced the rectangles with an image

    draw() {
        c.drawImage(this.image, this.position.x, this.position.y)
    }
}

class GenericObject {
    constructor({ x, y, background }) {
        this.position = {
            x,
            y

        }

        this.background = background
        this.width = background.width
        this.height = background.height

    }

    // Replaced the rectangles with an image

    draw() {
        c.drawImage(this.background, this.position.x, this.position.y)
    }
}

// Creating a "player" object and displaying them on the screen

// Creating a "platform" object and displaying them on the screen

// Creating a Genie object and displaying him on the screen

let player = new Player()
let platforms = []
let buttonsRed = []
let buttonsBlue = []
let blueMan = []
let genericObjects = []


const keys = {
    right: {
        pressed: false
    },
    left: {
        pressed: false
    },
}


let scrollOffset = 0

// Function to reset the player to the start of the level if they fail

function reset() {

    // Render and position stuff here
    
    // Genie positioning
    
    blueMan = [new npc({ x: 1050 , y: 195, image: genie }), new npc({ x: 2550 , y: 195, image: genie })
        , 
        new npc({ x: 4100 , y: 195, image: genie }), new npc({ x: 7450 , y: 195, image: genie })
        , 
        new npc({ x: 9000 , y: 195, image: genie })
        , 
        new npc({ x: 12200 , y: 195, image: genie })
        , 
        new npc({ x: 13800 , y: 195, image: genie })
        ,
        new npc({ x: 16700 , y: 195, image: genie })
        ,
        new npc({ x: 18180 , y: 195, image: genie })
        ,
        new npc({ x: 21850 , y: 195, image: genie })
        ,
        new npc({ x: 23350 , y: 195, image: genie })
        ,
        new npc({ x: 26600 , y: 195, image: genie })
        ,
        new npc({ x: 28100 , y: 195, image: genie })
        ,
        new npc({ x: 29050 , y: 20, image: genieThanks })]

    // NO button positioning
    
    buttonsRed = [new buttonRed({ x: 1700 , y:220}), new buttonRed({ x: 3200 , y:220})
        , 
        new buttonRed({ x: 6600 , y:220})
        , 
        new buttonRed({ x: 8200 , y:220})
        , 
        new buttonRed({ x: 11400 , y:220})
        , 
        new buttonRed({ x: 13000 , y:220})
        ,
        new buttonRed({ x: 15900 , y:220})
        ,
        new buttonRed({ x: 17400 , y:220})
        ,
        new buttonRed({ x: 21000 , y:220})
        ,
        new buttonRed({ x: 22500 , y:220})
        ,
        new buttonRed({ x: 25800 , y:220})
        ,
        new buttonRed({ x: 27300 , y:220})]

    // YES button positioning

    buttonsBlue = [new buttonBlue({ x: 2100 , y:220}), new buttonBlue({ x: 3600 , y:220})
        , 
        new buttonBlue({ x: 7000 , y:220})
        , 
        new buttonBlue({ x: 8600 , y:220})
        , 
        new buttonBlue({ x: 11800 , y:220})
        , 
        new buttonBlue({ x: 13400 , y:220})
        ,
        new buttonBlue({ x: 16300 , y:220})
        ,
        new buttonBlue({ x: 17800 , y:220})
        ,
        new buttonBlue({ x: 21400 , y:220})
        ,
        new buttonBlue({ x: 22900 , y:220})
        ,
        new buttonBlue({ x: 26200 , y:220})
        ,
        new buttonBlue({ x: 27700 , y:220})]

    player = new Player()

    // Platform positioning
    
    platforms = [new Platform({ x: 0, y: 470, image })
        , new Platform({ x: image.width - 3 , y: 470, image }), new Platform({ x: image.width * 2 - 5, y: 470, image }),
    new Platform({ x: image.width * 3 - 7, y: 470, image }), new Platform_Square({ x: image.width * 4+180 , y: 300, image: square})
    , 
    new Platform_Square({ x: 9700 , y: 300, image: square}), new Platform_Square({ x: 10300 , y: 200, image: square}), 
    ,
    new Platform({ x: image.width * 4.7 + 30, y: 470, image })
    ,
    new Platform({ x: image.width * 5.6 , y: 470, image })
    ,
    new Platform({ x: image.width * 6.6 -5 , y: 470, image })
    ,
    new Platform({ x: 10600 , y: 470, image })
    ,
    new Platform({ x: 11880 , y: 470, image })
    ,
    new Platform({ x: 13160, y: 470, image })
    ,
    new Platform({ x: 13878, y: 470, image })
    ,
    new Platform_Square({ x: 14600 , y: 170, image: platformJump})
    ,
    new Platform({ x: 15450, y: 470, image })
    ,
    new Platform({ x: 16730, y: 470, image })
    ,
    new Platform({ x: 18010, y: 470, image })
    ,
    new Platform_Square({ x: 19000 , y: 300, image: square})
    ,
    new Platform_Square({ x: 19700 , y: 280, image: platformJump})
    ,
    new Platform({ x: 20500, y: 470, image })
    ,
    new Platform({ x: 21770, y: 470, image })
    ,
    new Platform({ x: 22970, y: 470, image })
    ,
    new Platform_Square({ x: 24500 , y: 280, image: platformJump})
    ,
    new Platform({ x: 25300, y: 470, image })
    ,
    new Platform({ x: 26500, y: 470, image })
    ,
    new Platform({ x: 27700, y: 470, image })
    ,
    new Platform_Square({ x: 29110 , y: 500, image: square})]

    


    genericObjects = [
        new GenericObject({
            x: 0,
            y: 0,
            background

        })
    ]

    scrollOffset = 0

}


// Animate loop

function animate() {
    requestAnimationFrame(animate)
    c.fillStyle = 'white'
    c.fillRect(0, 0, canvas.width, canvas.height)

    genericObjects.forEach((genericObject) => {
        genericObject.draw()
    })

    platforms.forEach((platform) => {
        platform.draw()
    })
    
    buttonsRed.forEach((buttonsRed) => {
        buttonsRed.draw()
    })

    buttonsBlue.forEach((buttonsBlue) => {
        buttonsBlue.draw()
    })

    blueMan.forEach((blueMan) => {
        blueMan.draw()
    })
    

    player.update()

    

    if (keys.right.pressed && player.position.x < 800) {
        player.velocity.x = player.speed
    } else if ((keys.left.pressed && player.position.x > 100) || (keys.left.pressed & scrollOffset === 0 & player.position.x > 0)) {
        player.velocity.x = -player.speed
    } else {
        player.velocity.x = 0

        // Moving platforms and images when the player moves
        // If you want any image to move when the chracter moves add it here
 
        if (keys.right.pressed) {
            scrollOffset += player.speed
            platforms.forEach((platform) => {
                platform.position.x -= player.speed
            })
            blueMan.forEach((blueMan) => {
                blueMan.position.x -= player.speed
            })
            buttonsRed.forEach((buttonsRed) => {
                buttonsRed.position.x -= player.speed
            })
            buttonsBlue.forEach((buttonsBlue) => {
                buttonsBlue.position.x -= player.speed
            })
            genericObjects.forEach(genericObject => { genericObject.position.x -= player.speed * 0.65 })
            
        }
        else if (keys.left.pressed && scrollOffset > 0) {
            scrollOffset -= player.speed
            platforms.forEach((platform) => {
                platform.position.x += player.speed
            })
            blueMan.forEach((blueMan) => {
                blueMan.position.x += player.speed
            })
            
            buttonsRed.forEach((buttonsRed) => {
                buttonsRed.position.x += player.speed
            })
            buttonsBlue.forEach((buttonsBlue) => {
                buttonsBlue.position.x += player.speed
            })
            genericObjects.forEach(genericObject => { genericObject.position.x += player.speed * 0.65 })
            
        }
    }

    
    //platform collision detection
    platforms.forEach((platform) => {

        if (player.position.y + player.height <= platform.position.y &&
            player.position.y + player.height + player.velocity.y >= platform.position.y &&
            player.position.x + player.width >= platform.position.x &&
            player.position.x <= platform.position.x + platform.width
        ) {
            player.velocity.y = 0
        }
    })

    buttonsRed.forEach((buttonsRed) => {

        if (player.position.y + player.height <= buttonsRed.position.y &&
            player.position.y + player.height + player.velocity.y >= buttonsRed.position.y &&
            player.position.x + player.width >= buttonsRed.position.x &&
            player.position.x <= buttonsRed.position.x + buttonsRed.width
        ) {
            player.velocity.y = 0
            console.log(scrollOffset)
            
            // Scores for "No" answers go here

            // Question 1

            if (scrollOffset > 1000 && scrollOffset < 2100 && scoreBoard.className == ""){
                scoreBoard.classList = "Q1"
                text.innerHTML = "AWS has a lot of comprehensive AI and ML services and infrastructure! You can solve business problems in any industry and innovate with confidence!"
            }
            
            // Question 2

            else if(scrollOffset > 2600 && scrollOffset < 3500 && scoreBoard.className == "Q1"){
                scoreBoard.classList = "Q2"
                text.innerHTML = "Sagemaker can build ML models with fully managed infrastructure. Deeplens is a deep learning-enabled video camera that is integrated with AWS ML services."
            }
            
            // Question 3

            else if(scrollOffset > 5900 && scrollOffset < 6700 && scoreBoard.className == "Q2"){
                scoreBoard.classList = "Q3"
                text.innerHTML = "Networking plays a vital part in AWS. Knowing some networking concepts can go a long way into helping you in your AWS journey!"
            }

            // Question 4

            else if(scrollOffset > 7400 && scrollOffset < 8600 && scoreBoard.className == "Q3"){
                scoreBoard.classList = "Q4"
                text.innerHTML = "As the customer's organization grows, greater segmentation of services becomes necessary to monitor costs, control access, and provide easier environmental management."
            }
            
            // Question 5

            else if(scrollOffset > 10400 && scrollOffset < 11800 && scoreBoard.className == "Q4"){
                scoreBoard.classList = "Q5"
                text.innerHTML = "Knowing how to troubleshoot your network issues can help your organization a lot!"
            }

            // Question 6

            else if(scrollOffset > 12000 && scrollOffset < 13400 && scoreBoard.className == "Q5"){
                scoreBoard.classList = "Q6"
                text.innerHTML = "Security is a key pillar in the AWS Well-Architected Framework and it is very important to every company."
            }

            // Question 7

            else if(scrollOffset > 15000 && scrollOffset < 16400 && scoreBoard.className == "Q6"){
                scoreBoard.classList = "Q7"
                text.innerHTML = "You need WAF to Protect your web applications from common exploits and you need IAM to manage access to your recources!"
            }

            // Question 8

            else if(scrollOffset > 16500 && scrollOffset < 17500 && scoreBoard.className == "Q7"){
                scoreBoard.classList = "Q8"
                text.innerHTML = "It's essential to carry out security assessments like penetration testing to reveal critical security weaknesses in an AWS deployment."
            }

            // Question 9

            else if(scrollOffset > 20000 && scrollOffset < 21450 && scoreBoard.className == "Q8"){
                scoreBoard.classList = "Q9"
                text.innerHTML = "Organizations will benefit from big data technologies when existing databases and applications can no longer scale to support sudden increases in volume, variety, and velocity of data."
            }

            // Question 10

            else if(scrollOffset > 21600 && scrollOffset < 23000 && scoreBoard.className == "Q9"){
                scoreBoard.classList = "Q10"
                text.innerHTML = "AWS provides a diverse selection of analytics services that fit all your data analytics needs and enables organizations to reinvent their business with data."
            }

             // Question 11

             else if(scrollOffset > 25000 && scrollOffset < 26150 && scoreBoard.className == "Q10"){
                scoreBoard.classList = "Q11"
                text.innerHTML = "The Alexa Skills Kit gives developers the ability to utilize Alexa's capabilities by building engaging voice and visual experiences."
            }

            // Question 12

            else if(scrollOffset > 26400 && scrollOffset < 28000 && scoreBoard.className == "Q11"){
                scoreBoard.classList = "Q12"
                text.innerHTML = "There's so much potential to voice user interfaces (VUIs). A VUI is a technology that allows people to use their voices to interact with computers and devices."
            }

        }
    })

    buttonsBlue.forEach((buttonsBlue) => {

        if (player.position.y + player.height <= buttonsBlue.position.y &&
            player.position.y + player.height + player.velocity.y >= buttonsBlue.position.y &&
            player.position.x + player.width >= buttonsBlue.position.x &&
            player.position.x <= buttonsBlue.position.x + buttonsBlue.width
        ) {
            player.velocity.y = 0
            
            // Scores for "Yes" answers go here!!!
             console.log(scrollOffset)
            // Question 1

            if (scrollOffset > 1000 && scrollOffset < 2100 && scoreBoard.className == ""){
                scoreML.innerHTML= parseFloat(scoreML.innerHTML) + 6;
                scoreBoard.classList = "Q1"
                text.innerHTML = "Great! AWS truly has some of the most comprehensive set of AI and ML services and infrastructure!"
            }
            
            // Question 2

            else if(scrollOffset > 2600 && scrollOffset < 3500 && scoreBoard.className == "Q1"){
                scoreML.innerHTML= parseFloat(scoreML.innerHTML) + 6;
                scoreBoard.classList = "Q2"
                text.innerHTML = "Awesome! Deeplens and Sagemaker are really good and diverse services for ML!"
            }

            
            // Question 3

            else if(scrollOffset > 5900 && scrollOffset < 6700 && scoreBoard.className == "Q2"){
                scoreAN.innerHTML= parseFloat(scoreAN.innerHTML) + 5;
                scoreBoard.classList = "Q3"
                text.innerHTML = "That's good to hear! Networking plays a vital part in AWS."
            }

            // Question 4

            else if(scrollOffset > 7400 && scrollOffset < 8600 && scoreBoard.className == "Q3"){
                scoreAN.innerHTML= parseFloat(scoreAN.innerHTML) + 5;
                scoreBoard.classList = "Q4"
                text.innerHTML = "As the customer's organization grows, greater segmentation of services becomes vital to monitor costs, control access, and provide environmental management."
            }

            // Question 5
            
            else if(scrollOffset > 10400 && scrollOffset < 11800 && scoreBoard.className == "Q4"){
                scoreAN.innerHTML= parseFloat(scoreAN.innerHTML) + 5;
                scoreBoard.classList = "Q5"
                text.innerHTML = "Knowing how to troubleshoot your network issues can go a long way in helping your organization!"
            }

            // Question 6

            else if(scrollOffset > 12000 && scrollOffset < 13400 && scoreBoard.className == "Q5"){
                scoreS.innerHTML= parseFloat(scoreS.innerHTML) + 4;
                scoreBoard.classList = "Q6"
                text.innerHTML = "Security is a key pillar in the AWS Well-Architected Framework and it is very important to every company."
            }

            // Question 7

            else if(scrollOffset > 15000 && scrollOffset < 16400 && scoreBoard.className == "Q6"){
                scoreS.innerHTML= parseFloat(scoreS.innerHTML) + 6;
                scoreBoard.classList = "Q7"
                text.innerHTML = "Good! You need WAF to Protect your web applications from common exploits and you need IAM to manage access to your recources!"
            }

            // Question 8

            else if(scrollOffset > 16500 && scrollOffset < 17500 && scoreBoard.className == "Q7"){
                scoreS.innerHTML= parseFloat(scoreS.innerHTML) + 4;
                scoreBoard.classList = "Q8"
                text.innerHTML = "Carrying out security assessments like penetration testing can reveal critical security weaknesses in an AWS deployment."
            }

            // Question 9

            else if(scrollOffset > 20000 && scrollOffset < 21450 && scoreBoard.className == "Q8"){
                scoreBD.innerHTML= parseFloat(scoreBD.innerHTML) + 3;
                scoreBoard.classList = "Q9"
                text.innerHTML = "That's good to hear! With AWS you can build virtually any big data application!"
            }

            // Question 10

            else if(scrollOffset > 21600 && scrollOffset < 23000 && scoreBoard.className == "Q9"){
                scoreBD.innerHTML= parseFloat(scoreBD.innerHTML) + 3;
                scoreBoard.classList = "Q10"
                text.innerHTML = "AWS has a selection of analytics services that fit all your data analytics needs & enables organizations to reinvent their business with data."
            }

            // Question 11

            else if(scrollOffset > 25000 && scrollOffset < 26150 && scoreBoard.className == "Q10"){
                scoreASB.innerHTML= parseFloat(scoreASB.innerHTML) + 2;
                scoreBoard.classList = "Q11"
                text.innerHTML = "The Alexa Skills Kit gives developers the ability to utilize Alexa's capabilities by building engaging voice and visual experiences."
            }

            // Question 12

            else if(scrollOffset > 26400 && scrollOffset < 28000 && scoreBoard.className == "Q11"){
                scoreASB.innerHTML= parseFloat(scoreASB.innerHTML) + 2;
                scoreBoard.classList = "Q12"
                text.innerHTML = "There's so much potential to voice user interfaces (VUIs). A VUI is a technology that allows people to use their voices to interact with computers and devices."
            }
        }
    })

    // Win condition

    /*if (scrollOffset > 2000) {
        console.log("You Win")
    }*/

    // Hiding and showing Dialogue box

    if (scrollOffset > 100 && scrollOffset < 1300 ){
        box.style.display='none'
        textBox.style.display='none'
    } 
    
    else if (scrollOffset > 2100 && scrollOffset < 2300 ){
        box.style.display='none'
        textBox.style.display='none'
    } 
    
    else if (scrollOffset > 3500 && scrollOffset < 5800 ){
        box.style.display='none'
        textBox.style.display='none'
    } 
    
    else if (scrollOffset > 6950 && scrollOffset < 7200 ){
        box.style.display='none'
        textBox.style.display='none'
    } 
    
    else if (scrollOffset > 8600 && scrollOffset < 10600 ){
        box.style.display='none'
        textBox.style.display='none'
    }
    
    else if (scrollOffset > 11800 && scrollOffset < 11900 ){
        box.style.display='none'
        textBox.style.display='none'
    }

    else if (scrollOffset > 13500 && scrollOffset < 14000 ){
        box.style.display='none'
        textBox.style.display='none'
    }

    else if (scrollOffset > 16410 && scrollOffset < 16500 ){
        box.style.display='none'
        textBox.style.display='none'
    }

    else if (scrollOffset > 17600 && scrollOffset < 17900 ){
        box.style.display='none'
        textBox.style.display='none'
    }

    else if (scrollOffset > 21480 && scrollOffset < 21550 ){
        box.style.display='none'
        textBox.style.display='none'
    }

    else if (scrollOffset > 23000 && scrollOffset < 24800 ){
        box.style.display='none'
        textBox.style.display='none'
    }

    else if (scrollOffset > 26150 && scrollOffset < 26300 ){
        box.style.display='none'
        textBox.style.display='none'
    }
    
   // Questions go here!!!

   if ( scrollOffset > 1000 && scrollOffset < 1300) {
        text.innerHTML = "1. Have you utilized machine learning algorithms and frameworks to build intelligent applications on AWS?"
    }
    
    //Greeting message
    
    else if(scrollOffset < 1300){
        text.innerHTML = "Hello there! I'm here to help you on your AWS journey :) Just answer my questions and we'll recommend an AWS speciality that might suit you!"
    }
    
    else if (scrollOffset > 2400 && scrollOffset < 2600) {
        text.innerHTML = "2. Have you built and trained machine learning models using AWS services like Amazon SageMaker or AWS DeepLens?"
    }
    
    else if (scrollOffset > 5000 && scrollOffset < 5600) {
        text.innerHTML = "3. Do you have advanced knowledge of networking concepts and experience in designing complex network architectures on AWS?"
    }
    
    else if (scrollOffset > 7000 && scrollOffset < 7200) {
        text.innerHTML = "4. Have you designed and implemented high-performance, secure, and scalable network infrastructures on AWS?"
    }
    
    else if (scrollOffset > 10000 && scrollOffset < 10400) {
        text.innerHTML = "5. Are you experienced in troubleshooting network connectivity and performance issues on AWS?"
    }
    
    else if (scrollOffset > 11800 && scrollOffset < 11900) {
        text.innerHTML = "6. Have you worked on projects that involved implementing and managing security controls and compliance on AWS?"
    }

    else if (scrollOffset > 13500 && scrollOffset < 14000) {
        text.innerHTML = "7. Are you experienced in configuring and managing AWS security services such as IAM and WAF?"
    }

    else if (scrollOffset > 16450 && scrollOffset < 16500) {
        text.innerHTML = "8. Have you conducted security assessments, penetration testing, or incident response on AWS environments?"
    }

    else if (scrollOffset > 18000 && scrollOffset < 18500) {
        text.innerHTML = "9. Are you experienced in designing and implementing scalable and efficient big data solutions on AWS?"
    }

    else if (scrollOffset > 21500 && scrollOffset < 21550) {
        text.innerHTML = "10. Have you implemented data lakes and data analytics solutions using AWS services like Amazon EMR, Redshift, or Athena?"
    }

    else if (scrollOffset > 24000 && scrollOffset < 24500) {
        text.innerHTML = "11. Have you developed and deployed Alexa skills using AWS services?"
    }

    else if (scrollOffset > 26200 && scrollOffset < 26300) {
        text.innerHTML = "12. Are you familiar with voice user interface (VUI) design and development using AWS services?"
    }





    // Lose Condition

    if (player.position.y > canvas.height) {
        reset()
    }

}

reset()
animate()

//Player Movement

addEventListener("keydown", ({ keyCode }) => {

    switch (keyCode) {

        case 65:
            console.log("left")
            keys.left.pressed = true
            break

        case 83:
            console.log("down")
            break

        case 68:
            console.log("right")
            keys.right.pressed = true
            break

        case 87:
            console.log("up")
            player.velocity.y -= 40
            break
            
        case 70:
            if(dBox.style.display ===''){
            console.log("Hide text")
            box.style.display='none'
            textBox.style.display='none'
            break
        }
            
        else{
            console.log("show text")
            box.style.display=''
            textBox.style.display=''
            break 
        }
    }

})


addEventListener("keyup", ({ keyCode }) => {

    switch (keyCode) {

        case 65:
            console.log("left")
            keys.left.pressed = false
            break

        case 83:
            console.log("down")
            break

        case 68:
            console.log("right")
            keys.right.pressed = false
            break

        case 87:
            console.log("up")
            player.velocity.y = 0
            break
    }

})

