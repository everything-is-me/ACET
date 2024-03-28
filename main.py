from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/submit-form', methods=['POST'])
def submit_form():
    form_data = request.json  # Get form data from request
    # Process and store form data in MySQL database (you need to implement this part)
    print('Form data received:', form_data)
    return jsonify({'message': 'Form submission successful'})

if __name__ == '__main__':
    app.run(debug=True)
