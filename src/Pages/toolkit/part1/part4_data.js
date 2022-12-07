
const part_4 = [
    {
        step: "4",
        name: "4: Assess risk of historic bias",
        description: "Assess risk of historic bias",
        options: [
            { name: "We are the direct owners of the algorithm (it was developed in-house rather than through a third party).", number: 1, id: "q1" },
            { name: "We (or the creators) involved subject matter experts in the design of the algorithm.", number: 1, id: "q2" },
            { name: "Assumptions made by the creators were outwardly explained. We know the motives of the developer or vendor.", number: 1, id: "q3" },
            { name: "We (or the creators) have discussed the proposed outcomes of the algorithm with a diverse audience.", number: 1, id: "q4" },
            { name: "We (or the creators) periodically review decisions the algorithm has made and revise it to meet changing needs.", number: 1, id: "q5" },
            { name: "We (or the creators) have a way to rebuild and/or re-train the algorithm from the ground up when new variables are introduced.", number: 1, id: "q6" },
            { name: "We (or the creators) monitor the algorithm on a regular basis to ensure it is operating the way we intend.", number: 1, id: "q7" },
            { name: "We (or the creators) have piloted/tested the algorithm against a subset of real-world decisions before fully deploying it to influence all decisions.", number: 1, id: "q8" },
        ]
    }
]

function part4_func(score){
    let name = ""
    let final_score = 0
    if (score <=2) {
        name = "High"
        final_score = 3
    } else if(score>=6) {
        name = "Low"
        final_score = 1
    } else {
        name = "Medium"
        final_score = 2
    }

    return {name: name, number: final_score}
}


export { part_4, part4_func }