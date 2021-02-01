import React, { useEffect } from "react"
// // import ReactDOM from "react-dom"
// import LocomotiveScroll from "locomotive-scroll"

// // // import "./styles.css";

// class Para extends React.Component {
//   // const Para = () => {
//     componentDidMount() {
//     const scroll = new LocomotiveScroll({
//         el: document.querySelector(".App1"),
//         smooth: true
//       });
//     }
//     render() {

//   // useEffect(() => {
//   //   async function getLocomotive() {
//   //     const Locomotive = (await import("locomotive-scroll")).default;
//   //     const scroll = new Locomotive({
//   //       el: refScrollContainer.current,
//   //       smooth: true,
//   //     });
//   //   }

//   //   getLocomotive();
//   // }, []);
const Para = () => {
  useEffect(() => {
    import("locomotive-scroll").then((locomotiveModule) => {
      new locomotiveModule.default({
        el: document.querySelector("[data-scroll-container]"),
        smooth: true,
      });
    });
  }, []);


  return (
      <div data-scroll-container>
        <section data-scroll-section>
          <h1 data-scroll>Hey, there!</h1>
          <p
            role="img"
            aria-label=""
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="3"
          >
            👋
          </p>
        </section>
        <section data-scroll-section>
          <h2 data-scroll data-scroll-speed="1">
            What's up?
          </h2>
          <p data-scroll role="img" aria-label="">
            😬
          </p>
        </section>
      </div>
    );
  }
// }

export default Para