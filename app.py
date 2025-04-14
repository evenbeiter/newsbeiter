from flask import Flask, request, jsonify
from flask_cors import CORS
import requests

app = Flask(__name__)
CORS(app, origins=["https://evenbeiter.github.io"])


@app.route("/api/fetch", methods=["GET", "POST"])
def fetch():
    target_url = request.args.get("url")
    if not target_url:
        return jsonify({"error": "Missing 'url' parameter"}), 400

    try:
        if request.method == "GET":
            res = requests.get(target_url, params=request.args)
        else:
            res = requests.post(target_url, data=request.form)

        content_type = res.headers.get("Content-Type", "text/plain")

        # If response is JSON, return as JSON
        if "application/json" in content_type:
            return jsonify(res.json())
        else:
            return res.text, res.status_code, {"Content-Type": content_type}

    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route('/embed', methods=['GET'])
def embed():
    # Get the URL to proxy from the query parameters
    url = request.args.get('url')
    if not url:
        return "No URL provided", 400
    try:
        response = requests.get(url)
        # Pass through the content and headers for embedding in an iframe
        return Response(response.content, headers=dict(response.headers))
    except requests.exceptions.RequestException as e:
        return f"Error fetching URL: {e}", 500


@app.route("/")
def home():
    return "Python API Proxy is running."
