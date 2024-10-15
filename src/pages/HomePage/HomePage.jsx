import s from "./HomePage.module.css";

export default function HomePage() {
  return (
    <>
      <div className={s.container}>
        <h1 className={s.title}>
          Contacts manager welcome page{" "}
          {/* <span role="img" aria-label="Greeting icon">
            💁‍♀️
          </span> */}
        </h1>
      </div>
    </>
  );
}
