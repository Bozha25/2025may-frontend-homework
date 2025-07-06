import './PageTitle.css'

const PageTitle = ({ title, Info }) => {
  return (
    <div className="page-title">
      <h1>{title}</h1>
      <hr className="title-divider"></hr>
      <p> {Info} </p>
    </div>
  );
}

export default PageTitle;