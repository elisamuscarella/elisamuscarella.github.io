---
title: Snake Game
layout: post
post-image: /assets/images/snake_pygame.png
image_fit: contain
description: A guided snake game tutorial in Python.
tags:
- Python
- Tutorial
---


In this exercise, we will make a very simple snake game. The aim in this exercise is to get a bit more used to loops, lists and conditionals.

I have already prepared the “skeleton” of the game using a library called **pygame**, and also made some boring technical things ready for you such as reading the keyboard and game window settings. 

You will have 3 files but **you will be interested in only one** in this exercise. I will still give a short description about what each file does for those who are *overly interested.*

1. run_the_game.py: This file contains the necessary code to open a game window, update the window etc.
2. snake.py: This is a *class* to create the snake and the fruits in the game. Everything appears on the screen are defined here originally. Whenever you write “snake.*SOMETHING*”, it actually reaches the variables/methods in this class. Since we haven’t covered the classes during the lecture, you can think about this file as a *meta-data* and completely ignore its existence. 
3. **game_play.py:** This is the ONLY file that we will be editing today. We will program how to make the snake walk, eat as well as spawning the fruits when they are eaten. We will also program how the game ends if the snake hits the walls or itself if we have enough time.

## How to run:

The code that you have already will start the *game engine* without any snakes, fruits and nothing has implemented in terms of the game play. To start it, just run the script called **run_the_game.py**. You will always be running this script even if you are editing the script called game_play.py.

## Steps:

1. Spawn a “snake” on the window. Your snake will be a cute pixel in the beginning. The pixel will have [x, y] coordinates. We will define it as “snake.body”.
2. Make the “pixel” (a.k.a your snake) move as you press WASD keys.
3. Spawn another random “pixel” in the window, and this will be your fruit/food. Be careful, you don’t want to spawn a lot of them. Just spawn when there is no other fruit. We will define it as “snake.fruit”.
4. Time to eat the fruit. If the head of the snake is on the fruit, you will “eat” it. Don’t forget to set snake.isfruit to False when you eat it. You can update the score by using “snake.score”.
5. 🌶️ If you eat a fruit, you will grow. Now our snake will have not only one but two pixels! snake.body was [x, y] but now it will be [[x1, y1], [x2, y2]]. Each time you eat a new fruit, you will add one more pixel to the body.
    1. This will affect the move_with_keys() function. Now we will be moving *all* the pixels of the snake.body, rather than the *head* pixel.
6. Make your snake move constantly. If you modify the move_with_keys() function such that you keep the last pressed *even if there is no key pressed*, your snake will keep moving!
7. Game over scenario. If your snake’s head is the same as your window walls, or any pixel that the snake has then it is game over.
    1. 🌶️ To check if the snake collides with itself is a bit challenging. You may skip this of you want. However, if you want to try that, you need to iterate pixels over snake.body and check if the head is on any of the body pixels.


