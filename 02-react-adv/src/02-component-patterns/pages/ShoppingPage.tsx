import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components"
import '../styles/custom-styles.css';
import { products } from "../data/products";
import { useShoppingPage } from "../hooks/useShoppingPage";


export const ShoppingPage = () => {

  const { shoppingCart, onProductCountChange } = useShoppingPage()

  return (
    <div >
      <h1>Shopping Store</h1>
      <hr />

      <div style={{
        display:'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
      }}>

        {
          products.map((product) => (
            <ProductCard 
              product={ product }
              className="bg-dark text-white"
              key={ product.id }
              onChange = { onProductCountChange }
              value={ shoppingCart[product.id]?.count || 0 }
            >
              <ProductImage className="custom-image" />
              <ProductTitle />
              <ProductButtons className="custom-buttons" activeBtnClass="test" />
            </ProductCard>
          ))
        }

      </div>

      <div className="shopping-cart">

        {
          Object.entries(shoppingCart) && (
            Object.entries(shoppingCart).map(([ key, product ]) => (
              <ProductCard 
                product={ product }
                value={ product.count }
                onChange = { onProductCountChange }
                className="bg-dark text-white"
                style={{
                  width: '100px'
                }}
                key={key}
                // onChange = { () => onProductCountChange() }
              >
                <ProductImage className="custom-image" />
                <ProductTitle title={`${product.count}`} />
                <ProductButtons className="custom-buttons"
                  style={{
                    display: 'flex',
                    justifyContent: 'center'
                  }}
                />
              </ProductCard>
            ))
          )
        }

      </div>

    </div>
  )
}