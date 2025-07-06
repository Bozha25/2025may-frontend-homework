import ThemeToggle from "./ThemeToggle"
import './PageLayout.css';

const PageLayout = ({ PageTitle, FormInput }) => {
    return(
        <div className="container">
            <div className="container-content">
                <div className="top-section">
                    <ThemeToggle/>
                </div>
                <div className="left-section">
                    {PageTitle}
                </div>
                <div className="right-section">
                    {FormInput}
                </div>
            </div>
        </div>
    )
}

export default PageLayout;