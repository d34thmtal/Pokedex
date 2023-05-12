import React from 'react'
import { Button } from 'react-bootstrap';


function Header(props) {
    const { query, setQuery,onStateSwitch } = props;
    const handleInputChange = e => {
        setQuery(e.target.value)
    }

    return (
        <header>
            <div className='header-left'>
                <img
                    src="https://icon-library.com/images/pokedex-icon/pokedex-icon-20.jpg"
                    alt="Logo"
                />
                <div className='searchbar'>
                    <input
                        type="text"
                        placeholder='Cerca un Pokemon'
                        value={query}
                        onChange={handleInputChange}
                    />
                </div>
            </div>
            <div className='header-right'>
                <Button type='submit'

                    onClick={
                        () => onStateSwitch('login')
                    }>Log Out</Button>
            </div>
        </header>
    )
}

export default Header