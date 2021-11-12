# Bikini Bottom Wars Game

![Image](assets/images/readme/images/different-screens.png)

Based on the [Rock, Paper, Scissors, Lizard, Spock game](https://www.instructables.com/How-to-Play-Rock-Paper-Scissors-Lizard-Spock/), the player chooses to play against a SpongeBob show character.

## Features

The first modal that is shown to the player is that they choose their name and start to play. 

![Image](assets/images/readme/images/modal-1.png)

If they do not choose one, an alert(confirm alert) will be displayed to indicate that they will simply be called 'Player' in the game.

![Image](assets/images/readme/images/modal-1-alert.png)

The second modal is for player to choose a rival. There are three different options: SpongeBob, Patrick star and Squidward. Each of them has a different theme color. Spongebob is selected by default.

![Image](assets/images/readme/images/modal-2.png)

Once the player chooses an opponent, the game begins. A countdown is started using the words of the game and when it ends the first battle is defined. 

The player must choose an option during this countdown, if not, the countdown starts again and a message is displayed to the player.

![countdown-no-choice](https://user-images.githubusercontent.com/39537127/141439507-dee9ad68-73f5-496b-9321-0350bde93169.GIF)

If the player chose an option, it is compared to the computer's choice to determine who is the winner of that battle. 

![countdown-choice](https://user-images.githubusercontent.com/39537127/141439562-f0eca3c0-5acf-4cec-aa1e-9df4f5a1c255.GIF)

The first to get 3 battles wins the game.

![final-message](https://user-images.githubusercontent.com/39537127/141442004-06999a7e-68c7-487d-8afb-af3f41812174.GIF)

The final modal is shown to allow the player to play again or quit the game.



## Testing

### Validator Testing

#### HTML

- No errors were returned when passing through the official [W3C validator](https://validator.w3.org/nu/)

![Image](assets/images/readme/validators/html-validator.png)

#### CSS

- No errors were found when passing through the official [Jigsaw validator](https://jigsaw.w3.org/css-validator)

![Image](assets/images/readme/validators/css-validator.png)


#### JS

- No errors were found when passing through the official [JsHint validator](https://jshint.com/)
- Detects 5 unused variables. They are functions that I have used within other functions.

![Image](assets/images/readme/validators/jshint-test.png)


### Lighthouse Testing

![Image](assets/images/readme/validators/lighthouse-test.png)


## Deployment

- This site has been deployed on GitHub pages by following these steps:
    - In the GitHub repository, navigate to the Settings tab and in the left menu select Pages.
    - From the source section drop-down menu, select the Master Branch.
    - Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment.
    - A link to the newly created page will be displayed here.

[Here you can see the page](https://alerebal.github.io/codeInstitutePortfolio2)  
