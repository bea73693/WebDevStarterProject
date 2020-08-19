from flask import Flask, render_template, request

app = Flask(__name__)


@app.route("/flip_color", methods=['POST'])
def flip_color():
    json_data = request.get_json()
    color1 = json_data['color1']
    color2 = json_data['color2']

    response = {
        "color1" : color2,
        "color2" : color1
    }
    return response


@app.route("/change_color", methods=['POST'])
def change_color():
    json_data = request.get_json()
    return json_data


@app.route('/')
def render():
    return render_template('table.html')


