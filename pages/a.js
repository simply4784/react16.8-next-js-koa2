import Comp from '../components/comp'
import { Button } from 'antd'
import { withRouter } from 'next/Router'
const A = ({ router }) => <Comp>
    <Button>A { router.query.id }</Button>
</Comp>
export default withRouter(A)