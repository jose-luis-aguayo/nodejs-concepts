const { once , EventEmitter} = require('events')

async function answer(ee) {
    // once -> finished and execute one time
    const [value] = await once(ee, 'myevent');
    console.log(value);
}
const ee = new EventEmitter()


process.nextTick(() => {
    ee.emit('myevent', 42);
});

answer(ee)