let inputDirection = { x: 0, y: 0};
let lastInputDirection = { x: 0, y: 0};

window.addEventListener('keydown', e => {
    switch (e.key) {
        case 'ArrowUp' :
            if (lastInputDirection.y !== 0) break;
            inputDirection = { x:0, y: -1};
            console.log('arrow up')
            break;
        case 'ArrowDown' :
            if (lastInputDirection.y !== 0) break;
            inputDirection = { x:0, y: 1};
            console.log('arrow down')
            break;
        case 'ArrowLeft' :
            if (lastInputDirection.x !== 0) break;
            inputDirection = { x:-1, y: 0};
            console.log('arrow left')
            break;
        case 'ArrowRight' :
            if (lastInputDirection.x !== 0) break;
            inputDirection = { x:1, y: 0};
            console.log('arrow right')
            break;    
    }
})

export function getInputDirection() {
    lastInputDirection = inputDirection;
    return inputDirection;
}