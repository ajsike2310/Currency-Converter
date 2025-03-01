from flask import Flask, request, jsonify, send_file
import requests
from flask_cors import CORS
import matplotlib.pyplot as plt
import io
import threading
import time

app = Flask(__name__)
CORS(app)

conversion_history = []
rate_alerts = []

@app.route('/convert', methods=['GET'])
def convert_currency():
    base = request.args.get('base')
    target = request.args.get('target')
    amount = request.args.get('amount')
    response = requests.get(f'https://api.exchangerate-api.com/v4/latest/{base}')
    data = response.json()
    rate = data['rates'][target]
    converted_amount = float(amount) * rate
    conversion = {
        'base': base,
        'target': target,
        'amount': amount,
        'converted_amount': converted_amount
    }
    conversion_history.append(conversion)
    return jsonify({'converted_amount': converted_amount})

@app.route('/history', methods=['GET'])
def get_history():
    return jsonify(conversion_history)

@app.route('/set_alert', methods=['POST'])
def set_alert():
    alert = request.json
    rate_alerts.append(alert)
    return jsonify({'message': 'Alert set successfully'})

@app.route('/graph', methods=['GET'])
def get_graph():
    base = request.args.get('base')
    target = request.args.get('target')
    response = requests.get(f'https://api.exchangerate-api.com/v4/latest/{base}')
    data = response.json()
    rates = data['rates']

    plt.figure(figsize=(10, 5))
    plt.plot(list(rates.keys()), list(rates.values()), marker='o')
    plt.title(f'Exchange Rate Trends for {base}')
    plt.xlabel('Currency')
    plt.ylabel('Rate')
    plt.grid(True)

    img = io.BytesIO()
    plt.savefig(img, format='png')
    img.seek(0)
    return send_file(img, mimetype='image/png')

def check_rate_alerts():
    while True:
        for alert in rate_alerts:
            base = alert['base']
            target = alert['target']
            threshold = alert['threshold']
            response = requests.get(f'https://api.exchangerate-api.com/v4/latest/{base}')
            data = response.json()
            rate = data['rates'][target]
            if rate >= threshold:
                print(f'Alert: {base} to {target} rate has reached {rate}')
        time.sleep(60)  # Check every minute

if __name__ == '__main__':
    threading.Thread(target=check_rate_alerts).start()
    app.run(debug=True)
