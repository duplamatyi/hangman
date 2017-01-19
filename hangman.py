from flask import Flask, jsonify, render_template, request
from random import randint


app = Flask(__name__)

words = ['3dhubs', 'marvin', 'print', 'filament', 'order', 'layer']


@app.route('/')
def index():
    index = randint(0, len(words) - 1)

    return render_template('hangman.html', word_len=len(words[index]), index=index, word=words[index])


@app.route('/guess', methods=['POST'])
def guess():
    guess = request.form['guess'].lower()
    index = int(request.form['index'])
    hits = []
    for i, c in enumerate(words[index]):
        if guess == c:
            hits.append(i)

    return jsonify(hits=hits)
