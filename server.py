from flask import Flask, request, jsonify
from flask_cors import CORS
from chatbot import bot

app = Flask(__name__)
CORS(app)
app.config["DEBUG"] = True

@app.route('/api_chatbot', methods=['GET'])
def api_mensagem():
    # Check if an ID was provided as part of the URL.
    # If ID is provided, assign it to a variable.
    # If no ID is provided, display an error in the browser.
    if 'mensagem' in request.args:
        mensagem = request.args['mensagem']
    else:
        return "Erro: Nenhuma mensagem encontrada."

    resposta = jsonify({ 'resposta': str(bot.get_response(mensagem)) }) 

    return resposta

app.run()