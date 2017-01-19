# About

Simple HANGMAN that works as follows:
* chooses a random word out of 6 words: (3dhubs, marvin, print, filament, order, layer)
* prints the spaces for the letters of the word (eg: _ _ _ _ _  for order)
* the user can try to ask for a letter and that should be shown on the puzzle (eg: asks for "r" and now it shows _ r _ _ r for order)
* the user can only ask 5 letters that don't exist in the word and then it's game over
* if the user wins, congratulate him!

# Technologies:

* Flask 0.12 /w Python 3.6
* JQuery, CSS
* Docker

# Install

Assuming you have Docker installed and you don't need sudo for the docker command:

```shell
git clone git@github.com:duplamatyi/hangman.git .
docker build -t flask-hangman .
docker run -d -p 5000:5000 flask-hangman
```

If everything went ok open http://localhost:5000/ and play the game.
