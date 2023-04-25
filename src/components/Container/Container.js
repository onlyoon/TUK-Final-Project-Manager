import classes from "./Container.module.css";
import Category from "./Category/Category";
const Container = () => {
  return (
    <div className={classes.container}>
      <div className={classes.container_components}>
        <div className={classes.category}>
          <Category />
        </div>
        <Category className={classes.category} />
      </div>
    </div>
  );
};

export default Container;
