import React from 'react'

const Cards = () => {
    const names = [
        {
            "top": {"id": 1, "name": "Tara Roisman", "category": "C"},
            "bottom": {"id": 2, "name": "Yonah Lloyd", "category": "C"}
        },
        {
            "top": {"id": 3, "name": "Mimi McBride", "category": "B"},
            "bottom": {"id": 4, "name": "Ruthie Yudin", "category": "C"}
        },
        {
            "top": {"id": 5, "name": "Ritchie Torres", "category": "A"},
            "bottom": {"id": 6, "name": "Ozzy Lusth", "category": "D"}
        },
        {
            "top": {"id": 7, "name": "Coach Dinklage", "category": "A"},
            "bottom": {"id": 8, "name": "Jordanna Abikzer", "category": "C"}
        },
        {
            "top": {"id": 9, "name": "Benj Pasek", "category": "A"},
            "bottom": {"id": 10, "name": "Josh! Kramer", "category": "B"}
        },
        {
            "top": {"id": 11, "name": "Toby Flenderson", "category": "A"},
            "bottom": {"id": 12, "name": "Captain Ray Holt", "category": "A"}
        },
        {
            "top": {"id": 13, "name": "ABBA", "category": "A"},
            "bottom": {"id": 14, "name": "Zayda Niderberg", "category": "C"}
        },
        {
            "top": {"id": 15, "name": "Yedidya Brick", "category": "C"},
            "bottom": {"id": 16, "name": "Meredith Blake", "category": "A"}
        },
        {
            "top": {"id": 17, "name": "Mike White", "category": "D"},
            "bottom": {"id": 18, "name": "Oscar Martinez", "category": "A"}
        },
        {
            "top": {"id": 19, "name": "David Archuleta", "category": "A"},
            "bottom": {"id": 20, "name": "Raquella Raiz", "category": "C"}
        },
        {
            "top": {"id": 21, "name": "Harry Potter", "category": "A"},
            "bottom": {"id": 22, "name": "Lil John", "category": "A"}
        },
        {
            "top": {"id": 23, "name": "Charlie Davis", "category": "D"},
            "bottom": {"id": 24, "name": "Lauren Fuchs", "category": "C"}
        },
        {
            "top": {"id": 25, "name": "Sarah Lacina", "category": "D"},
            "bottom": {"id": 26, "name": "Larry Rogowski", "category": "C"}
        },
        {
            "top": {"id": 27, "name": "Pam Beesly", "category": "A"},
            "bottom": {"id": 28, "name": "Zach Woods", "category": "A"}
        },
        {
            "top": {"id": 29, "name": "Yamil “Yam Yam” Arocho", "category": "D"},
            "bottom": {"id": 30, "name": "Harry Bailey", "category": "A"}
        },
        {
            "top": {"id": 31, "name": "Simon Cowell", "category": "A"},
            "bottom": {"id": 32, "name": "Bentzi", "category": "C"}
        },
        {
            "top": {"id": 33, "name": "Amanda bynes", "category": "A"},
            "bottom": {"id": 34, "name": "Kimberly Murphy", "category": "B"}
        },
        {
            "top": {"id": 35, "name": "Cèline Dion", "category": "A"},
            "bottom": {"id": 36, "name": "Shevi Niderberg", "category": "C"}
        },
        {
            "top": {"id": 37, "name": "Adin Alpern", "category": "C"},
            "bottom": {"id": 38, "name": "Leslie Higgins", "category": "A"}
        },
        {
            "top": {"id": 39, "name": "Jose T Trevino", "category": "E"},
            "bottom": {"id": 40, "name": "Dr. Phil Meyer", "category": "B"}
        },
        {
            "top": {"id": 41, "name": "George Bailey", "category": "A"},
            "bottom": {"id": 42, "name": "Erin Hannon", "category": "A"}
        },
        {
            "top": {"id": 43, "name": "Omar Zaheer", "category": "D"},
            "bottom": {"id": 44, "name": "Brad Culpepper", "category": "D"}
        },
        {
            "top": {"id": 45, "name": "Emmy Morielle Simchi", "category": "C"},
            "bottom": {"id": 46, "name": "Denise Stapley", "category": "D"}
        },
        {
            "top": {"id": 47, "name": "Michael Kay", "category": "E"},
            "bottom": {"id": 48, "name": "Penina Simchi", "category": "C"}
        },
        {
            "top": {"id": 49, "name": "Rabbi Steven Weil", "category": "C"},
            "bottom": {"id": 50, "name": "David Koechner", "category": "A"}
        },
        {
            "top": {"id": 51, "name": "Quiver Morris", "category": "C"},
            "bottom": {"id": 52, "name": "Joey Gallo", "category": "E"}
        },
        {
            "top": {"id": 53, "name": "Dr. Eliza Lizzy Lizbird Klein Bonner", "category": "B"},
            "bottom": {"id": 54, "name": "Nicole Feigenblum", "category": "B"}
        },
        {
            "top": {"id": 55, "name": "Barbara Higgins", "category": "E"},
            "bottom": {"id": 56, "name": "Lizzy Mcguire", "category": "A"}
        },
        {
            "top": {"id": 57, "name": "Yaakov Shwekey", "category": "A"},
            "bottom": {"id": 58, "name": "Jonathan Larson", "category": "A"}
        },
        {
            "top": {"id": 59, "name": "David Kor", "category": "C"},
            "bottom": {"id": 60, "name": "Cirie Fields", "category": "D"}
        },
        {
            "top": {"id": 61, "name": "Principal Horatio Gold", "category": "A"},
            "bottom": {"id": 62, "name": "Ron Swanson", "category": "A"}
        },
        {
            "top": {"id": 63, "name": "Mikey Konigsberg", "category": "C"},
            "bottom": {"id": 64, "name": "Evyatar Varman", "category": "C"}
        },
        {
            "top": {"id": 65, "name": "Karen Filippeli", "category": "A"},
            "bottom": {"id": 66, "name": "Rabbi Sammy Zimmerman", "category": "C"}
        },
        {
            "top": {"id": 67, "name": "Nava Morris", "category": "C"},
            "bottom": {"id": 68, "name": "Kyle “Higgy Higgy Hoo” Higashioka", "category": "E"}
        },
        {
            "top": {"id": 69, "name": "Rob Cesternino", "category": "D"},
            "bottom": {"id": 70, "name": "Woo Hwang", "category": "D"}
        },
        {
            "top": {"id": 71, "name": "Uncle Shalom Kelman", "category": "C"},
            "bottom": {"id": 72, "name": "Kathy Hochul", "category": "A"}
        },
        {
            "top": {"id": 73, "name": "Sean Paul", "category": "A"},
            "bottom": {"id": 74, "name": "Wendell Holland", "category": "D"}
        },
        {
            "top": {"id": 75, "name": "Hermione Granger", "category": "A"},
            "bottom": {"id": 76, "name": "Justin Panthappattu", "category": "B"}
        },
        {
            "top": {"id": 77, "name": "Sammy Lev Simchi", "category": "C"},
            "bottom": {"id": 78, "name": "Mike Gabler", "category": "D"}
        },
        {
            "top": {"id": 79, "name": "Usher", "category": "A"},
            "bottom": {"id": 80, "name": "Fajjopants", "category": "C"}
        },
        {
            "top": {"id": 81, "name": "Rainn Wilson", "category": "A"},
            "bottom": {"id": 82, "name": "Ben Platt", "category": "A"}
        },
        {
            "top": {"id": 83, "name": "Joan Callamezzo", "category": "A"},
            "bottom": {"id": 84, "name": "Rabbi Elliot Schrier", "category": "B"}
        },
        {
            "top": {"id": 85, "name": "Jessica Zimilover", "category": "C"},
            "bottom": {"id": 86, "name": "Brett Goldstein", "category": "A"}
        },
        {
            "top": {"id": 87, "name": "Ariana Levin", "category": "C"},
            "bottom": {"id": 88, "name": "Dwight Schrute", "category": "A"}
        },
        {
            "top": {"id": 89, "name": "Justin Paul", "category": "A"},
            "bottom": {"id": 90, "name": "Miranda Sings", "category": "A"}
        },
        {
            "top": {"id": 91, "name": "Rudy Boesch", "category": "D"},
            "bottom": {"id": 92, "name": "Simmy Siegel", "category": "C"}
        },
        {
            "top": {"id": 93, "name": "Jeff Probst", "category": "D"},
            "bottom": {"id": 94, "name": "Ellie Kemper", "category": "A"}
        },
        {
            "top": {"id": 95, "name": "Paolo", "category": "A"},
            "bottom": {"id": 96, "name": "Leslie Knope", "category": "A"}
        },
        {
            "top": {"id": 97, "name": "Paolo Valisari", "category": "A"},
            "bottom": {"id": 98, "name": "Dr. Daniel Klyde", "category": "B"}
        },
        {
            "top": {"id": 99, "name": "Malcolm Freberg", "category": "D"},
            "bottom": {"id": 100, "name": "Roy Kent", "category": "A"}
        },
        {
            "top": {"id": 101, "name": "Ari Daniels", "category": "C"},
            "bottom": {"id": 102, "name": "Dr. Elana Kramer", "category": "B"}
        },
        {
            "top": {"id": 103, "name": "Mona Lisa Saperstein", "category": "A"},
            "bottom": {"id": 104, "name": "Ben Driebergen", "category": "D"}
        },
        {
            "top": {"id": 105, "name": "Priti L. Mishall, M.D.", "category": "B"},
            "bottom": {"id": 106, "name": "Lex Van Den Berghe", "category": "D"}
        },
        {
            "top": {"id": 107, "name": "Saadia Tuchman", "category": "C"},
            "bottom": {"id": 108, "name": "Lilly Moscovitz", "category": "A"}
        },
        {
            "top": {"id": 109, "name": "Donna Meagle", "category": "A"},
            "bottom": {"id": 110, "name": "Dr. Rachel Zeuner", "category": "B"}
        },
        {
            "top": {"id": 111, "name": "Monica Culpepper", "category": "D"},
            "bottom": {"id": 112, "name": "Andy Samberg", "category": "A"}
        },
        {
            "top": {"id": 113, "name": "Amelia Mignonette Grimaldi Thermopolis Renaldi Princess of Genovia", "category": "A"},
            "bottom": {"id": 114, "name": "Daveed Morris", "category": "C"}
        },
        {
            "top": {"id": 115, "name": "Doron Reiffman", "category": "C"},
            "bottom": {"id": 116, "name": "Bisque", "category": "C"}
        },
        {
            "top": {"id": 117, "name": "Lady Gaga", "category": "A"},
            "bottom": {"id": 118, "name": "Bonzorp", "category": "C"}
        },
        {
            "top": {"id": 119, "name": "Laura Morett", "category": "D"},
            "bottom": {"id": 120, "name": "Aunt Deena Morris", "category": "C"}
        },
        {
            "top": {"id": 121, "name": "Michael Schur", "category": "A"},
            "bottom": {"id": 122, "name": "Clarence Oddbody", "category": "A"}
        },
        {
            "top": {"id": 123, "name": "Burt Macklin", "category": "A"},
            "bottom": {"id": 124, "name": "Tzniusdika Kluvim", "category": "C"}
        },
        {
            "top": {"id": 125, "name": "Professor Albus Dumbledore", "category": "A"},
            "bottom": {"id": 126, "name": "Andy Dwyer", "category": "A"}
        },
        {
            "top": {"id": 127, "name": "Kevin Malone", "category": "A"},
            "bottom": {"id": 128, "name": "Jennifer Coolidge", "category": "A"}
        },
        {
            "top": {"id": 129, "name": "Alex Yudin", "category": "C"},
            "bottom": {"id": 130, "name": "Hallie Parker", "category": "A"}
        },
        {
            "top": {"id": 131, "name": "Sophie Clarke", "category": "D"},
            "bottom": {"id": 132, "name": "Abi Reiffman", "category": "C"}
        },
        {
            "top": {"id": 133, "name": "Mark Brendanawicz", "category": "A"},
            "bottom": {"id": 134, "name": "Nancy “Savti” Siegel", "category": "C"}
        },
        {
            "top": {"id": 135, "name": "George Rohr", "category": "C"},
            "bottom": {"id": 136, "name": "Mister Tom Poleyeff", "category": "C"}
        },
        {
            "top": {"id": 137, "name": "Chris Traeger", "category": "A"},
            "bottom": {"id": 138, "name": "Dr. Julia Holber", "category": "B"}
        },
        {
            "top": {"id": 139, "name": "Maryanne Oketch", "category": "D"},
            "bottom": {"id": 140, "name": "Lior Wisotzky", "category": "C"}
        },
        {
            "top": {"id": 141, "name": "Phyllis Lapin-Vance", "category": "A"},
            "bottom": {"id": 142, "name": "Ezra Brick", "category": "C"}
        },
        {
            "top": {"id": 143, "name": "Wayne Gretzky", "category": "E"},
            "bottom": {"id": 144, "name": "Gail Datch", "category": "C"}
        },
        {
            "top": {"id": 145, "name": "Gulia Holder", "category": "C"},
            "bottom": {"id": 146, "name": "Didi Niderberg", "category": "C"}
        },
        {
            "top": {"id": 147, "name": "Rebecca Welton", "category": "A"},
            "bottom": {"id": 148, "name": "Taco Girl In A Taco World", "category": "C"}
        },
        {
            "top": {"id": 149, "name": "Tyson Apostol", "category": "D"},
            "bottom": {"id": 150, "name": "Zac Feld", "category": "C"}
        },
        {
            "top": {"id": 151, "name": "Jeremy Collins", "category": "D"},
            "bottom": {"id": 152, "name": "T the og", "category": "C"}
        },
        {
            "top": {"id": 153, "name": "Jonathan Penner", "category": "D"},
            "bottom": {"id": 154, "name": "Michael C. Scott", "category": "A"}
        },
        {
            "top": {"id": 155, "name": "Millicent Gergich", "category": "A"},
            "bottom": {"id": 156, "name": "Kirsten Bell", "category": "A"}
        },
        {
            "top": {"id": 157, "name": "Anthony Ramos", "category": "A"},
            "bottom": {"id": 158, "name": "Jillian Daniels", "category": "C"}
        },
        {
            "top": {"id": 159, "name": "Yosef Rosenthal", "category": "C"},
            "bottom": {"id": 160, "name": "Rabbi Gotch Yudin", "category": "C"}
        },
        {
            "top": {"id": 161, "name": "Colby Donaldson", "category": "D"},
            "bottom": {"id": 162, "name": "Dee Valladares", "category": "D"}
        },
        {
            "top": {"id": 163, "name": "Yonatan Sheinfeld", "category": "A"},
            "bottom": {"id": 164, "name": "Steve Carell", "category": "A"}
        },
        {
            "top": {"id": 165, "name": "Yahuda Guttman", "category": "C"},
            "bottom": {"id": 166, "name": "Lindsay Lohan", "category": "A"}
        },
        {
            "top": {"id": 167, "name": "Michal Reiffman", "category": "C"},
            "bottom": {"id": 168, "name": "Ishay Ribo", "category": "A"}
        },
        {
            "top": {"id": 169, "name": "Aunt Paulette Morris", "category": "C"},
            "bottom": {"id": 170, "name": "Tai Trang", "category": "D"}
        },
        {
            "top": {"id": 171, "name": "Simcha Schlanger", "category": "C"},
            "bottom": {"id": 172, "name": "Marwin Gonzalez", "category": "E"}
        },
        {
            "top": {"id": 173, "name": "Jim Halpert", "category": "A"},
            "bottom": {"id": 174, "name": "Mich Morris", "category": "C"}
        },
        {
            "top": {"id": 175, "name": "Rubeus Hagrid", "category": "A"},
            "bottom": {"id": 176, "name": "Morah Poker", "category": "C"}
        },
        {
            "top": {"id": 177, "name": "Sara Bareilles", "category": "A"},
            "bottom": {"id": 178, "name": "Colin Hughes", "category": "A"}
        },
        {
            "top": {"id": 179, "name": "Mister Carrot", "category": "A"},
            "bottom": {"id": 180, "name": "Kelly Kapoor", "category": "A"}
        },
        {
            "top": {"id": 181, "name": "Alison Stiel", "category": "A"},
            "bottom": {"id": 182, "name": "Mark Raiz", "category": "C"}
        },
        {
            "top": {"id": 183, "name": "GG Braverman", "category": "C"},
            "bottom": {"id": 184, "name": "Eitan Niderberg", "category": "C"}
        },
        {
            "top": {"id": 185, "name": "Anthony Rapp", "category": "A"},
            "bottom": {"id": 186, "name": "Sebastian Hastings", "category": "A"}
        },
        {
            "top": {"id": 187, "name": "Sam Obisanya", "category": "A"},
            "bottom": {"id": 188, "name": "Ashi Morris", "category": "C"}
        },
        {
            "top": {"id": 189, "name": "Jan Levinson", "category": "A"},
            "bottom": {"id": 190, "name": "Nesya Bayewitz", "category": "C"}
        },
        {
            "top": {"id": 191, "name": "Adam Pascal", "category": "A"},
            "bottom": {"id": 192, "name": "Liam Morrie Siegel", "category": "C"}
        },
        {
            "top": {"id": 193, "name": "Josh Bock", "category": "B"},
            "bottom": {"id": 194, "name": "Dani Rojas", "category": "A"}
        },
        {
            "top": {"id": 195, "name": "Mira mellman", "category": "C"},
            "bottom": {"id": 196, "name": "Juan Soto", "category": "E"}
        },
        {
            "top": {"id": 197, "name": "Anthony Volpe", "category": "E"},
            "bottom": {"id": 198, "name": "Gunnar Henderson", "category": "E"}
        },
        {
            "top": {"id": 199, "name": "Naomi Frydman", "category": "C"},
            "bottom": {"id": 200, "name": "Akiva Marder", "category": "C"}
        },
        {
            "top": {"id": 201, "name": "Jonny Fairplay", "category": "D"},
            "bottom": {"id": 202, "name": "Alan Reiffman", "category": "C"}
        },
        {
            "top": {"id": 203, "name": "OV", "category": "C"},
            "bottom": {"id": 204, "name": "Oscar Nuñez", "category": "A"}
        },
        {
            "top": {"id": 205, "name": "Taylor Ward", "category": "E"},
            "bottom": {"id": 206, "name": "Yehuda!", "category": "A"}
        },
        {
            "top": {"id": 207, "name": "Isiah “IKF” Kiner-Falefa", "category": "E"},
            "bottom": {"id": 208, "name": "Trent Crimm The Independent", "category": "A"}
        },
        {
            "top": {"id": 209, "name": "Mark Burnett", "category": "D"},
            "bottom": {"id": 210, "name": "Terry Crews", "category": "A"}
        },
        {
            "top": {"id": 211, "name": "Adi Kessler", "category": "C"},
            "bottom": {"id": 212, "name": "Yoel the Bus Driver", "category": "C"}
        },
        {
            "top": {"id": 213, "name": "Shevscles", "category": "C"},
            "bottom": {"id": 214, "name": "Avery Englander", "category": "C"}
        },
        {
            "top": {"id": 215, "name": "Cheli Ramras", "category": "C"},
            "bottom": {"id": 216, "name": "Susie Yellin", "category": "C"}
        },
        {
            "top": {"id": 217, "name": "Yul Kwon", "category": "D"},
            "bottom": {"id": 218, "name": "Lord Voldemort", "category": "A"}
        },
        {
            "top": {"id": 219, "name": "Vin Diesel", "category": "A"},
            "bottom": {"id": 220, "name": "Ariel Bayewitz", "category": "C"}
        },
        {
            "top": {"id": 221, "name": "Uncle Rabbi Sheldon Shelley Juan Soto Morris", "category": "C"},
            "bottom": {"id": 222, "name": "Anthony “Antoine Rizz” Rizzo", "category": "E"}
        },
        {
            "top": {"id": 223, "name": "Dr. Tori Aspir", "category": "B"},
            "bottom": {"id": 224, "name": "Aviv Lahat", "category": "C"}
        },
        {
            "top": {"id": 225, "name": "Finger Lady", "category": "C"},
            "bottom": {"id": 226, "name": "Avital Bock", "category": "B"}
        },
        {
            "top": {"id": 227, "name": "Russell Hantz", "category": "D"},
            "bottom": {"id": 228, "name": "Mose", "category": "A"}
        },
        {
            "top": {"id": 229, "name": "Jeff Braverman", "category": "C"},
            "bottom": {"id": 230, "name": "Eliza Ferstendig", "category": "B"}
        },
        {
            "top": {"id": 231, "name": "Domenick Abbate", "category": "D"},
            "bottom": {"id": 232, "name": "Gerrit Cole Cole Comma Gerrit", "category": "E"}
        },
        {
            "top": {"id": 233, "name": "Rupert Boneham", "category": "D"},
            "bottom": {"id": 234, "name": "Jenna Fischer", "category": "A"}
        },
        {
            "top": {"id": 235, "name": "Perd Hapley", "category": "A"},
            "bottom": {"id": 236, "name": "Jerri Manthey", "category": "D"}
        },
        {
            "top": {"id": 237, "name": "Shauna Malwae-Tweep", "category": "A"},
            "bottom": {"id": 238, "name": "Jason Sudeikis", "category": "A"}
        },
        {
            "top": {"id": 239, "name": "Ethan Zohn", "category": "D"},
            "bottom": {"id": 240, "name": "Joe Lo Truglio", "category": "A"}
        },
        {
            "top": {"id": 241, "name": "Josh Donaldson", "category": "E"},
            "bottom": {"id": 242, "name": "Jean-Ralphio Saperstein", "category": "A"}
        },
        {
            "top": {"id": 243, "name": "James Spader", "category": "A"},
            "bottom": {"id": 244, "name": "Adir Sanford", "category": "C"}
        },
        {
            "top": {"id": 245, "name": "Levy Raiz", "category": "C"},
            "bottom": {"id": 246, "name": "Jimmy Buffett", "category": "A"}
        },
        {
            "top": {"id": 247, "name": "Josh Duhamel", "category": "A"},
            "bottom": {"id": 248, "name": "Leslie David Baker", "category": "A"}
        },
        {
            "top": {"id": 249, "name": "Todd Packer", "category": "A"},
            "bottom": {"id": 250, "name": "Tony Vlachos", "category": "D"}
        },
        {
            "top": {"id": 251, "name": "Aunt Cousin Tirza Bayewitz", "category": "C"},
            "bottom": {"id": 252, "name": "Aaron Boone", "category": "E"}
        },
        {
            "top": {"id": 253, "name": "John Krasinski", "category": "A"},
            "bottom": {"id": 254, "name": "Boris the Noodle", "category": "C"}
        },
        {
            "top": {"id": 255, "name": "Eunice Bates", "category": "A"},
            "bottom": {"id": 256, "name": "Tarz Morris", "category": "C"}
        },
        {
            "top": {"id": 257, "name": "Bacca Niderberg", "category": "C"},
            "bottom": {"id": 258, "name": "Queen Clarisse Renaldi", "category": "A"}
        },
        {
            "top": {"id": 259, "name": "Mesivta Waterbury", "category": "A"},
            "bottom": {"id": 260, "name": "Rebecca", "category": "C"}
        },
        {
            "top": {"id": 261, "name": "Dr. Nicole Felix", "category": "B"},
            "bottom": {"id": 262, "name": "Norm Scully", "category": "A"}
        },
        {
            "top": {"id": 263, "name": "Jimmy Stewart", "category": "A"},
            "bottom": {"id": 264, "name": "B.J. Novak", "category": "A"}
        },
        {
            "top": {"id": 265, "name": "Nasty Nestor Cortes", "category": "E"},
            "bottom": {"id": 266, "name": "Sydney Daitch", "category": "C"}
        },
        {
            "top": {"id": 267, "name": "Tamar Morris", "category": "C"},
            "bottom": {"id": 268, "name": "Tom Westman", "category": "D"}
        },
        {
            "top": {"id": 269, "name": "Jesse Lopez", "category": "D"},
            "bottom": {"id": 270, "name": "Erik Reichenbach", "category": "D"}
        },
        {
            "top": {"id": 271, "name": "Aunt Esther Morris", "category": "C"},
            "bottom": {"id": 272, "name": "Stanley Hudson", "category": "A"}
        },
        {
            "top": {"id": 273, "name": "Ayelet Morris", "category": "C"},
            "bottom": {"id": 274, "name": "Tamar Schlanger Goldman", "category": "C"}
        },
        {
            "top": {"id": 275, "name": "Aaron Yitzhaky", "category": "C"},
            "bottom": {"id": 276, "name": "Lyle Lovett", "category": "A"}
        },
        {
            "top": {"id": 277, "name": "Ari Simchi", "category": "C"},
            "bottom": {"id": 278, "name": "Kim Spradlin", "category": "D"}
        },
        {
            "top": {"id": 279, "name": "Lil Mama", "category": "A"},
            "bottom": {"id": 280, "name": "Stuart Daitch", "category": "C"}
        },
        {
            "top": {"id": 281, "name": "Ilan Ramras", "category": "C"},
            "bottom": {"id": 282, "name": "Nickelback", "category": "A"}
        },
        {
            "top": {"id": 283, "name": "Special Agent Phillip Sheppard", "category": "D"},
            "bottom": {"id": 284, "name": "Uncle Danny Morris", "category": "C"}
        },
        {
            "top": {"id": 285, "name": "Talia Daniels", "category": "C"},
            "bottom": {"id": 286, "name": "Bella Zohar Raiz", "category": "C"}
        },
        {
            "top": {"id": 287, "name": "Imagine Dragons", "category": "A"},
            "bottom": {"id": 288, "name": "Rel Morris", "category": "C"}
        },
        {
            "top": {"id": 289, "name": "Draco Malfoy", "category": "A"},
            "bottom": {"id": 290, "name": "Keeley Jones", "category": "A"}
        },
        {
            "top": {"id": 291, "name": "Tom Haverford", "category": "A"},
            "bottom": {"id": 292, "name": "Coach Wade", "category": "D"}
        },
        {
            "top": {"id": 293, "name": "Rick Devens", "category": "D"},
            "bottom": {"id": 294, "name": "Sandra Diaz-Twine", "category": "D"}
        },
        {
            "top": {"id": 295, "name": "Stephenie LaGrossa", "category": "D"},
            "bottom": {"id": 296, "name": "Wandy Peralta", "category": "E"}
        },
        {
            "top": {"id": 297, "name": "Kelley Wentworth", "category": "D"},
            "bottom": {"id": 298, "name": "Lielle Quinn Simchi", "category": "C"}
        },
        {
            "top": {"id": 299, "name": "Angela Martin", "category": "A"},
            "bottom": {"id": 300, "name": "Beeri Varman", "category": "C"}
        },
        {
            "top": {"id": 301, "name": "Ryan Howard", "category": "A"},
            "bottom": {"id": 302, "name": "Leora Varman", "category": "C"}
        },
        {
            "top": {"id": 303, "name": "Josh Klein", "category": "C"},
            "bottom": {"id": 304, "name": "Shul Niderberg", "category": "C"}
        },
        {
            "top": {"id": 305, "name": "Susan the humuhumunukunukuāpuaʻa", "category": "C"},
            "bottom": {"id": 306, "name": "The Beatles", "category": "A"}
        },
        {
            "top": {"id": 307, "name": "Aliza Lichtman Brick", "category": "C"},
            "bottom": {"id": 308, "name": "Boutros Boutros Ghali", "category": "A"}
        },
        {
            "top": {"id": 309, "name": "Bradley Cooper", "category": "A"},
            "bottom": {"id": 310, "name": "Josh Cohen", "category": "A"}
        },
        {
            "top": {"id": 311, "name": "Jennifer Giller", "category": "C"},
            "bottom": {"id": 312, "name": "Rafa Emmett Simchi", "category": "C"}
        },
        {
            "top": {"id": 313, "name": "Dr. Kenyon Fitzpatrick", "category": "B"},
            "bottom": {"id": 314, "name": "Meredith Palmer", "category": "A"}
        },
        {
            "top": {"id": 315, "name": "Jake Bergel", "category": "C"},
            "bottom": {"id": 316, "name": "Dr. Ealex Levine", "category": "B"}
        },
        {
            "top": {"id": 317, "name": "Grandpa Judge Barry Morris", "category": "C"},
            "bottom": {"id": 318, "name": "Detective Jake Peralta", "category": "A"}
        },
        {
            "top": {"id": 319, "name": "Tehilla Morris", "category": "C"},
            "bottom": {"id": 320, "name": "Duke Orsino", "category": "A"}
        },
        {
            "top": {"id": 321, "name": "Lyndsey Pere", "category": "C"},
            "bottom": {"id": 322, "name": "Fergie", "category": "A"}
        },
        {
            "top": {"id": 323, "name": "Aaron Hicks", "category": "E"},
            "bottom": {"id": 324, "name": "Paul Henjes", "category": "B"}
        },
        {
            "top": {"id": 325, "name": "Aaron Judge", "category": "E"},
            "bottom": {"id": 326, "name": "Anna Goldstein", "category": "B"}
        },
        {
            "top": {"id": 327, "name": "Ora Zuckerbrod", "category": "C"},
            "bottom": {"id": 328, "name": "Richard Hatch", "category": "D"}
        },
        {
            "top": {"id": 329, "name": "Gleyber Gleyby Baby Torres", "category": "E"},
            "bottom": {"id": 330, "name": "Emily Flippen", "category": "D"}
        },
        {
            "top": {"id": 331, "name": "Stephen Fishbach", "category": "D"},
            "bottom": {"id": 332, "name": "Karla Cruz Godoy", "category": "D"}
        },
        {
            "top": {"id": 333, "name": "Davie Rickenbacker", "category": "D"},
            "bottom": {"id": 334, "name": "Zack Cohen", "category": "C"}
        },
        {
            "top": {"id": 335, "name": "Leeshowitz", "category": "C"},
            "bottom": {"id": 336, "name": "David Morris", "category": "C"}
        },
        {
            "top": {"id": 337, "name": "Adina “Dinky” Meister", "category": "C"},
            "bottom": {"id": 338, "name": "Sue Gilad", "category": "C"}
        },
        {
            "top": {"id": 339, "name": "Micah Dov Siegel", "category": "C"},
            "bottom": {"id": 340, "name": "Nechama Charlie Perton", "category": "C"}
        },
        {
            "top": {"id": 341, "name": "Aubry Bracco", "category": "D"},
            "bottom": {"id": 342, "name": "Debbie Niderberg", "category": "C"}
        },
        {
            "top": {"id": 343, "name": "Ricard Foyé", "category": "D"},
            "bottom": {"id": 344, "name": "Hugh Jackman", "category": "A"}
        },
        {
            "top": {"id": 345, "name": "Sara Morris", "category": "C"},
            "bottom": {"id": 346, "name": "Sara Bock", "category": "B"}
        },
        {
            "top": {"id": 347, "name": "Akiva Daniels", "category": "C"},
            "bottom": {"id": 348, "name": "Jamie Tartt", "category": "A"}
        },
        {
            "top": {"id": 349, "name": "Susan Abikzer", "category": "C"},
            "bottom": {"id": 350, "name": "Yaya Moriah Raiz", "category": "C"}
        },
        {
            "top": {"id": 351, "name": "Joe Anglim", "category": "D"},
            "bottom": {"id": 352, "name": "Rebbetzin Yael Weil", "category": "C"}
        },
        {
            "top": {"id": 353, "name": "Craig Robinson", "category": "A"},
            "bottom": {"id": 354, "name": "Ethan Walfish", "category": "C"}
        },
        {
            "top": {"id": 355, "name": "Carolyn Wiger", "category": "D"},
            "bottom": {"id": 356, "name": "Marlene Griggs-Knope", "category": "A"}
        },
        {
            "top": {"id": 357, "name": "Christopher Jackson", "category": "A"},
            "bottom": {"id": 358, "name": "Viola Hastings", "category": "A"}
        },
        {
            "top": {"id": 359, "name": "Amanda Kimmel", "category": "D"},
            "bottom": {"id": 360, "name": "Giancarlo Stantòn", "category": "E"}
        },
        {
            "top": {"id": 361, "name": "Alex Verdugo", "category": "E"},
            "bottom": {"id": 362, "name": "Douglas Murray", "category": "A"}
        },
        {
            "top": {"id": 363, "name": "Favorite Uncle Jackie Schlanger", "category": "C"},
            "bottom": {"id": 364, "name": "BZ Niderberg", "category": "C"}
        },
        {
            "top": {"id": 365, "name": "Ahuva Morris", "category": "C"},
            "bottom": {"id": 366, "name": "Leonidas Palaiodimos", "category": "B"}
        },
        {
            "top": {"id": 367, "name": "Jerry Gary Larry Terry Barry Gergich", "category": "A"},
            "bottom": {"id": 368, "name": "Hillary Duff", "category": "A"}
        },
        {
            "top": {"id": 369, "name": "Nili Morris", "category": "C"},
            "bottom": {"id": 370, "name": "Michael Jordan", "category": "E"}
        },
        {
            "top": {"id": 371, "name": "Creed Bratton", "category": "A"},
            "bottom": {"id": 372, "name": "Cedric Diggory", "category": "A"}
        },
        {
            "top": {"id": 373, "name": "April Ludgate", "category": "A"},
            "bottom": {"id": 374, "name": "Calben", "category": "C"}
        },
        {
            "top": {"id": 375, "name": "Ezra Gelman", "category": "C"},
            "bottom": {"id": 376, "name": "Derek Jeter", "category": "E"}
        },
        {
            "top": {"id": 377, "name": "Dr. Sara Meyer", "category": "B"},
            "bottom": {"id": 378, "name": "J.T. Thomas", "category": "D"}
        },
        {
            "top": {"id": 379, "name": "John Cochran", "category": "D"},
            "bottom": {"id": 380, "name": "Spencer Bledsoe", "category": "D"}
        },
        {
            "top": {"id": 381, "name": "Elizabeth James", "category": "A"},
            "bottom": {"id": 382, "name": "Said saab", "category": "B"}
        },
        {
            "top": {"id": 383, "name": "Tamar Forman", "category": "C"},
            "bottom": {"id": 384, "name": "Asher Herbert Siegel", "category": "C"}
        },
        {
            "top": {"id": 385, "name": "Dina Osherovitz", "category": "C"},
            "bottom": {"id": 386, "name": "Loren Daitch", "category": "C"}
        },
        {
            "top": {"id": 387, "name": "Tammy Swanson", "category": "A"},
            "bottom": {"id": 388, "name": "Jarvis", "category": "C"}
        },
        {
            "top": {"id": 389, "name": "Michele Fitzgerald", "category": "D"},
            "bottom": {"id": 390, "name": "Rami Polinsky", "category": "C"}
        },
        {
            "top": {"id": 391, "name": "James Clement", "category": "D"},
            "bottom": {"id": 392, "name": "Cousin Aunt Tirza Bayewitz", "category": "C"}
        },
        {
            "top": {"id": 393, "name": "Moshe Bayewitz", "category": "C"},
            "bottom": {"id": 394, "name": "Joshua Deutsch", "category": "C"}
        },
        {
            "top": {"id": 395, "name": "Andrew Savage", "category": "D"},
            "bottom": {"id": 396, "name": "Zava", "category": "A"}
        },
        {
            "top": {"id": 397, "name": "Jonah Platt", "category": "A"},
            "bottom": {"id": 398, "name": "David “Gordo” Gordon", "category": "A"}
        },
        {
            "top": {"id": 399, "name": "Idina Menzel", "category": "A"},
            "bottom": {"id": 400, "name": "Queenie", "category": "C"}
        },
        {
            "top": {"id": 401, "name": "Ben Wyatt", "category": "A"},
            "bottom": {"id": 402, "name": "Charles Boyle", "category": "A"}
        },
        {
            "top": {"id": 403, "name": "David “Papa” Siegel", "category": "C"},
            "bottom": {"id": 404, "name": "Austin Li Coon", "category": "D"}
        },
        {
            "top": {"id": 405, "name": "Greg Louganis", "category": "A"},
            "bottom": {"id": 406, "name": "Andy Bernard", "category": "A"}
        },
        {
            "top": {"id": 407, "name": "Raya Pearl Siegel", "category": "C"},
            "bottom": {"id": 408, "name": "Brian Baumgartner", "category": "A"}
        },
        {
            "top": {"id": 409, "name": "Men Without Hats", "category": "A"},
            "bottom": {"id": 410, "name": "Nikki Schlanger", "category": "C"}
        },
        {
            "top": {"id": 411, "name": "Igloo Bluma", "category": "C"},
            "bottom": {"id": 412, "name": "Elana Siegel", "category": "C"}
        },
        {
            "top": {"id": 413, "name": "Big Tom Buchanan", "category": "D"},
            "bottom": {"id": 414, "name": "Zeke Smith", "category": "D"}
        },
        {
            "top": {"id": 415, "name": "Yehuda Brick", "category": "C"},
            "bottom": {"id": 416, "name": "Didi Gregorius", "category": "E"}
        },
        {
            "top": {"id": 417, "name": "Ted Lasso", "category": "A"},
            "bottom": {"id": 418, "name": "Phil Dunster", "category": "A"}
        },
        {
            "top": {"id": 419, "name": "Micayla Rosenbaum", "category": "C"},
            "bottom": {"id": 420, "name": "Andrea Bocelli", "category": "A"}
        },
        {
            "top": {"id": 421, "name": "Yau-Man Chan", "category": "D"},
            "bottom": {"id": 422, "name": "Hannah Konigsberg", "category": "C"}
        },
        {
            "top": {"id": 423, "name": "Aunt Syma Kelman", "category": "C"},
            "bottom": {"id": 424, "name": "Uncle Ronnie Morris", "category": "C"}
        },
        {
            "top": {"id": 425, "name": "Shakira", "category": "A"},
            "bottom": {"id": 426, "name": "Annie James", "category": "A"}
        },
        {
            "top": {"id": 427, "name": "Ed Helms", "category": "A"},
            "bottom": {"id": 428, "name": "Ann Perkins", "category": "A"}
        },
        {
            "top": {"id": 429, "name": "Dr. Timothy Darby", "category": "B"},
            "bottom": {"id": 430, "name": "Dr. Ben Jadow", "category": "B"}
        },
        {
            "top": {"id": 431, "name": "Tom Marvolo Riddle", "category": "A"},
            "bottom": {"id": 432, "name": "Shira Movsas", "category": "C"}
        },
        {
            "top": {"id": 433, "name": "Liberty", "category": "C"},
            "bottom": {"id": 434, "name": "Mr. Robutusen", "category": "A"}
        },
        {
            "top": {"id": 435, "name": "Aviel Daniels", "category": "C"},
            "bottom": {"id": 436, "name": "Parvati Shallow", "category": "D"}
        },
        {
            "top": {"id": 437, "name": "Grandma Evelyn Morris", "category": "C"},
            "bottom": {"id": 438, "name": "Fish", "category": "C"}
        },
        {
            "top": {"id": 439, "name": "Coach Beard", "category": "A"},
            "bottom": {"id": 440, "name": "Darshokrampst", "category": "C"}
        },
        {
            "top": {"id": 441, "name": "Daveed Diggs", "category": "A"},
            "bottom": {"id": 442, "name": "Lieutenant Terry Jeffords", "category": "A"}
        },
        {
            "top": {"id": 443, "name": "Terry Deitz", "category": "D"},
            "bottom": {"id": 444, "name": "Professor Severus Snape", "category": "A"}
        },
        {
            "top": {"id": 445, "name": "“Boston” Rob Mariano", "category": "D"},
            "bottom": {"id": 446, "name": "Nick Parker", "category": "A"}
        },
        {
            "top": {"id": 447, "name": "Dr. Moshe Beiser", "category": "B"},
            "bottom": {"id": 448, "name": "Meeko", "category": "A"}
        },
        {
            "top": {"id": 449, "name": "Kiril Mark", "category": "B"},
            "bottom": {"id": 450, "name": "Vivi Kesselman", "category": "C"}
        },
        {
            "top": {"id": 451, "name": "Chaim Goldman", "category": "C"},
            "bottom": {"id": 452, "name": "Zoe Peck", "category": "B"}
        },
        {
            "top": {"id": 453, "name": "Racheli “Rimpi” Weil", "category": "C"},
            "bottom": {"id": 454, "name": "Kocoum", "category": "A"}
        },
        {
            "top": {"id": 455, "name": "Kass Mcquillen", "category": "D"},
            "bottom": {"id": 456, "name": "Andrew Benintendi", "category": "E"}
        },
        {
            "top": {"id": 457, "name": "Robert California", "category": "A"},
            "bottom": {"id": 458, "name": "Matthew Harville", "category": "B"}
        },
        {
            "top": {"id": 459, "name": "Dovie Morris", "category": "C"},
            "bottom": {"id": 460, "name": "Natalie Anderson", "category": "D"}
        },
        {
            "top": {"id": 461, "name": "Mike Holloway", "category": "D"},
            "bottom": {"id": 462, "name": "Kate Flannery", "category": "A"}
        },
        {
            "top": {"id": 463, "name": "Mindy Kaling", "category": "A"},
            "bottom": {"id": 464, "name": "Paul Lieberstein", "category": "A"}
        },
        {
            "top": {"id": 465, "name": "Akiva Koppel", "category": "C"},
            "bottom": {"id": 466, "name": "Sammy Bayewitz", "category": "C"}
        },
        {
            "top": {"id": 467, "name": "Gabe Lewis", "category": "A"},
            "bottom": {"id": 468, "name": "Uncle Jeff Morris", "category": "C"}
        },
        {
            "top": {"id": 469, "name": "Tina Wesson", "category": "D"},
            "bottom": {"id": 470, "name": "Shantel “Shan” Smith", "category": "D"}
        },
        {
            "top": {"id": 471, "name": "Detlef Schrempf", "category": "A"},
            "bottom": {"id": 472, "name": "Bradley Hames", "category": "C"}
        },
        {
            "top": {"id": 473, "name": "Gina Linetti", "category": "A"},
            "bottom": {"id": 474, "name": "Darryl Philbin", "category": "A"}
        },
        {
            "top": {"id": 475, "name": "Jay Starrett", "category": "D"},
            "bottom": {"id": 476, "name": "Phyllis Smith", "category": "A"}
        },
        {
            "top": {"id": 477, "name": "Josh Firestone", "category": "C"},
            "bottom": {"id": 478, "name": "Rashida Jones", "category": "A"}
        },
        {
            "top": {"id": 479, "name": "Maria Shrime Gonzalez", "category": "D"},
            "bottom": {"id": 480, "name": "Ron Weasley", "category": "A"}
        },
        {
            "top": {"id": 481, "name": "Aunt Esther Shlanger", "category": "C"},
            "bottom": {"id": 482, "name": "Amy Santiago", "category": "A"}
        },
        {
            "top": {"id": 483, "name": "Lin-Manuel Miranda", "category": "A"},
            "bottom": {"id": 484, "name": "Rena “Renèe” Kleiner", "category": "C"}
        },
        {
            "top": {"id": 485, "name": "Catherine O'Hara", "category": "A"},
            "bottom": {"id": 486, "name": "Mindy Lahiri", "category": "A"}
        },
        {
            "top": {"id": 487, "name": "Danny Castellano", "category": "A"},
            "bottom": {"id": 488, "name": "Derry Murbles", "category": "A"}
        },
        {
            "top": {"id": 489, "name": "Li'l Sebastian", "category": "A"},
            "bottom": {"id": 490, "name": "Morgan Tookers", "category": "A"}
        },
        {
            "top": {"id": 491, "name": "Duke Silver", "category": "A"},
            "bottom": {"id": 492, "name": "Alexis Rose", "category": "A"}
        },
        {
            "top": {"id": 493, "name": "Moira Rose", "category": "A"},
            "bottom": {"id": 494, "name": "Rudi Berry", "category": "A"}
        },
        {
            "top": {"id": 495, "name": "XO MaCenna", "category": "A"},
            "bottom": {"id": 496, "name": "Roland Schitt", "category": "A"}
        },
        {
            "top": {"id": 497, "name": "Glob", "category": "A"},
            "bottom": {"id": 498, "name": "Twyla Sands", "category": "A"}
        },
        {
            "top": {"id": 499, "name": "Eugene Levy", "category": "A"},
            "bottom": {"id": 500, "name": "Rebecca Cherson", "category": "C"}
        },
        {
            "top": {"id": 501, "name": "Bisqueensteenawitz enschwartzenberger", "category": "C"},
            "bottom": {"id": 502, "name": "Cynthia Erivo", "category": "A"}
        },
        {
            "top": {"id": 503, "name": "Elphaba", "category": "A"},
            "bottom": {"id": 504, "name": "Ariana Grande", "category": "A"}
        },
        {
            "top": {"id": 505, "name": "Glinda", "category": "A"},
            "bottom": {"id": 506, "name": "The Wizard of Oz", "category": "A"}
        },
        {
            "top": {"id": 507, "name": "Kristen Chenoweth", "category": "A"},
            "bottom": {"id": 508, "name": "Prince Fiyero", "category": "A"}
        },
        {
            "top": {"id": 509, "name": "Dr. Dillamond", "category": "A"},
            "bottom": {"id": 510, "name": "Madame Morrible", "category": "A"}
        },
        {
            "top": {"id": 511, "name": "Boq Woodsman", "category": "A"},
            "bottom": {"id": 512, "name": "Nessarose", "category": "A"}
        }
    ]


    return (
  <div className="card-grid">
    {names.map((name) => {
      return (
        <div key={name?.top?.id} className="card">
          <div className="card-top">
            <div className="card-text-container">
              {name?.top?.name}
            </div>
            <div className="image-placeholder">{name?.top?.category}</div>
          </div>
          <div className="card-bottom">
            <div className="card-text-container">
              {name?.bottom?.name}
            </div>
            <div className="image-placeholder">{name?.bottom?.category}</div>
          </div>
        </div>
      );
    })}
  </div>
);
}

export default Cards