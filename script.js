class QuizApp {
    constructor() {
        this.currentTopic = null;
        this.currentQuestionIndex = 0;
        this.userAnswers = []; // Stores the index of the user's chosen option
        this.score = 0;
        this.timer = null;
        this.timeLeft = 30; // Time per question
        this.totalTime = 0; // Total time taken for the quiz
        this.startTime = null; // Timestamp when quiz started

        // Hardcoded quiz data for different topics
        this.quizData = {
            space: {
                title: "Space Exploration",
                icon: "fas fa-rocket",
                questions: [
                    {
                        question: "What is the largest planet in our solar system?",
                        options: ["Earth", "Jupiter", "Saturn", "Neptune"],
                        correct: 1,
                        explanation: "Jupiter is the largest planet, with a mass greater than all other planets combined."
                    },
                    {
                        question: "Which space agency successfully landed the first humans on the Moon?",
                        options: ["ESA", "Roscosmos", "NASA", "CNSA"],
                        correct: 2,
                        explanation: "NASA's Apollo 11 mission successfully landed Neil Armstrong and Buzz Aldrin on the Moon in 1969."
                    },
                    {
                        question: "What is the closest star to Earth (besides the Sun)?",
                        options: ["Alpha Centauri", "Sirius", "Proxima Centauri", "Betelgeuse"],
                        correct: 2,
                        explanation: "Proxima Centauri is the closest star to Earth at about 4.24 light-years away."
                    },
                    {
                        question: "How long does it take for light from the Sun to reach Earth?",
                        options: ["8 minutes", "1 hour", "1 day", "1 second"],
                        correct: 0,
                        explanation: "Light from the Sun takes approximately 8 minutes and 20 seconds to reach Earth."
                    },
                    {
                        question: "Which planet is known for having the most prominent ring system?",
                        options: ["Jupiter", "Uranus", "Saturn", "Neptune"],
                        correct: 2,
                        explanation: "Saturn has the most visible and extensive ring system in our solar system."
                    },
                    {
                        question: "What is the name of the galaxy that contains our solar system?",
                        options: ["Andromeda", "Milky Way", "Whirlpool", "Triangulum"],
                        correct: 1,
                        explanation: "Our solar system is located in the Milky Way galaxy."
                    },
                    {
                        question: "Which planet has the strongest gravitational pull?",
                        options: ["Earth", "Jupiter", "Saturn", "Mars"],
                        correct: 1,
                        explanation: "Jupiter has the strongest gravitational pull due to its massive size and density."
                    },
                    {
                        question: "What is the temperature of absolute zero in space?",
                        options: ["-273°C", "-100°C", "-200°C", "-300°C"],
                        correct: 0,
                        explanation: "Absolute zero is -273.15°Celsius or 0 Kelvin, the coldest possible temperature."
                    },
                    {
                        question: "Which mission was the first to successfully land a rover on Mars?",
                        options: ["Viking 1", "Pathfinder", "Spirit", "Curiosity"],
                        correct: 1,
                        explanation: "The Mars Pathfinder mission in 1997 was the first to successfully deploy a rover (Sojourner) on Mars."
                    },
                    {
                        question: "What phenomenon causes the Northern and Southern Lights?",
                        options: ["Solar wind", "Meteor showers", "Moon phases", "Planetary alignment"],
                        correct: 0,
                        explanation: "Solar wind particles interacting with Earth's magnetic field create the aurora borealis and aurora australis."
                    }
                ]
            },
            mythology: {
                title: "Mythical Creatures",
                icon: "fas fa-dragon",
                questions: [
                    {
                        question: "In Greek mythology, what creature has the body of a lion and the head of a human?",
                        options: ["Griffin", "Sphinx", "Chimera", "Manticore"],
                        correct: 1,
                        explanation: "The Sphinx is known for its lion's body, human head, and often eagle's wings."
                    },
                    {
                        question: "Which Norse mythological creature is an eight-legged horse?",
                        options: ["Fenrir", "Sleipnir", "Jörmungandr", "Huginn"],
                        correct: 1,
                        explanation: "Sleipnir is Odin's eight-legged horse, capable of traveling between worlds."
                    },
                    {
                        question: "What is a phoenix known for doing?",
                        options: ["Breathing ice", "Rising from ashes", "Turning to stone", "Flying backwards"],
                        correct: 1,
                        explanation: "The phoenix is a mythical bird that cyclically burns itself and rises from its own ashes."
                    },
                    {
                        question: "In Japanese folklore, what is a Kitsune?",
                        options: ["Dragon", "Fox spirit", "Sea serpent", "Mountain giant"],
                        correct: 1,
                        explanation: "Kitsune are intelligent fox spirits in Japanese folklore, often possessing magical abilities."
                    },
                    {
                        question: "Which creature from Celtic mythology shapeshifts from seal to human?",
                        options: ["Banshee", "Selkie", "Leprechaun", "Dullahan"],
                        correct: 1,
                        explanation: "Selkies are mythological beings capable of shapeshifting from seal to human form."
                    },
                    {
                        question: "What does the Minotaur have the head of?",
                        options: ["Lion", "Eagle", "Bull", "Wolf"],
                        correct: 2,
                        explanation: "The Minotaur from Greek mythology has the head of a bull and the body of a man."
                    },
                    {
                        question: "Which creature is said to turn people to stone with its gaze?",
                        options: ["Medusa", "Harpy", "Siren", "Cyclops"],
                        correct: 0,
                        explanation: "Medusa, one of the three Gorgon sisters, could turn anyone who looked at her to stone."
                    },
                    {
                        question: "In Chinese mythology, what do dragons typically symbolize?",
                        options: ["Evil and destruction", "Good fortune and power", "Death and sorrow", "Chaos and madness"],
                        correct: 1,
                        explanation: "Unlike Western dragons, Chinese dragons are symbols of good fortune, power, and prosperity."
                    },
                    {
                        question: "What is a Kraken?",
                        options: ["Sky serpent", "Underground dweller", "Sea monster", "Forest guardian"],
                        correct: 2,
                        explanation: "The Kraken is a legendary sea monster, often depicted as a giant squid or octopus."
                    },
                    {
                        question: "Which bird is associated with wisdom in Greek mythology?",
                        options: ["Eagle", "Raven", "Owl", "Swan"],
                        correct: 2,
                        explanation: "The owl is sacred to Athena, the Greek goddess of wisdom, and symbolizes knowledge and wisdom."
                    }
                ]
            },
            future: {
                title: "Future Technology",
                icon: "fas fa-robot",
                questions: [
                    {
                        question: "What does AI stand for in technology?",
                        options: ["Automated Intelligence", "Artificial Intelligence", "Advanced Integration", "Algorithmic Interface"],
                        correct: 1,
                        explanation: "AI stands for Artificial Intelligence, the simulation of human intelligence in machines."
                    },
                    {
                        question: "What is quantum computing primarily designed to solve?",
                        options: ["Simple calculations", "Complex problems", "Basic programming", "File storage"],
                        correct: 1,
                        explanation: "Quantum computing uses quantum mechanics to solve complex problems much faster than classical computers."
                    },
                    {
                        question: "What is the Internet of Things (IoT)?",
                        options: ["A new social media platform", "Connected everyday devices", "A computer virus", "A programming language"],
                        correct: 1,
                        explanation: "IoT refers to the network of physical devices connected to the internet, collecting and sharing data."
                    },
                    {
                        question: "What technology enables virtual reality experiences?",
                        options: ["Radio waves", "Head-mounted displays", "Solar panels", "Magnetic fields"],
                        correct: 1,
                        explanation: "VR primarily uses head-mounted displays along with sensors to create immersive virtual experiences."
                    },
                    {
                        question: "What is blockchain technology best known for?",
                        options: ["Video streaming", "Secure transactions", "Photo editing", "Music production"],
                        correct: 1,
                        explanation: "Blockchain is a distributed ledger technology known for enabling secure, transparent transactions."
                    },
                    {
                        question: "What does 5G technology primarily improve?",
                        options: ["Battery life", "Internet speed", "Screen resolution", "Camera quality"],
                        correct: 1,
                        explanation: "5G technology significantly improves internet speed and reduces latency for mobile communications."
                    },
                    {
                        question: "What is machine learning?",
                        options: ["Teaching robots to walk", "Computers learning from data", "Building physical machines", "Programming video games"],
                        correct: 1,
                        explanation: "Machine learning is a subset of AI where computers learn and improve from experience without being explicitly programmed."
                    },
                    {
                        question: "What is augmented reality (AR)?",
                        options: ["Completely virtual worlds", "Digital info overlaid on real world", "Advanced robotics", "Quantum physics"],
                        correct: 1,
                        explanation: "AR overlays digital information and virtual objects onto the real world through devices like smartphones or AR glasses."
                    },
                    {
                        question: "What is the primary goal of autonomous vehicles?",
                        options: ["Faster speeds", "Self-driving capability", "Better fuel efficiency", "Louder engines"],
                        correct: 1,
                        explanation: "Autonomous vehicles are designed to navigate and operate without human intervention using sensors and AI."
                    },
                    {
                        question: "What is nanotechnology?",
                        options: ["Very large technology", "Manipulation of matter at atomic scale", "Time travel research", "Space exploration tools"],
                        correct: 1,
                        explanation: "Nanotechnology involves manipulating matter at the atomic and molecular scale, typically 1-100 nanometers."
                    }
                ]
            },
            // NEW QUIZ DATA ADDED BELOW
            general: {
                title: "General Knowledge",
                icon: "fas fa-lightbulb",
                questions: [
                    {
                        question: "What is the capital city of France?",
                        options: ["Berlin", "Madrid", "Paris", "Rome"],
                        correct: 2,
                        explanation: "Paris is the capital and most populous city of France."
                    },
                    {
                        question: "Which continent is the Sahara Desert located on?",
                        options: ["Asia", "Africa", "North America", "Australia"],
                        correct: 1,
                        explanation: "The Sahara Desert is the largest hot desert in the world, located in North Africa."
                    },
                    {
                        question: "How many planets are in our solar system?",
                        options: ["7", "8", "9", "10"],
                        correct: 1,
                        explanation: "There are 8 planets in our solar system: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, and Neptune."
                    },
                    {
                        question: "What is the chemical symbol for water?",
                        options: ["O2", "H2O", "CO2", "NaCl"],
                        correct: 1,
                        explanation: "H2O is the chemical formula for water, indicating two hydrogen atoms and one oxygen atom."
                    },
                    {
                        question: "Who painted the Mona Lisa?",
                        options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
                        correct: 2,
                        explanation: "The Mona Lisa was painted by the Italian Renaissance artist Leonardo da Vinci."
                    },
                    {
                        question: "Which animal is known as the 'King of the Jungle'?",
                        options: ["Tiger", "Lion", "Elephant", "Bear"],
                        correct: 1,
                        explanation: "The lion is commonly referred to as the 'King of the Jungle'."
                    },
                    {
                        question: "What is the smallest country in the world?",
                        options: ["Monaco", "Nauru", "Vatican City", "San Marino"],
                        correct: 2,
                        explanation: "Vatican City is the smallest independent state in the world, both in area and population."
                    },
                    {
                        question: "What is the primary language spoken in Brazil?",
                        options: ["Spanish", "English", "Portuguese", "French"],
                        correct: 2,
                        explanation: "Portuguese is the official and most widely spoken language in Brazil."
                    },
                    {
                        question: "Which planet is known as the 'Red Planet'?",
                        options: ["Mars", "Jupiter", "Venus", "Mercury"],
                        correct: 0,
                        explanation: "Mars is often called the 'Red Planet' due to its reddish appearance caused by iron oxide on its surface."
                    },
                    {
                        question: "What is the currency of Japan?",
                        options: ["Yuan", "Won", "Yen", "Rupee"],
                        correct: 2,
                        explanation: "The official currency of Japan is the Japanese Yen (JPY)."
                    }
                ]
            },
            math: {
                title: "Mathematics",
                icon: "fas fa-calculator",
                questions: [
                    {
                        question: "What is the value of Pi (π) rounded to two decimal places?",
                        options: ["3.12", "3.14", "3.16", "3.18"],
                        correct: 1,
                        explanation: "Pi (π) is approximately 3.14159, so rounded to two decimal places it is 3.14."
                    },
                    {
                        question: "What is 7 multiplied by 9?",
                        options: ["56", "63", "72", "81"],
                        correct: 1,
                        explanation: "7 multiplied by 9 equals 63."
                    },
                    {
                        question: "If a square has a side length of 5 cm, what is its area?",
                        options: ["10 cm²", "20 cm²", "25 cm²", "30 cm²"],
                        correct: 2,
                        explanation: "The area of a square is calculated by side length multiplied by itself. So, 5 cm * 5 cm = 25 cm²."
                    },
                    {
                        question: "What is the sum of the angles in a triangle?",
                        options: ["90 degrees", "180 degrees", "270 degrees", "360 degrees"],
                        correct: 1,
                        explanation: "The sum of the interior angles in any Euclidean triangle is always 180 degrees."
                    },
                    {
                        question: "What is the square root of 144?",
                        options: ["10", "11", "12", "13"],
                        correct: 2,
                        explanation: "The square root of 144 is 12, because 12 * 12 = 144."
                    },
                    {
                        question: "How many sides does a hexagon have?",
                        options: ["5", "6", "7", "8"],
                        correct: 1,
                        explanation: "A hexagon is a polygon with six sides and six angles."
                    },
                    {
                        question: "What is the next number in the sequence: 1, 4, 9, 16, ...?",
                        options: ["20", "25", "30", "36"],
                        correct: 1,
                        explanation: "This is a sequence of perfect squares: 1*1=1, 2*2=4, 3*3=9, 4*4=16. The next would be 5*5=25."
                    },
                    {
                        question: "What is 25% of 200?",
                        options: ["25", "50", "75", "100"],
                        correct: 1,
                        explanation: "25% is equivalent to 1/4. So, 1/4 of 200 is 50."
                    },
                    {
                        question: "If x + 3 = 10, what is the value of x?",
                        options: ["5", "6", "7", "8"],
                        correct: 2,
                        explanation: "To find x, subtract 3 from both sides: x = 10 - 3, so x = 7."
                    },
                    {
                        question: "What type of number is 7 (e.g., Even, Odd, Prime, Composite)?",
                        options: ["Even", "Odd", "Composite", "Perfect"],
                        correct: 1,
                        explanation: "7 is an odd number because it cannot be divided evenly by 2. It is also a prime number, but 'Odd' is a direct classification."
                    }
                ]
            },
            science: {
                title: "Science",
                icon: "fas fa-flask",
                questions: [
                    {
                        question: "What is the process by which plants make their own food?",
                        options: ["Respiration", "Transpiration", "Photosynthesis", "Germination"],
                        correct: 2,
                        explanation: "Photosynthesis is the process used by plants, algae, and certain bacteria to convert light energy into chemical energy."
                    },
                    {
                        question: "What is the chemical symbol for gold?",
                        options: ["Ag", "Fe", "Au", "Hg"],
                        correct: 2,
                        explanation: "Au is the chemical symbol for gold, derived from its Latin name 'aurum'."
                    },
                    {
                        question: "Which gas do plants absorb from the atmosphere?",
                        options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
                        correct: 2,
                        explanation: "Plants absorb carbon dioxide from the atmosphere for photosynthesis."
                    },
                    {
                        question: "What is the Earth's natural satellite?",
                        options: ["Sun", "Mars", "Moon", "Venus"],
                        correct: 2,
                        explanation: "The Moon is Earth's only natural satellite."
                    },
                    {
                        question: "What is the study of living organisms called?",
                        options: ["Geology", "Chemistry", "Biology", "Physics"],
                        correct: 2,
                        explanation: "Biology is the natural science that studies life and living organisms."
                    },
                    {
                        question: "What is the force that pulls objects towards the center of the Earth?",
                        options: ["Magnetism", "Friction", "Gravity", "Tension"],
                        correct: 2,
                        explanation: "Gravity is the fundamental force of attraction between masses."
                    },
                    {
                        question: "Which organ pumps blood throughout the human body?",
                        options: ["Lungs", "Brain", "Liver", "Heart"],
                        correct: 3,
                        explanation: "The heart is a muscular organ that pumps blood through the circulatory system."
                    },
                    {
                        question: "What state of matter has a definite volume but no definite shape?",
                        options: ["Solid", "Liquid", "Gas", "Plasma"],
                        correct: 1,
                        explanation: "A liquid has a definite volume but takes the shape of its container."
                    },
                    {
                        question: "What is the unit of electric current?",
                        options: ["Volt", "Ohm", "Ampere", "Watt"],
                        correct: 2,
                        explanation: "The ampere (A) is the SI unit of electric current."
                    },
                    {
                        question: "Which layer of the Earth is molten rock?",
                        options: ["Crust", "Mantle", "Outer Core", "Inner Core"],
                        correct: 2,
                        explanation: "The Outer Core is a liquid layer primarily composed of molten iron and nickel."
                    }
                ]
            },
            sap: {
                title: "SAP Systems",
                icon: "fas fa-boxes",
                questions: [
                    {
                        question: "What does SAP stand for?",
                        options: ["Systems, Applications & Products in Data Processing", "Software, Analytics & Processes", "Strategic Application Platform", "System Analysis Program"],
                        correct: 0,
                        explanation: "SAP stands for Systems, Applications & Products in Data Processing."
                    },
                    {
                        question: "Which module in SAP is primarily used for Financial Accounting?",
                        options: ["SAP MM", "SAP SD", "SAP FI", "SAP HR"],
                        correct: 2,
                        explanation: "SAP FI (Financial Accounting) module handles the financial transactions and reporting within an organization."
                    },
                    {
                        question: "What is an 'ERP' system?",
                        options: ["Employee Relations Program", "Enterprise Resource Planning", "External Reporting Protocol", "Electronic Records Platform"],
                        correct: 1,
                        explanation: "ERP stands for Enterprise Resource Planning, which integrates all facets of an operation, including product planning, development, manufacturing, sales and marketing."
                    },
                    {
                        question: "In SAP, what is a 'client'?",
                        options: ["An end-user", "A three-digit key that distinguishes data and processes in a system", "A programming language", "A type of report"],
                        correct: 1,
                        explanation: "A client in SAP is a commercial, organizational, and technical unit within an R/3 system, represented by a three-digit alphanumeric key."
                    },
                    {
                        question: "Which SAP tool is used for creating custom reports and programs?",
                        options: ["SAP Fiori", "SAP BW", "ABAP", "SAP HANA"],
                        correct: 2,
                        explanation: "ABAP (Advanced Business Application Programming) is SAP's proprietary programming language used for developing applications for SAP R/3."
                    },
                    {
                        question: "What is the purpose of the SAP SD module?",
                        options: ["Production Planning", "Materials Management", "Sales and Distribution", "Human Resources"],
                        correct: 2,
                        explanation: "SAP SD (Sales and Distribution) module manages customer-related activities from sales order to delivery and billing."
                    },
                    {
                        question: "What is SAP HANA?",
                        options: ["An old version of SAP ERP", "A database and application platform", "A mobile application", "A CRM system"],
                        correct: 1,
                        explanation: "SAP HANA is an in-memory, column-oriented, relational database management system, often used as an application platform."
                    },
                    {
                        question: "Which transaction code (T-code) is commonly used to view a vendor master record in SAP?",
                        options: ["MM01", "VA01", "XK03", "FB50"],
                        correct: 2,
                        explanation: "XK03 is a common T-code used in SAP to display a vendor master record."
                    },
                    {
                        question: "What does 'S/4HANA' signify in SAP terminology?",
                        options: ["SAP's fourth generation mobile app", "The next generation of SAP ERP built on the HANA platform", "A specific SAP database version", "SAP's cloud offering"],
                        correct: 1,
                        explanation: "SAP S/4HANA is SAP's latest generation ERP business suite built on the SAP HANA database."
                    },
                    {
                        question: "Which of these is NOT a core SAP module?",
                        options: ["FI (Financial Accounting)", "CO (Controlling)", "PP (Production Planning)", "Word Processing (WP)"],
                        correct: 3,
                        explanation: "FI, CO, and PP are core SAP ERP modules. Word Processing (WP) is not an SAP module."
                    }
                ]
            },
            java: {
                title: "Java Programming",
                icon: "fab fa-java",
                questions: [
                    {
                        question: "Which keyword is used to define a class in Java?",
                        options: ["class", "object", "type", "structure"],
                        correct: 0,
                        explanation: "The 'class' keyword is used to declare a class in Java."
                    },
                    {
                        question: "Which method is the entry point for a Java application?",
                        options: ["start()", "run()", "main()", "execute()"],
                        correct: 2,
                        explanation: "The 'main' method (public static void main(String[] args)) is where a Java application begins execution."
                    },
                    {
                        question: "What is the purpose of the 'final' keyword in Java?",
                        options: ["To make a class abstract", "To prevent inheritance or modification", "To define a static method", "To handle exceptions"],
                        correct: 1,
                        explanation: "The 'final' keyword can be used to make a variable a constant, prevent a method from being overridden, or prevent a class from being inherited."
                    },
                    {
                        question: "Which concept in OOP refers to the ability of an object to take on many forms?",
                        options: ["Inheritance", "Encapsulation", "Abstraction", "Polymorphism"],
                        correct: 3,
                        explanation: "Polymorphism means 'many forms', allowing objects to be treated as instances of their parent class."
                    },
                    {
                        question: "Which of these is a correct way to declare an array in Java?",
                        options: ["int arr[];", "int arr = new int[5];", "int[] arr;", "All of the above"],
                        correct: 3,
                        explanation: "All options are valid ways to declare an array in Java. The second option also initializes it."
                    },
                    {
                        question: "Which exception is thrown when an attempt is made to divide by zero?",
                        options: ["NullPointerException", "IndexOutOfBoundsException", "ArithmeticException", "IOException"],
                        correct: 2,
                        explanation: "ArithmeticException is thrown when an exceptional arithmetic condition occurs, such as division by zero."
                    },
                    {
                        question: "What is 'JVM' in Java?",
                        options: ["Java Verification Module", "Java Virtual Machine", "Java Version Manager", "Java Development Model"],
                        correct: 1,
                        explanation: "JVM stands for Java Virtual Machine, an abstract machine that enables your computer to run Java programs."
                    },
                    {
                        question: "Which of the following is NOT a Java access modifier?",
                        options: ["public", "private", "protected", "friend"],
                        correct: 3,
                        explanation: "Java's access modifiers are public, private, protected, and default (no keyword). 'friend' is used in C++."
                    },
                    {
                        question: "What is the purpose of 'super' keyword in Java?",
                        options: ["To call the current class constructor", "To refer to the superclass members", "To create a new instance of a class", "To declare a static variable"],
                        correct: 1,
                        explanation: "The 'super' keyword is used to refer to immediate parent class members (variables, methods, and constructors)."
                    },
                    {
                        question: "Which interface should be implemented for sorting objects in Java?",
                        options: ["Serializable", "Cloneable", "Comparable", "Iterable"],
                        correct: 2,
                        explanation: "The 'Comparable' interface provides a natural ordering for objects of a class."
                    }
                ]
            },
            python: {
                title: "Python Programming",
                icon: "fab fa-python",
                questions: [
                    {
                        question: "Which keyword is used to define a function in Python?",
                        options: ["function", "def", "func", "define"],
                        correct: 1,
                        explanation: "The 'def' keyword is used to define (declare) a function in Python."
                    },
                    {
                        question: "What is the correct way to comment out multiple lines in Python?",
                        options: ["// This is a comment", "/* This is a comment */", "# This is a comment", "''' This is a comment '''"],
                        correct: 3,
                        explanation: "Triple quotes ('''...''' or \"\"\"...\") are used for multi-line comments (docstrings) in Python."
                    },
                    {
                        question: "Which of these data types is ordered and mutable in Python?",
                        options: ["Tuple", "List", "Set", "Dictionary"],
                        correct: 1,
                        explanation: "A List is an ordered and mutable (changeable) collection of items in Python."
                    },
                    {
                        question: "How do you start an 'if' statement in Python?",
                        options: ["if (x > y)", "if x > y:", "if x > y then", "if x > y {"],
                        correct: 1,
                        explanation: "Python uses 'if condition:' followed by an indented block for conditional statements."
                    },
                    {
                        question: "What is the output of 'print(type([]))'?",
                        options: ["<class 'list'>", "<class 'array'>", "<class 'tuple'>", "<class 'object'>"],
                        correct: 0,
                        explanation: "The type() function returns the type of the object. [] is a list, so it returns <class 'list'>."
                    },
                    {
                        question: "Which module is commonly used for mathematical operations in Python?",
                        options: ["system", "random", "math", "data"],
                        correct: 2,
                        explanation: "The 'math' module provides access to mathematical functions."
                    },
                    {
                        question: "What is the correct syntax for a 'for' loop that iterates from 0 to 4 (inclusive)?",
                        options: ["for i in range(5):", "for i from 0 to 4:", "loop i in 0..4:", "foreach i in [0,1,2,3,4]:"],
                        correct: 0,
                        explanation: "The `range(5)` function generates numbers from 0 up to (but not including) 5, making it 0, 1, 2, 3, 4."
                    },
                    {
                        question: "What is a 'pip' in Python?",
                        options: ["A common data type", "A package installer", "A type of loop", "A debugging tool"],
                        correct: 1,
                        explanation: "PIP is the package installer for Python, used to install and manage software packages."
                    },
                    {
                        question: "Which of the following is immutable in Python?",
                        options: ["List", "Dictionary", "Set", "Tuple"],
                        correct: 3,
                        explanation: "Tuples are immutable, meaning their elements cannot be changed after creation."
                    },
                    {
                        question: "How do you import a module named 'os'?",
                        options: ["include os", "import os", "using os", "require os"],
                        correct: 1,
                        explanation: "The 'import' keyword is used to bring modules into the current namespace."
                    }
                ]
            },
            css: {
                title: "CSS",
                icon: "fab fa-css3-alt",
                questions: [
                    {
                        question: "What does CSS stand for?",
                        options: ["Creative Style Sheets", "Cascading Style Sheets", "Computer Style Sheets", "Colorful Style Standards"],
                        correct: 1,
                        explanation: "CSS stands for Cascading Style Sheets, used for describing the presentation of a document written in a markup language."
                    },
                    {
                        question: "Which property is used to change the background color of an element?",
                        options: ["color", "bgcolor", "background-color", "fill-color"],
                        correct: 2,
                        explanation: "The 'background-color' property sets the background color of an element."
                    },
                    {
                        question: "How do you select an element with the ID 'header'?",
                        options: [".header", "#header", "header", "element.header"],
                        correct: 1,
                        explanation: "In CSS, '#' is used to select elements by their ID."
                    },
                    {
                        question: "Which CSS property controls the text size?",
                        options: ["text-style", "font-size", "text-size", "font-style"],
                        correct: 1,
                        explanation: "The 'font-size' property sets the size of the text."
                    },
                    {
                        question: "What is the correct CSS syntax for making all <p> elements bold?",
                        options: ["p {font-weight:bold;}", "p.bold {}", "<p style='font-weight:bold;'>", "bold {p;}"],
                        correct: 0,
                        explanation: "The correct syntax for styling all <p> elements is `p { property: value; }`."
                    },
                    {
                        question: "Which property is used to add space between elements?",
                        options: ["padding", "margin", "border", "spacing"],
                        correct: 1,
                        explanation: "The 'margin' property creates space around elements, outside of any defined borders."
                    },
                    {
                        question: "Which value of the 'display' property makes an element behave like a block element, but can be aligned alongside other elements?",
                        options: ["inline", "block", "inline-block", "none"],
                        correct: 2,
                        explanation: "An 'inline-block' element acts like a block element, allowing setting of width and height, but flows like an inline element."
                    },
                    {
                        question: "What is the correct CSS for a flexible box layout?",
                        options: ["display: grid;", "display: flex;", "display: block;", "display: inline;"],
                        correct: 1,
                        explanation: "The 'display: flex;' property enables a flexbox layout, allowing items within the container to be arranged easily."
                    },
                    {
                        question: "How do you include an external stylesheet in an HTML file?",
                        options: ["<style src='style.css'>", "<link rel='stylesheet' href='style.css'>", "<css href='style.css'>", "<sheet 'style.css'>"],
                        correct: 1,
                        explanation: "The <link> tag with `rel='stylesheet'` and `href` attribute is used to link external CSS files."
                    },
                    {
                        question: "Which property is used for shadows around elements?",
                        options: ["text-shadow", "element-shadow", "box-shadow", "shadow"],
                        correct: 2,
                        explanation: "The 'box-shadow' property adds shadow effects around an element's frame."
                    }
                ]
            },
            html: {
                title: "HTML",
                icon: "fab fa-html5",
                questions: [
                    {
                        question: "What does HTML stand for?",
                        options: ["Hyper Text Markup Language", "High-level Text Machine Language", "Hyperlink and Text Markup Language", "Home Tool Markup Language"],
                        correct: 0,
                        explanation: "HTML stands for Hyper Text Markup Language, the standard markup language for creating web pages."
                    },
                    {
                        question: "Which HTML tag is used to define an internal stylesheet?",
                        options: ["<script>", "<css>", "<style>", "<link>"],
                        correct: 2,
                        explanation: "The <style> tag is used to define CSS rules within the HTML document itself."
                    },
                    {
                        question: "Which element is used to specify a footer for a document or section?",
                        options: ["<bottom>", "<footer>", "<section>", "<aside>"],
                        correct: 1,
                        explanation: "The <footer> element defines a footer for a document or section."
                    },
                    {
                        question: "What is the correct HTML element for inserting a line break?",
                        options: ["<lb>", "<break>", "<br>", "<newline>"],
                        correct: 2,
                        explanation: "The <br> tag is an empty tag used to insert a single line break."
                    },
                    {
                        question: "Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?",
                        options: ["title", "src", "alt", "href"],
                        correct: 2,
                        explanation: "The 'alt' attribute provides alternative text for an image, which is useful for accessibility and when the image fails to load."
                    },
                    {
                        question: "Which HTML element is used to define the title of a document?",
                        options: ["<head>", "<title>", "<meta>", "<body>"],
                        correct: 1,
                        explanation: "The <title> element specifies the title of the HTML document (shown in browser tab/window)."
                    },
                    {
                        question: "Which HTML tag is used to create an unordered list?",
                        options: ["<ol>", "<ul>", "<li>", "<dl>"],
                        correct: 1,
                        explanation: "The <ul> tag defines an unordered (bulleted) list."
                    },
                    {
                        question: "What is the correct HTML for creating a hyperlink?",
                        options: ["<a name='url'>text</a>", "<a href='url'>text</a>", "<link href='url'>text</link>", "<url>text</url>"],
                        correct: 1,
                        explanation: "The <a> tag with the `href` attribute is used to create hyperlinks."
                    },
                    {
                        question: "Which HTML element is used for the largest heading?",
                        options: ["<h6>", "<heading>", "<head>", "<h1>"],
                        correct: 3,
                        explanation: "The <h1> to <h6> tags are used for headings, with <h1> being the largest and most important."
                    },
                    {
                        question: "What is the correct HTML element to play video files?",
                        options: ["<media>", "<video>", "<movie>", "<play>"],
                        correct: 1,
                        explanation: "The <video> tag is used to embed video content in an HTML document."
                    }
                ]
            },
            javascript: {
                title: "JavaScript",
                icon: "fab fa-js",
                questions: [
                    {
                        question: "Which keyword is used to declare a variable that cannot be reassigned?",
                        options: ["var", "let", "const", "static"],
                        correct: 2,
                        explanation: "The 'const' keyword is used to declare a constant, meaning its value cannot be reassigned after initialization."
                    },
                    {
                        question: "What is the correct way to write a JavaScript array?",
                        options: ["var colors = (1:'red', 2:'green')", "var colors = 'red','green','blue'", "var colors = ['red', 'green', 'blue']", "var colors = {'red','green','blue'}"],
                        correct: 2,
                        explanation: "Arrays in JavaScript are defined using square brackets `[]` with elements separated by commas."
                    },
                    {
                        question: "Which function is used to print content to the browser's console?",
                        options: ["print()", "log()", "console.log()", "display()"],
                        correct: 2,
                        explanation: "The `console.log()` method is used to output messages to the web console."
                    },
                    {
                        question: "What is the operator for 'strict equality' in JavaScript?",
                        options: ["==", "===", "!=", "!=="],
                        correct: 1,
                        explanation: "The '===' operator checks for strict equality, meaning it compares both value and type without type coercion."
                    },
                    {
                        question: "Which of the following is NOT a JavaScript framework/library?",
                        options: ["React", "Angular", "Vue", "Django"],
                        correct: 3,
                        explanation: "Django is a high-level Python web framework; React, Angular, and Vue are JavaScript frameworks/libraries."
                    },
                    {
                        question: "How do you add a single-line comment in JavaScript?",
                        options: ["<!-- Comment -->", "// Comment", "/* Comment */", "# Comment"],
                        correct: 1,
                        explanation: "Single-line comments in JavaScript start with `//`."
                    },
                    {
                        question: "Which event occurs when the user clicks on an HTML element?",
                        options: ["onchange", "onmouseover", "onclick", "onsubmit"],
                        correct: 2,
                        explanation: "The 'onclick' event handler is triggered when a user clicks on an element."
                    },
                    {
                        question: "What is the purpose of 'NaN' in JavaScript?",
                        options: ["Not a Number", "New array element", "Negative and Neutral", "Null or None"],
                        correct: 0,
                        explanation: "NaN (Not a Number) is a property of the global object. It represents a value that is not a legal number."
                    },
                    {
                        question: "Which method would you use to remove the last element from an array?",
                        options: ["shift()", "pop()", "splice()", "slice()"],
                        correct: 1,
                        explanation: "The `pop()` method removes the last element from an array and returns that element."
                    },
                    {
                        question: "What is the correct syntax for referring to an external script called 'script.js'?",
                        options: ["<script src='script.js'>", "<script href='script.js'>", "<script name='script.js'>", "<script link='script.js'>"],
                        correct: 0,
                        explanation: "The <script> tag with the `src` attribute is used to link an external JavaScript file."
                    }
                ]
            }
        };

        this.init();
    }

    /**
     * Initializes the QuizApp by binding event listeners and showing the topic selection screen.
     */
    init() {
        this.bindEvents();
        this.showTopicSelection();
    }

    /**
     * Binds event listeners to various UI elements.
     */
    bindEvents() {
        // Event listeners for topic selection cards
        document.querySelectorAll('.topic-card').forEach(card => {
            card.addEventListener('click', (e) => {
                const topic = e.currentTarget.dataset.topic;
                this.startQuiz(topic);
            });
        });

        // Event listeners for quiz navigation buttons
        document.getElementById('nextBtn').addEventListener('click', () => this.nextQuestion());
        document.getElementById('prevBtn').addEventListener('click', () => this.prevQuestion());

        // Event listeners for result screen buttons
        document.getElementById('restartBtn').addEventListener('click', () => this.restartQuiz());
        document.getElementById('newTopicBtn').addEventListener('click', () => this.showTopicSelection());
        document.getElementById('reviewBtn').addEventListener('click', () => this.showReview());
        document.getElementById('backToResultsBtn').addEventListener('click', () => this.showResults());
    }

    /**
     * Displays the topic selection screen and hides other screens.
     */
    showTopicSelection() {
        document.getElementById('topicSelection').classList.remove('hidden');
        document.getElementById('quizInterface').classList.add('hidden');
        document.getElementById('resultsScreen').classList.add('hidden');
        document.getElementById('reviewScreen').classList.add('hidden');
        // Ensure the question card is not flipped when returning to topic selection
        document.getElementById('questionCard').classList.remove('flipped');
    }

    /**
     * Starts the quiz for the selected topic.
     * @param {string} topic - The key for the selected quiz topic in quizData.
     */
    startQuiz(topic) {
        this.currentTopic = topic;
        this.currentQuestionIndex = 0;
        // Initialize user answers with null for each question
        this.userAnswers = Array(this.quizData[topic].questions.length).fill(null);
        this.score = 0;
        this.totalTime = 0;
        this.startTime = Date.now(); // Record start time for overall quiz duration

        document.getElementById('topicSelection').classList.add('hidden');
        document.getElementById('quizInterface').classList.remove('hidden');

        this.loadQuestion();
    }

    /**
     * Loads and displays the current question and its answer options.
     */
    loadQuestion() {
        const quizTopic = this.quizData[this.currentTopic];
        const question = quizTopic.questions[this.currentQuestionIndex];
        const totalQuestions = quizTopic.questions.length;

        // Stop any existing timer
        this.stopTimer();

        // Reset timer for the new question
        this.timeLeft = 30;
        this.updateTimerDisplay(); // Update display immediately
        this.startTimer(); // Start timer for the new question

        // Update question counter and progress bar
        document.getElementById('questionCounter').textContent = `Question ${this.currentQuestionIndex + 1} of ${totalQuestions}`;
        document.getElementById('progressText').textContent = `${this.currentQuestionIndex + 1} / ${totalQuestions}`;
        this.updateProgressBar();

        // Update question icon
        const questionIconElement = document.getElementById('questionIcon');
        questionIconElement.innerHTML = `<i class="${quizTopic.icon} text-white text-xl"></i>`;
        // Add and remove bounce-in for icon animation
        questionIconElement.classList.remove('bounce-in');
        void questionIconElement.offsetWidth; // Trigger reflow
        questionIconElement.classList.add('bounce-in');


        // Update question text
        const questionTextElement = document.getElementById('questionText');
        questionTextElement.textContent = question.question;
        questionTextElement.classList.remove('fade-in');
        void questionTextElement.offsetWidth; // Trigger reflow
        questionTextElement.classList.add('fade-in');


        // Populate answer options
        const answerOptionsDiv = document.getElementById('answerOptions');
        answerOptionsDiv.innerHTML = ''; // Clear previous options

        question.options.forEach((option, index) => {
            const button = document.createElement('button');
            button.textContent = option;
            button.dataset.index = index;
            button.classList.add(
                'answer-option',
                'w-full', 'py-3', 'px-4', 'rounded-xl', 'text-white', 'font-medium',
                'text-left', 'transition-all', 'duration-200', 'ease-in-out',
                'focus:outline-none', 'focus:ring-2', 'focus:ring-offset-2',
                'bg-gray-800', 'hover:bg-blue-700', 'hover:border-blue-400', 'border', 'border-transparent',
                'shadow-md', 'slide-up' // Apply slide-up animation
            );
            button.style.animationDelay = `${index * 0.05}s`; // Stagger animation for options

            // If user has already answered this question, show their selection and correct answer
            if (this.userAnswers[this.currentQuestionIndex] !== null) {
                button.disabled = true; // Disable further clicks
                if (index === question.correct) {
                    button.classList.add('bg-green-600', 'border-green-400', 'hover:bg-green-600', 'focus:ring-green-400');
                } else if (index === this.userAnswers[this.currentQuestionIndex]) {
                    button.classList.add('bg-red-600', 'border-red-400', 'hover:bg-red-600', 'focus:ring-red-400');
                }
            } else {
                // Attach event listener only if not already answered
                button.addEventListener('click', () => this.selectAnswer(index));
            }
            answerOptionsDiv.appendChild(button);
        });

        // Update navigation button states
        this.updateNavigationButtons();

        // Apply fade-in animation to the card's content
        const questionCardFrontContent = document.querySelector('#questionCard .flip-card-front');
        questionCardFrontContent.classList.remove('fade-in');
        void questionCardFrontContent.offsetWidth; // Trigger reflow
        questionCardFrontContent.classList.add('fade-in');
    }

    /**
     * Handles user answer selection.
     * @param {number} selectedIndex - The index of the option selected by the user.
     */
    selectAnswer(selectedIndex) {
        const question = this.quizData[this.currentTopic].questions[this.currentQuestionIndex];

        // Only record answer if not already answered or if it's a timeout
        if (this.userAnswers[this.currentQuestionIndex] === null) {
            this.userAnswers[this.currentQuestionIndex] = selectedIndex; // Store user's answer
            this.stopTimer(); // Stop the timer once an answer is selected

            const options = document.getElementById('answerOptions').children;

            // Disable all options and provide feedback
            for (let i = 0; i < options.length; i++) {
                const optionButton = options[i];
                optionButton.disabled = true; // Disable further clicks

                // Remove generic hover styles
                optionButton.classList.remove('hover:bg-blue-700', 'hover:border-blue-400');

                if (i === question.correct) {
                    optionButton.classList.add('bg-green-600', 'border-green-400', 'pulse-correct');
                } else if (i === selectedIndex) {
                    optionButton.classList.add('bg-red-600', 'border-red-400', 'pulse-incorrect');
                } else {
                    // Dim incorrect, unselected answers
                    optionButton.classList.add('opacity-50');
                }
            }

            // Check if the answer is correct and update score
            if (selectedIndex === question.correct) {
                this.score++;
            }

            // Calculate time taken for this question and add to total
            const timeTakenForQuestion = 30 - this.timeLeft; // If user answers quickly
            this.totalTime += Math.max(0, timeTakenForQuestion); // Ensure time added is non-negative
        }

        // Update navigation button states immediately after answer selection
        this.updateNavigationButtons();
    }

    /**
     * Updates the width of the progress bar and the progress text.
     */
    updateProgressBar() {
        const totalQuestions = this.quizData[this.currentTopic].questions.length;
        const progressPercentage = ((this.currentQuestionIndex + 1) / totalQuestions) * 100;
        document.getElementById('progressBar').style.width = `${progressPercentage}%`;
    }

    /**
     * Navigates to the next question or shows results if at the end.
     */
    nextQuestion() {
        // If the current question hasn't been answered (e.g., timer ran out and auto-advanced),
        // we still proceed. The 'Next' button is disabled until an answer is selected for current question.
        // So, this function is only called when an answer is already selected or time runs out.

        this.currentQuestionIndex++;
        const totalQuestions = this.quizData[this.currentTopic].questions.length;

        if (this.currentQuestionIndex < totalQuestions) {
            this.loadQuestion();
        } else {
            this.showResults();
        }
    }

    /**
     * Navigates to the previous question.
     */
    prevQuestion() {
        if (this.currentQuestionIndex > 0) {
            this.currentQuestionIndex--;
            this.loadQuestion();
        }
    }

    /**
     * Updates the state of the navigation buttons (Previous/Next).
     * The 'Next' button is enabled only after an answer is selected for the current question.
     */
    updateNavigationButtons() {
        const totalQuestions = this.quizData[this.currentTopic].questions.length;
        document.getElementById('prevBtn').disabled = this.currentQuestionIndex === 0;
        // Enable next button only if an answer has been recorded for the current question
        document.getElementById('nextBtn').disabled = this.userAnswers[this.currentQuestionIndex] === null;
    }

    /**
     * Starts the countdown timer for the current question.
     */
    startTimer() {
        this.stopTimer(); // Clear any existing timer
        this.timeLeft = 30; // Reset time for current question
        this.updateTimerDisplay(); // Update display immediately
        document.getElementById('timer').classList.remove('timer-pulse'); // Remove pulse if active

        this.timer = setInterval(() => {
            this.timeLeft--;
            this.updateTimerDisplay();

            if (this.timeLeft <= 10 && this.timeLeft > 0) {
                document.getElementById('timer').classList.add('timer-pulse'); // Add pulse animation when low on time
            } else if (this.timeLeft <= 0) {
                this.stopTimer();
                this.selectAnswer(-1); // Mark as unanswered/timed out (-1 indicates no answer)
                // Auto-advance after a brief delay so user can see the answer feedback
                setTimeout(() => this.nextQuestion(), 1000);
            }
        }, 1000);
    }

    /**
     * Stops the current countdown timer.
     */
    stopTimer() {
        if (this.timer) {
            clearInterval(this.timer);
            this.timer = null;
            document.getElementById('timer').classList.remove('timer-pulse');
        }
    }

    /**
     * Updates the timer display in the UI.
     */
    updateTimerDisplay() {
        document.getElementById('timeLeft').textContent = this.timeLeft;
    }

    /**
     * Displays the final results screen after the quiz is complete.
     */
    showResults() {
        this.stopTimer(); // Ensure timer is stopped
        document.getElementById('quizInterface').classList.add('hidden');
        document.getElementById('reviewScreen').classList.add('hidden');
        document.getElementById('resultsScreen').classList.remove('hidden');

        const totalQuestions = this.quizData[this.currentTopic].questions.length;
        const percentage = totalQuestions > 0 ? ((this.score / totalQuestions) * 100).toFixed(0) : 0;
        const endTime = Date.now();
        const quizDuration = Math.round((endTime - this.startTime) / 1000); // Total time in seconds

        document.getElementById('finalScore').textContent = `${this.score} / ${totalQuestions}`;
        document.getElementById('finalPercentage').textContent = `${percentage}%`;
        document.getElementById('finalTime').textContent = `${quizDuration}s`;
    }

    /**
     * Displays the review screen, showing all questions with user's answers and correct answers.
     */
    showReview() {
        document.getElementById('resultsScreen').classList.add('hidden');
        document.getElementById('quizInterface').classList.add('hidden');
        document.getElementById('reviewScreen').classList.remove('hidden');

        const reviewContentDiv = document.getElementById('reviewContent');
        reviewContentDiv.innerHTML = ''; // Clear previous content

        this.quizData[this.currentTopic].questions.forEach((q, index) => {
            const userAnswerIndex = this.userAnswers[index];
            const userAnswerText = userAnswerIndex !== null && userAnswerIndex !== -1
                ? q.options[userAnswerIndex]
                : "No answer / Timed out";
            const correctAnswerText = q.options[q.correct];
            const isCorrect = (userAnswerIndex === q.correct);

            const reviewCard = document.createElement('div');
            reviewCard.classList.add(
                'glass', 'border', 'rounded-xl', 'p-6', 'fade-in', 'slide-up',
                isCorrect ? 'border-green-400/50' : 'border-red-400/50'
            );

            // Reverted to original explanation display, removed "Get Deeper Explanation" button
            reviewCard.innerHTML = `
                <p class="text-gray-300 text-sm mb-2">Question ${index + 1}</p>
                <h3 class="font-bold text-white mb-4">${q.question}</h3>
                <p class="text-gray-200 mb-2">Your Answer: <span class="font-medium ${isCorrect ? 'text-green-300' : 'text-red-300'}">${userAnswerText} ${isCorrect ? '<i class="fas fa-check-circle ml-1"></i>' : '<i class="fas fa-times-circle ml-1"></i>'}</span></p>
                <p class="text-gray-200 mb-4">Correct Answer: <span class="font-medium text-green-300">${correctAnswerText}</span></p>
                <div class="p-3 bg-gray-800 rounded-lg text-gray-300 text-sm mb-4">
                    <strong class="text-cyan-400">Explanation:</strong> ${q.explanation}
                </div>
            `;
            reviewContentDiv.appendChild(reviewCard);
        });
    }

    /**
     * Resets the quiz to the first question of the current topic.
     */
    restartQuiz() {
        this.stopTimer();
        this.startQuiz(this.currentTopic); // Re-start quiz for the same topic
    }
}

// Initialize the quiz app when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    new QuizApp();
});
