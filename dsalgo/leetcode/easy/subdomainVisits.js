// https://leetcode.com/problems/subdomain-visit-count/


var subdomainVisits = function(cpdomains) {
    const visitCounts = {};
    for (let i = 0; i < cpdomains.length; i++) {
        const [visits, domains] = cpdomains[i].split(" ");
        let subdomains = domains.split(".");
        
        while (subdomains.length) {
            let subdomain = subdomains.join(".");
            
            visitCounts[subdomain] = visitCounts.hasOwnProperty(subdomain) ?
                +visitCounts[subdomain] + Number(visits) :
                visits;
            subdomains.shift();
        }
    }

    return Object.keys(visitCounts).map(key => `${visitCounts[key]} ${key}`);
    
};

// X

console.log(subdomainVisits(["9001 discuss.leetcode.com"]));
console.log(subdomainVisits(["900 google.mail.com", "50 yahoo.com", "1 intel.mail.com", "5 wiki.org"]));