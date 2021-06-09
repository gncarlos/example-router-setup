import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <ul>
      <Link to='/home'>
        <li>Home</li>
      </Link>
      <Link to='/products'>
        <li>All Products</li>
      </Link>
      <Link to='/product'>
        <li>Individual Product</li>
      </Link>
      <Link to='/cart'>
        <li>View Cart</li>
      </Link>
      <Link to='/checkout'>
        <li>Checkout</li>
      </Link>
    </ul>
  )
}

export default Nav