export const checkResults = (resultsPlayer) => {
    const numbers = [1, 2, 3, 4, 5, 6];
    const posibilities = [];
    const totalDices = resultsPlayer.reduce((a, b) => a + b);

    numbers.forEach(number => {
        if (resultsPlayer.includes(number)) {
            const numOnly = [...resultsPlayer].filter(e => e === number);
            const numSum = [...numOnly].reduce((a,b) => a+b);
            posibilities.push({
                name: number,
                id: number,
                total: numSum,
            });

            // Check pair
            if (numOnly.length >= 2) {
                
                if (!posibilities.find(elt => elt.id == 7)) {
                    posibilities.push({
                        name: 'Pair',
                        id: 7,
                        total: totalDices,
                    })
                } 
            }
            
            // Check Brelan
            if (numOnly.length >= 3) {
                posibilities.push({
                    name: 'Brelan',
                    id: 9,
                    total: totalDices,
                })
            }
            
            // Check Carré
            if (numOnly.length >= 4) {
                posibilities.push({
                    name: 'Carré',
                    id: 10,
                    total: totalDices,
                }, {
                    name: 'Double pair',
                    id: 8,
                    total: totalDices,
                })
            }
            
            // Check Full
            if (posibilities.find(elt => elt.id == 7) && posibilities.find(elt => elt.id == 9)) {
                posibilities.push({
                    name: 'Full',
                    id: 11,
                    total: 25,
                })
            }

            if (resultsPlayer.sort().join('') === '12345') {
                if (!posibilities.find(elt => elt.id == 12)) {
                    posibilities.push({
                        name: 'Petite suite',
                        id: 12,
                        total: 30,
                    })
                }
            }

            if (resultsPlayer.sort().join('') === '23456') {
                if (!posibilities.find(elt => elt.id == 13)) {
                    posibilities.push({
                        name: 'Grande suite',
                        id: 13,
                        total: 40,
                    })
                }
            }

            // Check Petite & Grande Suite
            if (numOnly.length == 5) {
                posibilities.push({
                    name: 'Yahtzee',
                    id: 14,
                    total: 50,
                })
            }

            posibilities.push({
                name: 'Chance',
                id: 15,
                total: totalDices,
            })
        }
    });

    return posibilities.sort((a , b) => a.id - b.id);
}