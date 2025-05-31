const alphabetSongs = {
    A: [
        "https://open.spotify.com/track/7cRejoP60Fi2pPQjUfvO2V", // Song: "Ain't No Mountain High Enough" - Marvin Gaye & Tammi Terrell
        "https://open.spotify.com/track/4uN7LlftExXZ3sFIkOzrIi"  // Song: "All of Me" - John Legend
    ],
    B: [
        "https://open.spotify.com/track/5MkwFcQGdb2YAhZ7THbqIs", // Song: "Blinding Lights" - The Weeknd
        "https://open.spotify.com/track/0Tx63vDQKOHjRdvTyGF4m3"  // Song: "Bad Guy" - Billie Eilish
    ],
    C: [
        "https://open.spotify.com/track/4pDh9DLoB8Wj3sl1T5Bq77", // Song: "Can't Stop the Feeling!" - Justin Timberlake
        "https://open.spotify.com/track/5r9vXmNiTtGrsHgABt5Vpg"  // Song: "Crazy" - Gnarls Barkley
    ],
    D: [
        "https://open.spotify.com/track/6U2wqG9hPah8CV6OZIT0o5", // Song: "Don't Start Now" - Dua Lipa
        "https://open.spotify.com/track/3Z9hF9ihN7A6nFc4gx3AcR"  // Song: "Dynamite" - BTS
    ],
    E: [
        "https://open.spotify.com/track/3YZ99s2s7Eum7tTgnrGv1T", // Song: "Enter Sandman" - Metallica
        "https://open.spotify.com/track/5kJgaFGqX3nQp0bHK2vb2y"  // Song: "Everlong" - Foo Fighters
    ],
    F: [
        "https://open.spotify.com/track/1mjl9DKsZLck3LMQHzKKzA", // Song: "Finesse" - Bruno Mars & Cardi B
        "https://open.spotify.com/track/7gVdbfpA5GF3pOcvihzX6D"  // Song: "Fix You" - Coldplay
    ],
    G: [
        "https://open.spotify.com/track/4u2pXQ3iZYd1jvZVqTqzRJ", // Song: "Good 4 U" - Olivia Rodrigo
        "https://open.spotify.com/track/2F5Rz7Qy8m7qvK5d77pI9w"  // Song: "Glad You Came" - The Wanted
    ],
    H: [
        "https://open.spotify.com/track/1U8J14DBTqkjgOYZMWehu4", // Song: "Heat Waves" - Glass Animals
        "https://open.spotify.com/track/6wL0hC1ErSop6Aq5oD3OCk"  // Song: "Havana" - Camila Cabello ft. Young Thug
    ],
    I: [
        "https://open.spotify.com/track/4u7dwVruUWR0m8sF3zYjN7", // Song: "I Will Always Love You" - Whitney Houston
        "https://open.spotify.com/track/3a2GFJw6WPK6u5qtxIjMml"  // Song: "In the End" - Linkin Park
    ],
    J: [
        "https://open.spotify.com/track/5JjdBmrqz9UJHk5bUjRG3H", // Song: "Juice" - Lizzo
        "https://open.spotify.com/track/0M5FEwNVz11yZubJ5ttjVu"  // Song: "Just Dance" - Lady Gaga
    ],
    K: [
        "https://open.spotify.com/track/0POszYXUFE9DTy5fDYu7A4", // Song: "Kiss Me More" - Doja Cat ft. SZA
        "https://open.spotify.com/track/1H9Pblh7k8M6A9tHZDW5wE"  // Song: "King of Wishful Thinking" - Go West
    ],
    L: [
        "https://open.spotify.com/track/4oVIm9HgQeHhWbKfRg8x9F", // Song: "Levitating" - Dua Lipa ft. DaBaby
        "https://open.spotify.com/track/2g7KHwNl6t3hpjA9ML57Jw"  // Song: "Let It Be" - The Beatles
    ],
    M: [
        "https://open.spotify.com/track/1b0tGJeP0VjFJb2WxXIjDw", // Song: "Mood" - 24kGoldn ft. Iann Dior
        "https://open.spotify.com/track/4xAc02YCT0ZsFrNoA9jxDw"  // Song: "My Heart Will Go On" - Celine Dion
    ],
    N: [
        "https://open.spotify.com/track/0fXdyBF5p1gJXZ99pWc0Fg", // Song: "New Rules" - Dua Lipa
        "https://open.spotify.com/track/5Iq1D6XT0lWnxf6VZCzOZ5"  // Song: "Numb" - Linkin Park
    ],
    O: [
        "https://open.spotify.com/track/6FO0UwYPZfnjTgRj2AWz4p", // Song: "One Dance" - Drake ft. Wizkid & Kyla
        "https://open.spotify.com/track/6YZFnlzIKtsxy8w7r2Z1B3"  // Song: "Old Town Road" - Lil Nas X
    ],
    P: [
        "https://open.spotify.com/track/6j80yTTvSm7rNS7zvQ0lW8", // Song: "Peaches" - Justin Bieber ft. Daniel Caesar, Giveon
        "https://open.spotify.com/track/2wSkPRBxd01X9B6bNQVe04"  // Song: "Poker Face" - Lady Gaga
    ],
    Q: [
        "https://open.spotify.com/track/1h9AfYFqVJt5Ghr3SHoFdx", // Song: "Q.U.E.E.N." - Janelle Monáe ft. Erykah Badu
        "https://open.spotify.com/track/5E3yWL3fH6ReyWplKQLQ08"  // Song: "Quiero Bailar" - Ivy Queen
    ],
    R: [
        "https://open.spotify.com/track/2wDkeVC0Gy46kbKGVhJX5C", // Song: "Rolling in the Deep" - Adele
        "https://open.spotify.com/track/4pC8UJ9pFcHHp6L3JlnJmZ"  // Song: "Radioactive" - Imagine Dragons
    ],
    S: [
        "https://open.spotify.com/track/6mTJKmUPxtOZpWs6XogjkT", // Song: "Shape of You" - Ed Sheeran
        "https://open.spotify.com/track/4JfwuaYHefr4uOMt02BOPX"  // Song: "Stressed Out" - Twenty One Pilots
    ],
    T: [
        "https://open.spotify.com/track/1xtftW2t0YXN3oE5zHT0Cx", // Song: "Thriller" - Michael Jackson
        "https://open.spotify.com/track/4l5kht0tJ3MbRRxwQhzTUE"  // Song: "Take On Me" - a-ha
    ],
    U: [
        "https://open.spotify.com/track/7hMWkFrgfgD7hP9gLnFngP", // Song: "Uptown Funk" - Mark Ronson ft. Bruno Mars
        "https://open.spotify.com/track/0gQSvh5o3e9VfADuVvgnjY"  // Song: "Umbrella" - Rihanna ft. Jay-Z
    ],
    V: [
        "https://open.spotify.com/track/2GQXb8pFz4XgdHtPqAB7x2", // Song: "Viva La Vida" - Coldplay
        "https://open.spotify.com/track/3YQvTnMl2yZdD5X3L7YwP3"  // Song: "Valerie" - Mark Ronson ft. Amy Winehouse
    ],
    W: [
        "https://open.spotify.com/track/2v6G4OaXHkxU3jQ12v8uqX", // Song: "Wake Me Up" - Avicii
        "https://open.spotify.com/track/1rQnK99R2gfHhz35PjD8XO"  // Song: "What Makes You Beautiful" - One Direction
    ],
    X: [
        "https://open.spotify.com/track/5WGz5c64zM19kRE7tINtbk", // Song: "XO" - Beyoncé
        "https://open.spotify.com/track/5MBzTq6KrJrVexNKZpmyZe"  // Song: "X Gon' Give It To Ya" - DMX
    ],
    Y: [
        "https://open.spotify.com/track/6IjjLsG52FC5kz0T9z8Wti", // Song: "Yellow" - Coldplay
        "https://open.spotify.com/track/0szjOgfneDhGLI2lZ3yS1n"  // Song: "You Belong With Me" - Taylor Swift
    ],
    Z: [
        "https://open.spotify.com/track/5kpDxaYtBKmFtAnRpXz4eH"  // Song: "Zombies" - The Cranberries
    ]
};

console.log(alphabetSongs);



// function getRandomSong(letter) {
//     // Ensure the letter is uppercase
//     letter = letter.toUpperCase();
    
//     // Check if the letter exists in the alphabetSongs object
//     if (alphabetSongs[letter]) {
//         const songs = alphabetSongs[letter];
        
//         // Get a random index
//         const randomIndex = Math.floor(Math.random() * songs.length);
        
//         // Return the random song link
//         return songs[randomIndex];
//     } else {
//         return "No songs available for this letter.";
//     }
// }

function getRandomSong() {
    // Define the available letters (A to Z)
    const letters = Object.keys(alphabetSongs);
    
    // Get a random letter from the available letters
    const randomLetter = letters[Math.floor(Math.random() * letters.length)];
    
    // Get the list of songs for that letter
    const songs = alphabetSongs[randomLetter];
    
    // Get a random index to select a random song from the list
    const randomIndex = Math.floor(Math.random() * songs.length);
    
    // Return the random song
    return songs[randomIndex];
}


console.log(getRandomSong()); // Will return a random song from a random letter