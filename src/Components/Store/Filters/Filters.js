import './_filters.scss';

import InputField from './InputField/InputField';
import Dropdown from './Dropdown/Dropdown';
import Checkbox from './Checkbox/Checkbox';
import Button from '../../Button/Button';

function Filters({filters, onFilterChange, onClear, filterResults}) {

    const handleFilterChange = (key, value) => {
        const newFilter = {value: value}
        if (typeof(handleFilterChange === "function")) {
            if (key === "category") {
                newFilter.fun = function(category) {return (value ===  "all") ? true:(category === value)}
            }
            else if (key === "brand") {
                newFilter.fun = function(brand) {return (value === "all") ? true:(brand === value)}
            }
            else if (key === "price") {
                newFilter.fun = function(price) {return (value === "all") ? true:(value[0] <= price && price <= value[1])}
            }
            else if (key === "order") {
                
            }
            else if (key === "search") {
                newFilter.fun = function(product) {
                    if (value === "") {return true}

                }
            }
            else if (key === "inStockOnly") {
                newFilter.fun = function(isInStock) {return (value) ? isInStock:true}
            }

        }
        onFilterChange(key, newFilter);
    }

    const handleClear = (e) => {
        if (typeof(onClear) === "function") {
            onClear();
        }
    }
    return (
        <div className='filters'>
            <header className='filters__header'>
                <div className='filters__heading'>
                    <img className='filters__icon' src='../../../assets/icons/search.png' />
                    <h2 className='filters__title'>Filters</h2>
                </div>
                <p className='filters__results'>{filterResults} products found</p>
            </header>

            <main>
                <div className='filters__grid'>
                    <InputField 
                        type="text"
                        value={filters.search.value}
                        placeholder="Search products"

                    />
                    <Dropdown 
                        options={[
                            {label: "All Categories", value: "all"},
                            {label: "Cameras", value: "Cameras"},
                            {label: "Earbuds", value: "Earbuds"},
                            {label: "Headphones", value: "Headphones"},
                            {label: "Keyboards", value: "Keyboards"},
                            {label: "Laptops", value: "Laptops"},
                            {label: "Mice", value: "Mice"},
                            {label: "Microphones", value: "Microphones"},
                            {label: "Monitors", value: "Monitors"},
                            {label: "Routers", value: "Routers"},
                            {label: "Smartwatches", value: "Smartwatches"},
                            {label: "Speakers", value: "Speakers"},
                            {label: "Storage", value: "Storage"},
                            {label: "Tablets", value: "Tablets"},
                            {label: "Webcams", value: "Webcams"},
                        ]}
                        value={filters.category.value}
                        onChange={(value) => {handleFilterChange("category", value)}}
                    />

                    <Dropdown 
                        options={[
                            {label: "All Brands", value: "all"},
                            {label: "ASUS", value: "ASUS"},
                            {label: "Acer", value: "Acer"},
                            {label: "Amazfit", value: "Amazfit"},
                            {label: "Apple", value: "Apple"},
                            {label: "Audio-Technica", value: "Audio-Technica"},
                            {label: "Beats", value: "Beats"},
                            {label: "BenQ", value: "BenQ"},
                            {label: "Blue", value: "Blue"},
                            {label: "Bose", value: "Bose"},
                            {label: "Canon", value: "Canon"},
                            {label: "Corsair", value: "Corsair"},
                            {label: "Das Keyboard", value: "Das Keyboard"},
                            {label: "Dell", value: "Dell"},
                            {label: "Fitbit", value: "Fitbit"},
                            {label: "Fossil", value: "Fossil"},
                            {label: "Fujifilm", value: "Fujifilm"},
                            {label: "Garmin", value: "Garmin"},
                            {label: "GoPro", value: "GoPro"},
                            {label: "Keychron", value: "Keychron"},
                            {label: "LG", value: "LG"},
                            {label: "Lenovo", value: "Lenovo"},
                            {label: "Logitech", value: "Logitech"},
                            {label: "Microsoft", value: "Microsoft"},
                            {label: "Nikon", value: "Nikon"},
                            {label: "Panasonic", value: "Panasonic"},
                            {label: "Razer", value: "Razer"},
                            {label: "Samsung", value: "Samsung"},
                            {label: "Sennheiser", value: "Sennheiser"},
                            {label: "Sonos", value: "Sonos"},
                            {label: "Sony", value: "Sony"},
                            {label: "SteelSeries", value: "SteelSeries"},
                            {label: "TP-Link", value: "TP-Link"},
                        ]}
                        value={filters.brand.value}
                        onChange={(value) => {handleFilterChange("brand", value)}}
                    />
                    <Dropdown 
                        options={[
                            {label: "All Prices", value: "all"},
                            {label: "Under $100", value: [0, 99]},
                            {label: "$100 - $300", value: [100, 300]},
                            {label: "$300 - $500", value: [300, 500]},
                            {label: "$500 - $1000", value: [500, 1000]},
                            {label: "Over $1000", value: [1000, 100000]},
                        ]}
                        value={filters.price.value}
                        onChange={(value) => {handleFilterChange("price", value)}}
                    />
                    <Dropdown 
                        options={[
                            {label: "Name: A-Z", value: "Name:A-Z"},
                            {label: "Name: Z-A", value: "Name: Z-A"},
                            {label: "Price: Low to High", value: "Price: Low-High"},
                            {label: "Price: High to Low", value: "Price: High-Low"},
                            {label: "Rating: High to Low", value: "Rating: High-Low"},
                        ]}
                        value={filters.order.value}
                        onChange={(value) => {handleFilterChange("order", value)}}

                    />
                </div>
                <div className='filters__last-row'>
                        <Checkbox 
                            label="In Stock Only"
                            checked={filters.inStockOnly.checked}
                            onChange={(checked) => {handleFilterChange("inStockOnly", checked)}}
                        />
                        <Button 
                            label="Clear Filters"
                            type="primary"
                            size="medium"
                            onClick={handleClear}
                        />
                </div>
            </main>
        </div>
    )
}

export default Filters;