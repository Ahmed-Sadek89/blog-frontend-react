import React from 'react'
import CategoryItems from './CategoryItems'
import IsUser from './IsUser'

type props = {
    toggleNavbar: boolean,
    setToggleNavbar: React.Dispatch<React.SetStateAction<boolean>>
}
const NavbarCollapse = ({ toggleNavbar, setToggleNavbar }: props) => {

    return (
        <>
            {
                toggleNavbar &&
                <div className="navbar-collabse">
                    <CategoryItems setToggleNavbar={setToggleNavbar}/>
                    <IsUser setToggleNavbar={setToggleNavbar} />
                </div>
            }

        </>
    )
}

export default NavbarCollapse