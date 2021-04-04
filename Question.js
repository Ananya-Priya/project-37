class Question {

    constructor()
     {
      this.input1 = createInput("ENTER YOUR NAME HERE:");
      this.input2 = createInput("ENTER CORRECT OPTION");
      this.button = createButton('PLAY');
      this.question = createElement('h3');
      this.option1=createElement('h4');
      this.option2=createElement('h4');
      this.option3=createElement('h4');
      this.option4=createElement('h4');
      this.title=createElement('h1');
      
      
    }
    hide()
    {
      this.input1.hide();
      this.input2.hide();
      this.button.hide();
      this.title.hide();
      
    }
  
    display()
    {
      this.title.html("MY QUIZ");
      this.title.position(300,10);

      this.question.html("QUESTION: WHO HAVE WON THE MOST AMA AWARD?")
      this.question.position(150,80);

      this.option1.html("1.SELENA GOMEZ")
      this.option1.position(150,100);

      this.option2.html("2.TAYLOR SWIFT")
      this.option2.position(150,120);

      this.option3.html("3.ARIANA GRANDE")
      this.option3.position(150,140);

      this.option4.html("4.BLACKPINK")
      this.option4.position(150,160);
  
      this.input1.position(150, 200);
      this.input2.position(350,200);
      this.button.position(250, 300);
  
      this.button.mousePressed(()=>{
  
        this.input1.hide();
        this.input2.hide();
        this.button.hide();
        this.title.hide();
        
        player.name = this.input.value();
        playerCount+=1;//playerCount = playerCount+1
        player.index = playerCount;
  
        player.update();
        player.updateCount(playerCount);
       
        this.greeting.html("Hello " + player.name )
        this.greeting.position(130, 100);
      });
  
    }
  }