
const part_2_1 = [
    {
        step: "2.1",
        name: "2.1: Rate consistency and compatibility of use",
        description: "Rate consistency and compatibility of use",
        options: [
            { name: "Yes", number: 1 },
            { name: "Somewhat", number: 2 },
            { name: "Unknown", number: 3 },
            { name: "No", number: 4 },
        ]
    },
    {
        step: "2.2",
        name: "2.2: Rate reputation and perception from use",
        description: "Rate reputation and perception from use",
        options: [
            { name: "Supportive", number: 1 },
            { name: "Mixed", number: 2 },
            { name: "Not supportive", number: 3 }
        ]
    }
]

function part_2_1_func(scale, degree) {
    const val_1 = { name: "Low", number: 1 }
    const val_2 = { name: "Medium", number: 2 }
    const val_3 = { name: "High", number: 3 }

    const match = [
        [val_1, val_1, val_2],
        [val_1, val_2, val_3],
        [val_2, val_2, val_3],
        [val_2, val_3, val_3],
    ]

    return match[scale - 1][degree - 1]
}


export { part_2_1, part_2_1_func }