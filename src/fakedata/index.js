// Bismillahir Rahmanir Rahim
// Nafis Khan Chowdhury
// Best-Buddy Website
// Date - 07/30/2020
// Time - 9:38 PM





import users from "./users";

const fakeData = [...users];

const shuffle = a => {
    for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
}

shuffle(fakeData);

export default fakeData;