import React from 'react';

function Nav() {

    const categories = [
        { name: "about", description: "This is the about me section"},
        { name: "work", description: "This is the work I have done"},
        { name: "contact", description: "This is how you can contact me"},
        { name: "resume", description: "Take a look at my resume!"}
    ];

    function categorySelected(name) {
        console.log(`${name} clicked`)
    }

  return (
    <header>
        <nav>
            <ul>
                <li>
                    <a href='#home'>
                        Home
                    </a>
                </li>
                {categories.map((category) => (
                    <li
                        key={category.name}
                    >
                        <span onClick={() => categorySelected(category.name)}>
                            {category.name}
                        </span>
                    </li>
                ))}
            </ul>
        </nav>
    </header>
  );
}

export default Nav;