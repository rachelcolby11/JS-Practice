var friends = {
    bill: {
        firstName: "Bill",
        lastName: "Gates",
        number: "(888) 888-8888",
        address: ['One Microsoft Way','Redmond','WA','98052']
    },
    steve: {
        firstName: "Steve",
        lastName: "Jobs",
        number: "(999) 999-9999",
        address: ['Two Apple Way','Redmond','CA','98052']
    }
};

var list = function (friends) {
    for (var friend in friends) {
        console.log(friend);
    };
};

var search = function (name, friends) {
    for (var friend in friends) {
        console.log(friend);
        // if (name === friend[firstName]) {
        //     console.log(friend)
        //     return(friend)
    };
};

