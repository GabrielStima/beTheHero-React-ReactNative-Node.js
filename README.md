# Be The Hero - Rocketseat

## Resume

This project was taken from OmniStack Week 11 [Rocketseat](<[https://rocketseat.com.br/](https://rocketseat.com.br/)>).

Rocketseat is a platform of programming courses aimed at the set of possibilities **JavaScript**, Node.js, React, React Native.

This platform to draw the attention of developers and to disseminate knowledge provides a week-long training. This week, the Rocketseat team provides one class per day and one group for each day on the Discord (Communication platform) so that in addition to answering questions, the developers increase their network.

In the 11th week OmniStack (So called the JS technology set), the project was the _"Be The Hero"_ which had the premise of helping to connect NGOs and taskmasters who wanted to help with any cause. With that, a backend was developed in **Node.js** that uses sqlite, to store the information, a website in **React** for NGOs to register in the system and register their cases and a mobile application in **React Native** so that the _"heroes"_ get in touch with NGOs to provide help.

## Project

The project was divided into 3 parts:

### Backend

In the backend an application was built in **node.js**, with **express**, **sqlite3** and **knex** to integrate the 2 and to validate the data and test the application the **celebrate** and **jest**.

### Frontend

In the frontend an application was built using **React**.

### Mobile

On mobile an application was created using **React Native** and **Expo**, thus running on both iOS and Android.

## Application

NOTE: Developing this entire application was a new experience, since my notions of node are basic and I had never programmed in React Native before.

From here there are two ways to follow:

1º - Use on your computer;

2º - Use for the demo;

### Case 1º

In this case you must clone the repository, which will contain the 3 projects, if you do not have **node.js** installed on your machine [Click here](<[https://nodejs.org/en/](https://nodejs.org/en/)>), done that open in the terminal inside the folder **backend** and type `npm install` and after finishing installing the dependencies type `npm start` so a server running on the **_http://localhost:3333_**. At that moment you can minimize this terminal because it must be running so that the other projects work 100%.

Now open the terminal inside the frontend folder and run the command `npm install` after finishing the installation of the dependencies run the command`npm start` and after that it will run on **_http://localhost:3000_**. To continue the test, this part is geared towards NGOs so to be able to enter the application you must register as if it were an NGO. After registering it will display an alert with an ID that is the ID of your NGO and you must copy it before continuing and paste it in the input and login.
After logging in you will enter a screen where you will have all your cases registered which at the beginning is **0** then go to the button **Register new cases** to be inserted in the homepage and in the mobile application that some hero can get in touch and help.

To finish the project, and to be a complete experience after registering some cases, you can go to the terminal that is running frontend and inside it click on the `Ctrl + C` keys to stop the application execution. With it not running anymore, enter the mobile folder and open a terminal and type `npm install` after that run the command`npm start`, after that it will open a
browser with a QR Code at the bottom of the screen. Above it will be a URL **exp://xxx.xxx.xxx.xxx:19000** apart from **exp://** and **:19000**, open the mobile application, enter src, and services, inside there is a file called api.js open it in your text editor and modify the baseURL , instead of that you are going to add "http: // {what's left of the above URL}: 3333".
Now go on your cell phone and enter his store, search for **Expo** and download it.
After installation open it at the top of the app you will have the option **scan QR Code**, clicking on this option will open your camera then point it to the QR Code of the screen that had been opened by the program and the application will work In your cellphone. It will have a list with **infinite scroll**, that is, as you scroll down the list it will search for more cases if there are and you can enter those cases and send a message by E-mail or WhatsApp to NGO owner of the case.

### Case 2º

In the process of completion.
