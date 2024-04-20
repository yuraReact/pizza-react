import React from 'react'

function Categories() {
    const [activeIndex, setActiveIndex] = React.useState(0);

    const categories = [
        'Всі',
        "М'ясні",
        'Вегетеріанські',
        'Гриль',
        'Гострі',
        'Закриті',
    ]

    return (
        <div className="categories">
            <ul>
                {categories.map((value, index) => (
                    <li onClick={() => setActiveIndex(index)} className={activeIndex === index ? 'active' : ''}>
                        {value}</li>
                ))}
            </ul>
        </div>
    );
}

export default Categories;