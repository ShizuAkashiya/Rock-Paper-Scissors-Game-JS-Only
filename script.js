// Rock, Paper, Scissors Game

function playGame() {
    // Step 1: Get user input using prompt and capitalize the first letter
    let userChoice = prompt("Choose: Rock, Paper, or Scissors?").toLowerCase();

    // Step 2: Check if the user's choice is valid
    if (!["rock", "paper", "scissors"].includes(userChoice)) {
        let tryAgain = confirm("Invalid choice. Please choose Rock, Paper, or Scissors.\n\nWanna Try again?");
        if (tryAgain) {
            playGame(); // Restart the game if the user wants to try again
        }
        return; // Exit the function if the choice is invalid
    }

    userChoice = userChoice.charAt(0).toUpperCase() + userChoice.slice(1);

    // Step 3: Generate computer choice randomly and capitalize the first letter
    let computerChoice = ["Rock", "Paper", "Scissors"][Math.floor(Math.random() * 3)];

    // Step 4: Determine the game result
    let result;

    if (userChoice === computerChoice) {
        result = "It's a tie!";
    } else if (
        (userChoice === "Rock" && computerChoice === "Scissors") ||
        (userChoice === "Scissors" && computerChoice === "Paper") ||
        (userChoice === "Paper" && computerChoice === "Rock")
    ) {
        result = "You win!";
    } else {
        result = "You lose!";
    }

    // Step 5: Display the result using alert
    let playAgain = confirm(
        "Your Choice: " +
        userChoice +
        "\nComputer's Choice: " +
        computerChoice +
        "\nResult: " +
        result +
        "\n\nWanna try again?"
    );

    // Step 6: If the user wants to play again, call the function recursively
    if (playAgain) {
        playGame();
    }
}

// Start the game
playGame();



/*

1). Dapatkan Input User:

- Script meminta User untuk memilih antara Batu, Gunting, atau Kertas menggunakan fungsi prompt.
- Input User diubah menjadi huruf kecil agar dapat dengan mudah dibandingkan.


2). Periksa Validitas Pilihan User: 

- Script memeriksa apakah pilihan User termasuk dalam opsi yang valid (Batu, Gunting, atau Kertas).
-- Jika tidak valid, script menampilkan pesan kesalahan dan menawarkan opsi "Wanna Try Again?".


3). Ubah Format Pilihan User:

- Huruf pertama dari pilihan User diubah menjadi huruf besar untuk konsistensi dalam penampilan output.


4). Pilih Pilihan Computer:

- Script secara acak memilih pilihan Computer dari antara Batu, Gunting, atau Kertas.
- Huruf pertama dari pilihan Computer diubah menjadi huruf besar untuk konsistensi.


5). Tentukan Hasil Permainan:

- Script menentukan hasil permainan berdasarkan aturan Batu, Gunting, Kertas.
-- Jika pilihan User sama dengan pilihan Computer, hasilnya adalah "It's a tie!".
-- Jika pilihan User mengalahkan pilihan Computer, hasilnya adalah "You Win!".
-- Jika pilihan User kalah dari pilihan Computer, hasilnya adalah "You lose!".


6). Tampilkan Hasil:

- Script menampilkan hasil permainan menggunakan fungsi alert.
- Hasil mengambil pilihan User, pilihan Computer, dan hasil permainan.


7). Opsi Try Again:

- Script menawarkan opsi "Try Again" menggunakan fungsi confirm.
-- Jika User memilih "OK", permainan dimulai kembali dari langkah pertama.
-- Jika User memilih "Cancel" atau menutup dialog, permainan berakhir.

*/