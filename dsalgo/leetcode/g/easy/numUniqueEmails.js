
var numUniqueEmails = function(emails) {
    let count = new Set();
    
    emails.forEach(email => {
        const localName = email.split("@")[0];
        const domain = email.split("@")[1];
        const idxPlus = localName.indexOf("+") > 0 ? localName.indexOf("+") : localName.length;
        const stripped = localName.slice(0, idxPlus).replace(/\./g, "") + "@" + domain;
        count.add(stripped);
    });
    
    return count.size;
    
};


// var numUniqueEmails = function(emails) {
//   return (new Set(emails.map(email => {
//     const [local, domain] = email.split('@');
//     return local.split('+').shift().split('.').join('') + '@' + domain;
//   }))).size;
// };