import classes from "./Container.module.css";
import Category from "./Category/Category";
import Container2 from "./Container2/Container2";

const Container = () => {
  return (
    <div className={classes.container}>
      <div className={classes.container_components}>
        <div className={classes.category}>
          <Category />
        </div>
        <Container2 />
      </div>
    </div>
  );
};

export default Container;
