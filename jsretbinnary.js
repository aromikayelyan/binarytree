const tree = {
    value: 2,
    right: {
        value: 10,
        left: {
            value: 13,
            right: {
                value: 0,
                right: {
                    value: 17
                }
            }
        }
    },
    left: {
        value: 10,
        left: {
            value: 9,
            right: {
                value: 21,
                right: {
                    value: 21
                }
            }
        }
    }
}

function binnaryvalue(tree) {
    let value = 0
    if (tree.value) value += tree.value

    if (tree.right) {
        value += binnaryvalue(tree.right)
    }
    if (tree.left) {
        value += binnaryvalue(tree.left)
    }
    return value
}

console.log(binnaryvalue(tree))

