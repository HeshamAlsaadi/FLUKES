from flask import Flask, request

app = Flask(__name__, static_url_path='')
app.debug = True

# a route where we will display a welcome message via an HTML template
@app.route("/")
def root():
  return app.send_static_file('index.html')

if __name__ == "__main__":
    app.run(debug=True)
