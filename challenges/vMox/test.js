

let profiles = [
  {
    network: 'facebook',
    id: '724326566405',
    email: 'avocado@hipmail.com',
    followerCount: 380,
    activeSince: "2021-02-20T02:27:45.166Z"
  },
  {
    network: 'twitter',
    id: '568901789289',
    email: 'avocado@hipmail.com',
    followerCount: 760,
    activeSince: "2021-02-21T13:30:09.166Z"
  },
  {
    network: 'linkedin',
    id: '367594050433',
    email: 'avocado@hipmail.com',
    followerCount: 285,
    activeSince: "2021-02-20T19:58:57.166Z"
  },
  {
    network: 'instagram',
    id: '24ab21dd47a7',
    email: 'avocado@hipmail.com',
    followerCount: 1520,
    activeSince: "2021-02-22T07:01:21.166Z"
  },
  {
    network: 'snapchat',
    id: '3af170bb82d6',
    email: 'avocado@hipmail.com',
    followerCount: 1900,
    activeSince: "2021-02-23T00:32:33.166Z"
  }
]

profiles.map(obj => {
    const id = obj.id;
    let newIntId = '';
    if (isNaN(+id)) {
        for (let char of id) {
            if (!isNaN(+char)) {
            newIntId += char;
            }
        }
        return Object.assign(obj, {id: newIntId});
    } else {
        return obj;
    }
});

console.log(profiles)