#!/usr/bin/python3
from flask import Flask, request, jsonify, send_file, after_this_request, send_from_directory
from typing import Dict
import os
import pathlib

import backend.youtube_dl_wrapper as youtube_dl
import uuid

IS_DEBUG = os.environ.get('IS_DEBUG') is not None

app = Flask(__name__, static_url_path='/', static_folder='frontend/build')
if IS_DEBUG:
    from flask_cors import CORS
    CORS(app)

downloads: Dict[str, youtube_dl.Downloader] = {}

@app.post('/download/request')
def download():
    print(request)
    content = request.json
    print(content)
    identifier = str(uuid.uuid4())
    downloader = youtube_dl.Downloader(content['url'], content['format'])
    downloader.start()
    downloads[identifier] = downloader
    return jsonify({'id': identifier})

@app.get('/downloads/<id>/status')
def get_download_status(id: str):
    print('**********')
    print(id)
    print(downloads[id].get_status())
    print('**********')
    if id in downloads:
        return jsonify(downloads[id].get_status())


@app.get('/downloads')
def list_downloads():
    downloads = [f for f in os.listdir('uploads') if os.path.isfile(os.path.join('uploads', f))]
    # remove default file, there for git to keep the dir as Heroku wont let us.
    if '.ignore' in downloads:
        downloads.remove('.ignore')
    return jsonify(downloads)

@app.route('/downloads/<filename>')
def download_from_uploads(filename: str):
    d = pathlib.Path.cwd()
    path = d / 'uploads' / filename
    file_handle = open(path, 'rb')
    return send_file(file_handle, as_attachment=True, download_name= filename)

@app.get('/downloads/<filename>/delete')
def remove_from_uploads(filename: str):
    d = pathlib.Path.cwd()
    path = d / 'uploads' / filename
    os.remove(path)
    return 'ok'


@app.route('/downloads/<id>/download')
def download_file(id: str) -> None:
    if id in downloads:
        filename = downloads[id].filename
        filename = os.path.basename(filename)
        filename, _ = os.path.splitext(filename)
        filename = f"{filename}.mp3"
        d = pathlib.Path.cwd()
        path = d / 'uploads' / filename
        file_handle = open(path, 'rb')
        # @after_this_request
        # def remove_file(response):
        #     try:
        #         os.remove(path)
        #         file_handle.close()
        #     except Exception as e:
        #         print()
        return send_file(file_handle, as_attachment=True, download_name= filename)

# serve frontend
@app.route("/", defaults={'path': ''})
def serve(path):
    return app.send_static_file('index.html')

@app.errorhandler(404)
def not_found(e):
    return app.send_static_file('index.html')

# COMMENT THIS
if IS_DEBUG:
    app.run(debug=True)
