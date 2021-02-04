# Chat Curriculum

Online resume creator with the help of a chatbot. To use, just go to [https://limajonas.github.io/chat-curriculum/](https://limajonas.github.io/chat-curriculum/ "https://limajonas.github.io/chat-curriculum/")


### Help add new languages

- After cloning the repository, start by creating a file in "languages/" with the name of your language, example "en-us.js". Use "language/pt-br.js" and "language/example.js" as a template.

[![example.js](https://i.imgur.com/jPXlGTQ.jpg "example.js")](https://i.imgur.com/jPXlGTQ.jpg "example.js")

- In "index.html" copy and paste the button with the text "PT-BR" renaming to your language and changing the number inside "changeLanguage()". **Attention: The number cannot be the same as the other buttons already added.**

[![Button](https://i.imgur.com/fIQQavy.jpg "Button")](https://i.imgur.com/fIQQavy.jpg "Button")

- in "js/setLanguage.js" add the button number inside the Switch, as shown in the example. Change "YOUR_LANGUAGE" to the same name as the variable created in your "language/your_language.js" earlier.

[![changeLanguage](https://i.imgur.com/c5J0p01.jpg "changeLanguage")](https://i.imgur.com/c5J0p01.jpg "changeLanguage")

- finally, in the "index.html" and "print.html" header, import the created language script, as shown in the example

[![header](https://i.imgur.com/nTaTr1D.jpg "header")](https://i.imgur.com/nTaTr1D.jpg "header")

In case of doubt. comment.
