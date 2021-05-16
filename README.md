# Trello Assistant

With Trello Assistant, I can open a file, lauch a application, write some data anywhere on my computer using the “Attachments” of Trello's Cards.


## Usage

For instance, in a card, I set the attachment to:

~~~

http://localhost/Trello_Assistant?do=open_scrivener

~~~

When I click on the attachment, Scrivener launchs.

## Requirements

* a local website (at `http://localhost/`)
* puts this folder in the `Sites` folder
* create your scripts `MyScript` in the folder `./ajax/_scripts/`
* "call" the script `MyScript` from within your Trello Panel using `http://localhost/TrelloAssistant?do=MyScript`
* That's it

## Call with parameters

First, call `http://localhost/TrelloAssistant` (mind: without `?do=`).

Fill the form with requirements (script name, params). Submit with the Generate button.

Copy/paste the code in the card's attachement.

For instance :

~~~trello
# In Trello's attachment

http://localhost/TrelloAssistant?do=myscript&with=%7Bvar%3A%22Ma%20Valeur%22%7D

~~~

With the code above, in the `myscript.rb`'s script:

~~~ruby

args = Ajax.with
# args = {var: "Ma Valeur"}

~~~

### Return message

You can display a return message in `TrelloAssistant` from the ruby script with:

~~~ruby
# In the ruby's ajax script

args = Ajax.with

# ... Here I treate args ...

# Return message displayed in TrelloAssistant (not Trello)
Ajax << {message: "Hello world! I come back! Keep me a beer!"}
~~~