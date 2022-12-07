const part_6_1 = [
    {
        step: "6.1.1",
        name: "6.1: Assess representativeness risk",
        description: "Assess representativeness (sample) and inaccuracy risk",
        options: [
            { name: "Low", number: 1 },
            { name: "Medium", number: 2 },
            { name: "High", number: 3 }
        ]
    },
    {
        step: "6.1.2",
        name: "6.1.2: Assess inaccuracy risk",
        description: "Assess representativeness (sample) and inaccuracy risk",
        options: [
            { name: "Low", number: 1 },
            { name: "Medium", number: 2 },
            { name: "High", number: 3 }
        ]
    }
]

function part_6_1_func(scale, degree) {
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


const part_6_2 = [
    {
        step: "6.2.1",
        name: "6.2: Determine the actual source of training data",
        description: "Assign risk from scope of training data",
        options: [
            { name: "Local", number: 1 },
            { name: "Non-local", number: 2 },
        ]
    },
    {
        step: "6.2.2",
        name: "6.2.2: Determine the desired source of training data",
        description: "Assign risk from scope of training data",
        options: [
            { name: "Local", number: 1 },
            { name: "Non-local", number: 2 },
        ]
    }
]


function part_6_2_func(scale, degree) {
    const val_1 = { name: "Low", number: 1 }
    const val_2 = { name: "High", number: 2 }

    const match = [
        [val_1, val_2],
        [val_2, val_1],
    ]

    return match[scale - 1][degree - 1]
}


function part_6_3_func(scale, degree) {
    const val_1 = { name: "Low", number: 1 }
    const val_2 = { name: "Medium", number: 2 }
    const val_3 = { name: "High", number: 3 }

    const match = [
        [val_1, val_2],
        [val_1, val_3],
        [val_2, val_3],
    ]

    return match[scale - 1][degree - 1]
}

function part_6_4_func(scale, degree) {
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

export { part_6_1, part_6_2, part_6_1_func, part_6_2_func, part_6_3_func, part_6_4_func }