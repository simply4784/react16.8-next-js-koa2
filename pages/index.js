import { Button } from 'antd'
import Link from 'next/link'
import Router from 'next/router'
export default () => {
	function goToB() {
		Router.push({
			pathname: '/test/b',
			query: {
				id: 2,
			},
		})
	}
	return (
		<div>
			<Link href="/a?id=1" title="to a">
				<Button>Index</Button>
			</Link>
			<Button onClick={goToB}>to B</Button>
		</div>
	)
}
