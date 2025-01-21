import sys
from ytmusicapi import YTMusic
import json
import os

ytmusic = YTMusic(auth='oauth.json')

def toJson(obj):
    return json.dumps(obj)

def main():
    for line in sys.stdin:
        args = line.split('|||')
        if len(args) == 1:
            print('Invalid command')
            continue
        command = args[0]
        args = args[1:]
        for i in range(len(args)):
            args[i] = args[i].strip()
        match command:
            case 'search':
                print(toJson(ytmusic.search(args[0])))
            case 'get_artist':
                print(toJson(ytmusic.get_artist(args[0])))
            case 'get_album':
                print(toJson(ytmusic.get_album(args[0])))


def write_file(file_name, content):
    with open(file_name, 'w') as f:
        f.write(content)
main()