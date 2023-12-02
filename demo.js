const a = () =>{
    console.log('1');
}

const b = (callback) => {
    console.log('b');
    callback() //chạy hàm
}

b(a);

//callback()==>a()


form.submit((callback) => {
    callback.logToConsole()
    callback.clearForm()
})

const callback = {
    logToConsole: () => {console.log('log to console')},
    clearForm: () => console.log("clear form");
}