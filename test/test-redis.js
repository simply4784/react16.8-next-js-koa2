const Redis = require('ioredis')

async function test() {
	const redis = new Redis({
		port: 6378,
	})
	const keys = await redis.keys('*')
	// await redis.set('b', 457);
	// const d = await redis.setex('d', 10, 7777);
	console.log(await redis.get('d'))
	console.log(keys)
}
test()
