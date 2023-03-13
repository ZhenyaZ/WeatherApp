import React from "react";
import style from "./Welcome.module.css";
import Button from "@mui/material/Button";

const Welcome = (props) => {
  const handler = () => {
    props.onSetVisible(true);
  };
  return (
    <div className={style.welcomePage}>
      <div className={style.cardWrapper}>
        <div className={style.welcomeCard}>
          <div className={style.about}>
            <h1>About</h1>
            <div className={style.about__subtitle}>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta
                placeat, accusantium quis molestias similique, deleniti
                excepturi, nisi unde impedit ullam ut doloremque sunt nostrum
                asperiores labore. Saepe odio esse possimus illum at doloremque
                atque velit ex accusantium sint incidunt repudiandae excepturi
                sapiente aperiam, sit hic perferendis maiores natus alias
                accusamus quae eaque, ipsum laborum corporis. Quam eligendi
                aliquid at blanditiis culpa, fugiat accusantium, labore nemo
                iure sequi quas saepe rem repudiandae natus. Quo beatae fugiat,
                esse id, corrupti sunt nam possimus quia magni harum ipsa
                aperiam, pariatur eius nulla commodi! Totam eum minus doloremque
                itaque expedita tempora commodi ipsam temporibus!
              </p>
            </div>
          </div>
          <div className={style.buttonStart}>
            <Button variant="contained" onClick={handler}>
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
