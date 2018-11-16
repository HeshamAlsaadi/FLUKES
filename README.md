# FLUKES

## 1.1 Overview
An automatic reserved engineering threats detection tool “FLUKS”. The tool optimizes and extracts intelligent threat modules using a special designed machine learning algorithm technique, which allows forensic experts to visualize and explore different threats monitored by firewall, IDS/IPS and anti-virus server attacks. When a content of a file is loaded into FLUKS, a representative summary is executed with least significant attacks. It distinguishes the trace changes found in different attacks arc and re-routes the trails of routes back to origin source of attack. Forensic investigators can then determine a set of certain fields relevant to the attack according to the corresponding target.

## 1.2 Pre-Requisite

    1. python 3.x
    2. pip
    3. Flask

## 1.3 Installation

### 1.3.1 Python Version

We recommend using the latest version of Python 3. Flask supports Python 3.4 and newer, Python 2.7, and PyPy.

### 1.3.2 Virtual environments

Use a virtual environment to manage the dependencies of the project. Python 3 comes bundled with the [venv] module to create virtual environments. If you’re using a modern version of Python, you can continue the installation process or read more [here].

If you’re using `Python 2`, see [Install virtualenv] first. If you are using `Anaconda` make sure you donwload the latest version.

### Running the application using Anaconda

### Windows:

    1. run cmd
    2. cd C:\Users\User\Anaconda3
    3. py -3 -m venv venv
    4. venv\Scripts\activate
    
Your shell prompt will change to show the name of the activated environment.    
    
### Install Flask:

Within the activated environment, use the following command to install `Flask`:

    5. pip install Flask

### 1.3.3 Donwload the Application

    6. Download and unzip the project download.
    7. Project file directory should be located into C:\Users\User\Anaconda3\Scripts
    
### 1.3.4 Run the Application    

Navigate to the extracted application folder in `Scripts`, your enviroment should look like:

    8. (venv) C:\Users\User\Anaconda3\Scripts\FLUKES>
    9.  set FLASK_APP=app.py
    10. flask run

You should be able to see the following:

```python
 * Serving Flask app "app.py"
 * Environment: production
   WARNING: Do not use the development server in a production environment.
   Use a production WSGI server instead.
 * Debug mode: off
 * Running on http://127.0.0.1:5000/ (Press CTRL+C to quit)
``` 
Navigate with your browser to

    11. Navigate with your browser to http://127.0.0.1:5000/
    
If you wish to change the port from 5000 to 80, change this line in app.py .

from 
```python
app.run(debug=True)
```
to
```python
app.run(host='0.0.0.0', port=80) 
``` 

[Install virtualenv]: http://flask.pocoo.org/docs/1.0/installation/#install-install-virtualenv
[venv]: https://docs.python.org/3/library/venv.html#module-venv
[here]: http://flask.pocoo.org/docs/1.0/installation/#install-create-env
