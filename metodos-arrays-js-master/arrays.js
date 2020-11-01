// Ejercicio 1
ejercicio1 = () => {
    let cities = ["miami", "barcelona", "madrid"];
    let inicial = cities.map((paraula) => paraula.substring(0, 1).toUpperCase().concat(paraula.slice(1)));
}

// Ejercicio 2 Re-fer
ejercicio2 = () => {

    let students = [{
            name: "Tony Parker",
            firstProject: 80,
            secondProject: 75,
            finalExam: 90
        },
        {
            name: "Marc Barchini",
            firstProject: 84,
            secondProject: 65,
            finalExam: 65
        },
        {
            name: "Claudia Lopez",
            firstProject: 45,
            secondProject: 95,
            finalExam: 99
        },
        {
            name: "Alvaro Briattore",
            firstProject: 82,
            secondProject: 92,
            finalExam: 70
        },
        {
            name: "Isabel Ortega",
            firstProject: 90,
            secondProject: 32,
            finalExam: 85
        },
        {
            name: "Francisco Martinez",
            firstProject: 90,
            secondProject: 55,
            finalExam: 78
        },
        {
            name: "Jorge Carrillo",
            firstProject: 83,
            secondProject: 77,
            finalExam: 90
        },
        {
            name: "Miguel López",
            firstProject: 80,
            secondProject: 75,
            finalExam: 75
        },
        {
            name: "Carolina Perez",
            firstProject: 85,
            secondProject: 72,
            finalExam: 67
        },
        {
            name: "Ruben Pardo",
            firstProject: 89,
            secondProject: 72,
            finalExam: 65
        }
    ]

    let final_grade = students.map((nota) => (((nota.firstProject + nota.secondProject) / 2 * 0.4) + (nota.finalExam * 0.6)).toFixed(2));
    let name = students.map((estudiante) => estudiante.name);
    let res = {};
    name.map((k, i) => res[k] = final_grade[i]);
}

// Ejercicio 3
ejercicio3 = () => {
    let menu = [{
            name: "Carrots",
            calories: 150
        },
        {
            name: "Steak",
            calories: 350
        },
        {
            name: "Broccoli",
            calories: 120
        },
        {
            name: "Chicken",
            calories: 250
        },
        {
            name: "Pizza",
            calories: 520
        }
    ];

    let newMenu = [];
    menu.map((k) => newMenu.push(k.calories));

    return newMenu.reduce((ac, el) => ac + el / newMenu.length, 0);
}

// Ejercicio 4
ejercicio4 = () => {
    let product = {
        name: "JIM'S STORE 2 Bobina 10W Cargador Inalámbrico Titular Anti-Deslizamiento Diseño",
        price: 15.69,
        manufacturer: "JIM'S STORE",
        reviews: [{
                user: "Pavel Nedved",
                comments: "Muy contento",
                rate: 4
            },
            {
                user: "Alvaro Trezeguet",
                comments: "No tiene carga rápida",
                rate: 1
            },
            {
                user: "David Recoba",
                comments: "Excelente relación calidad/precio.",
                rate: 5
            },
            {
                user: "Maribel Romero",
                comments: "Pocas prestaciones",
                rate: 2
            },
            {
                user: "Antonio Cano",
                comments: "Materiales malos",
                rate: 1
            },
        ]
    }
    let newRates = []
    product.reviews.map((k) => newRates.push(k.rate));
    return newRates.reduce((ac, el) => ac+el / newRates.length, 0);
}