type SelectColorProps = {
  colors: string[]
  selectedColor: string
  handleSelectColor: (color: string) => void
}

export const SelectColor = ({ colors, selectedColor, handleSelectColor }: SelectColorProps) => {
  return (
    <div className="product-color">
      <p className="product-text">оберіть колір</p>
      <div className="product-input__container">
        {colors.map(color => (
          <label className="product-color__label product-label" key={color}>
            <input
              type="radio"
              className="product-color__input product-input"
              value={color}
              name="product-color"
              checked={color === selectedColor}
              onChange={() => handleSelectColor(color)}
            />
          </label>
        ))}
      </div>
    </div>
  )
}
