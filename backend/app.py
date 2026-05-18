from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/api/health", methods=["GET"])
def health():
    return jsonify({
        "status": "UP",
        "service": "python-backend",
        "message": "Backend is running successfully"
    })

@app.route("/api/message", methods=["GET"])
def message():
    return jsonify({
        "message": "Hello from Python Flask Backend"
    })

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)