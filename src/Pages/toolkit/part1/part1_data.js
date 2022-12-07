
const part_1_2 = [
    {
        step: "1.2.1",
        name: "1.2.1: Rate the degree of impact",
        description: "Rate the degree of impact",
        options: [
            { name: "No discernable", number: 1 },
            { name: "Minor", number: 2 },
            { name: "Moderate", number: 3 },
            { name: "Major", number: 4 },
        ]
    },
    {
        step: "1.2.2",
        name: "1.2.2: Estimate the scale of impact",
        description: "Estimate the scale of impact",
        options: [
            { name: "Small", number: 1 },
            { name: "Medium", number: 2 },
            { name: "Large", number: 3 }
        ]
    }
]

const part_1_3 = [
    {
        step: "1.3",
        name: "1.3: Estimate the overall direction of impact",
        description: "Estimate the overall direction of impact",
        options: [
            { name: "Positive", number: 1 },
            { name: "Mostly Positive", number: 2 },
            { name: "Mostly Negative", number: 3 },
            { name: "Negative", number: 4 },
        ]
    },
]


function part_1_2_func(scale, degree) {
    const val_1 = { name: "Very narrow", number: 1 }
    const val_2 = { name: "Limited/Narrow", number: 2 }
    const val_3 = { name: "Substantial", number: 3 }
    const val_4 = { name: "Broad/wide ranging", number: 4 }

    const match = [
        [val_1, val_1, val_2],
        [val_1, val_2, val_3],
        [val_2, val_3, val_4],
        [val_3, val_4, val_4],
    ]

    return match[scale - 1][degree - 1]
}

function part_1_3_func(direction, scope) {
    const val_1 = { name: "Very low", number: 1 }
    const val_2 = { name: "Low", number: 2 }
    const val_3 = { name: "Moderate", number: 3 }
    const val_4 = { name: "Significant", number: 4 }
    const val_5 = { name: "High", number: 5 }
    const val_6 = { name: "Extreme", number: 6 }

    const match = [
        [val_1, val_1, val_2, val_3],
        [val_1, val_2, val_3, val_4],
        [val_2, val_3, val_4, val_5],
        [val_3, val_4, val_5, val_6],
    ]

    return match[direction - 1][scope - 1]
}



export { part_1_2, part_1_3, part_1_2_func, part_1_3_func }