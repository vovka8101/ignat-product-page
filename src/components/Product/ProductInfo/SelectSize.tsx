type SelectSizeProps = {
  sizes: string[]
  selectedSize: string
  handleSelectSize: (size: string) => void
}

export const SelectSize = ({ sizes, selectedSize, handleSelectSize }: SelectSizeProps) => {
  return (
    <div className="product-size">
      <p className="product-text">оберіть розмір</p>
      <div className="product-input__container">
        {sizes.map(size => (
          <label className="product-size__label product-label" key={size}>
            <input
              type="radio"
              className="product-size__input product-input"
              name="product-size"
              value={size}
              checked={size === selectedSize}
              onChange={() => handleSelectSize(size)}
            />
          </label>
        ))}
      </div>
    </div>
  )
}
