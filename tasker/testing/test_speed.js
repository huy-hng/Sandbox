function sleep(ms) {return new Promise(resolve => setTimeout(resolve, ms))}

async function wait() {
    await sleep(1000)
    await sleep(1000)
    await sleep(1000)
    await sleep(1000)
    await sleep(1000)
    exit();
}

wait()
