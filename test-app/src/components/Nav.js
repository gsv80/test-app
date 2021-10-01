
const Nav = (props) => {
    return (
        <div
            className={props.toggle ? 'active' : '' } 
        >
            <h3>logo</h3>
            <h4>home</h4>
            <h4>Personal Page</h4>
            <button onClick={props.setToggle}>Toggle theme</button>

        </div>
    )
}

export default Nav;