import React, {useState} from "react";
import '../../App.scss'

const options = ['Woman', 'Man', 'Non-binary', 'Children']


const Category = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState([])


    const handleDropDown = () => {
        setIsOpen(!isOpen)
    };

    const handleSelectOption = (option) => {
        const toggledArray = selectedOption.includes(option)
            ? selectedOption.filter((i) => i !== option)
            : [...selectedOption, option];

        return setSelectedOption(toggledArray);
    };

    const isCheckedCheckbox = (option) => selectedOption.indexOf(option) !== -1

    const resetSelectedOptions = () => {
        if (selectedOption.length) {
            setSelectedOption([]);
        }
    };
    return (
        <div>
            <div style={{textAlign: 'center'}}><h1>Category</h1></div>
            <div className='category-box' onClick={handleDropDown}>
                Categories <span className={`chevron ${isOpen ? "bottom" : "top"}`}></span>
                <span onClick={resetSelectedOptions}>Clear ({selectedOption.length})</span>

            </div>
            <div>
                {isOpen ? (
                    <div style={{
                        marginTop: '15px',
                        lineHeight: '1.5'
                    }}>
                        {options.map((option) => {
                            const checked = isCheckedCheckbox(option)
                            return (
                                <div
                                    key={option}
                                    onClick={() => handleSelectOption(option)}
                                    style={{
                                        cursor: "pointer",
                                        color: "white"
                                    }}
                                >
                                    <input type="checkbox" id="option" name={option} checked={checked}/>
                                    {option}
                                </div>
                            );
                        })}
                    </div>
                ) : null}
            </div>
        </div>

    )
}

export default Category