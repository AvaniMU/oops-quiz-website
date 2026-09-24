
        // Quiz data
const quizData = [
            {
                question: "Q1. Which feature of OOPS describes the reusability of code?",
                options: ["a) Abstraction", "b) Encapsulation", "c) Polymorphism", "d) Inheritance"],
                correctAnswer: 3,
                explanation: "Inheritance is the feature of OOPS which allows users to reuse code already written. This feature inherits the features of another class in the programs."
            },
            {
                question: "Q2. Which of the following language supports polymorphism but not the classes?",
                options: ["a) C++ programming language", "b) Java programming language", "c) Ada programming language", "d) C# programming language"],
                correctAnswer: 2,
                explanation: "Ada is a programming language that disapproves of the concept of polymorphism but supports the concept of classes. It is an object-based language."
            },
            {
                question: "Q3. Which feature of OOPS derives the class from another class?",
                options: ["a) Inheritance", "b) Data hiding", "c) Encapsulation", "d) Polymorphism"],
                correctAnswer: 0,
                explanation: "Inheritance is an important OOPS feature which derives the class from the base class or superclass. This OOPS feature inherits the features of another class in the programs."
            },
            {
                question: "Q4. Which two features of object-oriented programming are the same?",
                options: [
                    "a) Abstraction and Polymorphism features are the same", 
                    "b) Inheritance and Encapsulation features are the same", 
                    "c) Encapsulation and Polymorphism features are the same", 
                    "d) Encapsulation and Abstraction"
                ],
                correctAnswer: 3,
                explanation: "Encapsulation and Abstraction are the same OOPS concepts. Encapsulation hides the features of the object and binds all the properties inside a single class. And abstraction is a feature that shows the required data to the user."
            },
            {
                question: "Q5. Which of these class is superclass of every class in Java?",
                options: ["a) String class", "b) Object class", "c) Abstract class", "d) ArrayList class"],
                correctAnswer: 1,
                explanation: "Object class is superclass of every class in Java."
            },
            {
                question: "Q6. Which of these method of Object class is used to obtain class of an object at run time?",
                options: ["a) get()", "b) void getclass()", "c) Class getclass()", "d) None of the mentioned"],
                correctAnswer: 2,
                explanation: "To get class of an object at run time Class getclass() is used."
            },
            {
                question: "Q7. Which of these keywords cannot be used for a class which has been declared final?",
                options: ["a) abstract", "b) extends", "c) abstract and extends", "d) none of the mentions"],
                correctAnswer: 0,
                explanation: "An abstract class is incomplete by itself and relies upon its subclasses to provide a complete implementation. If we declare a class final then no class can inherit that class, an abstract class needs its subclasses hence both final and abstract cannot be used for a same class."
            },
            {
                question: "Q8. Which of these keywords can be used to prevent inheritance of a class?",
                options: ["a) super", "b) constant", "c) class", "d) final"],
                correctAnswer: 3,
                explanation: "Declaring a class final implicitly declared all of its methods final, and makes the class inheritable."
            },
            {
                question: "Q9. If a class inheriting an abstract class does not define all of its function then it will be known as?",
                options: ["a) Abstract", "b) A simple class", "c) Static class", "d) None of the mentioned"],
                correctAnswer: 0,
                explanation: "Any subclass of an abstract class must either implement all of the abstract method in the superclass or be itself declared abstract."
            },
            {
                question: "Q10. Which of these is not a correct statement?",
                options: [
                    "a) Every class containing abstract method must be declared abstract", 
                    "b) Abstract class defines only the structure of the class not its implementation", 
                    "c) Abstract class can be initiated by new operator", 
                    "d) Abstract class can be inherited"
                ],
                correctAnswer: 2,
                explanation: "Abstract class cannot be directly initiated with new operator, Since abstract class does not contain any definition of implementation it is not possible to create an abstract object."
            },
            {
                question: "Q11. Which is true about an anonymous inner class?",
                options: [
                    "a) It can extend exactly one class and implement exactly one interface", 
                    "b) It can extend exactly one class and can implement multiple interfaces", 
                    "c) It can extend exactly one class or implement exactly one interface", 
                    "d) It can implement multiple interfaces regardless of whether it also extends a class"
                ],
                correctAnswer: 2,
                explanation: "The syntax of an anonymous inner class allows for only one named type after the new, and that type must be either a single interface or a single class."
            },
            {
                question: "Q12. Which is true about a method-local inner class?",
                options: ["a) It must be marked final", "b) It can be marked abstract", "c) It can be marked public", "d) It can be marked static"],
                correctAnswer: 1,
                explanation: "A method-local inner class can be abstract, although it means a subclass of the inner class must be created if the abstract class is to be used."
            },
            {
                question: "Q13. Which statement is true about a static nested class?",
                options: [
                    "a) You must have a reference to an instance of the enclosing class in order to instantiate it", 
                    "b) It does not have access to non static members of the enclosing class", 
                    "c) Its variables and methods must be static", 
                    "d) It must extend the enclosing class"
                ],
                correctAnswer: 1,
                explanation: "A static nested class is not tied to an instance of the enclosing class, and thus can't access the nonstatic members of the class."
            },
            {
                question: "Q14. Which constructs an anonymous inner class instance?",
                options: [
                    "a) Runnable r = new Runnable() { }", 
                    "b) Runnable r = new Runnable(public void run() { })", 
                    "c) Runnable r = new Runnable { public void run()();", 
                    "d) System.out.println(new Runnable() {public void run() {}})"
                ],
                correctAnswer: 3,
                explanation: "It defines an anonymous inner class instance, which also means it creates an instance of that new anonymous class at the same time."
            },
            {
                question: "Q15. Which among the following best describes polymorphism?",
                options: [
                    "a) It is the ability for a message/data to be processed in more than one form", 
                    "b) It is the ability for a message/data to be processed in only 1 form", 
                    "c) It is the ability for many messages/data to be processed in one way", 
                    "d) It is the ability for undefined message/data to be processed in at least one way"
                ],
                correctAnswer: 0,
                explanation: "It is actually the ability for a message/data to be processed in more than one form. The word polymorphism indicates many-forms."
            },
            {
                question: "Q16. Which type of function among the following shows polymorphism?",
                options: ["a) Inline function", "b) Virtual function", "c) Undefined functions", "d) Class member functions"],
                correctAnswer: 1,
                explanation: "Only virtual functions among these can show polymorphism. Class member functions can show polymorphism too but we should be sure that the same function is being overloaded or is a function of abstract class."
            },
            {
                question: "Q17. Which among the following can't be used for polymorphism?",
                options: ["a) Static member functions", "b) Member functions overloading", "c) Predefined operator overloading", "d) Constructor overloading"],
                correctAnswer: 0,
                explanation: "Static member functions are not property of any object. Hence it can't be considered for overloading/overriding. For polymorphism, function must be property of the object not only of class."
            },
            {
                question: "Q18. What is the process of defining two or more methods within the same class that have the same name but different parameters declaration?",
                options: ["a) method overloading", "b) method overriding", "c) method hiding", "d) none of the mentioned"],
                correctAnswer: 0,
                explanation: "Two or more methods can have the same name as long as their parameters declaration is different, the methods are said to be overloaded and the process is called method overloading."
            },
            {
                question: "Q19. When is method overloading determined?",
                options: ["a) At run time", "b) At compile time", "c) At coding time", "d) At execution time"],
                correctAnswer: 1,
                explanation: "Overloading is determined at compile time. Hence, it is also known as compile time polymorphism."
            },
            {
                question: "Q20. Which of the following is a type of polymorphism in Java?",
                options: ["a) Compile time polymorphism", "b) Execution time polymorphism", "c) Multiple polymorphism", "d) Multilevel polymorphism"],
                correctAnswer: 0,
                explanation: "There are two types of polymorphism in Java. Compile time polymorphism (overloading) and runtime polymorphism (overriding)."
            },
            {
                question: "Q21. Which of these is a super class of all exceptional type classes?",
                options: ["a) String", "b) RuntimeExceptions", "c) Throwable", "d) Cacheable"],
                correctAnswer: 2,
                explanation: "All the exception types are subclasses of the built in class Throwable."
            },
            {
                question: "Q22. What exception thrown by parseInt() method?",
                options: ["a) ArithmeticException", "b) ClassNotFoundException", "c) NullPointerException", "d) NumberFormatException"],
                correctAnswer: 3,
                explanation: "parseInt() method parses input into integer. The exception thrown by this method is NumberFormatException."
            },
            {
                question: "Q23. Which of these methods return description of an exception?",
                options: ["a) getException()", "b) getMessage()", "c) obtainDescription()", "d) obtainException()"],
                correctAnswer: 1,
                explanation: "getMessage() returns a description of the exception."
            },
            {
                question: "Q24. How many basic types of inheritance are provided as OOP features?",
                options: ["a) 4", "b) 3", "c) 2", "d) 1"],
                correctAnswer: 0,
                explanation: "There are basically 4 types of inheritance provided in OOP, namely, single level, multilevel, multiple and hierarchical inheritance."
            },
            {
                question: "Q25. Which programming language doesn't support multiple inheritance?",
                options: ["a) C++ and Java", "b) C and C++", "c) Java and SmallTalk", "d) Java"],
                correctAnswer: 3,
                explanation: "Java doesn't support multiple inheritance. But that feature can be implemented by using the interfaces concept."
            },
            {
                question: "Q26. Which of these keywords must be used to inherit a class?",
                options: ["a) super", "b) this", "c) extent", "d) extends"],
                correctAnswer: 3,
                explanation: "The 'extends' keyword is used to inherit a class in Java."
            },
            {
                question: "Q27. What is false about constructor?",
                options: [
                    "a) Constructors cannot be synchronized in Java", 
                    "b) Java does not provide default copy constructor", 
                    "c) Constructor can have a return type", 
                    "d) 'this' and 'super' can be used in a constructor"
                ],
                correctAnswer: 2,
                explanation: "The constructor cannot have a return type. It should create and return new objects. Hence it would give a compilation error."
            },
            {
                question: "Q28. Which among the following best describes constructor overloading?",
                options: [
                    "a) Defining one constructor in each class of a program", 
                    "b) Defining more than one constructor in single class", 
                    "c) Defining more than one constructor in single class with different signature", 
                    "d) Defining destructor with each constructor"
                ],
                correctAnswer: 2,
                explanation: "If more than one constructor is defined in a class with the same signature, then that results in error. The signatures must be different."
            },
            {
                question: "Q29. Which of these packages contains all the classes and methods required for event handling in Java?",
                options: ["a) java.applet", "b) java.awt", "c) java.event", "d) java.awt.event"],
                correctAnswer: 3,
                explanation: "Most of the event to which an applet response is generated by a user. Hence they are in Abstract Window Kit package, java.awt.event."
            },
            {
                question: "Q30. What is a listener in context to event handling?",
                options: [
                    "a) A listener is a variable that is notified when an event occurs", 
                    "b) A listener is a object that is notified when an event occurs", 
                    "c) A listener is a method that is notified when an event occurs", 
                    "d) None of the mentioned"
                ],
                correctAnswer: 1,
                explanation: "A listener is a object that is notified when an event occurs. It has two major requirements first, it must have been registered with one or more sources to receive notification about specific event types, and secondly it must implement methods to receive and process these notifications."
            }
        ];

        // DOM elements
        const quizInterface = document.getElementById('quiz-interface');
        const questionText = document.getElementById('question-text');
        const optionsContainer = document.getElementById('options-container');
        const explanation = document.getElementById('explanation');
        const currentQuestionDisplay = document.getElementById('current-question');
        const totalQuestionsDisplay = document.getElementById('total-questions');
        const prevBtn = document.getElementById('prev-btn');
        const nextBtn = document.getElementById('next-btn');
        const scoreContainer = document.getElementById('score-container');
        const scoreDisplay = document.getElementById('score');
        const totalDisplay = document.getElementById('total');
        const quizRange = document.getElementById('quiz-range');
        const startQuizBtn = document.getElementById('start-quiz');

        // Quiz state
        let currentQuestions = [];
        let currentQuestionIndex = 0;
        let userAnswers = [];
        let score = 0;

        // Initialize the quiz
        function initQuiz() {
            const range = quizRange.value;
            
            if (range === 'all') {
                currentQuestions = [...quizData];
            } else {
                const [start, end] = range.split('-').map(Number);
                currentQuestions = quizData.slice(start - 1, end);
            }
            
            currentQuestionIndex = 0;
            userAnswers = Array(currentQuestions.length).fill(null);
            score = 0;
            
            totalQuestionsDisplay.textContent = currentQuestions.length;
            totalDisplay.textContent = currentQuestions.length;
            
            quizInterface.classList.remove('hidden');
            scoreContainer.style.display = 'none';
            
            displayQuestion();
        }

        // Display current question
        function displayQuestion() {
            const question = currentQuestions[currentQuestionIndex];
            questionText.textContent = question.question;
            
            optionsContainer.innerHTML = '';
            question.options.forEach((option, index) => {
                const optionElement = document.createElement('div');
                optionElement.classList.add('option');
                optionElement.textContent = option;
                
                if (userAnswers[currentQuestionIndex] === index) {
                    optionElement.classList.add('selected');
                    
                    // Show if answer was correct/incorrect
                    if (userAnswers[currentQuestionIndex] === question.correctAnswer) {
                        optionElement.classList.add('correct');
                    } else {
                        optionElement.classList.add('incorrect');
                    }
                }
                
                optionElement.addEventListener('click', () => selectOption(index));
                optionsContainer.appendChild(optionElement);
            });
            
            // Show explanation if answer was selected
            if (userAnswers[currentQuestionIndex] !== null) {
                explanation.textContent = question.explanation;
                explanation.style.display = 'block';
            } else {
                explanation.style.display = 'none';
            }
            
            currentQuestionDisplay.textContent = currentQuestionIndex + 1;
            
            // Update button states
            prevBtn.disabled = currentQuestionIndex === 0;
            nextBtn.textContent = currentQuestionIndex === currentQuestions.length - 1 ? 'Finish' : 'Next';
        }

        // Select an option
        function selectOption(index) {
            // Only allow selection if not already answered
            if (userAnswers[currentQuestionIndex] === null) {
                userAnswers[currentQuestionIndex] = index;
                
                // Check if answer is correct
                const question = currentQuestions[currentQuestionIndex];
                if (index === question.correctAnswer) {
                    score++;
                }
                
                displayQuestion();
            }
        }

        // Navigate to previous question
        function prevQuestion() {
            if (currentQuestionIndex > 0) {
                currentQuestionIndex--;
                displayQuestion();
            }
        }

        // Navigate to next question or finish quiz
        function nextQuestion() {
            if (currentQuestionIndex < currentQuestions.length - 1) {
                currentQuestionIndex++;
                displayQuestion();
            } else {
                // Quiz finished
                scoreDisplay.textContent = score;
                scoreContainer.style.display = 'block';
            }
        }

        // Event listeners
        prevBtn.addEventListener('click', prevQuestion);
        nextBtn.addEventListener('click', nextQuestion);
        startQuizBtn.addEventListener('click', initQuiz);

        // Initialize
        displayQuestion();
    