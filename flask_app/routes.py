# Author: Harshit Kandpal <hkandpal944@gmail.com>
from flask import current_app as app
from flask import render_template, redirect

@app.route('/')
def root():
	return redirect('/home')

@app.route('/<page>')
def route(page):
	return render_template(page)