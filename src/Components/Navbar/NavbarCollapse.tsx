import CategoryItems from './CategoryItems'
import IsUser from './IsUser'

type props = {
    toggleNavbar: boolean
}
const NavbarCollapse = ({ toggleNavbar }: props) => {

    return (
        <>
            {
                toggleNavbar &&
                <div className="navbar-collabse">
                    <CategoryItems />
                    <IsUser />
                </div>
            }

        </>
    )
}

export default NavbarCollapse