const fs = require("fs");
const utils = require("../utils/request");
const process = require("process");
const { error } = require("console");

function pwd(print) {
    print(process.cmd());
}

function date(print) {
    print(Date());
}

function echo(print, args) {
    print(args);
}

function ls(print) {
    fs.readdir(' ', (err, files) => {
        if(err){
            throw err;
        }else{
            print(files.join(' '));
        }
    });
}

function cat(print, args) {
    fs.readFile(args, 'UTF-8', (error, data) => {
        if(error){
            throw new Error(error);
        }else{
            print(data);
        }
    });
}

function head(print, args) {
    fs.readFile(args, 'UTF-8', (error, data) => {
        if(error){
            throw new Error(error);
        }else{
            print(data.split('\n')[0]);
        }
    });
}

function tail(print, args) {
    fs.readFile(args, 'UTF-8', (error, data) => {
        if(error){
            throw new Error(error);
        }else{
            arrayData = data.split('\n');
            print(arrayData[arrayData.length - 1].trim());
        }
    });
}

function curl(print, args) {
    utils.request(args, (error, response)=>{
        if(error){
            throw error;
        }else{
            print(response);
        }
    })
}

module.exports = {
    pwd,
    date,
    echo,
    ls,
    cat,
    head,
    tail,
    curl,
};
