from symbols import getSymbols
import json

gameCodeBegin = 0x80005800 
gameCodeEnd = 0x801FA660 


def isGameFile(symbol):
    if symbol["type"] != "FILE":
        return False
    addr = int(symbol["address"], 16)
    return addr >= gameCodeBegin and addr < gameCodeEnd


def createFilesFile():

    fileList = []

    entries = list(filter(isGameFile, getSymbols()))

    for f in entries:
        print(f)
        info = {
            "start": None,  # commit that this was decompiled in.
            "end": None,  # lines of code
            "path": f["name"],  # the name of the function
        }
        fileList.append(info)

    open("json/files.json", "w").write(json.dumps(fileList, indent=2))


createFilesFile()