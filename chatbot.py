from chatterbot import ChatBot
from chatterbot.trainers import ChatterBotCorpusTrainer

# Uncomment the following lines to enable verbose logging
import logging
logging.basicConfig(level=logging.INFO)

# Create a new instance of a ChatBot
bot = ChatBot('ChatbotTeste')

# trainer = ChatterBotCorpusTrainer(bot)

# trainer.train(
#     "chatterbot.corpus.portuguese"
# )


# print('Escreva algo para começar...')

# # The following loop will execute each time the user enters input
# while True:
#     try:
#         user_input = input()

#         bot_response = bot.get_response(user_input)

#         print(bot_response)

#     # Press ctrl-c or ctrl-d on the keyboard to exit
#     except (KeyboardInterrupt, EOFError, SystemExit):
#         break