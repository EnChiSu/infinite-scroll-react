import './ThemeBtn.css';
import { BsMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { handledarkMode } from "../../store/actions/darkModeAction";

function ThemeBtn() {
    const dispatch = useDispatch();
    const mode = useSelector((state) => state.darkMode);
    const { isdarkMode } = mode;
    const switchDarkMode = () => {
        isdarkMode
        ? dispatch(handledarkMode(false))
        : dispatch(handledarkMode(true));
    };
    useEffect(() => {
        document.body.style.backgroundColor = isdarkMode ? "#101010" : "#ffffff";
    }, [isdarkMode]);

    return (
        <>
            <div
                id="darkmode"
            >
                <input
                    type="checkbox"
                    className="checkbox"
                    id="checkbox"
                    onChange={switchDarkMode}
                    checked={isdarkMode}
                />
                <label htmlFor="checkbox" className="label">
                    <BsMoonStarsFill className="moon" color="white" />
                    <BsFillSunFill className="sun" color="yellow" />
                    <div className="ball"></div>
                    <span className="title">Dark Theme</span>
                </label>
            </div>
        </>
    );
}

export default ThemeBtn;