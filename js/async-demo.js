// function checkLogin(id,callback) {
//     setTimeout (() => callback({ id, name: "Nguyen"}),1000);

// } 
// function getUserPromise(id) {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => resolve({ id, name:"Nguyen"}),1000);
//     });
// }

// getUserPromise(1)
// .then((user) => console.log(user))
// .catch((err) => console.error(err))
// .finally(() => console.log("Xong")) 


function checkLogin(username,password,callback) {
    setTimeout(() => {
        if (username === "admin" && password === "123") {
        callback(null,"đăng nhập thành công");
        }
        else {
            callback("Đăng nhập thất bại",null);
        };
    },1000);
}

checkLogin("admin","123",function(error,result) {
    if (error) {
        console.log("lỗi",error);
    } else {
        console.log(result);
    }
});

function loginPromise(username,password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (username == "admin" && password == "123") {
                resolve("Đăng nhập thành công");
        } else {
            reject("Đăng nhập thất bại")
        }
        })
    })
}

loginPromise("admin","123") 
    .then((username) => console.log(username));
    .catch((err) => )
