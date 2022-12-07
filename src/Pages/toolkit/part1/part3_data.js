
const part_3_1 = [
    {
        step: "3.1",
        name: "3.1: Determine automation score",
        description: "Determine automation score",
        options: [
            { name: "Low - human mediated", number: 1 },
            { name: "Medium - algorithm mediated", number: 2 },
            { name: "High - algorithmically determined", number: 3 },
        ]
    }
]

const part_3_2 = [
    {
        step: "3.2.1",
        name: "3.2: Determine accessibility score",
        description: "Determine accessibility score",
        options: [
            { name: "Easy", number: 1 },
            { name: "Medium", number: 2 },
            { name: "Hard", number: 3 }
        ]
    },
    {
        step: "3.2.2",
        name: "3.2.2: Determine auditability score",
        description: "Determine auditability score",
        options: [
            { name: "Easy", number: 1 },
            { name: "Medium", number: 2 },
            { name: "Hard", number: 3 }
        ]
    }
]

function part_3_2_func(scale, degree) {
    const val_1 = { name: "Accessible", number: 1 }
    const val_2 = { name: "Some concerns", number: 2 }
    const val_3 = { name: "Major concerns", number: 3 }

    const match = [
        [val_1, val_1, val_2],
        [val_1, val_2, val_3],
        [val_2, val_3, val_3],
    ]

    return match[scale - 1][degree - 1]
}


function part_3_3_func(scale, degree) {
    const val_1 = { name: "Low", number: 1 }
    const val_2 = { name: "Medium", number: 2 }
    const val_3 = { name: "High", number: 3 }

    const match = [
        [val_1, val_1, val_2],
        [val_1, val_2, val_3],
        [val_2, val_3, val_3],
    ]

    return match[scale - 1][degree - 1]
}


export { part_3_1, part_3_2, part_3_2_func, part_3_3_func }