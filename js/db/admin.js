const adminOperations = {
    verifyLogin(username, password) {
        var pr = new Promise((resolve, reject) => {
            var adminRef = firebase.database().ref("admin/");
            adminRef.on("value", (snapshot) => {
                resolve(snapshot.val());
            });
        });
        return pr;
    }
}