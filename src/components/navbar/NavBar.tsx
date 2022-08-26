import { useNavBarStyles } from "./styles";

const NavBar = () => {
    const s = useNavBarStyles();

    return <div className={s.navBar}>NavBar</div>;
};

export default NavBar;
