import React, {useState} from "react";

const sizes = [5, "S", "XS", "60", "70", "90", "XXL", "SM", 'M', 'L', 'XL', 709];

const Size = () => {
    const [selectedSize, setSelectedSize] = useState([]);
    const [isOpenSizes, setIsOpenSizes] = useState(false);

    const handleDropDownSize = () => {
        setIsOpenSizes(!isOpenSizes)
    };

    const handleSelectSize = (size) => {
        const toggledArray = selectedSize.includes(size)
            ? selectedSize.filter((i) => i !== size)
            : [...selectedSize, size];

        return setSelectedSize(toggledArray);
    };


    const resetSelectedSizes = () => {
        if (selectedSize.length) {
            setSelectedSize([]);
        }
    }
    return (
        <div>
            <div style={{textAlign: 'center'}}><h1>Size</h1></div>
            <div className='size-box' onClick={handleDropDownSize}>
                Size <span className={`chevrons ${isOpenSizes ? "bottom" : "top"}`}></span>
                <span onClick={resetSelectedSizes}>Clear ({selectedSize.length})</span>

            </div>

            {isOpenSizes ? (
                <div className='boxsize'>
                    {sizes.map((size) => {
                        return (
                            <div
                                className='steps'
                                key={size}
                                onClick={() => handleSelectSize(size)}
                                style={{
                                    cursor: "pointer",
                                    background: selectedSize.includes(size) ?
                                        "linear-gradient(94.53deg, #D333F9 10.41%, #F9437E 99.34%)"
                                        : "#282631",

                                }}
                            >
                                {size}
                            </div>
                        );
                    })}
                </div>
            ) : null}

        </div>
    )
}

export default Size;