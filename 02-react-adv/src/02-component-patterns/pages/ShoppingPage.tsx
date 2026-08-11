import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components"
import '../styles/custom-styles.css';
import { products } from "../data/products";

const product = products[0];

export const ShoppingPage = () => {

  return (
    <div >
      <h1>Shopping Store</h1>
      <hr />

      <div style={{
        display:'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
      }}>
        <ProductCard 
          product={ product }
          className="bg-dark text-white"
          key={ product.id }
          initialValues={{
            count: 5,
            maxCount: 10
          }}
        >
          <ProductImage className="custom-image" />
          <ProductTitle />
          <ProductButtons className="custom-buttons" activeBtnClass="test" />
        </ProductCard>
      </div>

    </div>
  )
}